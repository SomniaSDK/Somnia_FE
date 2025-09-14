import React from 'react';
import CopyButton from '@/components/CopyButton';

export default function NetworkCommandsPage() {
  return (
    <div className="max-w-5xl px-6 py-20">
      <h1 className="text-3xl font-bold mb-6">Network Commands</h1>
      
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Managing and Monitoring Your Somnia Network</h2>
        <p className="text-lg leading-relaxed mb-6">
          Somnia provides several commands to help you monitor the blockchain network status, 
          test connectivity, and verify your connection to the Somnia ecosystem. These commands 
          are essential for troubleshooting and ensuring optimal performance.
        </p>
        
        <div className="space-y-12">
          {/* Network Status Section */}
          <section className="border-b border-gray-800 pb-10">
            <h3 className="text-xl font-semibold mb-4">Checking Network and Wallet Status</h3>
            <p className="mb-4">
              The status command gives you a comprehensive overview of your connection to the 
              Somnia network and your wallet information:
            </p>
            
            <div className="bg-gray-800 p-4 rounded-md my-4 relative">
              <div className="absolute top-3 right-3">
                <CopyButton textToCopy={'somnia status'} />
              </div>
              <pre className="text-green-300">somnia status</pre>
            </div>
            
            <div className="mt-6">
              <h4 className="font-medium text-lg mb-3">What Information Does Status Show?</h4>
              <div className="bg-gray-900 p-5 rounded-md">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="text-blue-400 mr-2 mt-0.5">•</div>
                    <div>
                      <span className="font-medium text-white">Network Connection</span>
                      <p className="text-sm text-gray-300 mt-0.5">
                        Current network (mainnet, testnet) and connection status
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="text-blue-400 mr-2 mt-0.5">•</div>
                    <div>
                      <span className="font-medium text-white">Block Information</span>
                      <p className="text-sm text-gray-300 mt-0.5">
                        Latest block height, hash, and timestamp
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="text-blue-400 mr-2 mt-0.5">•</div>
                    <div>
                      <span className="font-medium text-white">Gas Prices</span>
                      <p className="text-sm text-gray-300 mt-0.5">
                        Current gas price information across the network
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="text-blue-400 mr-2 mt-0.5">•</div>
                    <div>
                      <span className="font-medium text-white">Active Wallet</span>
                      <p className="text-sm text-gray-300 mt-0.5">
                        Currently active wallet address and balance
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="text-blue-400 mr-2 mt-0.5">•</div>
                    <div>
                      <span className="font-medium text-white">Peer Information</span>
                      <p className="text-sm text-gray-300 mt-0.5">
                        Number of connected peers and their geographic distribution
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mt-6 bg-blue-900/30 border border-blue-500/50 p-4 rounded-md">
              <h4 className="text-blue-300 font-medium mb-2">Example Output</h4>
              <pre className="text-sm text-gray-300 bg-gray-800 p-3 rounded overflow-x-auto">
{`> somnia status
 
✓ Connected to Somnia Network
 
NETWORK INFORMATION:
Network:           Somnia Mainnet
Status:            Connected (10 peers)
Current Block:     #8,456,723
Block Time:        2023-10-04 14:23:15 UTC
Block Hash:        0xa1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0
 
GAS PRICES:
Low:               8 gwei
Average:           12 gwei
High:              20 gwei
 
WALLET INFORMATION:
Active Wallet:     0x742d35Cc6634C0532925a3b844Bc454e4438f44e
Balance:           12.45 SST
Nonce:             27
 
NETWORK HEALTH:
Response Time:     42ms
Chain Status:      In-sync`}
              </pre>
            </div>
            
            <div className="mt-6 bg-yellow-900/30 border border-yellow-500/50 p-4 rounded-md">
              <h4 className="text-yellow-300 font-medium mb-2">⚠️ When to Use</h4>
              <p className="text-sm text-gray-300">
                Run the status command before making any important transactions to ensure your connection 
                is stable and you&apos;re on the expected network. Also use it when troubleshooting connectivity issues 
                or when transactions are pending for longer than expected.
              </p>
            </div>
          </section>
          
          {/* Test Connection Section */}
          <section className="border-b border-gray-800 pb-10">
            <h3 className="text-xl font-semibold mb-4">Testing Network Connection</h3>
            <p className="mb-4">
              To diagnose connection issues or check the latency between your node and the Somnia network, 
              use the network test command:
            </p>
            
            <div className="bg-gray-800 p-4 rounded-md my-4 relative">
              <div className="absolute top-3 right-3">
                <CopyButton textToCopy={'somnia network test'} />
              </div>
              <pre className="text-green-300">somnia network test</pre>
            </div>
            
            <div className="mt-6">
              <h4 className="font-medium text-lg mb-3">What Does Network Test Measure?</h4>
              <div className="bg-gray-900 p-5 rounded-md">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="text-green-400 mr-2 mt-0.5">•</div>
                    <div>
                      <span className="font-medium text-white">Latency</span>
                      <p className="text-sm text-gray-300 mt-0.5">
                        Round-trip time between your client and the Somnia nodes
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="text-green-400 mr-2 mt-0.5">•</div>
                    <div>
                      <span className="font-medium text-white">Packet Loss</span>
                      <p className="text-sm text-gray-300 mt-0.5">
                        Percentage of data packets lost during transmission
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="text-green-400 mr-2 mt-0.5">•</div>
                    <div>
                      <span className="font-medium text-white">Connection Stability</span>
                      <p className="text-sm text-gray-300 mt-0.5">
                        Consistency of your connection over multiple test packets
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="text-green-400 mr-2 mt-0.5">•</div>
                    <div>
                      <span className="font-medium text-white">Network Health</span>
                      <p className="text-sm text-gray-300 mt-0.5">
                        Overall assessment of your connection quality
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mt-6 bg-green-900/30 border border-green-500/50 p-4 rounded-md">
              <h4 className="text-green-300 font-medium mb-2">Example Output</h4>
              <pre className="text-sm text-gray-300 bg-gray-800 p-3 rounded overflow-x-auto">
{`> somnia network test
 
Testing connection to Somnia Network...
 
PING STATISTICS:
Endpoint:          main-rpc.somnia.network
Packets Sent:      10
Packets Received:  10
Packet Loss:       0%
 
LATENCY:
Minimum:           18ms
Average:           24ms
Maximum:           37ms
Jitter:            4ms
 
CONNECTION HEALTH:
Quality:           Excellent
Status:            Stable
 
API ENDPOINTS:
Main RPC:          ✓ Connected (24ms)
Backup RPC:        ✓ Connected (31ms)
Explorer API:      ✓ Connected (42ms)
 
✓ Network connection is optimal`}
              </pre>
            </div>
          </section>
          
          {/* Advanced Network Commands Section */}
          <section className="border-t border-gray-700 pt-8">
            <h3 className="text-xl font-semibold mb-6">Advanced Network Commands</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-900 p-5 rounded-md">
                <h4 className="font-medium text-lg mb-3">Switch Networks</h4>
                <p className="text-sm text-gray-300 mb-3">
                  Switch between mainnet and testnet:
                </p>
                <pre className="text-xs bg-gray-800 p-2 rounded overflow-x-auto">
                  somnia network switch --testnet
                </pre>
              </div>
              
              <div className="bg-gray-900 p-5 rounded-md">
                <h4 className="font-medium text-lg mb-3">List Available Networks</h4>
                <p className="text-sm text-gray-300 mb-3">
                  View all available networks:
                </p>
                <pre className="text-xs bg-gray-800 p-2 rounded overflow-x-auto">
                  somnia network list
                </pre>
              </div>
              
              <div className="bg-gray-900 p-5 rounded-md">
                <h4 className="font-medium text-lg mb-3">Custom RPC Endpoint</h4>
                <p className="text-sm text-gray-300 mb-3">
                  Use a custom RPC endpoint:
                </p>
                <pre className="text-xs bg-gray-800 p-2 rounded overflow-x-auto">
                  somnia network set-rpc https://my-custom-rpc.example.com
                </pre>
              </div>
              
              <div className="bg-gray-900 p-5 rounded-md">
                <h4 className="font-medium text-lg mb-3">Network Diagnostics</h4>
                <p className="text-sm text-gray-300 mb-3">
                  Run detailed diagnostics:
                </p>
                <pre className="text-xs bg-gray-800 p-2 rounded overflow-x-auto">
                  somnia network diagnose --detailed
                </pre>
              </div>
            </div>
          </section>
          
          {/* Network Troubleshooting Section */}
          <section className="border-t border-gray-800 pt-10 pb-10">
            <h3 className="text-xl font-semibold mb-4">Network Troubleshooting</h3>
            
            <p className="mb-6">
              When experiencing network issues, follow this troubleshooting sequence:
            </p>
            
            <div className="space-y-6">
              <div className="bg-gray-900 p-5 rounded-md">
                <h4 className="font-medium text-lg mb-3">1. Check Status</h4>
                <div className="bg-gray-800 p-3 rounded-md my-2">
                  <pre className="text-green-300 text-sm">somnia status</pre>
                  <p className="text-sm text-gray-300 mt-2">Verify you&apos;re connected to the expected network and peers</p>
                </div>
              </div>
              
              <div className="bg-gray-900 p-5 rounded-md">
                <h4 className="font-medium text-lg mb-3">2. Test Connection</h4>
                <div className="bg-gray-800 p-3 rounded-md my-2">
                  <pre className="text-green-300 text-sm">somnia network test</pre>
                  <p className="text-sm text-gray-300 mt-2">Check for latency or packet loss issues</p>
                </div>
              </div>
              
              <div className="bg-gray-900 p-5 rounded-md">
                <h4 className="font-medium text-lg mb-3">3. Try Alternate RPC</h4>
                <div className="bg-gray-800 p-3 rounded-md my-2">
                  <pre className="text-green-300 text-sm">somnia network switch-rpc --backup</pre>
                  <p className="text-sm text-gray-300 mt-2">Switch to backup RPC endpoint if main is having issues</p>
                </div>
              </div>
              
              <div className="bg-gray-900 p-5 rounded-md">
                <h4 className="font-medium text-lg mb-3">4. Reset Network Cache</h4>
                <div className="bg-gray-800 p-3 rounded-md my-2">
                  <pre className="text-green-300 text-sm">somnia network reset-cache</pre>
                  <p className="text-sm text-gray-300 mt-2">Clear local network cache if experiencing persistent issues</p>
                </div>
              </div>
            </div>
          </section>
          
          {/* Best Practices Section */}
          <section className="border-t border-gray-700 pt-10">
            <h3 className="text-xl font-semibold mb-6">Best Practices for Network Management</h3>
            
            <div className="space-y-4 mt-4">
              <div className="flex gap-3">
                <div className="text-orange-400 font-bold text-xl">•</div>
                <div>
                  <h4 className="font-medium">Regular Monitoring</h4>
                  <p className="text-sm text-gray-300 mt-1">
                    Run <code className="bg-gray-700 px-1 py-0.5 rounded">somnia status</code> regularly to ensure 
                    your connection remains healthy. Consider adding this to your project startup scripts.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-3">
                <div className="text-orange-400 font-bold text-xl">•</div>
                <div>
                  <h4 className="font-medium">Network Testing Before Large Transactions</h4>
                  <p className="text-sm text-gray-300 mt-1">
                    Always run a network test before deploying important contracts or making large transfers 
                    to ensure stable connectivity.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-3">
                <div className="text-orange-400 font-bold text-xl">•</div>
                <div>
                  <h4 className="font-medium">Use Testnet for Development</h4>
                  <p className="text-sm text-gray-300 mt-1">
                    Always develop and test on testnet before moving to mainnet. Use 
                    <code className="bg-gray-700 px-1 py-0.5 rounded ml-1">somnia network switch --testnet</code> to switch networks.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-3">
                <div className="text-orange-400 font-bold text-xl">•</div>
                <div>
                  <h4 className="font-medium">RPC Endpoint Selection</h4>
                  <p className="text-sm text-gray-300 mt-1">
                    For production applications, consider using a dedicated or premium RPC endpoint 
                    for better reliability and performance.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-3">
                <div className="text-orange-400 font-bold text-xl">•</div>
                <div>
                  <h4 className="font-medium">Automate Network Health Checks</h4>
                  <p className="text-sm text-gray-300 mt-1">
                    Integrate network status checks into your CI/CD pipeline to ensure
                    deployments only happen when network conditions are optimal.
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
