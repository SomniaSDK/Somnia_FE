import React from 'react';

export default function IntroductionPage() {
  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6">Introduction to Somnia SDK</h1>
      
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">What is Somnia?</h2>
        <p className="text-lg leading-relaxed mb-4">
          Somnia is a high-performance, cost-efficient EVM-compatible Layer 1 blockchain capable of 
          processing over 1,000,000 transactions per second (TPS) with sub-second finality. It is 
          suitable for serving millions of users and building real-time mass-consumer applications 
          like games, social applications, metaverses, and more, all fully on-chain.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Overview</h2>
        <p className="text-lg leading-relaxed mb-4">
          Somnia SDK provides developers with the tools and infrastructure needed to build 
          high-performance decentralized applications that can scale to millions of users.
        </p>
        
        <h3 className="text-xl font-semibold mt-6 mb-2">Key Features</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>EVM compatibility for seamless migration of existing Ethereum applications</li>
          <li>1,000,000+ TPS throughput capacity</li>
          <li>Sub-second transaction finality</li>
          <li>Cost-efficient transaction processing</li>
          <li>Optimized for real-time applications including gaming and social platforms</li>
          <li>Fully on-chain data availability and integrity</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Use Cases</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Gaming:</strong> Build fully on-chain games with real-time interactions and massive player bases</li>
          <li><strong>Social Applications:</strong> Create decentralized social platforms that can scale to millions of users</li>
          <li><strong>Metaverses:</strong> Develop immersive virtual worlds with high-performance transaction processing</li>
          <li><strong>DeFi:</strong> Build financial applications with high throughput and low latency</li>
          <li><strong>NFT Marketplaces:</strong> Create responsive, real-time markets for digital assets</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Getting Started</h2>
        <p className="text-lg leading-relaxed mb-4">
          To start building with Somnia SDK, visit the Project Setup section for installation 
          instructions and initial configuration steps. For technical details and implementation 
          guides, explore the MCP Server documentation.
        </p>
        <p className="text-lg leading-relaxed">
          The official GitHub repository can be found at: <a href="https://github.com/SomniaSDK/SomniaSDK" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">https://github.com/SomniaSDK/SomniaSDK</a>
        </p>
      </section>
    </div>
  );
}
