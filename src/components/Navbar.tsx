'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { MenuIcon, XIcon, PhoneIcon } from 'lucide-react'

const links = [
    { label: 'Home', href: '/' },
    { label: 'Destinations', href: '/destinations' },
    { label: 'Tours', href: '/tours' },
    { label: 'About Us', href: '/about' },
]

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <header
            className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-white py-5'
                }`}
        >
            <div className="max-w-7xl mx-auto px-5 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2 md:gap-3 z-50 relative">
                    <Image src="/logo.png" alt="Ceylon Soul Travels" width={48} height={48} className="h-10 w-10 md:h-12 md:w-12 object-contain" />
                    <div className="leading-none">
                        <div className="font-display text-lg md:text-xl text-ink">Ceylon Soul</div>
                        <div className="text-[8px] md:text-[10px] tracking-[0.35em] text-primary uppercase">Travels</div>
                    </div>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    <ul className="flex items-center gap-8">
                        {links.map((l) => (
                            <li key={l.label}>
                                <Link href={l.href} className="text-sm font-medium text-ink/80 hover:text-primary transition-colors">
                                    {l.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <div className="h-6 w-px bg-gray-200" />
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 rounded-full bg-primary text-white font-semibold text-sm px-6 py-2.5 hover:bg-primary/90 transition-colors"
                    >
                        <PhoneIcon className="h-4 w-4" /> Plan My Trip
                    </Link>
                </nav>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden relative z-50 p-2 -mr-2 text-ink"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    {isOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
                </button>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-xl md:hidden"
                    >
                        <ul className="flex flex-col px-5 py-6 gap-4">
                            {links.map((l) => (
                                <li key={l.label}>
                                    <Link
                                        href={l.href}
                                        onClick={() => setIsOpen(false)}
                                        className="block text-lg font-medium text-ink hover:text-primary transition-colors"
                                    >
                                        {l.label}
                                    </Link>
                                </li>
                            ))}
                            <li className="pt-4 mt-2 border-t border-gray-100">
                                <Link
                                    href="/contact"
                                    onClick={() => setIsOpen(false)}
                                    className="inline-flex items-center justify-center w-full gap-2 rounded-full bg-primary text-white font-semibold px-6 py-3.5 hover:bg-primary/90 transition-colors"
                                >
                                    <PhoneIcon className="h-5 w-5" /> Plan My Trip
                                </Link>
                            </li>
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    )
}
