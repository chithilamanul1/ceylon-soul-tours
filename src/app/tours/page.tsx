'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { CheckIcon, ClockIcon, MapIcon, ArrowRightIcon } from 'lucide-react'
import { PageHeader } from '@/components/PageHeader'
import Image from 'next/image'

const HERO = '/hero-3.png'

interface Tour {
    name: string
    days: number
    image: string
    highlights: string[]
    places: string
    featured?: boolean
}

const tours: Tour[] = [
    {
        name: 'Cultural Triangle Explorer',
        days: 6,
        image: '/sigiriya.png',
        places: 'Kandy · Sigiriya · Dambulla · Polonnaruwa',
        highlights: ['Sigiriya Rock climb', 'Cave temples of Dambulla', 'Sacred Tooth Temple', 'Village cooking class'],
        featured: true,
    },
    {
        name: 'Hill Country Rail Journey',
        days: 5,
        image: '/ella.png',
        places: 'Nuwara Eliya · Ella · Nine Arch Bridge',
        highlights: ['Scenic mountain train', 'Tea estate tour', 'Little Adam’s Peak hike', 'Waterfall picnic'],
    },
    {
        name: 'Wild South Safari & Beach',
        days: 7,
        image: '/yala.png',
        places: 'Yala · Mirissa · Galle Fort',
        highlights: ['Leopard safari in Yala', 'Whale watching cruise', 'Galle Fort at sunset', 'Beach relaxation'],
    },
    {
        name: 'Grand Sri Lanka Odyssey',
        days: 12,
        image: '/galle.png',
        places: 'Colombo to the coast — the complete island',
        highlights: ['All cultural highlights', 'Hill country & tea', 'Two wildlife safaris', 'Southern beaches & Ayurveda'],
    },
]

export default function Tours() {
    return (
        <div className="w-full bg-white">
            <PageHeader
                eyebrow="Curated experiences"
                title="Tour Packages"
                image={HERO}
                crumbs={[{ label: 'Home', to: '/' }, { label: 'Tours' }]}
            />

            <section className="max-w-7xl mx-auto px-5 py-12 md:py-24">
                <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
                    <h2 className="font-display text-3xl md:text-4xl font-bold text-ink mb-3 md:mb-4">Our Best Tour Packages</h2>
                    <p className="text-ink/70 text-base md:text-lg leading-relaxed">
                        Carefully planned trips to show you the best of Sri Lanka. Or, let us build a special trip just for your dreams.
                    </p>
                </div>

                <div className="grid gap-8 md:gap-10 lg:grid-cols-2">
                    {tours.map((t, i) => (
                        <motion.article
                            key={t.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-60px' }}
                            transition={{ duration: 0.5, delay: (i % 2) * 0.1 }}
                            className={`rounded-2xl overflow-hidden bg-white border flex flex-col ${t.featured ? 'border-primary shadow-lg' : 'border-gray-200 shadow-sm'
                                }`}
                        >
                            <div className="relative h-56 md:h-64">
                                <Image src={t.image} alt={t.name} fill className="object-cover" />
                                {t.featured && (
                                    <span className="absolute top-4 left-4 rounded-full bg-primary text-white text-[10px] md:text-xs font-semibold px-3 py-1 md:px-4 md:py-1.5 shadow-sm">
                                        Most Popular
                                    </span>
                                )}
                                <div className="absolute bottom-4 right-4 flex items-center gap-1.5 rounded-full bg-white/90 backdrop-blur text-ink text-[10px] md:text-xs font-semibold px-3 py-1.5 md:px-4 md:py-2 shadow-sm">
                                    <ClockIcon className="h-3 w-3 md:h-4 md:w-4 text-primary" /> {t.days} days
                                </div>
                            </div>
                            <div className="p-6 md:p-8 flex flex-col flex-grow">
                                <h3 className="font-display text-2xl md:text-3xl font-bold text-ink">{t.name}</h3>
                                <div className="flex items-center gap-2 text-ink/60 text-xs md:text-sm mt-2 md:mt-3">
                                    <MapIcon className="h-3 w-3 md:h-4 md:w-4 text-primary" /> {t.places}
                                </div>
                                <ul className="mt-5 md:mt-6 grid gap-2 md:gap-3 sm:grid-cols-2 flex-grow">
                                    {t.highlights.map((h) => (
                                        <li key={h} className="flex items-start gap-2 text-xs md:text-sm text-ink/80">
                                            <CheckIcon className="h-3 w-3 md:h-4 md:w-4 text-primary mt-0.5 shrink-0" /> {h}
                                        </li>
                                    ))}
                                </ul>
                                <div className="flex items-center justify-end mt-6 md:mt-8 pt-5 md:pt-6 border-t border-gray-100">
                                    <Link
                                        href="/contact"
                                        className="inline-flex items-center gap-2 rounded-full bg-primary text-white font-semibold text-xs md:text-sm px-5 py-2.5 md:px-6 md:py-3 hover:bg-primary/90 transition-colors shadow-sm"
                                    >
                                        Inquire now <ArrowRightIcon className="h-3 w-3 md:h-4 md:w-4" />
                                    </Link>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>

                <div className="mt-16 md:mt-24 rounded-3xl bg-gray-50 border border-gray-100 p-8 md:p-16 text-center">
                    <h2 className="font-display text-3xl md:text-4xl font-bold text-ink">Don't see your perfect trip?</h2>
                    <p className="mt-3 md:mt-4 text-ink/70 text-base md:text-lg max-w-2xl mx-auto">
                        Every traveller is different. Tell us what you want to see and do, and we will design a special trip just for you.
                    </p>
                    <Link
                        href="/contact"
                        className="mt-6 md:mt-8 inline-flex items-center gap-2 rounded-full bg-primary text-white font-semibold px-6 py-3.5 md:px-8 md:py-4 hover:bg-primary/90 transition-colors shadow-lg shadow-primary/30 text-sm md:text-base"
                    >
                        Design my custom tour <ArrowRightIcon className="h-4 w-4" />
                    </Link>
                </div>
            </section>
        </div>
    )
}
