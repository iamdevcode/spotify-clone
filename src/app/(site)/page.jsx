'use client'
import images from '#/images'
import { Header } from '@/ui/Header'
import { ListItem } from '@/ui/Header/components/ListItem'

export default function Home() {
  return (
    <div className="w-full h-screen bg-neutral-900 rounded-lg">
      <div className="p-4 rounded-lg bg-gradient-to-b from-emerald-800 space-y-5">
        <Header />
        <h1 className="text-white text-3xl font-semibold">Welcome back</h1>
        <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-3">
          <ListItem name="Liked Songs ❤️" image={images.like} />
        </section>
      </div>
      <div className="p-4 mt-5 text-white">
        <h2 className="text-2xl font-semibold">Newest songs</h2>
        <span>List of Songs!</span>
      </div>
    </div>
  )
}
