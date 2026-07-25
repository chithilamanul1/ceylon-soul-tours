'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { MenuIcon, XIcon, PhoneIcon } from 'lucide-react'
import Image from 'next/image'

const links = [
    { to: '/', label: 'Home' },
    { to: '/destinations', label: 'Destinations' },
    { to: '/tours', label: 'Tours' },
    { to: '/about', label: 'About Us' },
    { to: '/contact', label: 'Contact' },
]

export function Navbar() {
    const [open, setOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const pathname = usePathname()

    useEffect(() => setOpen(false), [pathname])

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20)
        onScroll()
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    const isHome = pathname === '/'
    const solid = scrolled || !isHome

    return (
        <header
            className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${solid ? 'bg-white/95 backdrop-blur border-b border-gray-200 py-3 shadow-sm' : 'bg-transparent py-5'
                }`}
        >
            <nav className="max-w-7xl mx-auto px-5 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-3" aria-label="Ceylon Soul Travels home">
                    <Image src="/logo.png" alt="Ceylon Soul Travels" width={48} height={48} className="h-12 w-12 object-contain" />
                    <span className="hidden sm:flex flex-col leading-none">
                        <span className={`font-display text-lg ${solid ? 'text-ink' : 'text-white'}`}>Ceylon Soul</span>
                        <span className={`text-[10px] tracking-[0.35em] uppercase ${solid ? 'text-primary' : 'text-primary'}`}>Travels</span>
                    </span>
                </Link>

                <ul className="hidden lg:flex items-center gap-1">
                    {links.map((l) => {
                        const isActive = pathname === l.to
                        return (
                            <li key={l.to}>
                                <Link
                                    href={l.to}
                                    className={`relative px-4 py-2 text-sm font-medium transition-colors ${isActive ? 'text-primary' : (solid ? 'text-ink/80 hover:text-ink' : 'text-white/80 hover:text-white')
                                        }`}
                                >
                                    {l.label}
                                    {isActive && (
                                        <motion.span
                                            layoutId="nav-underline"
                                            className="absolute left-4 right-4 -bottom-0.5 h-0.5 bg-primary rounded-full"
                                        />
                                    )}
                                </Link>
                            </li>
                        )
                    })}
                </ul>

                <div className="flex items-center gap-3">
                    <Link
                        href="/contact"
                        className="hidden md:inline-flex items-center gap-2 rounded-full bg-primary hover:bg-primary/90 text-white font-semibold text-sm px-5 py-2.5 transition-colors"
                    >
                        <PhoneIcon className="h-4 w-4" />
                        Plan My Trip
                    </Link>
                    <button
                        className={`lg:hidden p-1 ${solid ? 'text-ink' : 'text-white'}`}
                        onClick={() => setOpen((o) => !o)}
                        aria-label={open ? 'Close menu' : 'Open menu'}
                    >
                        {open ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
                    </button>
                </div>
            </nav>

            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden overflow-hidden bg-white border-t border-gray-200"
                    >
                        <ul className="px-5 py-4 space-y-1">
                            {links.map((l) => {
                                const isActive = pathname === l.to
                                return (
                                    <li key={l.to}>
                                        <Link
                                            href={l.to}
                                            className={`block rounded-lg px-4 py-3 text-base font-medium ${isActive ? 'bg-primary/10 text-primary' : 'text-ink/80'
                                                }`}
                                        >
                                            {l.label}
                                        </Link>
                                    </li>
                                )
                            })}
                            <li>
                                <Link
                                    href="/contact"
                                    className="mt-2 flex items-center justify-center gap-2 rounded-full bg-primary text-white font-semibold px-5 py-3"
                                >
                                    <PhoneIcon className="h-4 w-4" /> Plan My Trip
                                </Link>
                            </li>
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    )
}
