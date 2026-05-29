"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Folder, Map, Layers, PlusSquare, List, FileText, Shield, Settings, HelpCircle, Users, Book, Lock, LogOut, User, MessageSquare } from 'lucide-react';

import styles from './Sidebar.module.css';
import React from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useSidebar, COLLAPSED_WIDTH, EXPANDED_WIDTH } from '../context/SidebarContext';

const navGroups = [
  {
    label: 'Core',
    items: [
      { label: 'Landing Page', href: '/', icon: <Home size={20} /> },
      { label: 'Chat', href: '/dashboard', icon: <MessageSquare size={20} /> },
      { label: 'Project Vault', href: '/vault', icon: <Folder size={20} /> },
      { label: 'Roadmap', href: '/roadmap', icon: <Map size={20} /> },
      { label: 'Arquitectando', href: '/arquitectando', icon: <Layers size={20} /> },
    ],
  },
  {
    label: 'Proyectos',
    items: [
      { label: 'Nuevo Proyecto', href: '/nuevo-proyecto', icon: <PlusSquare size={20} /> },
      { label: 'Resumen', href: '/resumen', icon: <List size={20} /> },
      { label: 'Resumen Detallado', href: '/resumen-detallado', icon: <FileText size={20} /> },
    ],
  },
  {
    label: 'Sistema',
    items: [
      { label: 'Admin/God Mode', href: '/admin', icon: <Shield size={20} /> },
      { label: 'Settings', href: '/settings', icon: <Settings size={20} /> },
      { label: 'Ayuda', href: '/ayuda', icon: <HelpCircle size={20} /> },
    ],
  },
  {
    label: 'Otros/Legal',
    items: [
      { label: 'Nosotros/Tesis', href: '/nosotros', icon: <Users size={20} /> },
      { label: 'Legal/Privacidad', href: '/legal', icon: <Book size={20} /> },
      { label: 'Registro', href: '/registro', icon: <User size={20} /> },
      { label: 'Recovery', href: '/recovery', icon: <Lock size={20} /> },
      { label: 'Onboarding', href: '/onboarding', icon: <LogOut size={20} /> },
    ],
  },
];



const Sidebar = () => {
  const pathname = usePathname();
  const { isCollapsed, setIsCollapsed } = useSidebar();

  // Hide the sidebar on landing, login and registro routes
  const hideOn = ['/', '/login', '/registro'];
  const shouldHide = pathname ? hideOn.some((p) => pathname === p || pathname.startsWith(p + '/')) : false;
  if (shouldHide) return null;

  return (
    <motion.aside
      className={`${styles.sidebar} ${isCollapsed ? styles.collapsed : ''}`}
      animate={{ width: isCollapsed ? COLLAPSED_WIDTH : EXPANDED_WIDTH }}
      initial={false}
      transition={{ type: 'spring', stiffness: 260, damping: 30 }}
      style={{ width: isCollapsed ? COLLAPSED_WIDTH : EXPANDED_WIDTH }}
    >
      <div className={styles.logoSection} style={{ justifyContent: isCollapsed ? 'center' : 'flex-start', paddingLeft: isCollapsed ? 0 : 24 }}>
        <Link href="/" className={styles.logo} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <img
            src={isCollapsed ? "/logo-icon.svg" : "/logo.svg"}
            alt="SeedPath Logo"
            height={40}
            style={{ width: isCollapsed ? 40 : 120, transition: 'width 0.2s' }}
          />
          {!isCollapsed && (
            <span className={styles.logoText} style={{ fontWeight: 700, fontSize: 20, color: '#fff', transition: 'opacity 0.2s' }}>SeedPath</span>
          )}
        </Link>
        <button
          className={styles.collapseBtn}
          aria-label={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
          onClick={() => setIsCollapsed((v) => !v)}
          style={{ marginLeft: isCollapsed ? 0 : 12 }}
        >
          {isCollapsed ? <ChevronRight size={22} /> : <ChevronLeft size={22} />}
        </button>
      </div>
      <nav className={styles.navGroups}>
        {navGroups.map((group) => (
          <div key={group.label} className={styles.group}>
            {!isCollapsed && <div className={styles.groupLabel}>{group.label}</div>}
            <ul className={styles.list}>
              {group.items.map((item) => {
                const isActive = item.href === '/' ? pathname === '/' : pathname?.startsWith(item.href || '');
                const linkClass = isActive ? `${styles.navItem} ${styles.active}` : styles.navItem;
                const linkStyle: React.CSSProperties = {
                  justifyContent: isCollapsed ? 'center' : 'flex-start',
                  paddingLeft: isCollapsed ? 0 : 24,
                  paddingRight: isCollapsed ? 0 : 24,
                  position: 'relative',
                };
                return (
                  <li key={item.href}>
                    <Link href={item.href} className={linkClass} style={linkStyle}>
                      {item.icon}
                      {!isCollapsed && <span>{item.label}</span>}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>
      {/* Profile section removed to avoid showing a logged-in hint on public pages */}
    </motion.aside>
  );
};

export default Sidebar;
