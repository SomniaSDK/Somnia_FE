import React from 'react';
import CopyButton from '@/components/CopyButton';

export default function MCPServerPage() {
  return (
    <div className="max-w-5xl px-6 py-20">
      <h1 className="text-3xl font-bold mb-6">MCP Server</h1>
      
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Model Context Protocol Server</h2>
        <p className="text-lg leading-relaxed mb-4">
          This section provides documentation about the MCP Server component of the Somnia SDK,
          including its architecture, configuration, and usage guidelines.
        </p>
        
        <section className="my-8">
          <h3 className="text-xl font-semibold mb-3">Setting Up Somnia MCP Server</h3>
          <p className="mb-4">
            To use the Somnia MCP server in your project, you need to create a configuration file
            and register it with VS Code. Follow these steps:
          </p>
          
          <div className="mb-6">
            <h4 className="text-lg font-medium mb-2">Step 1: Create a configuration file</h4>
            <p className="mb-2">Create a file named <code className="bg-gray-700 px-1 py-0.5 rounded">somnia-mcp-server.json</code> with the following content:</p>
            
            <div className="bg-gray-800 p-4 rounded-md my-3 relative">
              <div className="absolute top-2 right-3">
                <CopyButton textToCopy={`{
  "mcpServers": {
    "somnia": {
      "command": "npx",
      "args": ["-y", "somnia-mcp-server@latest"]
    }
  }
}`} />
              </div>
              <pre className="text-green-300 overflow-x-auto whitespace-pre-wrap">
{`# somnia-mcp-server.json
{
  "mcpServers": {
    "somnia": {
      "command": "npx",
      "args": ["-y", "somnia-mcp-server@latest"]
    }
  }
}`}
              </pre>
            </div>
          </div>
          
          <div className="mb-6">
            <h4 className="text-lg font-medium mb-2">Step 2: Register the MCP server in VS Code</h4>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Save the JSON configuration above as <code className="bg-gray-700 px-1 py-0.5 rounded">somnia-mcp-server.json</code> in your project root or <code className="bg-gray-700 px-1 py-0.5 rounded">.vscode</code> folder.</li>
              <li>Open VS Code and press <kbd className="bg-gray-700 px-1 py-0.5 rounded">Ctrl+Shift+P</kbd> (Windows/Linux) or <kbd className="bg-gray-700 px-1 py-0.5 rounded">Cmd+Shift+P</kbd> (Mac) to open the Command Palette.</li>
              <li>Type &quot;MCP: Add Server from File&quot; and select this option when it appears.</li>
              <li>Navigate to and select your <code className="bg-gray-700 px-1 py-0.5 rounded">somnia-mcp-server.json</code> file.</li>
              <li>The Somnia MCP server will now be registered for use in your workspace.</li>
            </ol>
          </div>
          
          <div className="mb-6">
            <h4 className="text-lg font-medium mb-2">Step 3: Verify the installation</h4>
            <p className="mb-2">To confirm that the MCP server is properly registered:</p>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Open the Command Palette again with <kbd className="bg-gray-700 px-1 py-0.5 rounded">Ctrl+Shift+P</kbd> / <kbd className="bg-gray-700 px-1 py-0.5 rounded">Cmd+Shift+P</kbd></li>
              <li>Type &quot;MCP: Start Server&quot; and select it</li>
              <li>Choose &quot;somnia&quot; from the list of available servers</li>
              <li>The server should start running in a terminal window</li>
            </ol>
          </div>
        </section>
      </section>
    </div>
  );
}
