"use client";

import { useState, useEffect, useRef, useCallback } from 'react';
import { useRouter } from 'next/navigation';

// Define navigation items structure
interface NavItem {
  title: string;
  path: string;
  icon?: string;
  description?: string;
  matchType?: 'title' | 'description' | 'category';
}

interface NavCategory {
  name: string;
  icon: string;
  items: NavItem[];
}

// Navigation data structure that matches the sidebar
const navigationData: NavCategory[] = [
  {
    name: 'Introduction',
    icon: '📍',
    items: [
      { title: 'Overview', path: '/', description: 'Introduction to Somnia SDK' }
    ]
  },
  {
    name: 'Project Setup',
    icon: '🔥',
    items: [
      { title: 'Installation', path: '/project-setup', description: 'Set up your development environment' }
    ]
  },
  {
    name: 'MCP Server',
    icon: '💻',
    items: [
      { title: 'Overview', path: '/mcp-server', description: 'Learn about Model Context Protocol Server' }
    ]
  },
  {
    name: 'Wallet Management',
    icon: '💳',
    items: [
      { title: 'Importing Wallet', path: '/wallet/importing-wallet', description: 'Import existing wallets' },
      { title: 'Wallet Analysis', path: '/wallet/wallet-analysis', description: 'Analyze wallet balances and transactions' }
    ]
  },
  {
    name: 'DEVELOPING',
    icon: '💻',
    items: [
      { title: 'AI Contract Generation', path: '/developing/ai-contract', icon: '🤖', description: 'Generate smart contracts with AI' },
      { title: 'Deploy Contracts', path: '/developing/deploy-contracts', icon: '🚀', description: 'Deploy smart contracts to the blockchain' },
      { title: 'Call Contract Functions', path: '/developing/call-contract', icon: '📞', description: 'Interact with deployed smart contracts' },
      { title: 'Network Commands', path: '/developing/network-commands', icon: '🌐', description: 'Manage blockchain network connections' }
    ]
  }
];

// Helper function to highlight matched text
const highlightMatch = (text: string, query: string) => {
  if (!query) return text;
  
  const lowerText = text.toLowerCase();
  const lowerQuery = query.toLowerCase();
  const index = lowerText.indexOf(lowerQuery);
  
  if (index === -1) return text;
  
  return (
    <>
      {text.substring(0, index)}
      <span className="search-highlight">{text.substring(index, index + query.length)}</span>
      {text.substring(index + query.length)}
    </>
  );
};

