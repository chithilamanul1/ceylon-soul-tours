import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { MapPinIcon, PhoneIcon, MailIcon, FacebookIcon, InstagramIcon, TwitterIcon } from 'lucide-react'

export function Footer() {
    return (
        <footer className="bg-white text-ink border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-5 py-16 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
                <div>
                    <div className="flex items-center gap-3 mb-5">
                        <Image src="/logo.png" alt="Ceylon Soul Travels" width={56} height={56} className="h-14 w-14 object-contain" />
                        <div className="leading-none">
                            <div className="font-display text-xl text-ink">Ceylon Soul</div>
                            <div className="text-[10px] tracking-[0.35em] text-primary uppercase">Travels</div>
                        </div>
                    </div>
                    <p className="text-sm leading-relaxed text-ink/70">
                        Journeys crafted with soul across the wonders of Sri Lanka — from misty highlands to golden shores.
                    </p>
                    <div className="flex gap-3 mt-6">
                        {[FacebookIcon, InstagramIcon, TwitterIcon].map((Icon, i) => (
                            <a
                                key={i}
                                href="#"
                                className="h-9 w-9 grid place-items-center rounded-full border border-gray-200 text-ink/60 hover:border-primary hover:text-primary transition-colors"
                                aria-label="Social link"
                            >
                                <Icon className="h-4 w-4" />
                            </a>
                        ))}
                    </div>
                </div>

                <div>
                    <h4 className="text-ink font-semibold mb-5 text-sm tracking-wide uppercase">Explore The Site</h4>
                    <ul className="space-y-3 text-sm text-ink/70">
                        {[
                            { to: '/', label: 'Home' },
                            { to: '/destinations', label: 'Destinations' },
                            { to: '/tours', label: 'Tailor Made Tours' },
                            { to: '/about', label: 'Our Story' },
                            { to: '/contact', label: 'Contact Us' },
                        ].map((l) => (
                            <li key={l.to}>
                                <Link href={l.to} className="hover:text-primary transition-colors">
                                    {l.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h4 className="text-ink font-semibold mb-5 text-sm tracking-wide uppercase">Day Tours</h4>
                    <ul className="space-y-3 text-sm text-ink/70">
                        {['Day Tour of Colombo', 'Galle Day Tour', 'Kandy Day Tour', 'Sigiriya & Dambulla Day Tour', 'Whale Watching Day Tour'].map(
                            (t) => (
                                <li key={t}>
                                    <Link href="/tours" className="hover:text-primary transition-colors">
                                        {t}
                                    </Link>
                                </li>
                            ),
                        )}
                    </ul>
                </div>

                <div>
                    <h4 className="text-ink font-semibold mb-5 text-sm tracking-wide uppercase">Itineraries</h4>
                    <ul className="space-y-3 text-sm text-ink/70">
                        {['Adventure & Nature Tours', 'Culture & Heritage Tours', 'Family Tours', 'Luxury Bespoke Tours', 'Wildlife Tours'].map(
                            (t) => (
                                <li key={t}>
                                    <Link href="/tours" className="hover:text-primary transition-colors">
                                        {t}
                                    </Link>
                                </li>
                            ),
                        )}
                    </ul>
                </div>
            </div>
            <div className="border-t border-gray-100">
                <div className="max-w-7xl mx-auto px-5 py-6 text-xs flex flex-col sm:flex-row items-center justify-between gap-3 text-ink/60">
                    <p>© {new Date().getFullYear()} Ceylon Soul Travels. All rights reserved.</p>
                    <p>Crafted with soul in Sri Lanka 🐘</p>
                </div>
            </div>
        </footer>
    )
}
