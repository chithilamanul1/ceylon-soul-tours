'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ChevronRightIcon } from 'lucide-react'
import Image from 'next/image'

interface Crumb {
    label: string
    to?: string
}

interface PageHeaderProps {
    eyebrow: string
    title: string
    image: string
    crumbs: Crumb[]
}

export function PageHeader({ eyebrow, title, image, crumbs }: PageHeaderProps) {
    return (
        <section className="relative h-[42vh] min-h-[320px] flex items-end">
            <Image src={image} alt="" fill className="absolute inset-0 object-cover" priority />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/40 to-transparent" />
            <div className="relative max-w-7xl mx-auto px-5 pb-12 w-full">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="text-primary text-xs font-semibold tracking-[0.3em] uppercase">{eyebrow}</span>
                    <h1 className="text-white font-display text-4xl md:text-6xl font-bold mt-3">{title}</h1>
                    <nav className="flex items-center gap-2 mt-5 text-sm text-white/80">
                        {crumbs.map((c, i) => (
                            <span key={c.label} className="flex items-center gap-2">
                                {c.to ? (
                                    <Link href={c.to} className="hover:text-primary transition-colors">
                                        {c.label}
                                    </Link>
                                ) : (
                                    <span className="text-primary">{c.label}</span>
                                )}
                                {i < crumbs.length - 1 && <ChevronRightIcon className="h-4 w-4" />}
                            </span>
                        ))}
                    </nav>
                </motion.div>
            </div>
        </section>
    )
}
