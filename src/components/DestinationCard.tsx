'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRightIcon, MapPinIcon } from 'lucide-react'
import type { Destination } from '../data/destinations'
import Image from 'next/image'

export function DestinationCard({ d, index = 0 }: { d: Destination; index?: number }) {
    return (
        <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            className="group relative rounded-xl overflow-hidden bg-white shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
        >
            <div className="relative h-64 overflow-hidden">
                <Image
                    src={d.image}
                    alt={d.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
            </div>
            <div className="p-6">
                <h3 className="text-ink font-display text-2xl font-semibold">{d.name}</h3>
                <p className="text-ink/70 text-sm mt-3 leading-relaxed">{d.blurb}</p>
                <div className="mt-5 pt-5 border-t border-gray-100 flex items-center justify-center">
                    <button className="text-xs font-semibold text-primary uppercase tracking-widest flex items-center gap-2 hover:text-primary/80 transition-colors">
                        Read More <ArrowRightIcon className="h-3 w-3" />
                    </button>
                </div>
            </div>
        </motion.article>
    )
}
