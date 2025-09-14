import React from 'react';
import CopyButton from '@/components/CopyButton';

export default function ProjectSetupPage() {
  return (
    <div className="max-w-5xl px-6 py-20">
      <h1 className="text-3xl font-bold mb-6">Project Setup</h1>
      
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Getting Started with Somnia SDK</h2>
        <p className="text-lg leading-relaxed mb-4">
          This section will guide you through the process of setting up your development environment 
          and installing the Somnia SDK for your project.
        </p>
        
        <div className="space-y-8">
          <section>
            <h3 className="text-xl font-semibold mb-4">Setting Up a New Somnia Project</h3>
            <p className="mb-4">
              Follow these steps to create a new Somnia blockchain project from scratch:
            </p>
            
            <ol className="list-decimal pl-6 space-y-5">
              <li>
                <div>
                  <h4 className="font-medium">Create a new project directory</h4>
                  <div className="bg-gray-800 p-3 rounded-md my-2">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-gray-400 text-xs">Terminal</span>
                      <div className="w-9 h-9 flex items-center justify-center">
                        <CopyButton textToCopy="mkdir somnia-project && cd somnia-project" />
                      </div>
                    </div>
                    <pre className="text-green-300">mkdir somnia-project && cd somnia-project</pre>
                  </div>
                </div>
              </li>
              
              <li>
                <div>
                  <h4 className="font-medium">Install Somnia SDK globally</h4>
                  <p className="text-sm text-gray-300 mb-2">
                    This will install the Somnia CLI tool that you&apos;ll use to interact with the blockchain.
                  </p>
                  <div className="bg-gray-800 p-3 rounded-md my-2">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-gray-400 text-xs">Terminal</span>
                      <div className="w-9 h-9 flex items-center justify-center">
                        <CopyButton textToCopy="npm i -g somnia-cli-devkit@latest" />
                      </div>
                    </div>
                    <pre className="text-green-300">npm i -g somnia-cli-devkit@latest</pre>
                  </div>
                </div>
              </li>
              
              <li>
                <div>
                  <h4 className="font-medium">Create package.json file</h4>
                  <p className="text-sm text-gray-300 mb-2">
                    Create a new file named <code className="bg-gray-700 px-1 py-0.5 rounded">package.json</code> and add the following content:
                  </p>
                  <div className="bg-gray-800 p-3 rounded-md my-2 relative">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-gray-400 text-xs">package.json</span>
                      <div className="w-9 h-9 flex items-center justify-center">
                        <CopyButton textToCopy={`{
  "name": "somnia-project",
  "version": "1.0.0",
  "description": "Somnia blockchain smart contract project",
  "type": "module",
  "scripts": {
    "compile": "hardhat compile",
    "test": "hardhat test",
    "deploy": "hardhat run scripts/deploy.js"
  },
  "devDependencies": {
    "hardhat": "^3.0.3",
    "@nomicfoundation/hardhat-toolbox": "^6.1.0"
  }
}`} />
                      </div>
                    </div>
                    <pre className="text-green-300 overflow-x-auto whitespace-pre-wrap">{`{
  "name": "somnia-project",
  "version": "1.0.0",
  "description": "Somnia blockchain smart contract project",
  "type": "module",
  "scripts": {
    "compile": "hardhat compile",
    "test": "hardhat test",
    "deploy": "hardhat run scripts/deploy.js"
  },
  "devDependencies": {
    "hardhat": "^3.0.3",
    "@nomicfoundation/hardhat-toolbox": "^6.1.0"
  }
}`}</pre>
                  </div>
                </div>
              </li>
              
              <li>
                <div>
                  <h4 className="font-medium">Install dependencies</h4>
                  <p className="text-sm text-gray-300 mb-2">
                    You have several options to install the dependencies. Choose one of the following commands:
                  </p>
                  <div className="grid grid-cols-1 gap-3">
                    <div>
                      <p className="text-sm text-white mb-1">Standard installation:</p>
                      <div className="bg-gray-800 p-3 rounded-md">
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-gray-400 text-xs">Terminal</span>
                          <div className="w-9 h-9 flex items-center justify-center">
                            <CopyButton textToCopy="npm install" />
                          </div>
                        </div>
                        <pre className="text-green-300">npm install</pre>
                      </div>
                    </div>
                    
                    <div>
                      <p className="text-sm text-white mb-1">Alternative (shorthand):</p>
                      <div className="bg-gray-800 p-3 rounded-md">
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-gray-400 text-xs">Terminal</span>
                          <div className="w-9 h-9 flex items-center justify-center">
                            <CopyButton textToCopy="npm i" />
                          </div>
                        </div>
                        <pre className="text-green-300">npm i</pre>
                      </div>
                    </div>
                    
                    <div>
                      <p className="text-sm text-white mb-1">If you encounter dependency conflicts:</p>
                      <div className="bg-gray-800 p-3 rounded-md">
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-gray-400 text-xs">Terminal</span>
                          <div className="w-9 h-9 flex items-center justify-center">
                            <CopyButton textToCopy="npm install --force" />
                          </div>
                        </div>
                        <pre className="text-green-300">npm install --force</pre>
                      </div>
                    </div>
                    
                    <div>
                      <p className="text-sm text-white mb-1">For legacy projects or if other methods fail:</p>
                      <div className="bg-gray-800 p-3 rounded-md">
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-gray-400 text-xs">Terminal</span>
                          <div className="relative flex items-center justify-center">
                            <CopyButton textToCopy="npm install --legacy-peer-deps" />
                          </div>
                        </div>
                        <pre className="text-green-300">npm install --legacy-peer-deps</pre>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-blue-900/30 border border-blue-500/50 rounded-md p-3 mt-4">
                    <h5 className="text-blue-300 font-medium mb-1">Installation Options Explained</h5>
                    <ul className="list-disc pl-5 text-sm space-y-2">
                      <li><code className="bg-gray-700 px-1 py-0.5 rounded">npm install</code> or <code className="bg-gray-700 px-1 py-0.5 rounded">npm i</code> - Standard installation that respects the dependency versions in package.json</li>
                      <li><code className="bg-gray-700 px-1 py-0.5 rounded">npm install --force</code> - Forces installation even when there are conflicting dependency versions</li>
                      <li><code className="bg-gray-700 px-1 py-0.5 rounded">npm install --legacy-peer-deps</code> - Ignores peer dependency conflicts and installs packages in a way that&apos;s compatible with npm versions prior to v7</li>
                    </ul>
                  </div>
                </div>
              </li>
            </ol>
          </section>
        </div>
      </section>
    </div>
  );
}