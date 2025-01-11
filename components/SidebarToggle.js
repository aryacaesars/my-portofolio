'use client'

import { Menu, X } from 'lucide-react'
import { useSidebar } from '../contexts/SidebarContext'

export default function SidebarToggle() {
  const { isOpen, toggleSidebar } = useSidebar()

  return (
    <button
      onClick={toggleSidebar}
      className={`
        fixed top-4 z-50 p-2 bg-blue-600 text-white rounded-md 
        hover:bg-blue-700 transition-all duration-300 ease-in-out
        ${isOpen ? 'left-[268px]' : 'left-4'}
      `}
      aria-label="Toggle Sidebar"
    >
      {isOpen ? <X size={24} /> : <Menu size={24} />}
    </button>
  )
}

