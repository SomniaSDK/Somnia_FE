import React from 'react';
import CopyButton from '@/components/CopyButton';

export default function AIContractGeneration() {
  return (
    <div className="max-w-5xl px-6 py-20">
      <h1 className="text-3xl font-bold mb-6">🤖 AI Contract Generation</h1>
      
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Smart Contracts with AI</h2>
        <p className="text-lg leading-relaxed mb-6">
          Somnia SDK includes powerful AI capabilities that can generate smart contracts based on natural language descriptions.
          This feature accelerates development by creating contract templates that you can customize further to meet your specific needs.
        </p>
        
        <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 p-6 rounded-xl mb-10 border border-blue-500/30">
          <h3 className="text-xl font-medium text-blue-300 mb-3">Powered by Groq AI</h3>
          <p className="text-white/90 mb-4">
            Somnia&apos;s contract generation feature is powered by Groq&apos;s Large Language Models, 
            providing state-of-the-art code generation optimized for blockchain development.
          </p>
        </div>
        
        <div className="space-y-12">
          {/* Contract Generation Commands */}
          <section>
            <h3 className="text-xl font-semibold mb-6">Generating Smart Contracts</h3>
            <p className="mb-4">
              To create a smart contract using AI, use the <code className="bg-gray-700 px-1 py-0.5 rounded">somnia contract create</code> command 
              followed by the <code className="bg-gray-700 px-1 py-0.5 rounded">--prompt</code> flag and your natural language description:
            </p>
            
            <div className="space-y-6 mt-8">
              {/* NFT Contract Example */}
              <div className="bg-gray-800 rounded-md overflow-hidden">
                <div className="bg-gray-700 px-4 py-2 flex justify-between items-center">
                  <span className="font-medium text-blue-300">NFT Contract Example</span>
                  <CopyButton textToCopy={'somnia contract create --prompt "Simple NFT minter"'} />
                </div>
                <div className="p-4">
                  <pre className="text-green-300 overflow-x-auto">somnia contract create --prompt &quot;Simple NFT minter&quot;</pre>
                  <p className="mt-3 text-sm text-gray-300">
                    This will generate a basic NFT (Non-Fungible Token) contract with minting functionality.
                  </p>
                </div>
              </div>
              
              {/* ERC20 Token Example */}
              <div className="bg-gray-800 rounded-md overflow-hidden">
                <div className="bg-gray-700 px-4 py-2 flex justify-between items-center">
                  <span className="font-medium text-blue-300">ERC20 Token Example</span>
                  <CopyButton textToCopy={'somnia contract create --prompt "ERC20 token with 1M supply"'} />
                </div>
                <div className="p-4">
                  <pre className="text-green-300 overflow-x-auto">somnia contract create --prompt &quot;ERC20 token with 1M supply&quot;</pre>
                  <p className="mt-3 text-sm text-gray-300">
                    This will generate an ERC20 token contract with a fixed supply of 1 million tokens.
                  </p>
                </div>
              </div>
              
              {/* Voting Contract Example */}
              <div className="bg-gray-800 rounded-md overflow-hidden">
                <div className="bg-gray-700 px-4 py-2 flex justify-between items-center">
                  <span className="font-medium text-blue-300">Voting Contract Example</span>
                  <CopyButton textToCopy={'somnia contract create --prompt "Voting contract for DAO"'} />
                </div>
                <div className="p-4">
                  <pre className="text-green-300 overflow-x-auto">somnia contract create --prompt &quot;Voting contract for DAO&quot;</pre>
                  <p className="mt-3 text-sm text-gray-300">
                    This will generate a governance contract suitable for Decentralized Autonomous Organizations (DAOs).
                  </p>
                </div>
              </div>
              
              {/* MultiSig Wallet Example */}
              <div className="bg-gray-800 rounded-md overflow-hidden">
                <div className="bg-gray-700 px-4 py-2 flex justify-between items-center">
                  <span className="font-medium text-blue-300">MultiSig Wallet Example</span>
                  <CopyButton textToCopy={'somnia contract create --prompt "MultiSig wallet"'} />
                </div>
                <div className="p-4">
                  <pre className="text-green-300 overflow-x-auto">somnia contract create --prompt &quot;MultiSig wallet&quot;</pre>
                  <p className="mt-3 text-sm text-gray-300">
                    This will generate a multi-signature wallet contract requiring multiple approvals for transactions.
                  </p>
                </div>
              </div>
            </div>
          </section>
          
          {/* API Key Configuration Section */}
          <section className="border-t border-gray-700 pt-10">
            <h3 className="text-xl font-semibold mb-6">Setting Up Your Groq API Key</h3>
            <p className="mb-6">
              To use the AI contract generation feature, you&apos;ll need to configure your Groq API key. 
              There are two ways to do this:
            </p>
            
            <div className="space-y-8">
              {/* Environment Variable Method */}
              <div>
                <h4 className="text-lg font-medium mb-3">Method 1: Environment Variable</h4>
                <p className="mb-3">
                  Set the <code className="bg-gray-700 px-1 py-0.5 rounded">GROQ_API_KEY</code> environment variable:
                </p>
                
                <div className="bg-gray-800 rounded-md overflow-hidden mb-4">
                  <div className="bg-gray-700 px-4 py-2 flex justify-between items-center">
                    <span className="font-medium text-blue-300">Windows PowerShell</span>
                    <CopyButton textToCopy={'$env:GROQ_API_KEY = "your-api-key-here"'} />
                  </div>
                  <div className="p-4">
                    <pre className="text-green-300">$env:GROQ_API_KEY = &quot;your-api-key-here&quot;</pre>
                  </div>
                </div>
                
                <div className="bg-gray-800 rounded-md overflow-hidden">
                  <div className="bg-gray-700 px-4 py-2 flex justify-between items-center">
                    <span className="font-medium text-blue-300">Linux/macOS</span>
                    <CopyButton textToCopy={'export GROQ_API_KEY="your-api-key-here"'} />
                  </div>
                  <div className="p-4">
                    <pre className="text-green-300">export GROQ_API_KEY=&quot;your-api-key-here&quot;</pre>
                  </div>
                </div>
              </div>
              
              {/* Configuration File Method */}
              <div>
                <h4 className="text-lg font-medium mb-3">Method 2: Configuration File</h4>
                <p className="mb-3">
                  Create or edit the <code className="bg-gray-700 px-1 py-0.5 rounded">.env</code> file in your project root:
                </p>
                
                <div className="bg-gray-800 rounded-md overflow-hidden">
                  <div className="bg-gray-700 px-4 py-2 flex justify-between items-center">
                    <span className="font-medium text-blue-300">.env file</span>
                    <CopyButton textToCopy="GROQ_API_KEY=your-api-key-here" />
                  </div>
                  <div className="p-4">
                    <pre className="text-green-300">GROQ_API_KEY=your-api-key-here</pre>
                  </div>
                </div>
                
                <div className="mt-4 bg-yellow-900/30 border border-yellow-500/50 p-4 rounded-md">
                  <h5 className="text-yellow-300 font-medium mb-2">⚠️ Security Note</h5>
                  <p className="text-sm text-gray-300">
                    Add <code className="bg-gray-700 px-1 py-0.5 rounded">.env</code> to your <code className="bg-gray-700 px-1 py-0.5 rounded">.gitignore</code> file 
                    to prevent your API key from being committed to version control.
                  </p>
                </div>
              </div>
            </div>
          </section>
          
          {/* Best Practices Section */}
          <section className="border-t border-gray-700 pt-10">
            <h3 className="text-xl font-semibold mb-6">Best Practices for AI Contract Generation</h3>
            
            <div className="space-y-4">
              <div className="flex gap-3">
                <div className="text-blue-400 font-bold text-xl">•</div>
                <div>
                  <h4 className="font-medium">Be Specific in Your Prompts</h4>
                  <p className="text-sm text-gray-300 mt-1">
                    The more detailed your prompt, the better the AI can generate a contract that meets your needs.
                    Include information about functionality, permissions, and any special requirements.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-3">
                <div className="text-blue-400 font-bold text-xl">•</div>
                <div>
                  <h4 className="font-medium">Always Review Generated Code</h4>
                  <p className="text-sm text-gray-300 mt-1">
                    AI-generated contracts should be treated as starting points. Always review the code for
                    security issues, logic errors, and to ensure it meets your specific requirements.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-3">
                <div className="text-blue-400 font-bold text-xl">•</div>
                <div>
                  <h4 className="font-medium">Test Thoroughly</h4>
                  <p className="text-sm text-gray-300 mt-1">
                    All smart contracts, including AI-generated ones, should undergo rigorous testing.
                    Use Somnia&apos;s testing tools to verify the contract behaves as expected.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-3">
                <div className="text-blue-400 font-bold text-xl">•</div>
                <div>
                  <h4 className="font-medium">Consider Security Audits</h4>
                  <p className="text-sm text-gray-300 mt-1">
                    For contracts that will manage significant value or have complex functionality,
                    consider getting a professional security audit before deployment.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
}
