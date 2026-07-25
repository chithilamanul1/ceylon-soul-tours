'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { LeafIcon, HeartIcon, GlobeIcon, AwardIcon, ArrowRightIcon } from 'lucide-react'
import { PageHeader } from '@/components/PageHeader'
import Image from 'next/image'

const HERO = 'https://cdn.magicpatterns.com/patterns/generated-images/e8904b1c-45d2-4b30-92cb-bee225db894c.jpg'
const STORY_IMG = 'https://cdn.magicpatterns.com/patterns/generated-images/ca02a5b6-bc17-44a4-9758-c42ec71fd9ed.jpg'

const values = [
    { icon: HeartIcon, title: 'Soulful', text: 'We craft trips that move you, not just tick boxes on a list.' },
    { icon: LeafIcon, title: 'Sustainable', text: 'Protecting the wild and helping local communities.' },
    { icon: GlobeIcon, title: 'Authentic', text: 'Real experiences with the people who call Ceylon home.' },
    { icon: AwardIcon, title: 'Trusted', text: '15 years and thousands of happy travelers.' },
]

const team = [
    { name: 'Nuwan Perera', role: 'Founder & Lead Guide' },
    { name: 'Ishara Fernando', role: 'Travel Designer' },
    { name: 'Kavindu Silva', role: 'Wildlife Specialist' },
]

export default function About() {
    return (
        <div className="w-full bg-white">
            <PageHeader
                eyebrow="Who we are"
                title="About Us"
                image={HERO}
                crumbs={[{ label: 'Home', to: '/' }, { label: 'About Us' }]}
            />

            <section className="max-w-7xl mx-auto px-5 py-24 grid gap-16 lg:grid-cols-2 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="text-primary text-xs font-semibold tracking-[0.3em] uppercase">Our story</span>
                    <h2 className="font-display text-4xl md:text-5xl font-bold text-ink mt-4 leading-tight">
                        Born from a love of our island's soul
                    </h2>
                    <p className="mt-6 text-ink/70 text-lg leading-relaxed">
                        Ceylon Soul Travels started with a simple idea: travel should touch the heart. We are local guides who grew up exploring every part of Sri Lanka. We want to share our island with you, showing you the real culture, wildlife, and beautiful places.
                    </p>
                    <p className="mt-4 text-ink/70 text-lg leading-relaxed">
                        Today, we plan very personal trips for people from all over the world. We always care about nature, local people, and giving you a warm Sri Lankan welcome.
                    </p>
                    <Link
                        href="/tours"
                        className="mt-10 inline-flex items-center gap-2 rounded-full bg-primary text-white font-semibold px-8 py-4 hover:bg-primary/90 transition-colors shadow-lg shadow-primary/30"
                    >
                        Explore our tours <ArrowRightIcon className="h-4 w-4" />
                    </Link>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative"
                >
                    <div className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-xl">
                        <Image src={STORY_IMG} alt="Sri Lanka coastline" fill className="object-cover" />
                    </div>
                    <div className="absolute -bottom-8 -left-8 bg-white border border-gray-100 shadow-xl rounded-2xl p-8 hidden sm:block">
                        <div className="font-display text-5xl font-bold text-primary">15+</div>
                        <div className="text-sm text-ink/60 mt-2 font-medium uppercase tracking-wider">years crafting journeys</div>
                    </div>
                </motion.div>
            </section>

            <section className="bg-gray-50 py-24">
                <div className="max-w-7xl mx-auto px-5">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <span className="text-primary text-xs font-semibold tracking-[0.3em] uppercase">What we stand for</span>
                        <h2 className="font-display text-4xl md:text-5xl font-bold text-ink mt-4">Our values</h2>
                    </div>
                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                        {values.map((v, i) => (
                            <motion.div
                                key={v.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="rounded-2xl bg-white border border-gray-100 p-8 text-center shadow-sm hover:shadow-md transition-shadow"
                            >
                                <div className="h-16 w-16 mx-auto flex items-center justify-center rounded-full bg-primary/10 text-primary mb-6">
                                    <v.icon className="h-8 w-8" />
                                </div>
                                <h3 className="font-display text-2xl font-semibold text-ink">{v.title}</h3>
                                <p className="text-ink/70 mt-3 text-sm leading-relaxed">{v.text}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="max-w-7xl mx-auto px-5 py-24">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <span className="text-primary text-xs font-semibold tracking-[0.3em] uppercase">The people</span>
                    <h2 className="font-display text-4xl md:text-5xl font-bold text-ink mt-4">Meet your local experts</h2>
                </div>
                <div className="grid gap-8 sm:grid-cols-3">
                    {team.map((m, i) => (
                        <motion.div
                            key={m.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="rounded-2xl bg-white border border-gray-100 p-10 text-center shadow-sm hover:shadow-md transition-shadow"
                        >
                            <div className="h-24 w-24 mx-auto rounded-full bg-primary/10 flex items-center justify-center font-display text-4xl font-bold text-primary">
                                {m.name.charAt(0)}
                            </div>
                            <h3 className="font-display text-2xl font-semibold text-ink mt-6">{m.name}</h3>
                            <p className="text-primary text-sm font-medium mt-2 uppercase tracking-wider">{m.role}</p>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    )
}