const SearchButton = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState<NavItem[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const searchContainerRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [buttonPosition, setButtonPosition] = useState({ top: 0, left: 0, width: 0 });
  const router = useRouter();
  const [recentSearches, setRecentSearches] = useState<string[]>([]);

  // Determine OS for keyboard shortcut display
  const isMac = typeof navigator !== 'undefined' ? 
    navigator.platform.toUpperCase().indexOf('MAC') >= 0 : false;
  
  // Store button position when expanding
  const updateButtonPosition = () => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      setButtonPosition({
        top: rect.top,
        left: rect.left,
        width: rect.width
      });
    }
  };
  
  // Perform search
  useEffect(() => {
    if (query) {
      const results: NavItem[] = [];
      navigationData.forEach(category => {
        category.items.forEach(item => {
          // Search in title and description
          if (
            item.title.toLowerCase().includes(query.toLowerCase()) ||
            (item.description && item.description.toLowerCase().includes(query.toLowerCase())) ||
            category.name.toLowerCase().includes(query.toLowerCase())
          ) {
            // Add category name to each result
            results.push({
              ...item,
              title: item.title,
              path: item.path,
              description: `${category.name} › ${item.description || item.title}`,
              // Track where the match was found
              matchType: item.title.toLowerCase().includes(query.toLowerCase()) ? 'title' : 
                         (item.description && item.description.toLowerCase().includes(query.toLowerCase())) ? 'description' : 'category'
            });
          }
        });
      });
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  }, [query]);

  // Load recent searches from localStorage on component mount
  useEffect(() => {
    const savedSearches = localStorage.getItem('recentSearches');
    if (savedSearches) {
      try {
        setRecentSearches(JSON.parse(savedSearches));
      } catch (error) {
        console.error('Failed to parse recent searches', error);
        setRecentSearches([]);
      }
    }
  }, []);

  // Function removed - logic moved directly into navigateTo
  
  // Handle navigation with useCallback to prevent dependency changes
  const navigateTo = useCallback((path: string) => {
    // Inline the saveRecentSearch logic to avoid circular dependencies
    if (query.trim()) {
      const newRecentSearches = [
        query, 
        ...recentSearches.filter(s => s !== query)
      ].slice(0, 5);
      
      setRecentSearches(newRecentSearches);
      localStorage.setItem('recentSearches', JSON.stringify(newRecentSearches));
    }
    
    setIsExpanded(false);
    router.push(path);
  }, [query, recentSearches, router]);
  
  // Reset selected index when results change
  useEffect(() => {
    setSelectedIndex(0);
  }, [searchResults]);

  // Handle keyboard shortcut and navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((isMac ? e.metaKey : e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        updateButtonPosition();
        setIsExpanded(true);
        setTimeout(() => {
          searchInputRef.current?.focus();
        }, 10);
      }
      
      // Close on escape
      if (e.key === 'Escape' && isExpanded) {
        setIsExpanded(false);
      }
      
      // Handle arrow navigation
      if (isExpanded && searchResults.length > 0) {
        if (e.key === 'ArrowDown') {
          e.preventDefault();
          setSelectedIndex(prev => (prev + 1) % searchResults.length);
        } else if (e.key === 'ArrowUp') {
          e.preventDefault();
          setSelectedIndex(prev => (prev - 1 + searchResults.length) % searchResults.length);
        } else if (e.key === 'Enter' && selectedIndex >= 0 && selectedIndex < searchResults.length) {
          e.preventDefault();
          const selectedResult = searchResults[selectedIndex];
          if (selectedResult) {
            navigateTo(selectedResult.path);
          }
        }
      }
    };
    
    // Click outside to close
    const handleClickOutside = (e: MouseEvent) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(e.target as Node) && isExpanded) {
        setIsExpanded(false);
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isExpanded, isMac, navigateTo, searchResults, selectedIndex]);

  return (
    <div ref={searchContainerRef} className={`${isExpanded ? 'fixed inset-0 z-50' : 'relative w-full'}`}>
      {!isExpanded ? (
        <button 
          ref={buttonRef}
          onClick={() => {
            updateButtonPosition();
            setIsExpanded(true);
          }}
          className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-gray-700 bg-[#1a1c25] text-gray-400 hover:bg-[#25272f] hover:text-gray-300 transition-colors w-full shadow-sm mx-auto"
        >
          <svg className="h-4 w-4 flex-shrink-0" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
          </svg>
          <span className="text-sm flex-grow text-left truncate">Search documentation...</span>
          <div className="text-xs bg-[#25272f] rounded px-1.5 py-0.5 flex items-center justify-center min-w-[32px] flex-shrink-0">
            {isMac ? '⌘' : 'Ctrl'} K
          </div>
        </button>
      ) : (
        <div className="fixed inset-0 bg-transparent z-50 flex items-start justify-center pt-12 search-modal backdrop-blur-md">
          <div 
            className="w-full max-w-xl bg-[#1d1f29]/90 rounded-xl shadow-2xl overflow-hidden search-modal-content border border-gray-800/50 search-expand-animation backdrop-blur-sm"
            style={{
              '--search-original-top': `${buttonPosition.top}px`,
              '--search-original-left': `${buttonPosition.left}px`,
              '--search-original-width': `${buttonPosition.width}px`,
            } as React.CSSProperties}
          >
            <div className="flex items-center px-4 py-3">
              <svg className="h-5 w-5 text-gray-400 mr-3" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </svg>
              <input 
                ref={searchInputRef}
                type="search" 
                className="w-full bg-transparent text-white text-lg py-2 outline-none placeholder:text-gray-400"
                placeholder="Search documentation..." 
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                autoFocus
              />
              <div className="ml-2 text-gray-400">
                <kbd className="px-1.5 py-0.5 text-xs font-semibold text-gray-400 bg-[#25272f] rounded">ESC</kbd>
              </div>
            </div>
            <div className="border-t border-gray-800 px-4 py-6 max-h-[60vh] overflow-y-auto">
              {/* Search results */}
              {query && (
                <div className="mb-8">
                  <h4 className="text-xs uppercase text-gray-500 font-semibold mb-3 px-2">Search Results</h4>
                  {searchResults.length > 0 ? (
                    <div className="space-y-1">
                      {searchResults.map((result, index) => (
                        <button
                          key={`${result.path}-${index}`}
                          onClick={() => navigateTo(result.path)}
                          className={`w-full text-left px-3 py-2 rounded-lg ${selectedIndex === index ? 'bg-[#2a2d37]' : 'hover:bg-[#25272f]'} text-white transition-colors flex items-start`}
                          onMouseEnter={() => setSelectedIndex(index)}
                        >
                          {result.icon && (
                            <span className="mr-3 text-lg">{result.icon}</span>
                          )}
                          <div>
                            <div className="font-medium">
                              {result.matchType === 'title' ? highlightMatch(result.title, query) : result.title}
                            </div>
                            <div className="text-sm text-gray-400">
                              {result.matchType === 'description' || result.matchType === 'category' ? 
                                highlightMatch(result.description || '', query) : result.description}
                            </div>
                          </div>
                        </button>
                      ))}
                    </div>
                  ) : (
                    <div className="px-2 text-gray-400">No results found for &quot;{query}&quot;</div>
                  )}
                </div>
              )}

              {!query && (
                <>
                  {/* Categories */}
                  <div className="mb-8">
                    <h4 className="text-xs uppercase text-gray-500 font-semibold mb-3 px-2">Categories</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {navigationData.map((category) => (
                        <button 
                          key={category.name}
                          onClick={() => setQuery(category.name.toLowerCase())}
                          className="text-left p-3 rounded-lg bg-[#25272f] hover:bg-[#2a2d37] text-white transition-colors flex items-center"
                        >
                          <span className="mr-2 text-xl">{category.icon}</span>
                          <div>
                            <div className="font-medium">{category.name}</div>
                            <div className="text-sm text-gray-400">{category.items.length} {category.items.length === 1 ? 'page' : 'pages'}</div>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  {/* Recent searches */}
                  <div>
                    <h4 className="text-xs uppercase text-gray-500 font-semibold mb-3 px-2">Recent Searches</h4>
                    {recentSearches.length > 0 ? (
                      <div className="space-y-1">
                        {recentSearches.map((search, index) => (
                          <button 
                            key={`search-${index}`}
                            onClick={() => setQuery(search)}
                            className="w-full text-left px-3 py-2 rounded-lg hover:bg-[#25272f] text-white transition-colors"
                          >
                            <div className="font-medium flex items-center">
                              <svg className="h-4 w-4 mr-2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              {search}
                            </div>
                          </button>
                        ))}
                      </div>
                    ) : (
                      <div className="px-2 text-gray-400">No recent searches</div>
                    )}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchButton;
