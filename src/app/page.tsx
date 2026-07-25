'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  ArrowRightIcon,
  ShieldCheckIcon,
  AwardIcon,
  ClockIcon,
  ThumbsUpIcon,
  SettingsIcon,
  SmileIcon,
  StarIcon
} from 'lucide-react'
import { destinations } from '@/data/destinations'
import { DestinationCard } from '@/components/DestinationCard'
import Image from 'next/image'

const HERO = '/hero-2.png'

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

const googleReviews = [
  {
    name: 'Amelia R.',
    time: '2 weeks ago',
    text: 'The most seamless trip of our lives. Every sunrise, every meal, every guide felt personal. Ceylon Soul Travels truly knows how to make a holiday special.',
  },
  {
    name: 'Daniel & Mia',
    time: '1 month ago',
    text: 'Ceylon Soul showed us a side of Sri Lanka no guidebook ever could. Pure magic. Highly recommend their wildlife safari tours!',
  },
  {
    name: 'Sofia L.',
    time: '3 months ago',
    text: 'From the tea hills to Yala, everything was flawless. We are already booking our return. The guides were incredibly knowledgeable and friendly.',
  },
]

export default function Home() {
  return (
    <div className="w-full bg-white">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center bg-white">
        <div className="absolute inset-0 w-full h-full">
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent z-10" />
          <Image src={HERO} alt="Sri Lanka beautiful beach" fill className="object-cover object-right" priority />
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

      {/* Google Reviews */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-5">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              <svg viewBox="0 0 24 24" className="h-8 w-8 text-[#4285F4] fill-current">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path className="text-[#34A853] fill-current" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path className="text-[#FBBC05] fill-current" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path className="text-[#EA4335] fill-current" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
              <span className="font-display text-2xl font-bold text-ink">Google Reviews</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-ink mt-3">Loved by explorers worldwide</h2>
            <div className="flex items-center justify-center gap-2 mt-4">
              <span className="font-bold text-xl">5.0</span>
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, s) => (
                  <StarIcon key={s} className="h-5 w-5 fill-[#FBBC05] text-[#FBBC05]" />
                ))}
              </div>
            </div>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {googleReviews.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-2xl bg-white border border-gray-100 p-8 shadow-sm flex flex-col h-full"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-ink text-sm">{t.name}</div>
                    <div className="text-xs text-ink/50">{t.time}</div>
                  </div>
                </div>
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <StarIcon key={s} className="h-4 w-4 fill-[#FBBC05] text-[#FBBC05]" />
                  ))}
                </div>
                <p className="text-ink/80 text-sm leading-relaxed flex-grow">{t.text}</p>
                <div className="mt-4 flex items-center gap-2 text-xs text-ink/50 font-medium">
                  <svg viewBox="0 0 24 24" className="h-4 w-4 text-[#4285F4] fill-current">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                    <path className="text-[#34A853] fill-current" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                    <path className="text-[#FBBC05] fill-current" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                    <path className="text-[#EA4335] fill-current" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                  </svg>
                  Posted on Google
                </div>
              </motion.div>
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
