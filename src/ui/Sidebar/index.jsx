'use client'
import { SvgIconHome, SvgIconSearch } from '#/svg/icons'
import { usePathname } from 'next/navigation'
import { useMemo } from 'react'
import { Library } from './components/Library'
import { SidebarItem } from './components/SidebarItem'

export const Sidebar = () => {
  const pathname = usePathname()

  const routes = useMemo(
    () => [
      {
        label: 'Home',
        active: pathname !== '/search',
        href: '/',
        icon: <SvgIconHome className="stroke-neutral-400" />
      },
      {
        label: 'Search',
        active: pathname === '/search',
        href: '/search',
        icon: <SvgIconSearch className="stroke-neutral-400" />
      }
    ],
    [pathname]
  )

  return (
    <aside className="hidden md:flex w-[300px] flex-col gap-y-2 pr-2">
      <nav className="flex flex-col gap-y-4 p-4 bg-neutral-900 rounded-lg">
        {routes.map(item => (
          <SidebarItem key={item.href} {...item} />
        ))}
      </nav>
      <Library />
    </aside>
  )
}
