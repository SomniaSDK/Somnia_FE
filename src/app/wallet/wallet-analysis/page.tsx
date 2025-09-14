import React from 'react';
import CopyButton from '@/components/CopyButton';

export default function WalletAnalysisPage() {
  return (
    <div className="max-w-5xl px-6 py-20">
      <h1 className="text-3xl font-bold mb-6">Wallet Analysis</h1>
      
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Monitoring Your Wallet</h2>
        <p className="text-lg leading-relaxed mb-6">
          Somnia provides powerful commands to analyze your wallet&apos;s state, including balance checking, 
          transaction history, and detailed wallet information. These commands help you track your assets 
          and monitor blockchain activity related to your account.
        </p>
        
        <div className="space-y-12">
          {/* Balance Command Section */}
          <section className="border-b border-gray-800 pb-10">
            <h3 className="text-xl font-semibold mb-4">Checking Your Balance</h3>
            <p className="mb-4">
              To quickly view your current wallet balance, use:
            </p>
            
            <div className="bg-gray-800 p-4 rounded-md my-4 relative">
              <div className="absolute top-3 right-3">
                <CopyButton textToCopy={'somnia balance'} />
              </div>
              <pre className="text-green-300">somnia balance</pre>
            </div>
            
            <div className="mt-6">
              <h4 className="font-medium text-lg mb-3">What This Shows</h4>
              <div className="bg-gray-900 p-5 rounded-md">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="text-blue-400 mr-2 mt-0.5">•</div>
                    <div>
                      <span className="font-medium text-white">SST Balance</span>
                      <p className="text-sm text-gray-300 mt-0.5">
                        Your current amount of Somnia Standard Tokens (SST) available for spending
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="text-blue-400 mr-2 mt-0.5">•</div>
                    <div>
                      <span className="font-medium text-white">Value in USD</span>
                      <p className="text-sm text-gray-300 mt-0.5">
                        Approximate USD value of your SST holdings based on current exchange rates
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="text-blue-400 mr-2 mt-0.5">•</div>
                    <div>
                      <span className="font-medium text-white">Pending Transactions</span>
                      <p className="text-sm text-gray-300 mt-0.5">
                        Any transactions that have been submitted but not yet confirmed
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mt-6 bg-blue-900/30 border border-blue-500/50 p-4 rounded-md">
              <h4 className="text-blue-300 font-medium mb-2">Example Output</h4>
              <pre className="text-sm text-gray-300 bg-gray-800 p-3 rounded overflow-x-auto">
{`Current balance: 1,255.75 SST
USD Value: ~$1,255.75
Active wallet: wallet_1a2b3c4d (default)`}
              </pre>
            </div>
          </section>
          
          {/* Wallet Info Command Section */}
          <section className="pb-10">
            <h3 className="text-xl font-semibold mb-4">Detailed Wallet Information</h3>
            <p className="mb-4">
              For comprehensive wallet details and transaction history, use:
            </p>
            
            <div className="bg-gray-800 p-4 rounded-md my-4 relative">
              <div className="absolute top-3 right-3">
                <CopyButton textToCopy={'somnia wallet info'} />
              </div>
              <pre className="text-green-300">somnia wallet info</pre>
            </div>
            
            <div className="mt-6">
              <h4 className="font-medium text-lg mb-3">What This Shows</h4>
              <div className="bg-gray-900 p-5 rounded-md">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="text-blue-400 mr-2 mt-0.5">•</div>
                    <div>
                      <span className="font-medium text-white">Wallet Address</span>
                      <p className="text-sm text-gray-300 mt-0.5">
                        Your full wallet address on the Somnia blockchain
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="text-blue-400 mr-2 mt-0.5">•</div>
                    <div>
                      <span className="font-medium text-white">Transaction Count</span>
                      <p className="text-sm text-gray-300 mt-0.5">
                        Total number of transactions associated with your wallet
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="text-blue-400 mr-2 mt-0.5">•</div>
                    <div>
                      <span className="font-medium text-white">Token Holdings</span>
                      <p className="text-sm text-gray-300 mt-0.5">
                        List of all tokens held by your wallet, including SST and any other tokens
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="text-blue-400 mr-2 mt-0.5">•</div>
                    <div>
                      <span className="font-medium text-white">Recent Transactions</span>
                      <p className="text-sm text-gray-300 mt-0.5">
                        Details of your most recent transactions, including status, amount, and timestamps
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="text-blue-400 mr-2 mt-0.5">•</div>
                    <div>
                      <span className="font-medium text-white">Network Status</span>
                      <p className="text-sm text-gray-300 mt-0.5">
                        Current network you&apos;re connected to (mainnet, testnet) and block height
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mt-6 bg-blue-900/30 border border-blue-500/50 p-4 rounded-md">
              <h4 className="text-blue-300 font-medium mb-2">Example Output</h4>
              <pre className="text-sm text-gray-300 bg-gray-800 p-3 rounded overflow-x-auto">
{`Wallet Information:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Address: 0x1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0
Type: HD Wallet (seeded)
Created: 2025-08-15 13:45:22 UTC

Balance:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SST: 1,255.75
Other tokens: 2 NFTs, 50 TEST

Transaction History:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Total transactions: 27
Recent activity:
- RECEIVE: +100 SST (5 mins ago)
- SEND: -45.25 SST to 0x7f8e9... (2 days ago)
- CONTRACT: NFT Mint #1234 (5 days ago)

Network:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Connected to: Somnia Testnet
Current block: 3,456,789`}
              </pre>
            </div>
            
            <div className="mt-6 bg-purple-900/30 border border-purple-500/50 p-4 rounded-md">
              <h4 className="text-purple-300 font-medium mb-2">💡 Pro Tip</h4>
              <p className="text-sm text-gray-300">
                You can export your wallet information to a file for record-keeping or analysis by adding the 
                <code className="bg-gray-700 mx-1 px-1 py-0.5 rounded">--export</code> flag:
              </p>
              <pre className="mt-2 text-sm bg-gray-800 p-2 rounded overflow-x-auto">
                somnia wallet info --export=my_wallet_report.json
              </pre>
            </div>
          </section>
          
          {/* Monitoring Best Practices Section */}
          <section className="border-t border-gray-700 pt-8">
            <h3 className="text-xl font-semibold mb-4">Best Practices for Wallet Monitoring</h3>
            
            <div className="space-y-4 mt-4">
              <div className="flex gap-3">
                <div className="text-orange-400 font-bold text-xl">•</div>
                <div>
                  <h4 className="font-medium">Regular Balance Checks</h4>
                  <p className="text-sm text-gray-300 mt-1">
                    Make it a habit to check your balance before and after executing transactions to ensure 
                    everything processes as expected.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-3">
                <div className="text-orange-400 font-bold text-xl">•</div>
                <div>
                  <h4 className="font-medium">Transaction Verification</h4>
                  <p className="text-sm text-gray-300 mt-1">
                    After sending funds, use <code className="bg-gray-700 px-1 py-0.5 rounded">somnia wallet info</code> to 
                    verify that the transaction appears in your history and has been confirmed.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-3">
                <div className="text-orange-400 font-bold text-xl">•</div>
                <div>
                  <h4 className="font-medium">Security Monitoring</h4>
                  <p className="text-sm text-gray-300 mt-1">
                    Regularly review your transaction history for any unfamiliar activities that might indicate 
                    security concerns.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-3">
                <div className="text-orange-400 font-bold text-xl">•</div>
                <div>
                  <h4 className="font-medium">Backup Reports</h4>
                  <p className="text-sm text-gray-300 mt-1">
                    Periodically export and save your wallet information for tax reporting, record-keeping, 
                    and as documentation of your blockchain activities.
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
