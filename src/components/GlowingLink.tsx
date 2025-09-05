'use client';

import React from 'react';
import styled from 'styled-components';

interface GlowingLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

const StyledLink = styled.a`
  display: flex;
  align-items: center;
  padding: 6px 14px;
  border-radius: 999px;
  border: 1px solid rgba(59, 130, 246, 0.5);
  font-weight: 500;
  font-size: 0.875rem; /* text-sm */
  color: #3B82F6; /* Tailwind blue-500 */
  background-color: rgba(26, 28, 37, 0.8); /* Dark background */
  box-shadow: 0 0 8px 1px rgba(59, 130, 246, 0.2), 0 0 4px 0 rgba(59, 130, 246, 0.1) inset;
  position: relative;
  overflow: hidden;
  transition: all 0.2s ease;
  cursor: pointer;
  
  &:hover {
    color: #60a5fa; /* Slightly lighter blue */
    box-shadow: 0 0 12px 2px rgba(59, 130, 246, 0.25), 0 0 6px 0 rgba(59, 130, 246, 0.2) inset;
    border-color: rgba(59, 130, 246, 0.7);
    background-color: rgba(37, 39, 47, 0.8); /* Slightly lighter background on hover */
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(59, 130, 246, 0.2),
      transparent
    );
    transition: 0.5s;
    pointer-events: none;
  }
  
  &:hover::before {
    left: 100%;
  }
`;

const GlowingLink: React.FC<GlowingLinkProps> = ({ href, children, className }) => {
  return (
    <StyledLink href={href} className={className}>
      {children}
    </StyledLink>
  );
};

export default GlowingLink;
