'use client';

export default function Home() {
  return (
    <div className="max-w-5xl px-6 py-20">
      <div className="flex flex-col mb-16">
        <h1 className="text-5xl font-bold mb-6">Somnia SDK Documentation</h1>
        <p className="text-xl text-gray-300 max-w-3xl">
          A powerful toolkit for building next-generation AI applications with seamless integration and advanced capabilities.
        </p>
      </div>
      
      {/* Introduction section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Introduction</h2>
        
        <div className="prose prose-invert max-w-none">
          <p className="text-lg mb-6">
            Somnia is a high-performance, cost-efficient EVM-compatible Layer 1 blockchain capable of 
            processing over 1,000,000 transactions per second (TPS) with sub-second finality. It is 
            suitable for serving millions of users and building real-time mass-consumer applications 
            like games, social applications, metaverses, and more, all fully on-chain.
          </p>
          
          <h3 className="text-2xl font-semibold mb-4 mt-6">Somnia DevKit – AI-Powered SDK & CLI</h3>
          <p className="text-lg mb-4">
            Somnia DevKit is a unified developer toolkit designed to make building on the Somnia network frictionless. 
            With one install and one command, developers can scaffold, deploy, and interact with contracts on 
            Somnia without configuration overhead.
          </p>
          
          <h3 className="text-2xl font-semibold mb-4 mt-8">Key Features</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-[#1a1c25] p-5 rounded-lg border border-gray-800">
              <h4 className="text-xl font-semibold mb-3">CLI Tools</h4>
              <ul className="list-disc pl-6 space-y-1">
                <li>Simple project initialization</li>
                <li>AI-assisted contract generation</li>
                <li>One-command deployment</li>
                <li>Interactive contract calls</li>
              </ul>
            </div>
            
            <div className="bg-[#1a1c25] p-5 rounded-lg border border-gray-800">
              <h4 className="text-xl font-semibold mb-3">TypeScript SDK</h4>
              <ul className="list-disc pl-6 space-y-1">
                <li>Contract deployment utilities</li>
                <li>Wallet & key management</li>
                <li>Provider for Somnia RPC endpoints</li>
                <li>Type-safe contract interactions</li>
              </ul>
            </div>
            
            <div className="bg-[#1a1c25] p-5 rounded-lg border border-gray-800">
              <h4 className="text-xl font-semibold mb-3">AI Integration</h4>
              <ul className="list-disc pl-6 space-y-1">
                <li>Natural language to smart contract</li>
                <li>Automated test generation</li>
                <li>Contract debugging assistance</li>
                <li>Based on OpenZeppelin standards</li>
              </ul>
            </div>
            
            <div className="bg-[#1a1c25] p-5 rounded-lg border border-gray-800">
              <h4 className="text-xl font-semibold mb-3">Developer Experience</h4>
              <ul className="list-disc pl-6 space-y-1">
                <li>Built-in contract verification</li>
                <li>Secure wallet management</li>
                <li>Verbose transaction tracing</li>
                <li>AI-assisted error explanations</li>
              </ul>
            </div>
          </div>
          <p className="text-lg mt-6">
            For more information, visit the GitHub repository: <a href="https://github.com/SomniaSDK/SomniaSDK" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">https://github.com/SomniaSDK/SomniaSDK</a>
          </p>
        </div>
      </div>

      {/* Additional content to test scrolling */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Getting Started</h2>
        <div className="space-y-6">
          <div className="bg-[#1a1c25] p-6 rounded-lg border border-gray-800">
            <h3 className="text-xl font-semibold mb-4">Installation</h3>
            <p className="text-gray-300 mb-4">Install the Somnia SDK using npm or yarn:</p>
            <pre className="bg-[#0f1117] p-4 rounded text-green-400 overflow-x-auto">
              <code>npm install @somnia/sdk</code>
            </pre>
          </div>

          <div className="bg-[#1a1c25] p-6 rounded-lg border border-gray-800">
            <h3 className="text-xl font-semibold mb-4">Configuration</h3>
            <p className="text-gray-300 mb-4">Configure your project to use the Somnia network:</p>
            <pre className="bg-[#0f1117] p-4 rounded text-blue-400 overflow-x-auto">
              <code>{`import { Somnia } from '@somnia/sdk';

const somnia = new Somnia({
  network: 'mainnet', // or 'testnet'
  apiKey: 'your-api-key'
});`}</code>
            </pre>
          </div>

          <div className="bg-[#1a1c25] p-6 rounded-lg border border-gray-800">
            <h3 className="text-xl font-semibold mb-4">Basic Usage</h3>
            <p className="text-gray-300 mb-4">Here&apos;s a simple example of deploying a contract:</p>
            <pre className="bg-[#0f1117] p-4 rounded text-yellow-400 overflow-x-auto">
              <code>{`const contract = await somnia.deployContract({
  name: 'MyContract',
  code: contractCode,
  args: [initialValue]
});

console.log('Contract deployed at:', contract.address);`}</code>
            </pre>
          </div>
        </div>
      </div>

      {/* More content sections */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Advanced Features</h2>
        <div className="space-y-8">
          {Array.from({ length: 5 }, (_, i) => (
            <div key={i} className="bg-[#1a1c25] p-6 rounded-lg border border-gray-800">
              <h3 className="text-xl font-semibold mb-4">Feature {i + 1}: Advanced Capability</h3>
              <p className="text-gray-300 mb-4">
                This is a detailed explanation of an advanced feature in the Somnia SDK. 
                It demonstrates the powerful capabilities and flexibility of the platform.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua.
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>High-performance transaction processing</li>
                <li>Sub-second finality guarantees</li>
                <li>EVM compatibility for seamless migration</li>
                <li>Advanced gas optimization techniques</li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
