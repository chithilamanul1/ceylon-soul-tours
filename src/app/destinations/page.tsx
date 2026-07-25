'use client'

import React, { useState } from 'react'
import { PageHeader } from '@/components/PageHeader'
import { DestinationCard } from '@/components/DestinationCard'
import { destinations } from '@/data/destinations'

const HERO = '/hero-1.png'

const regions = ['All', ...Array.from(new Set(destinations.map((d) => d.region)))]

export default function Destinations() {
    const [region, setRegion] = useState('All')
    const filtered = region === 'All' ? destinations : destinations.filter((d) => d.region === region)

    return (
        <div className="w-full bg-white">
            <PageHeader
                eyebrow="Where to go"
                title="Destinations"
                image={HERO}
                crumbs={[{ label: 'Home', to: '/' }, { label: 'Destinations' }]}
            />

            <section className="max-w-7xl mx-auto px-5 py-24">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="font-display text-4xl font-bold text-ink mb-4">Explore Sri Lanka</h2>
                    <p className="text-ink/70 text-lg leading-relaxed">
                        From ancient rock fortresses to leopard-filled jungles, explore the places that make Sri Lanka unforgettable. We have handpicked the best spots for your holiday.
                    </p>
                </div>

                <div className="mt-12 flex flex-wrap justify-center gap-3">
                    {regions.map((r) => (
                        <button
                            key={r}
                            onClick={() => setRegion(r)}
                            className={`rounded-full px-6 py-2.5 text-sm font-medium transition-colors ${region === r ? 'bg-primary text-white shadow-md' : 'bg-white border border-gray-200 text-ink hover:border-primary hover:text-primary'
                                }`}
                        >
                            {r}
                        </button>
                    ))}
                </div>

                <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {filtered.map((d, i) => (
                        <DestinationCard key={d.slug} d={d} index={i} />
                    ))}
                </div>
            </section>
        </div>
    )
}
