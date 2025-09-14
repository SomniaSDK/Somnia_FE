"use client";
import React, { use, useState } from 'react';
import styled from 'styled-components';

interface CopyButtonProps {
  textToCopy: string;
}

const CopyButton: React.FC<CopyButtonProps> = ({ textToCopy }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset after 2s
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <StyledWrapper>
      <button className="copy" onClick={handleCopy}>
        <span
          data-text-end="Copied!"
          data-text-initial="Copy to clipboard"
          className="tooltip"
        />
        <span>
          <svg
  xmlSpace="preserve"
  enableBackground="new 0 0 512 512"   // ✅ use attribute, not style
  viewBox="0 0 6.35 6.35"
  height={20}
  width={20}
  xmlns="http://www.w3.org/2000/svg"
  className={`clipboard ${copied ? 'hidden' : ''}`}
>

            <path
              fill="currentColor"
              d="M2.43.265c-.3 0-.548.236-.573.53h-.328a.74.74 0 0 0-.735.734v3.822a.74.74 0 0 0 .735.734H4.82a.74.74 0 0 0 .735-.734V1.529a.74.74 0 0 0-.735-.735h-.328a.58.58 0 0 0-.573-.53zm0 .529h1.49c.032 0 .049.017.049.049v.431c0 .032-.017.049-.049.049H2.43c-.032 0-.05-.017-.05-.049V.843c0-.032.018-.05.05-.05zm-.901.53h.328c.026.292.274.528.573.528h1.49a.58.58 0 0 0 .573-.529h.328a.2.2 0 0 1 .206.206v3.822a.2.2 0 0 1-.206.205H1.53a.2.2 0 0 1-.206-.205V1.529a.2.2 0 0 1 .206-.206z"
            />
          </svg>

          <svg
  xmlSpace="preserve"
  enableBackground="new 0 0 512 512"   // ✅ here too
  viewBox="0 0 24 24"
  height={18}
  width={18}
  xmlns="http://www.w3.org/2000/svg"
  className={`checkmark ${copied ? '' : 'hidden'}`}
>

            <path
              fill="currentColor"
              d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
            />
          </svg>
        </span>
      </button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: flex;              /* enable flexbox */
  align-items: center;        /* vertical center */
  justify-content: center;    /* horizontal center */
  height: 100%;               /* take full height of parent */
  width: 100%;                /* take full width of parent */

  .copy {
    --button-bg: #353434;
    --button-hover-bg: #7e46c7ff;
    --button-text-color: #cccccc;
    --button-hover-text-color: #8bb9fe;
    --button-border-radius: 10px;
    --button-diameter: 36px;
    --button-outline-width: 1px;
    --button-outline-color: rgba(57, 38, 153, 1);
    --tooltip-bg: #f4f3f3;
    --toolptip-border-radius: 4px;
    --tooltip-font-family: Menlo, Roboto Mono, monospace;
    --tooltip-font-size: 12px;
    --tootip-text-color: rgb(50, 50, 50);
    --tooltip-padding-x: 7px;
    --tooltip-padding-y: 7px;
    --tooltip-offset: 8px;

    width: var(--button-diameter);
    height: var(--button-diameter);
    border-radius: var(--button-border-radius);
    background-color: var(--button-bg);
    color: var(--button-text-color);
    border: none;
    cursor: pointer;
    outline: none;
    display: flex;              /* center icon inside button */
    align-items: center;
    justify-content: center;
  }

  .tooltip {
    position: absolute;
    opacity: 0;
    visibility: hidden;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    white-space: nowrap;
    font: var(--tooltip-font-size) var(--tooltip-font-family);
    color: var(--tootip-text-color);
    background: var(--tooltip-bg);
    padding: var(--tooltip-padding-y) var(--tooltip-padding-x);
    border-radius: var(--toolptip-border-radius);
    pointer-events: none;
  }

  .tooltip::before {
    content: attr(data-text-initial);
  }

  .copy:hover .tooltip {
    opacity: 1;
    visibility: visible;
    top: calc((100% + var(--tooltip-offset)) * -1);
  }

  .clipboard.hidden {
    display: none;
  }

  .checkmark.hidden {
    display: none;
  }
`;
  
export default CopyButton;
