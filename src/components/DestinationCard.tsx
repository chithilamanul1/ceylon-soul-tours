'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { MapPinIcon, ArrowRightIcon } from 'lucide-react'
import type { Destination } from '@/data/destinations'

export function DestinationCard({ d, index }: { d: Destination; index: number }) {
    return (
        <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
            className="group rounded-2xl overflow-hidden bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col h-full"
        >
            <div className="relative h-56 overflow-hidden">
                <Image
                    src={d.image}
                    alt={d.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                    <span className="rounded-full bg-white/90 backdrop-blur text-ink text-xs font-semibold px-3 py-1.5 shadow-sm">
                        {d.region}
                    </span>
                </div>
            </div>
            <div className="p-6 flex flex-col flex-grow">
                <h3 className="font-display text-2xl font-bold text-ink group-hover:text-primary transition-colors">
                    {d.name}
                </h3>
                <p className="mt-3 text-ink/70 text-sm leading-relaxed flex-grow">{d.blurb}</p>
                <div className="mt-6 flex items-center gap-2 flex-wrap">
                    {d.tags.map((t) => (
                        <span key={t} className="text-xs font-medium text-ink/50 bg-gray-50 px-2.5 py-1 rounded-md">
                            {t}
                        </span>
                    ))}
                </div>
                <div className="mt-6 pt-5 border-t border-gray-50">
                    <Link
                        href={`/destinations`}
                        className="inline-flex items-center gap-2 text-sm font-semibold text-primary uppercase tracking-widest hover:text-primary/80 transition-colors"
                    >
                        Explore <ArrowRightIcon className="h-4 w-4" />
                    </Link>
                </div>
            </div>
        </motion.article>
    )
}
