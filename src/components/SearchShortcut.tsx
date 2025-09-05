"use client";

import { Kbd, KbdKey } from "@/components/ui/kibo-ui/kbd";

const SearchShortcut = () => {
  // Use Ctrl+K for Windows/Linux, and ⌘+K for MacOS
  const isMac = typeof navigator !== 'undefined' ? 
    navigator.platform.toUpperCase().indexOf('MAC') >= 0 : false;

  return (
    <Kbd>
      <KbdKey aria-label={isMac ? "Meta" : "Control"}>
        {isMac ? '⌘' : 'Ctrl'}
      </KbdKey>
      <KbdKey>K</KbdKey>
    </Kbd>
  );
};

export default SearchShortcut;
