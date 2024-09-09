'use client';

import {
  Bell,
  Bookmark,
  Home,
  List,
  Mail,
  MoreHorizontal,
  User,
  Users,
} from 'lucide-react';
import { SidebarDesktop } from './sidebar-desktop';
import { SidebarItems } from '../types';
import { SidebarButton } from './sidebar-button';
import { useMediaQuery } from 'usehooks-ts';
import { SidebarMobile } from './sidebar-mobile';

const sidebarItems: SidebarItems = {
  links: [
    { label: 'Home', href: '/', icon: Home },
    { label: 'Chats', href: '/item/notifications', icon: Bell },
    { label: 'PDFs Storage', href: '/item/messages', icon: Mail },
    {
      href: '/quizz/new',
      icon: List,
      label: 'Quizz',
    },
  ],
  extras: (
    <div className='flex flex-col gap-2'>
      <SidebarButton
        className='w-full justify-center text-white'
        variant='default'
      >
        Upgrade
      </SidebarButton>
    </div>
  ),
};

export function Sidebar() {
  const isDesktop = useMediaQuery('(min-width: 640px)', {
    initializeWithValue: false,
  });

  if (isDesktop) {
    return <SidebarDesktop sidebarItems={sidebarItems} />;
  }

  return <SidebarMobile sidebarItems={sidebarItems} />;
}
