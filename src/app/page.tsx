'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  ArrowRightIcon,
  MapPinIcon,
  CalendarIcon,
  UsersIcon,
  SearchIcon,
  ShieldCheckIcon,
  HeartHandshakeIcon,
  CompassIcon,
  StarIcon,
  QuoteIcon,
  AwardIcon,
  ClockIcon,
  ThumbsUpIcon,
  SettingsIcon,
  SmileIcon
} from 'lucide-react'
import { destinations } from '@/data/destinations'
import { DestinationCard } from '@/components/DestinationCard'
import Image from 'next/image'

const HERO = 'https://cdn.magicpatterns.com/patterns/generated-images/d2c1bb89-c22c-482c-8698-46b9012ea473.jpg'

const stats = [
  { value: '65,610 km²', label: 'Area' },
  { value: '09', label: 'Provinces' },
  { value: '1000+', label: 'Places to visit' },
]

const whyChooseUs = [
  {
    icon: ShieldCheckIcon,
    title: '15+ YEARS OF EXPERIENCE',
    text: 'Delivering memorable journeys with trusted expertise built over a decade in Sri Lankan tourism.',
  },
  {
    icon: AwardIcon,
    title: 'LICENSED & RECOGNISED',
    text: 'Officially licensed by SLTDA (Sri Lanka Tourism Development Authority) for your peace of mind.',
  },
  {
    icon: SettingsIcon,
    title: 'CUSTOMIZED TOURS',
    text: 'Tailor-made itineraries crafted to suit your interests, travel style, and budget.',
  },
  {
    icon: SmileIcon,
    title: 'ENGLISH-SPEAKING GUIDES',
    text: 'Friendly chauffeurs who make your journey smooth, safe, and easy to follow.',
  },
  {
    icon: ClockIcon,
    title: '24/7 ASSISTANCE',
    text: 'Round-the-clock support to keep your trip worry-free, wherever you are.',
  },
  {
    icon: ThumbsUpIcon,
    title: 'PROFESSIONAL YET PERSONAL',
    text: 'A perfect blend of professionalism and personalized service to make you feel at home.',
  },
]

const testimonials = [
  {
    name: 'Amelia R.',
    place: 'United Kingdom',
    text: 'The most seamless trip of our lives. Every sunrise, every meal, every guide felt personal.',
  },
  {
    name: 'Daniel & Mia',
    place: 'Australia',
    text: 'Ceylon Soul showed us a side of Sri Lanka no guidebook ever could. Pure magic.',
  },
  {
    name: 'Sofia L.',
    place: 'Germany',
    text: 'From the tea hills to Yala, everything was flawless. We are already booking our return.',
  },
]

export default function Home() {
  return (
    <div className="w-full bg-white">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center bg-white">
        <div className="absolute inset-0 w-full h-full">
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent z-10" />
          <Image src={HERO} alt="Sri Lanka tea highlands" fill className="object-cover object-right" priority />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-5 pt-32 pb-16 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl"
          >
            <h1 className="mt-6 font-display text-5xl md:text-7xl font-bold text-ink leading-[1.1]">
              Magical Memories, <br />
              <span className="font-normal italic">Bespoke experiences</span>
            </h1>
            <p className="mt-6 text-lg text-ink/80 leading-relaxed">
              Embark on a journey with Ceylon Soul Travels, where every moment is carefully crafted to leave a lasting mark on your heart. We believe travel is more than just visiting places; it is about creating magical memories that stay with you long after you go home.
            </p>
            <p className="mt-4 text-lg text-ink/80 leading-relaxed">
              Our goal is to go beyond the ordinary. By understanding what you love, we make sure your time in Sri Lanka is a personal story waiting to be told. From quiet beaches to ancient temples, let us guide you through a real Sri Lankan experience, made just for you.
            </p>
            <div className="mt-10">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-4 transition-colors shadow-lg shadow-primary/30"
              >
                PLAN YOUR TRIP TO SRI LANKA <ArrowRightIcon className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>

          <div className="mt-20 flex flex-wrap items-center gap-8 border-t border-gray-200 pt-8 max-w-3xl">
            {stats.map((s, i) => (
              <React.Fragment key={s.label}>
                <div className="flex items-baseline gap-2">
                  <span className="font-display text-3xl font-bold text-ink">{s.value}</span>
                  <span className="text-sm text-ink/60 uppercase tracking-wider">{s.label}</span>
                </div>
                {i < stats.length - 1 && <div className="h-px w-12 bg-gray-300 hidden sm:block" />}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* Destinations */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-5">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-ink mb-4">
              Curated Itineraries
            </h2>
            <p className="text-ink/70 text-lg">
              Explore the exotic depths of Sri Lanka in all its beauty, grandeur, mystery and luxury. We know that a holiday should revive your entire self; body, mind and spirit alike.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {destinations.slice(0, 3).map((d, i) => (
              <DestinationCard key={d.slug} d={d} index={i} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/destinations"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary uppercase tracking-widest hover:text-primary/80 transition-colors"
            >
              View All Destinations <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-5">
          <div className="text-center mb-16">
            <span className="text-ink/60 text-sm font-medium tracking-widest uppercase">Founded in 2013</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-ink mt-3">Why Choose Us?</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {whyChooseUs.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow text-center flex flex-col items-center"
              >
                <div className="h-16 w-16 mb-6 text-ink flex items-center justify-center">
                  <item.icon className="h-10 w-10 stroke-[1.5]" />
                </div>
                <h3 className="font-semibold text-ink mb-3">{item.title}</h3>
                <p className="text-ink/70 text-sm leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-5">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-primary text-xs font-semibold tracking-[0.3em] uppercase">Traveller stories</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-ink mt-3">Loved by explorers worldwide</h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <motion.blockquote
                key={t.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-2xl bg-white border border-gray-100 p-8 shadow-sm"
              >
                <QuoteIcon className="h-8 w-8 text-gray-200" />
                <p className="text-ink/80 mt-4 leading-relaxed">{t.text}</p>
                <footer className="mt-6 flex items-center gap-1 text-primary">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <StarIcon key={s} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </footer>
                <div className="mt-3 font-semibold text-ink">{t.name}</div>
                <div className="text-sm text-ink/50">{t.place}</div>
              </motion.blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-5 text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-ink">Ready to find your Ceylon soul?</h2>
          <p className="mt-6 text-ink/70 text-lg max-w-2xl mx-auto">
            Tell us your dream and we will craft a journey that fits it perfectly. We make sure your holiday is relaxing, fun, and exactly what you want.
          </p>
          <Link
            href="/contact"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-primary text-white font-semibold px-8 py-4 hover:bg-primary/90 transition-colors shadow-lg shadow-primary/30"
          >
            Start planning today <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}
