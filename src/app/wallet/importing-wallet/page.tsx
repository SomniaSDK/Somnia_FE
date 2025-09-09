import React from 'react';
import CopyButton from '@/components/CopyButton';

export default function ImportingWalletPage() {
  return (
    <div className="max-w-5xl px-6 py-20">
      <h1 className="text-3xl font-bold mb-6">💳 Wallet Management</h1>
      
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Working with Somnia Wallets</h2>
        <p className="text-lg leading-relaxed mb-6">
          The Somnia SDK provides powerful tools for managing blockchain wallets, enabling you to create new wallets, 
          import existing ones, and obtain testnet tokens for development.
        </p>
        
        <div className="space-y-12">
          {/* Wallet Creation Section */}
          <section className="border-b border-gray-800 pb-10">
            <h3 className="text-xl font-semibold mb-4">Creating a New Wallet</h3>
            <p className="mb-4">
              To create a new HD (Hierarchical Deterministic) wallet with Somnia, use the following commands:
            </p>
            
            <div className="space-y-6">
              {/* Standard Wallet Creation */}
              <div>
                <h4 className="text-lg font-medium mb-2">Standard Wallet Creation</h4>
                <div className="bg-gray-800 p-4 rounded-md relative">
                  <div className="absolute top-3 right-3">
                    <CopyButton textToCopy="somnia wallet create" />
                  </div>
                  <pre className="text-green-300">somnia wallet create</pre>
                </div>
              </div>
              
              {/* HD Wallet Creation */}
              <div>
                <h4 className="text-lg font-medium mb-2">Create Hardware (HD) Wallet</h4>
                <p className="mb-3 text-sm text-gray-300">
                  For explicitly creating an HD wallet (which is also the default), you can use the <code className="bg-gray-700 px-1 py-0.5 rounded">--type hd</code> flag:
                </p>
                <div className="bg-gray-800 p-4 rounded-md relative">
                  <div className="absolute top-3 right-3">
                    <CopyButton textToCopy="somnia wallet create --type hd" />
                  </div>
                  <pre className="text-green-300">somnia wallet create --type hd</pre>
                </div>
              </div>
            </div>
            
            <div className="mt-6 bg-blue-900/30 border border-blue-500/50 p-4 rounded-md">
              <h4 className="text-blue-300 font-medium mb-2">What is an HD Wallet?</h4>
              <p className="text-sm text-gray-300">
                An HD (Hierarchical Deterministic) wallet generates a sequence of key pairs from a single seed phrase.
                This allows you to create multiple accounts from one master key, providing better security and easier backup.
                When you create a new HD wallet, Somnia will generate and securely store your seed phrase and keys.
              </p>
            </div>
          </section>
          
          {/* Wallet Import Section */}
          <section className="border-b border-gray-800 pb-10">
            <h3 className="text-xl font-semibold mb-4">Importing an Existing Wallet</h3>
            <p className="mb-4">
              If you already have a wallet (perhaps created with another tool or on another device), 
              you can import it into Somnia using:
            </p>
            
            <div className="bg-gray-800 p-4 rounded-md my-4 relative">
              <div className="absolute top-3 right-3">
                <CopyButton textToCopy="somnia wallet import" />
              </div>
              <pre className="text-green-300">somnia wallet import</pre>
            </div>
            
            <p className="mt-4">
              When you run this command, you&apos;ll be prompted to enter your seed phrase (also known as a mnemonic or recovery phrase). 
              This is typically a 12 or 24-word phrase that was generated when you first created your wallet.
            </p>
            
            <div className="mt-4 bg-yellow-900/30 border border-yellow-500/50 p-4 rounded-md">
              <h4 className="text-yellow-300 font-medium mb-2">⚠️ Security Warning</h4>
              <p className="text-sm text-gray-300">
                Your seed phrase gives full access to your wallet and funds. Never share it with anyone, 
                enter it on unsecured websites, or store it in plain text on your computer.
                Always import your wallet on a secure, private device and verify you&apos;re using the official Somnia tools.
              </p>
            </div>
          </section>
          
          {/* Wallet Funding Section */}
          <section className="border-b border-gray-800 pb-10">
            <h3 className="text-xl font-semibold mb-4">Getting Testnet Tokens</h3>
            <p className="mb-4">
              For development and testing, you&apos;ll need testnet tokens. Somnia makes it easy to fund your 
              development wallet with the following command:
            </p>
            
            <div className="bg-gray-800 p-4 rounded-md my-4 relative">
              <div className="absolute top-3 right-3">
                <CopyButton textToCopy="somnia wallet fund" />
              </div>
              <pre className="text-green-300">somnia wallet fund</pre>
            </div>
            
            <p className="mt-4">
              This command will request testnet tokens from the Somnia faucet and deposit them into your active wallet.
              Testnet tokens have no real-world value but allow you to test your smart contracts and applications 
              without spending actual cryptocurrency.
            </p>
            
            <div className="mt-4 bg-purple-900/30 border border-purple-500/50 p-4 rounded-md">
              <h4 className="text-purple-300 font-medium mb-2">📝 Note</h4>
              <p className="text-sm text-gray-300">
                The faucet may have daily limits on how many tokens you can request. If you need additional tokens 
                for extensive testing, please contact the Somnia development team or consider running a local test network.
              </p>
            </div>
          </section>
          
          {/* Create and Fund Section */}
          <section className="pb-10">
            <h3 className="text-xl font-semibold mb-4">Create and Fund New Wallet</h3>
            <p className="mb-4">
              For a streamlined development workflow, you might want to create a new wallet and immediately fund it with 
              testnet tokens. You can accomplish this with the following steps:
            </p>
            
            <div className="bg-gray-900 p-6 rounded-md my-4 relative">
              <h4 className="text-lg text-blue-300 font-medium mb-4">One-Step Wallet Creation & Funding</h4>
              
              <div className="space-y-6">
                <div>
                  <p className="text-sm text-gray-300 mb-2">1. Create a new HD wallet:</p>
                  <div className="bg-gray-800 p-3 rounded-md relative">
                    <div className="absolute top-2 right-2">
                      <CopyButton textToCopy="somnia wallet create --type hd" />
                    </div>
                    <pre className="text-green-300">somnia wallet create --type hd</pre>
                  </div>
                </div>
                
                <div>
                  <p className="text-sm text-gray-300 mb-2">2. Fund the newly created wallet:</p>
                  <div className="bg-gray-800 p-3 rounded-md relative">
                    <div className="absolute top-2 right-2">
                      <CopyButton textToCopy="somnia wallet fund" />
                    </div>
                    <pre className="text-green-300">somnia wallet fund</pre>
                  </div>
                </div>
              </div>
              
              <div className="mt-5 bg-blue-900/30 border border-blue-500/50 p-4 rounded-md">
                <h5 className="text-blue-300 font-medium mb-2">💡 Tip</h5>
                <p className="text-sm text-gray-300">
                  After creating and funding your wallet, you can check your balance using the Somnia wallet interface 
                  or by connecting to the blockchain explorer. This will confirm that your wallet has received the testnet tokens 
                  and is ready for development use.
                </p>
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
}
