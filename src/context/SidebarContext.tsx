"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export const COLLAPSED_WIDTH = 80;
export const EXPANDED_WIDTH = 260;

type SidebarContextType = {
  isCollapsed: boolean;
  setIsCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
};

const SidebarContext = createContext<SidebarContextType>({
  isCollapsed: false,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setIsCollapsed: () => {},
});

export const SidebarProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const hideOn = ['/', '/login', '/registro'];
    const shouldHide = pathname ? hideOn.some((p) => pathname === p || pathname.startsWith(p + '/')) : false;

    if (shouldHide) {
      document.body.style.setProperty('--sidebar-width', `0px`);
    } else {
      document.body.style.setProperty('--sidebar-width', `${isCollapsed ? COLLAPSED_WIDTH : EXPANDED_WIDTH}px`);
    }

    return () => {
      if (typeof window !== 'undefined') {
        document.body.style.removeProperty('--sidebar-width');
      }
    };
  }, [isCollapsed, pathname]);

  return <SidebarContext.Provider value={{ isCollapsed, setIsCollapsed }}>{children}</SidebarContext.Provider>;
};

export const useSidebar = () => useContext(SidebarContext);
