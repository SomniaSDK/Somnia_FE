"use client";

import React from 'react';

interface CopyButtonProps {
  textToCopy: string;
}

const CopyButton: React.FC<CopyButtonProps> = ({ textToCopy }) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(textToCopy);
  };

  return (
    <button 
      className="text-xs bg-blue-600 hover:bg-blue-700 text-white px-2 py-1 rounded"
      onClick={handleCopy}
    >
      Copy to clipboard
    </button>
  );
};

export default CopyButton;
