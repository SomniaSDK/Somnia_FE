"use client";

import { useState, useEffect, useRef } from 'react';

const SearchButton = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const searchContainerRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [buttonPosition, setButtonPosition] = useState({ top: 0, left: 0, width: 0 });

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
  
  // Handle keyboard shortcut
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
    };
    
    // Click outside to close
    const handleClickOutside = (e: MouseEvent) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(e.target as Node) && isExpanded) {
        setIsExpanded(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isExpanded, isMac]);

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
                autoFocus
              />
              <div className="ml-2 text-gray-400">
                <kbd className="px-1.5 py-0.5 text-xs font-semibold text-gray-400 bg-[#25272f] rounded">ESC</kbd>
              </div>
            </div>
            <div className="border-t border-gray-800 px-4 py-6 max-h-[60vh] overflow-y-auto">
              {/* Search categories */}
              <div className="mb-8">
                <h4 className="text-xs uppercase text-gray-500 font-semibold mb-3 px-4">Categories</h4>
                <div className="grid grid-cols-2 gap-2 px-4">
                  <button className="text-left p-3 rounded-lg bg-[#25272f] hover:bg-[#2a2d37] text-white transition-colors">
                    <div className="font-medium">Getting Started</div>
                    <div className="text-sm text-gray-400">Setup guides and tutorials</div>
                  </button>
                  <button className="text-left p-3 rounded-lg bg-[#25272f] hover:bg-[#2a2d37] text-white transition-colors">
                    <div className="font-medium">API Reference</div>
                    <div className="text-sm text-gray-400">Methods and parameters</div>
                  </button>
                </div>
              </div>
              
              {/* Recent searches placeholder */}
              <div className="px-4">
                <h4 className="text-xs uppercase text-gray-500 font-semibold mb-3">Recent Searches</h4>
                <div className="text-sm text-gray-400">No recent searches</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchButton;
