'use client';

import Image from "next/image";
import GlowingLink from '../components/GlowingLink';
import Github from '../components/Github';
import SearchButton from '../components/SearchButton';

export default function Home() {
  return (
    <div className="font-sans min-h-screen flex flex-col">
      {/* Navbar */}
      <header className="w-full bg-[#131520] text-white sticky top-0 z-40">
        {/* Top row with logo, search and github */}
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="h-14 grid grid-cols-3 items-center">
            {/* Left: Logo and site name */}
            <div className="flex items-center">
              <div className="flex items-center">
                <Image
                  src="/Somnia.png"
                  alt="Somnia Logo"
                  width={28}
                  height={28}
                  className="h-7 w-7"
                />
                <span className="ml-2 text-xl font-semibold text-white whitespace-nowrap">Somnia SDK</span>
              </div>
              
              {/* Documentation link */}
              <div className="ml-10">
                <GlowingLink href="#">Documentation</GlowingLink>
              </div>
            </div>
            
            {/* Center: Search */}
            <div className="flex justify-center items-center">
              <div className="w-full max-w-[350px]">
                <SearchButton />
              </div>
            </div>
            
            {/* Right: GitHub button */}
            <div className="flex justify-end">
              <Github />
            </div>
          </div>
        </div>
        
        {/* Border line separator */}
        <div className="border-b border-gray-700"></div>
      </header>

      {/* Main content area */}
      <main className="flex-1 bg-[#0f1117] text-white">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="flex flex-col items-center text-center mb-16">
            <h1 className="text-6xl font-bold mb-6">Somnia SDK Documentation</h1>
            <p className="text-xl text-gray-300 max-w-3xl">
              A powerful toolkit for building next-generation AI applications with seamless integration and advanced capabilities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-[#1a1c25] p-6 rounded-lg border border-gray-800 hover:border-blue-600/40 transition-colors">
              <div className="mb-4">
                <Image src="/file.svg" alt="Getting Started" width={32} height={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Getting Started</h3>
              <p className="text-gray-400">Quick start guide to set up and integrate the Somnia SDK into your project.</p>
            </div>
            
            {/* Card 2 */}
            <div className="bg-[#1a1c25] p-6 rounded-lg border border-gray-800 hover:border-blue-600/40 transition-colors">
              <div className="mb-4">
                <Image src="/window.svg" alt="API Reference" width={32} height={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">API Reference</h3>
              <p className="text-gray-400">Comprehensive documentation of all APIs, methods, and parameters.</p>
            </div>
            
            {/* Card 3 */}
            <div className="bg-[#1a1c25] p-6 rounded-lg border border-gray-800 hover:border-blue-600/40 transition-colors">
              <div className="mb-4">
                <Image src="/globe.svg" alt="Examples" width={32} height={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Examples</h3>
              <p className="text-gray-400">Sample projects and code snippets demonstrating SDK features.</p>
            </div>
          </div>
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
              <a href="#" className="hover:text-white transition-colors">Documentation</a>
              <a href="#" className="hover:text-white transition-colors">GitHub</a>
              <a href="#" className="hover:text-white transition-colors">Support</a>
            </div>
          </div>
          
          <div className="mt-8 text-sm text-center md:text-left text-gray-500">
            &copy; {new Date().getFullYear()} Somnia SDK. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
