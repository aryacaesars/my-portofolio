'use client'

import { Home, User, Briefcase, Code, Wrench, Mail, ChevronLeft, Linkedin, Github, Instagram, Phone } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { useSidebar } from '../contexts/SidebarContext'

export default function Sidebar() {
  const pathname = usePathname()
  const { isOpen, toggleSidebar } = useSidebar()

  const navigation = [
    { name: 'Home', href: '#home', icon: Home },
    { name: 'About', href: '#about', icon: User },
    { name: 'Projects', href: '#projects', icon: Briefcase },
    { name: 'Journey', href: '#journey', icon: Code },
    { name: 'Tools', href: '#tools', icon: Wrench },
    { name: 'Contact', href: '#contact', icon: Mail },
  ]

  const handleClick = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <aside
    className={`
      fixed top-0 right-0 z-40 h-screen
      bg-[#0F0F1A] border-l border-white/5
      transition-all duration-300 ease-in-out
      ${isOpen ? 'w-48' : 'w-[72px]'}
      `}
      >
      <div className="flex flex-col h-full">
      {/* Profile Section */}
      <div className="p-4 mb-4 flex justify-center">
      <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold">
      AC
      </div>
      </div>

      {/* Toggle Button */}
      <button
      onClick={toggleSidebar}
      className="absolute -left-3 top-20 w-6 h-6 bg-indigo-600 rounded-full flex items-center justify-center text-white hover:bg-indigo-700 transition-colors"
      >
      <ChevronLeft className={`w-4 h-4 transition-all duration-300 ease-in-out ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {/* Navigation */}
      <nav className="flex-1">
      <ul className="space-y-3 px-3">
      {navigation.map((item) => {
        const Icon = item.icon
        return (
          <li key={item.name}>
          <button
          onClick={() => handleClick(item.href)}
          className={`
            flex items-center gap-3 p-2 rounded-lg transition-colors w-full
            ${!isOpen && 'justify-center'}
            ${pathname === item.href
              ? 'bg-white/10 text-white'
              : 'text-gray-400 hover:bg-white/5 hover:text-white'
            }
            `}
            title={item.name}
            >
            <Icon className="w-5 h-5 min-w-[20px]" />
            {isOpen && (
              <span className="whitespace-nowrap">{item.name}</span>
            )}
            </button>
            </li>
        )
      })}
      </ul>
      </nav>
        {/* Social Media Icons */}
      <div className={`mt-auto p-4 flex justify-center ${isOpen ? 'space-x-4' : 'space-y-4 flex-col items-center'}`}>
      <a href="https://www.linkedin.com/in/arya-caesars-295284302/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
      <Linkedin className="w-5 h-5" />
      </a>
      <a href="https://github.com/aryacaesars" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
      <Github className="w-5 h-5" />
      </a>
      <a href="https://instagram.com/aryaacaesar" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
      <Instagram className="w-5 h-5" />
      </a>
      <a href="https://wa.me/6289524396489" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
      <Phone className="w-5 h-5" />
      </a>
      </div>
      </div>
      </aside>
  )
}
