import { Inter } from 'next/font/google'
import Sidebar from '../components/Sidebar'
import { SidebarProvider } from '../contexts/SidebarContext'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Your Name | Full Stack Developer',
  description: 'Full Stack Developer with expertise in modern web technologies',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-[#0a051e]`}>
        <SidebarProvider>
          <div className="flex min-h-screen">
            <main className="flex-1 transition-all duration-300 ease-in-out">
              {children}
            </main>
            <Sidebar />
          </div>
        </SidebarProvider>
      </body>
    </html>
  )
}

