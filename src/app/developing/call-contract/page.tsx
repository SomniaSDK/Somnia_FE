import React from 'react';
import CopyButton from '@/components/CopyButton';

export default function CallContractFunctionsPage() {
  return (
    <div className="max-w-5xl px-6 py-20">
      <h1 className="text-3xl font-bold mb-6">Call Contract Functions</h1>
      
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Interacting with Smart Contracts</h2>
        <p className="text-lg leading-relaxed mb-6">
          Once your smart contracts are deployed on the Somnia blockchain, you&apos;ll need to interact with them 
          to execute their functions. The Somnia SDK provides a straightforward way to call various types of 
          contract functions through the CLI.
        </p>
        
        <div className="space-y-12">
          {/* View Functions Section */}
          <section className="border-b border-gray-800 pb-10">
            <h3 className="text-xl font-semibold mb-4">Calling View/Read Functions</h3>
            <p className="mb-4">
              View functions (also called read-only functions) don&apos;t modify the blockchain state and don&apos;t require gas to execute.
              They simply return data from the contract:
            </p>
            
            <div className="bg-gray-800 p-4 rounded-md my-4 relative">
              <div className="absolute top-3 right-3">
                <CopyButton textToCopy={'somnia call 0x742d... getValue'} />
              </div>
              <pre className="text-green-300">somnia call 0x742d... getValue</pre>
            </div>
            
            <div className="mt-6">
              <h4 className="font-medium text-lg mb-3">What Are View Functions?</h4>
              <div className="bg-gray-900 p-5 rounded-md">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="text-blue-400 mr-2 mt-0.5">•</div>
                    <div>
                      <span className="font-medium text-white">Read-Only Operations</span>
                      <p className="text-sm text-gray-300 mt-0.5">
                        View functions only read data from the blockchain without modifying state
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="text-blue-400 mr-2 mt-0.5">•</div>
                    <div>
                      <span className="font-medium text-white">Free to Execute</span>
                      <p className="text-sm text-gray-300 mt-0.5">
                        No gas cost since they don&apos;t change blockchain state
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="text-blue-400 mr-2 mt-0.5">•</div>
                    <div>
                      <span className="font-medium text-white">Instant Results</span>
                      <p className="text-sm text-gray-300 mt-0.5">
                        Return data immediately without waiting for transaction confirmation
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mt-6 bg-blue-900/30 border border-blue-500/50 p-4 rounded-md">
              <h4 className="text-blue-300 font-medium mb-2">Example Output</h4>
              <pre className="text-sm text-gray-300 bg-gray-800 p-3 rounded overflow-x-auto">
{`> somnia call 0x742d... getValue
 
✓ Call successful
 
Function: getValue()
Result: 42
Type: uint256
 
Gas used for estimation: 21,204 (free for view functions)`}
              </pre>
            </div>
          </section>
          
          {/* State-Changing Functions Section */}
          <section className="border-b border-gray-800 pb-10">
            <h3 className="text-xl font-semibold mb-4">Calling State-Changing Functions</h3>
            <p className="mb-4">
              Functions that modify the blockchain state require a transaction and consume gas:
            </p>
            
            <div className="bg-gray-800 p-4 rounded-md my-4 relative">
              <div className="absolute top-3 right-3">
                <CopyButton textToCopy={'somnia call 0x742d... setValue 123'} />
              </div>
              <pre className="text-green-300">somnia call 0x742d... setValue 123</pre>
            </div>
            
            <div className="mt-6">
              <h4 className="font-medium text-lg mb-3">Understanding State-Changing Functions</h4>
              <div className="bg-gray-900 p-5 rounded-md">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="text-yellow-400 mr-2 mt-0.5">•</div>
                    <div>
                      <span className="font-medium text-white">Modifies Blockchain State</span>
                      <p className="text-sm text-gray-300 mt-0.5">
                        These functions update contract storage or transfer assets
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="text-yellow-400 mr-2 mt-0.5">•</div>
                    <div>
                      <span className="font-medium text-white">Requires Gas</span>
                      <p className="text-sm text-gray-300 mt-0.5">
                        You&apos;ll pay gas fees based on computational complexity
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="text-yellow-400 mr-2 mt-0.5">•</div>
                    <div>
                      <span className="font-medium text-white">Requires Transaction</span>
                      <p className="text-sm text-gray-300 mt-0.5">
                        Creates a transaction that must be confirmed on the blockchain
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mt-6 bg-yellow-900/30 border border-yellow-500/50 p-4 rounded-md">
              <h4 className="text-yellow-300 font-medium mb-2">Example Output</h4>
              <pre className="text-sm text-gray-300 bg-gray-800 p-3 rounded overflow-x-auto">
{`> somnia call 0x742d... setValue 123
 
Calling contract function with arguments:
  Function: setValue(uint256)
  Arguments: [123]
 
Estimated gas: 43,892
Gas price: 10 gwei
Total cost: ~0.000439 SST
 
Submitting transaction...
Transaction hash: 0x8b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c
 
✓ Transaction confirmed in block #12345678
✓ Function call successful`}
              </pre>
            </div>
          </section>
          
          {/* Token Transfer Section */}
          <section className="border-b border-gray-800 pb-10">
            <h3 className="text-xl font-semibold mb-4">Transferring Tokens</h3>
            <p className="mb-4">
              For token contracts (ERC20, ERC721, etc.), you can call transfer functions with recipient and amount parameters:
            </p>
            
            <div className="bg-gray-800 p-4 rounded-md my-4 relative">
              <div className="absolute top-3 right-3">
                <CopyButton textToCopy={'somnia call 0x742d... transfer 0x123... 100'} />
              </div>
              <pre className="text-green-300">somnia call 0x742d... transfer 0x123... 100</pre>
            </div>
            
            <div className="mt-6">
              <h4 className="font-medium text-lg mb-3">Common Token Transfer Functions</h4>
              <div className="bg-gray-900 p-5 rounded-md">
                <table className="w-full text-sm text-left">
                  <thead className="text-xs text-gray-400 uppercase">
                    <tr>
                      <th scope="col" className="px-4 py-3">Function</th>
                      <th scope="col" className="px-4 py-3">Token Type</th>
                      <th scope="col" className="px-4 py-3">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-700">
                      <td className="px-4 py-3 font-medium text-white">transfer(address, uint256)</td>
                      <td className="px-4 py-3 text-gray-300">ERC20</td>
                      <td className="px-4 py-3 text-gray-300">Transfer tokens from your address to another address</td>
                    </tr>
                    <tr className="border-b border-gray-700">
                      <td className="px-4 py-3 font-medium text-white">transferFrom(address, address, uint256)</td>
                      <td className="px-4 py-3 text-gray-300">ERC20</td>
                      <td className="px-4 py-3 text-gray-300">Transfer tokens between two addresses (requires approval)</td>
                    </tr>
                    <tr className="border-b border-gray-700">
                      <td className="px-4 py-3 font-medium text-white">transferFrom(address, address, uint256)</td>
                      <td className="px-4 py-3 text-gray-300">ERC721</td>
                      <td className="px-4 py-3 text-gray-300">Transfer NFT between addresses (requires approval)</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium text-white">safeTransferFrom(address, address, uint256)</td>
                      <td className="px-4 py-3 text-gray-300">ERC721</td>
                      <td className="px-4 py-3 text-gray-300">Safe transfer of NFT (checks if receiver can accept)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            
            <div className="mt-6 bg-green-900/30 border border-green-500/50 p-4 rounded-md">
              <h4 className="text-green-300 font-medium mb-2">ERC20 Token Transfer Example</h4>
              <pre className="text-sm text-gray-300 bg-gray-800 p-3 rounded overflow-x-auto">
{`> somnia call 0x742d... transfer 0x123... 100
 
Calling contract function with arguments:
  Function: transfer(address, uint256)
  Arguments: ["0x123...", 100]
 
Estimated gas: 52,671
Gas price: 10 gwei
Total cost: ~0.000527 SST
 
Submitting transaction...
Transaction hash: 0x9a8b7c6d5e4f3a2b1c0d9e8f7a6b5c4d3e2f1a0b
 
✓ Transaction confirmed in block #12345679
✓ Token transfer successful
✓ Event emitted: Transfer(0x742d..., 0x123..., 100)`}
              </pre>
            </div>
          </section>
          
          {/* Simple Functions with No Args Section */}
          <section className="border-b border-gray-800 pb-10">
            <h3 className="text-xl font-semibold mb-4">Calling Simple Functions (No Arguments)</h3>
            <p className="mb-4">
              For functions that don&apos;t require any arguments, simply specify the function name:
            </p>
            
            <div className="bg-gray-800 p-4 rounded-md my-4 relative">
              <div className="absolute top-3 right-3">
                <CopyButton textToCopy={'somnia call 0x742d... increment'} />
              </div>
              <pre className="text-green-300">somnia call 0x742d... increment</pre>
            </div>
            
            <div className="mt-6">
              <h4 className="font-medium text-lg mb-3">Common No-Argument Functions</h4>
              <div className="bg-gray-900 p-5 rounded-md">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="text-blue-400 mr-2 mt-0.5">•</div>
                    <div>
                      <span className="font-medium text-white">increment() / decrement()</span>
                      <p className="text-sm text-gray-300 mt-0.5">
                        Counter contracts that increase or decrease a stored value
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="text-blue-400 mr-2 mt-0.5">•</div>
                    <div>
                      <span className="font-medium text-white">pause() / unpause()</span>
                      <p className="text-sm text-gray-300 mt-0.5">
                        Functions that toggle contract operational status
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="text-blue-400 mr-2 mt-0.5">•</div>
                    <div>
                      <span className="font-medium text-white">mint()</span>
                      <p className="text-sm text-gray-300 mt-0.5">
                        Function to mint new tokens (when no arguments needed)
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="text-blue-400 mr-2 mt-0.5">•</div>
                    <div>
                      <span className="font-medium text-white">totalSupply()</span>
                      <p className="text-sm text-gray-300 mt-0.5">
                        View function to check total token supply
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </section>
          
          {/* Advanced Usage Section */}
          <section className="border-t border-gray-700 pt-8">
            <h3 className="text-xl font-semibold mb-6">Advanced Usage</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-900 p-5 rounded-md">
                <h4 className="font-medium text-lg mb-3">Custom Gas Settings</h4>
                <p className="text-sm text-gray-300 mb-3">
                  Specify custom gas price and limit:
                </p>
                <pre className="text-xs bg-gray-800 p-2 rounded overflow-x-auto">
                  somnia call 0x742d... setValue 123 --gas-price 20 --gas-limit 100000
                </pre>
              </div>
              
              <div className="bg-gray-900 p-5 rounded-md">
                <h4 className="font-medium text-lg mb-3">Value Transfer</h4>
                <p className="text-sm text-gray-300 mb-3">
                  Send SST along with your function call:
                </p>
                <pre className="text-xs bg-gray-800 p-2 rounded overflow-x-auto">
                  somnia call 0x742d... deposit --value 1.5
                </pre>
              </div>
              
              <div className="bg-gray-900 p-5 rounded-md">
                <h4 className="font-medium text-lg mb-3">Using ABI Path</h4>
                <p className="text-sm text-gray-300 mb-3">
                  Specify a custom ABI file:
                </p>
                <pre className="text-xs bg-gray-800 p-2 rounded overflow-x-auto">
                  somnia call 0x742d... createItem --abi ./abis/MyContract.json
                </pre>
              </div>
              
              <div className="bg-gray-900 p-5 rounded-md">
                <h4 className="font-medium text-lg mb-3">Network Selection</h4>
                <p className="text-sm text-gray-300 mb-3">
                  Target specific network:
                </p>
                <pre className="text-xs bg-gray-800 p-2 rounded overflow-x-auto">
                  somnia call 0x742d... getValue --network testnet
                </pre>
              </div>
            </div>
          </section>
          
          {/* Complex Parameters Section */}
          <section className="border-t border-gray-800 pt-10 pb-10">
            <h3 className="text-xl font-semibold mb-4">Working with Complex Parameters</h3>
            
            <p className="mb-6">
              Smart contracts often require complex data types. Here&apos;s how to call functions with different parameter types:
            </p>
            
            <div className="space-y-6">
              <div className="bg-gray-900 p-5 rounded-md">
                <h4 className="font-medium text-lg mb-3">Arrays</h4>
                <div className="bg-gray-800 p-3 rounded-md my-2 relative">
                  <div className="absolute top-2 right-2">
                    <CopyButton textToCopy={'somnia call 0x742d... setValues [1,2,3,4]'} />
                  </div>
                  <pre className="text-green-300 text-sm">somnia call 0x742d... setValues [1,2,3,4]</pre>
                </div>
              </div>
              
              <div className="bg-gray-900 p-5 rounded-md">
                <h4 className="font-medium text-lg mb-3">Structs</h4>
                <div className="bg-gray-800 p-3 rounded-md my-2 relative">
                  <div className="absolute top-2 right-2">
                    <CopyButton textToCopy={'somnia call 0x742d... createUser \'{"name":"John","age":30,"active":true}\''} />
                  </div>
                  <pre className="text-green-300 text-sm">somnia call 0x742d... createUser &apos;&#123;&quot;name&quot;:&quot;John&quot;,&quot;age&quot;:30,&quot;active&quot;:true&#125;&apos;</pre>
                </div>
              </div>
              
              <div className="bg-gray-900 p-5 rounded-md">
                <h4 className="font-medium text-lg mb-3">Nested Structures</h4>
                <div className="bg-gray-800 p-3 rounded-md my-2 relative">
                  <div className="absolute top-2 right-2">
                    <CopyButton textToCopy={'somnia call 0x742d... createOrder \'{"buyer":"0x123...","items":[{"id":1,"qty":5},{"id":2,"qty":3}],"total":800}\''} />
                  </div>
                  <pre className="text-green-300 text-sm">somnia call 0x742d... createOrder &apos;&#123;&quot;buyer&quot;:&quot;0x123...&quot;,&quot;items&quot;:[&#123;&quot;id&quot;:1,&quot;qty&quot;:5&#125;,&#123;&quot;id&quot;:2,&quot;qty&quot;:3&#125;],&quot;total&quot;:800&#125;&apos;</pre>
                </div>
              </div>
            </div>
          </section>
          
          {/* Best Practices Section */}
          <section className="border-t border-gray-700 pt-10">
            <h3 className="text-xl font-semibold mb-6">Best Practices for Contract Interaction</h3>
            
            <div className="space-y-4 mt-4">
              <div className="flex gap-3">
                <div className="text-orange-400 font-bold text-xl">•</div>
                <div>
                  <h4 className="font-medium">Test View Functions First</h4>
                  <p className="text-sm text-gray-300 mt-1">
                    Before making state-changing calls, use view functions to verify the current state
                    and ensure your changes will have the expected effect.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-3">
                <div className="text-orange-400 font-bold text-xl">•</div>
                <div>
                  <h4 className="font-medium">Validate Parameter Types</h4>
                  <p className="text-sm text-gray-300 mt-1">
                    Ensure your parameters match the expected types in the contract function.
                    Mismatched types can lead to failed transactions or unexpected behavior.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-3">
                <div className="text-orange-400 font-bold text-xl">•</div>
                <div>
                  <h4 className="font-medium">Consider Gas Optimization</h4>
                  <p className="text-sm text-gray-300 mt-1">
                    For functions that will be called frequently, optimize your contract code
                    to reduce gas consumption. Monitor gas usage after each call.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-3">
                <div className="text-orange-400 font-bold text-xl">•</div>
                <div>
                  <h4 className="font-medium">Handle Events</h4>
                  <p className="text-sm text-gray-300 mt-1">
                    Pay attention to events emitted by your contract functions. They provide
                    important feedback on what happened during the transaction.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-3">
                <div className="text-orange-400 font-bold text-xl">•</div>
                <div>
                  <h4 className="font-medium">Create Scripts for Complex Interactions</h4>
                  <p className="text-sm text-gray-300 mt-1">
                    For sequences of interactions or complex parameters, create and save script 
                    files that can be reused rather than typing long commands repeatedly.
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
