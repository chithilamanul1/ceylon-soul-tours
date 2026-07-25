'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRightIcon } from 'lucide-react'
import Image from 'next/image'

const SIGIRIYA = 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Beauty_of_Sigiriya_by_Bimalka_Workz.jpg/800px-Beauty_of_Sigiriya_by_Bimalka_Workz.jpg'
const NINE_ARCH = 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Nine_Arch_Bridge%2C_Ella.jpg/800px-Nine_Arch_Bridge%2C_Ella.jpg'
const YALA = 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Sri_Lankan_Leopard_in_Yala_National_Park.jpg/800px-Sri_Lankan_Leopard_in_Yala_National_Park.jpg'
const MIRISSA = 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Mirissa_Beach%2C_Sri_Lanka.jpg/800px-Mirissa_Beach%2C_Sri_Lanka.jpg'

export default function Home() {
  return (
    <div className="w-full bg-[#FAFAFA] text-ink selection:bg-primary/20">
      {/* Hero Section */}
      <section className="relative h-[100svh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <div className="absolute inset-0 bg-black/20 z-10" />
          <video
            autoPlay
            loop
            muted
            playsInline
            poster="/hero-2.png"
            className="absolute inset-0 w-full h-full object-cover object-center scale-105"
          >
            <source src="/hero-video.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-5 w-full flex flex-col items-center text-center mt-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="font-display text-5xl md:text-8xl lg:text-[120px] font-medium text-white leading-[0.9] tracking-tight">
              Soul. Story.<br />
              <span className="italic font-light">Sri Lanka.</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-12 md:mt-20"
          >
            <Link href="/tours" className="group inline-flex items-center gap-4 text-white text-sm md:text-base tracking-widest uppercase hover:text-primary transition-colors">
              Discover the Island
              <ArrowRightIcon className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-2" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 md:py-40 px-5 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-12 gap-12 md:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="md:col-span-5"
          >
            <h2 className="font-display text-4xl md:text-6xl font-medium leading-[1.1] mb-8">
              We don't design tours.<br />
              <span className="italic text-ink/60">We create space for culture to be shared with care.</span>
            </h2>
            <p className="text-ink/70 text-base md:text-lg leading-relaxed mb-6">
              At Ceylon Soul Travels, we want to give you the best holiday ever. We care about protecting our beautiful island and helping local people while showing you the very best of Sri Lanka.
            </p>
            <p className="text-ink/70 text-base md:text-lg leading-relaxed mb-10">
              Our mission is to plan high-quality, special trips that make you happy and let you experience the real Sri Lanka. We promise to give you safe, fun tours that you will love, and magical memories so you will want to come back.
            </p>
            <Link href="/about" className="inline-flex items-center gap-2 text-sm font-medium tracking-widest uppercase hover:text-primary transition-colors">
              Our Story <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="md:col-span-7 relative h-[60vh] md:h-[80vh] w-full rounded-2xl overflow-hidden"
          >
            <Image
              src={NINE_ARCH}
              alt="Nine Arch Bridge Ella"
              fill
              className="object-cover hover:scale-105 transition-transform duration-1000"
            />
          </motion.div>
        </div>
      </section>

      {/* Experiences Section */}
      <section className="py-24 md:py-40 bg-white">
        <div className="max-w-7xl mx-auto px-5">
          <div className="mb-20 md:mb-32 max-w-2xl">
            <h2 className="font-display text-4xl md:text-6xl font-medium leading-[1.1] mb-6">
              Thoughtful encounters,<br />
              <span className="italic text-ink/60">not itineraries.</span>
            </h2>
            <p className="text-ink/70 text-lg">
              Whether you want to relax on the beach, see wild animals, or learn about our culture, we have everything you need for a great trip.
            </p>
          </div>

          <div className="space-y-24 md:space-y-40">
            {/* Experience 1 — The Wild */}
            <div className="grid md:grid-cols-12 gap-8 md:gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="md:col-span-7 relative h-[50vh] md:h-[70vh] w-full rounded-2xl overflow-hidden"
              >
                <Image src={YALA} alt="Wildlife Safari Yala" fill className="object-cover" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="md:col-span-5 md:pl-10"
              >
                <span className="text-xs font-medium tracking-widest uppercase text-primary mb-4 block">01 — The Wild</span>
                <h3 className="font-display text-3xl md:text-5xl font-medium mb-6">Wildlife Safaris</h3>
                <p className="text-ink/70 text-lg leading-relaxed mb-8">
                  See wild elephants, leopards, and beautiful birds on our exciting safari trips to national parks like Yala and Minneriya.
                </p>
                <Link href="/tours" className="inline-flex items-center gap-2 text-sm font-medium tracking-widest uppercase hover:text-primary transition-colors">
                  Explore Safaris <ArrowRightIcon className="h-4 w-4" />
                </Link>
              </motion.div>
            </div>

            {/* Experience 2 — The Heritage */}
            <div className="grid md:grid-cols-12 gap-8 md:gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="md:col-span-5 md:pr-10 order-2 md:order-1"
              >
                <span className="text-xs font-medium tracking-widest uppercase text-primary mb-4 block">02 — The Heritage</span>
                <h3 className="font-display text-3xl md:text-5xl font-medium mb-6">Cultural Tours</h3>
                <p className="text-ink/70 text-lg leading-relaxed mb-8">
                  Visit ancient temples and famous historical places to learn about Sri Lanka's rich culture. Explore Sigiriya, Kandy, and Galle with our friendly guides.
                </p>
                <Link href="/destinations" className="inline-flex items-center gap-2 text-sm font-medium tracking-widest uppercase hover:text-primary transition-colors">
                  Discover Heritage <ArrowRightIcon className="h-4 w-4" />
                </Link>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="md:col-span-7 relative h-[50vh] md:h-[70vh] w-full rounded-2xl overflow-hidden order-1 md:order-2"
              >
                <Image src={SIGIRIYA} alt="Sigiriya Rock Fortress" fill className="object-cover" />
              </motion.div>
            </div>

            {/* Experience 3 — The Coast */}
            <div className="grid md:grid-cols-12 gap-8 md:gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="md:col-span-7 relative h-[50vh] md:h-[70vh] w-full rounded-2xl overflow-hidden"
              >
                <Image src={MIRISSA} alt="Mirissa Beach" fill className="object-cover" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="md:col-span-5 md:pl-10"
              >
                <span className="text-xs font-medium tracking-widest uppercase text-primary mb-4 block">03 — The Coast</span>
                <h3 className="font-display text-3xl md:text-5xl font-medium mb-6">Beach Holidays</h3>
                <p className="text-ink/70 text-lg leading-relaxed mb-8">
                  Relax on beautiful sunny beaches like Mirissa and Bentota. Surf the waves or embark on whale watching expeditions.
                </p>
                <Link href="/tours" className="inline-flex items-center gap-2 text-sm font-medium tracking-widest uppercase hover:text-primary transition-colors">
                  View Beaches <ArrowRightIcon className="h-4 w-4" />
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Services List (Minimalist) */}
      <section className="py-24 md:py-32 bg-[#FAFAFA] border-t border-gray-200/50">
        <div className="max-w-7xl mx-auto px-5">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="font-display text-3xl md:text-5xl font-medium mb-8">Everything you need for a perfect journey.</h2>
              <p className="text-ink/70 text-lg max-w-md">
                We plan special trips just for you, based on what you like and your budget. From airport transfers to luxury hotel bookings, we handle every detail.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-12">
              {[
                { title: 'Custom Packages', desc: 'Trips planned exactly how you want them.' },
                { title: 'Airport Transfers', desc: 'Punctual pick-up and drop-off services.' },
                { title: 'Hotel Booking', desc: 'The best hotels and villas at great prices.' },
                { title: 'Transportation', desc: 'Comfortable cars with experienced drivers.' },
              ].map((s) => (
                <div key={s.title} className="border-t border-gray-200 pt-6">
                  <h4 className="font-display text-xl font-medium mb-2">{s.title}</h4>
                  <p className="text-ink/60 text-sm">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Editorial Quote / Review */}
      <section className="py-32 md:py-48 bg-white text-center px-5">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <span className="text-primary text-6xl font-display leading-none block mb-6">"</span>
            <h2 className="font-display text-3xl md:text-5xl font-medium leading-tight mb-10">
              The most seamless trip of our lives. Every sunrise, every meal, every guide felt personal. Ceylon Soul Travels truly knows how to make a holiday special.
            </h2>
            <div className="flex flex-col items-center justify-center">
              <span className="text-sm font-medium tracking-widest uppercase mb-1">Amelia R.</span>
              <span className="text-xs text-ink/50">Posted on Google Reviews</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-ink text-white text-center px-5">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-4xl md:text-6xl font-medium mb-8">Ready to visit Sri Lanka?</h2>
          <p className="text-white/70 text-lg mb-12">
            Tell us what you want to do, and we will plan the perfect trip for you.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-4 text-white text-sm tracking-widest uppercase hover:text-primary transition-colors border-b border-white/30 hover:border-primary pb-2"
          >
            Start planning today <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}
