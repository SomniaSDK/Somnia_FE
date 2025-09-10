import React from 'react';
import CopyButton from '@/components/CopyButton';

export default function DeployContractsPage() {
  return (
    <div className="max-w-5xl px-6 py-20">
      <h1 className="text-3xl font-bold mb-6">🚀 Deploy Contracts</h1>
      
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Deploying Smart Contracts to Somnia</h2>
        <p className="text-lg leading-relaxed mb-6">
          After writing and testing your smart contracts, deploying them to the Somnia blockchain 
          is the next critical step. The Somnia CLI provides simple yet powerful commands to deploy 
          your contracts with various configuration options.
        </p>
        
        <div className="space-y-12">
          {/* Basic Deployment Section */}
          <section className="border-b border-gray-800 pb-10">
            <h3 className="text-xl font-semibold mb-4">Basic Contract Deployment</h3>
            <p className="mb-4">
              To deploy a smart contract using the default settings, use the following command with your contract name:
            </p>
            
            <div className="bg-gray-800 p-4 rounded-md my-4 relative">
              <div className="absolute top-3 right-3">
                <CopyButton textToCopy={'somnia deploy MyToken'} />
              </div>
              <pre className="text-green-300">somnia deploy MyToken</pre>
            </div>
            
            <div className="mt-6">
              <h4 className="font-medium text-lg mb-3">What Happens During Deployment</h4>
              <div className="bg-gray-900 p-5 rounded-md">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="text-blue-400 mr-2 mt-0.5">•</div>
                    <div>
                      <span className="font-medium text-white">Contract Compilation</span>
                      <p className="text-sm text-gray-300 mt-0.5">
                        Somnia compiles your contract using the Solidity compiler with optimizations
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="text-blue-400 mr-2 mt-0.5">•</div>
                    <div>
                      <span className="font-medium text-white">Bytecode Generation</span>
                      <p className="text-sm text-gray-300 mt-0.5">
                        The compiler produces bytecode and ABI (Application Binary Interface) for your contract
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="text-blue-400 mr-2 mt-0.5">•</div>
                    <div>
                      <span className="font-medium text-white">Gas Estimation</span>
                      <p className="text-sm text-gray-300 mt-0.5">
                        Somnia automatically estimates the gas required for deployment
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="text-blue-400 mr-2 mt-0.5">•</div>
                    <div>
                      <span className="font-medium text-white">Transaction Submission</span>
                      <p className="text-sm text-gray-300 mt-0.5">
                        The deployment transaction is signed with your wallet and submitted to the network
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="text-blue-400 mr-2 mt-0.5">•</div>
                    <div>
                      <span className="font-medium text-white">Confirmation</span>
                      <p className="text-sm text-gray-300 mt-0.5">
                        Somnia waits for confirmation and provides you with the deployed contract address
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mt-6 bg-blue-900/30 border border-blue-500/50 p-4 rounded-md">
              <h4 className="text-blue-300 font-medium mb-2">Example Output</h4>
              <pre className="text-sm text-gray-300 bg-gray-800 p-3 rounded overflow-x-auto">
{`Compiling contract: MyToken.sol
Optimization level: Standard
 
✓ Compilation successful
 
Estimated gas: 1,245,678
Gas price: 10 gwei
Total cost: ~0.012456 SST
 
Deploying to network: Somnia Testnet
Transaction hash: 0x1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0
 
✓ Contract deployed successfully!
 
Contract address: 0xA1B2C3D4E5F6G7H8I9J0K1L2M3N4O5P6Q7R8S9T0
Explorer URL: https://explorer.somnia.network/address/0xA1B2...`}
              </pre>
            </div>
          </section>
          
          {/* Custom Gas Price Deployment Section */}
          <section className="border-b border-gray-800 pb-10">
            <h3 className="text-xl font-semibold mb-4">Deploying with Custom Gas Price</h3>
            <p className="mb-4">
              You can specify a custom gas price to prioritize your deployment transaction:
            </p>
            
            <div className="bg-gray-800 p-4 rounded-md my-4 relative">
              <div className="absolute top-3 right-3">
                <CopyButton textToCopy={'somnia deploy MyToken --gas-price 20'} />
              </div>
              <pre className="text-green-300">somnia deploy MyToken --gas-price 20</pre>
            </div>
            
            <div className="mt-6">
              <h4 className="font-medium text-lg mb-3">Understanding Gas Price</h4>
              <p className="text-gray-300 mb-4">
                Gas price is measured in <span className="font-medium text-white">gwei</span> (1 gwei = 0.000000001 SST). 
                Setting a higher gas price means:
              </p>
              
              <div className="bg-gray-900 p-5 rounded-md">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="text-green-400 mr-2 mt-0.5">✓</div>
                    <div>
                      <span className="font-medium text-white">Faster Confirmation</span>
                      <p className="text-sm text-gray-300 mt-0.5">
                        Miners prioritize transactions with higher gas prices
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="text-red-400 mr-2 mt-0.5">✗</div>
                    <div>
                      <span className="font-medium text-white">Higher Cost</span>
                      <p className="text-sm text-gray-300 mt-0.5">
                        You&apos;ll pay more for the transaction to be processed
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mt-6 bg-yellow-900/30 border border-yellow-500/50 p-4 rounded-md">
              <h4 className="text-yellow-300 font-medium mb-2">⚠️ Important Consideration</h4>
              <p className="text-sm text-gray-300">
                During network congestion, standard gas prices may not be sufficient for timely deployment. 
                Use the <code className="bg-gray-700 px-1 py-0.5 rounded">--gas-price</code> flag to ensure 
                your deployment gets processed within a reasonable timeframe.
              </p>
            </div>
          </section>
          
          {/* Specific File Deployment Section */}
          <section className="pb-10">
            <h3 className="text-xl font-semibold mb-4">Deploying a Specific Contract File</h3>
            <p className="mb-4">
              If you need to deploy a contract from a specific file path, use the <code className="bg-gray-700 px-1 py-0.5 rounded">--file</code> flag:
            </p>
            
            <div className="bg-gray-800 p-4 rounded-md my-4 relative">
              <div className="absolute top-3 right-3">
                <CopyButton textToCopy={'somnia deploy --file ./contracts/MyToken.sol'} />
              </div>
              <pre className="text-green-300">somnia deploy --file ./contracts/MyToken.sol</pre>
            </div>
            
            <div className="mt-6">
              <h4 className="font-medium text-lg mb-3">When to Use File Path</h4>
              <div className="bg-gray-900 p-5 rounded-md">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="text-blue-400 mr-2 mt-0.5">•</div>
                    <div>
                      <span className="font-medium text-white">Non-Standard Locations</span>
                      <p className="text-sm text-gray-300 mt-0.5">
                        When your contract file is not in the default contracts directory
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="text-blue-400 mr-2 mt-0.5">•</div>
                    <div>
                      <span className="font-medium text-white">Multiple Contracts with Same Name</span>
                      <p className="text-sm text-gray-300 mt-0.5">
                        To specify exactly which contract file you want to deploy
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="text-blue-400 mr-2 mt-0.5">•</div>
                    <div>
                      <span className="font-medium text-white">External Contracts</span>
                      <p className="text-sm text-gray-300 mt-0.5">
                        For deploying contracts from shared libraries or external sources
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mt-6 bg-blue-900/30 border border-blue-500/50 p-4 rounded-md">
              <h4 className="text-blue-300 font-medium mb-2">💡 Pro Tip</h4>
              <p className="text-sm text-gray-300">
                When using the <code className="bg-gray-700 px-1 py-0.5 rounded">--file</code> flag, Somnia will 
                automatically detect the main contract in the file. If the file contains multiple contracts, you can 
                specify which one to deploy using:
              </p>
              <pre className="mt-2 text-sm bg-gray-800 p-2 rounded overflow-x-auto">
                somnia deploy --file ./contracts/MyToken.sol --contract TokenImplementation
              </pre>
            </div>
          </section>
          
          {/* Advanced Options Section */}
          <section className="border-t border-gray-700 pt-8">
            <h3 className="text-xl font-semibold mb-6">Advanced Deployment Options</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-900 p-5 rounded-md">
                <h4 className="font-medium text-lg mb-3">Constructor Arguments</h4>
                <p className="text-sm text-gray-300 mb-3">
                  Pass arguments to your contract&apos;s constructor:
                </p>
                <pre className="text-xs bg-gray-800 p-2 rounded overflow-x-auto">
                  somnia deploy MyToken --args &quot;My Token&quot; MTK 1000000
                </pre>
              </div>
              
              <div className="bg-gray-900 p-5 rounded-md">
                <h4 className="font-medium text-lg mb-3">Network Selection</h4>
                <p className="text-sm text-gray-300 mb-3">
                  Deploy to a specific network:
                </p>
                <pre className="text-xs bg-gray-800 p-2 rounded overflow-x-auto">
                  somnia deploy MyToken --network testnet
                </pre>
              </div>
              
              <div className="bg-gray-900 p-5 rounded-md">
                <h4 className="font-medium text-lg mb-3">Gas Limit</h4>
                <p className="text-sm text-gray-300 mb-3">
                  Specify maximum gas to use:
                </p>
                <pre className="text-xs bg-gray-800 p-2 rounded overflow-x-auto">
                  somnia deploy MyToken --gas-limit 3000000
                </pre>
              </div>
              
              <div className="bg-gray-900 p-5 rounded-md">
                <h4 className="font-medium text-lg mb-3">Verification</h4>
                <p className="text-sm text-gray-300 mb-3">
                  Automatically verify contract on explorer:
                </p>
                <pre className="text-xs bg-gray-800 p-2 rounded overflow-x-auto">
                  somnia deploy MyToken --verify
                </pre>
              </div>
            </div>
          </section>
          
          {/* Best Practices Section */}
          <section className="border-t border-gray-700 pt-10">
            <h3 className="text-xl font-semibold mb-6">Best Practices for Contract Deployment</h3>
            
            <div className="space-y-4 mt-4">
              <div className="flex gap-3">
                <div className="text-orange-400 font-bold text-xl">•</div>
                <div>
                  <h4 className="font-medium">Test Before Deploying</h4>
                  <p className="text-sm text-gray-300 mt-1">
                    Always run comprehensive tests on your contracts using <code className="bg-gray-700 px-1 py-0.5 rounded">somnia test</code> 
                    before deploying them to any network.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-3">
                <div className="text-orange-400 font-bold text-xl">•</div>
                <div>
                  <h4 className="font-medium">Deploy to Testnet First</h4>
                  <p className="text-sm text-gray-300 mt-1">
                    Always deploy to Somnia Testnet first and thoroughly test your contract&apos;s functionality 
                    before moving to mainnet.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-3">
                <div className="text-orange-400 font-bold text-xl">•</div>
                <div>
                  <h4 className="font-medium">Verify Your Contracts</h4>
                  <p className="text-sm text-gray-300 mt-1">
                    Verify your contracts on the Somnia Explorer to make your contract&apos;s code publicly 
                    viewable, increasing transparency and trust.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-3">
                <div className="text-orange-400 font-bold text-xl">•</div>
                <div>
                  <h4 className="font-medium">Keep Deployment Records</h4>
                  <p className="text-sm text-gray-300 mt-1">
                    Maintain a record of all your deployed contracts, including addresses, network, 
                    deployment parameters, and transaction hashes.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-3">
                <div className="text-orange-400 font-bold text-xl">•</div>
                <div>
                  <h4 className="font-medium">Monitor Gas Prices</h4>
                  <p className="text-sm text-gray-300 mt-1">
                    Check current gas prices on the network before deployment to avoid overpaying 
                    or having your transaction stuck due to low gas price.
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
