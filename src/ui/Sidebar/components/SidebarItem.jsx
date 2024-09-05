import clsx from 'clsx'
import Link from 'next/link'

export const SidebarItem = ({ label, active, href, icon }) => (
  <Link
    href={href}
    className={clsx(
      'w-full flex items-center gap-x-4 font-medium hover:cursor-pointer hover:text-white text-neutral-400',
      active && 'text-white'
    )}
  >
    {icon}
    {label}
  </Link>
)
