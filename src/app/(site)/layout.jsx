import '#/styles/globals.css'
import { AppProvider } from '@/context/app'
import { Sidebar } from '@/ui/Sidebar'
import clsx from 'clsx'
import { Figtree } from 'next/font/google'
import { Toaster } from 'sonner'

const font = Figtree({ subsets: ['latin'] })

export const metadata = {
  title: 'Spotify Clone 🚀',
  description: 'Listen to music!'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={clsx('bg-black', font.className)}>
        <AppProvider>
          <main className="flex p-2 h-screen">
            <Sidebar />
            {children}
          </main>
          <Toaster richColors visibleToasts={1} />
        </AppProvider>
      </body>
    </html>
  )
}
