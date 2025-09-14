module.exports = {
  extends: ['next/core-web-vitals'],
  rules: {
    // Disable the unused vars warning for 'use client' directive
    '@typescript-eslint/no-unused-vars': ['warn', {
      "varsIgnorePattern": "use"
    }],
    // Add specific rule exceptions for react hooks
    'react-hooks/exhaustive-deps': 'warn'
  }
};