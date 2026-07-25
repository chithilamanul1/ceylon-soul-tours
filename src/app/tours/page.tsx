'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { CheckIcon, ClockIcon, MapIcon, ArrowRightIcon } from 'lucide-react'
import { PageHeader } from '@/components/PageHeader'
import Image from 'next/image'

const HERO = 'https://cdn.magicpatterns.com/patterns/generated-images/2c4fb8e5-74c8-44ec-b346-d516c0b64af9.jpg'

interface Tour {
    name: string
    days: number
    price: number
    image: string
    highlights: string[]
    places: string
    featured?: boolean
}

const tours: Tour[] = [
    {
        name: 'Cultural Triangle Explorer',
        days: 6,
        price: 690,
        image: 'https://cdn.magicpatterns.com/patterns/generated-images/e8904b1c-45d2-4b30-92cb-bee225db894c.jpg',
        places: 'Kandy · Sigiriya · Dambulla · Polonnaruwa',
        highlights: ['Sigiriya Rock climb', 'Cave temples of Dambulla', 'Sacred Tooth Temple', 'Village cooking class'],
        featured: true,
    },
    {
        name: 'Hill Country Rail Journey',
        days: 5,
        price: 580,
        image: 'https://cdn.magicpatterns.com/patterns/generated-images/d2c1bb89-c22c-482c-8698-46b9012ea473.jpg',
        places: 'Nuwara Eliya · Ella · Nine Arch Bridge',
        highlights: ['Scenic mountain train', 'Tea estate tour', 'Little Adam’s Peak hike', 'Waterfall picnic'],
    },
    {
        name: 'Wild South Safari & Beach',
        days: 7,
        price: 820,
        image: 'https://cdn.magicpatterns.com/patterns/generated-images/2c4fb8e5-74c8-44ec-b346-d516c0b64af9.jpg',
        places: 'Yala · Mirissa · Galle Fort',
        highlights: ['Leopard safari in Yala', 'Whale watching cruise', 'Galle Fort at sunset', 'Beach relaxation'],
    },
    {
        name: 'Grand Sri Lanka Odyssey',
        days: 12,
        price: 1490,
        image: 'https://cdn.magicpatterns.com/patterns/generated-images/ca02a5b6-bc17-44a4-9758-c42ec71fd9ed.jpg',
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

            <section className="max-w-7xl mx-auto px-5 py-24">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="font-display text-4xl font-bold text-ink mb-4">Our Best Tour Packages</h2>
                    <p className="text-ink/70 text-lg leading-relaxed">
                        Carefully planned trips to show you the best of Sri Lanka. Or, let us build a special trip just for your dreams.
                    </p>
                </div>

                <div className="grid gap-10 lg:grid-cols-2">
                    {tours.map((t, i) => (
                        <motion.article
                            key={t.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-60px' }}
                            transition={{ duration: 0.5, delay: (i % 2) * 0.1 }}
                            className={`rounded-2xl overflow-hidden bg-white border ${t.featured ? 'border-primary shadow-lg' : 'border-gray-200 shadow-sm'
                                }`}
                        >
                            <div className="relative h-64">
                                <Image src={t.image} alt={t.name} fill className="object-cover" />
                                {t.featured && (
                                    <span className="absolute top-4 left-4 rounded-full bg-primary text-white text-xs font-semibold px-4 py-1.5 shadow-sm">
                                        Most Popular
                                    </span>
                                )}
                                <div className="absolute bottom-4 right-4 flex items-center gap-1.5 rounded-full bg-white/90 backdrop-blur text-ink text-xs font-semibold px-4 py-2 shadow-sm">
                                    <ClockIcon className="h-4 w-4 text-primary" /> {t.days} days
                                </div>
                            </div>
                            <div className="p-8">
                                <h3 className="font-display text-3xl font-bold text-ink">{t.name}</h3>
                                <div className="flex items-center gap-2 text-ink/60 text-sm mt-3">
                                    <MapIcon className="h-4 w-4 text-primary" /> {t.places}
                                </div>
                                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                                    {t.highlights.map((h) => (
                                        <li key={h} className="flex items-start gap-2 text-sm text-ink/80">
                                            <CheckIcon className="h-4 w-4 text-primary mt-0.5 shrink-0" /> {h}
                                        </li>
                                    ))}
                                </ul>
                                <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-100">
                                    <div className="text-ink/60 text-sm">
                                        from <span className="font-display text-3xl font-bold text-ink">${t.price}</span>
                                        <span className="text-xs uppercase tracking-wider"> / person</span>
                                    </div>
                                    <Link
                                        href="/contact"
                                        className="inline-flex items-center gap-2 rounded-full bg-primary text-white font-semibold text-sm px-6 py-3 hover:bg-primary/90 transition-colors shadow-sm"
                                    >
                                        Book now <ArrowRightIcon className="h-4 w-4" />
                                    </Link>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>

                <div className="mt-24 rounded-3xl bg-gray-50 border border-gray-100 p-12 md:p-16 text-center">
                    <h2 className="font-display text-4xl font-bold text-ink">Don't see your perfect trip?</h2>
                    <p className="mt-4 text-ink/70 text-lg max-w-2xl mx-auto">
                        Every traveller is different. Tell us what you want to see and do, and we will design a special trip just for you.
                    </p>
                    <Link
                        href="/contact"
                        className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary text-white font-semibold px-8 py-4 hover:bg-primary/90 transition-colors shadow-lg shadow-primary/30"
                    >
                        Design my custom tour <ArrowRightIcon className="h-4 w-4" />
                    </Link>
                </div>
            </section>
        </div>
    )
}
