'use client';

import Image from "next/image";
import Link from "next/link";
import GlowingLink from '../GlowingLink';
import Github from '../Github';
import SearchButton from '../SearchButton';

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="font-sans min-h-screen flex flex-col">
      {/* Navbar */}
      <header className="w-full bg-[#131520] text-white sticky top-0 z-40">
        {/* Top row with logo, search and github */}
        <div className="w-full pl-4 pr-6">
          <div className="h-14 flex items-center justify-between">
            {/* Left: Logo and site name + Documentation - all aligned left with minimal padding */}
            <div className="flex items-center">
              <div className="flex items-center">
                <Image
                  src="/Somnia.png"
                  alt="Somnia Logo"
                  width={28}
                  height={28}
                  className="h-7 w-7"
                />
                <Link href="/" className="ml-2 text-xl font-bold text-white whitespace-nowrap">Somnia SDK</Link>
              </div>
              
              {/* Documentation button with custom styling to match screenshot */}
              <div className="ml-5">
                <GlowingLink href="/">Documentation</GlowingLink>
              </div>
            </div>
            
            {/* Right side: Search - placed closer to right */}
            <div className="flex-1 flex justify-end items-center ml-8 mr-4">
              <div className="w-[300px]">
                <SearchButton />
              </div>
            </div>
            
            {/* Right: GitHub button */}
            <div>
              <Github />
            </div>
          </div>
        </div>
        
        {/* Border line separator */}
        <div className="border-b border-gray-700"></div>
      </header>

      {/* Main content area with sidebar */}
      <main className="flex-1 bg-[#0f1117] text-white flex">
        {/* Sidebar */}
        <div className="w-64 bg-[#131520] min-h-screen border-r border-gray-800 flex-shrink-0">
          <div className="py-6 px-4">
            {/* Introduction section */}
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <span className="text-red-500 mr-2">📍</span>
                <h3 className="text-blue-400 font-medium">Introduction</h3>
              </div>
              <ul className="pl-6 space-y-2">
                <li><Link href="/" className="text-gray-300 hover:text-white transition-colors">Overview</Link></li>
              </ul>
            </div>
            
            {/* Project Setup section */}
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <span className="text-orange-500 mr-2">🔥</span>
                <h3 className="text-white font-medium">Project Setup</h3>
              </div>
              <ul className="pl-6 space-y-2">
                <li><Link href="/project-setup" className="text-gray-300 hover:text-white transition-colors">Installation</Link></li>
              </ul>
            </div>
            
            {/* MCP Server section */}
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <span className="text-white mr-2">💻</span>
                <h3 className="text-white font-medium">MCP Server</h3>
              </div>
              <ul className="pl-6 space-y-2">
                <li><Link href="/mcp-server" className="text-gray-300 hover:text-white transition-colors">Overview</Link></li>
              </ul>
            </div>
            
            {/* Wallet Management section */}
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <span className="text-white mr-2">💳</span>
                <h3 className="text-white font-medium">Wallet Management</h3>
              </div>
              
              <div className="space-y-3 ml-2 pl-4 border-l border-gray-800">
                <Link href="/wallet/importing-wallet" className="block text-gray-400 hover:text-white transition-colors">Importing Wallet</Link>
              </div>
            </div>
            
            {/* DEVELOPER section */}
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <span className="text-white mr-2">💻</span>
                <h3 className="text-white font-medium">DEVELOPING</h3>
              </div>
              
              <div className="space-y-3 ml-2 pl-4 border-l border-gray-800">
                <Link href="#" className="block text-gray-400 hover:text-white transition-colors">Network Info</Link>
                <Link href="#" className="block text-gray-400 hover:text-white transition-colors">Smart Contracts</Link>
                <Link href="/developing/ai-contract" className="block text-gray-400 hover:text-white transition-colors">🤖 AI Contract Generation</Link>
                <div className="flex items-center justify-between">
                  <Link href="#" className="block text-gray-400 hover:text-white transition-colors">Tutorials</Link>
                  <span className="text-gray-600">›</span>
                </div>
                <div className="flex items-center justify-between">
                  <Link href="#" className="block text-gray-400 hover:text-white transition-colors">Infrastructure/Dev Tools</Link>
                  <span className="text-gray-600">›</span>
                </div>
              </div>
            </div>
            
            {/* Powered by GitBook */}
            <div className="pt-4 mt-8 border-t border-gray-800">
              <Link href="#" className="flex items-center text-gray-400 hover:text-white transition-colors">
                <span className="mr-2">📚</span>
                <span>Powered by GitBook</span>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Main content */}
        <div className="flex-1">
          {children}
        </div>
      </main>
      
      {/* Footer */}
      <footer className="bg-[#131520] text-gray-400 py-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <Image
                src="/Somnia.png"
                alt="Somnia Logo"
                width={24}
                height={24}
                className="h-6 w-6"
              />
              <span className="ml-2 text-white font-semibold">Somnia SDK</span>
            </div>
            
            <div className="flex space-x-6">
              <Link href="/" className="hover:text-white transition-colors">Documentation</Link>
              <Link href="https://github.com/SomniaSDK" className="hover:text-white transition-colors">GitHub</Link>
              <Link href="#" className="hover:text-white transition-colors">Support</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
