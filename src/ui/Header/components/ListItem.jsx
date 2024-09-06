'use client'
import { SvgIconPlay } from '#/svg/icons'
import Image from 'next/image'

export const ListItem = ({ name, image }) => (
  <div className="group flex items-center rounded-md gap-x-4 bg-neutral-100/10 hover:bg-neutral-100/20 hover:cursor-pointer pr-4 transition-all duration-300">
    <Image
      quality="100"
      priority
      src={image}
      width={64}
      height={64}
      alt="Like Image"
      className="rounded-l-md"
    />
    <p className="truncate font-medium text-white">{name}</p>
    <span className="inline-block ml-auto opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 bg-green-500 rounded-full p-[7px] shadow-md">
      <SvgIconPlay />
    </span>
  </div>
)
