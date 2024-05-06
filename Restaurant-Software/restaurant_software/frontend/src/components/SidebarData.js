import React from 'react';
import * as LuIcons from 'react-icons/lu';


export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <LuIcons.LuHome />,
    cName: 'nav-text',
    requiredPermissions: ["host", "server", "chef", "manager", "owner"]
  },
  {
    title: 'Menu',
    path: '/menu',
    icon: <LuIcons.LuMenuSquare />,
    cName: 'nav-text',
    requiredPermissions: ["host", "server", "chef", "manager", "owner"]
  },
  {
    title: 'Waitlist',
    path: '/waitlist',
    icon: <LuIcons.LuListChecks/>,
    cName: 'nav-text',
    requiredPermissions: ["host", "server", "manager", "owner"]
  },
  {
    title: 'View Layouts',
    path: '/layouts',
    icon: <LuIcons.LuLayoutPanelLeft />,
    cName: 'nav-text',
    requiredPermissions: ["host", "server", "manager", "owner"]
  },
  {
    title: 'Manage Layouts',
    path: '/manage-layouts',
    icon: <LuIcons.LuFileEdit />,
    cName: 'nav-text',
    requiredPermissions: ["manager", "owner", "host"]
  },
  {
    title: 'Manage Employees',
    path: '/manage-employees',
    icon: <LuIcons.LuUserCog  />,
    cName: 'nav-text',
    requiredPermissions: ["manager", "owner"]
  },
  {
    title: 'Settings',
    path: '/settings',
    icon: <LuIcons.LuSettings />,
    cName: 'nav-text',
    requiredPermissions: ["host", "server", "chef", "manager", "owner"]
  }
];