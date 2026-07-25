import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { MapPinIcon, PhoneIcon, MailIcon } from 'lucide-react'

const FacebookIcon = ({ className }: { className?: string }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
    </svg>
)

const InstagramIcon = ({ className }: { className?: string }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
    </svg>
)

const TiktokIcon = ({ className }: { className?: string }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 2.26-1.17 4.51-2.94 5.92-1.75 1.4-4.16 1.95-6.38 1.52-2.25-.42-4.24-1.78-5.4-3.65-1.17-1.88-1.43-4.29-.75-6.38.68-2.1 2.27-3.88 4.29-4.83 2.02-.95 4.39-1.13 6.52-.51V13.1c-1.06-.39-2.22-.44-3.32-.17-1.1.27-2.11.91-2.79 1.79-.68.88-1.01 2.03-.92 3.14.09 1.11.6 2.16 1.42 2.93.82.77 1.91 1.22 3.04 1.25 1.13.03 2.24-.37 3.09-1.11.85-.74 1.39-1.78 1.52-2.91.03-.28.04-.56.04-.84V.02h3.58z" />
    </svg>
)

const socialLinks = [
    { Icon: FacebookIcon, href: 'https://web.facebook.com/profile.php?id=61586557000730' },
    { Icon: InstagramIcon, href: 'https://www.instagram.com/ceylonsoultravels' },
    { Icon: TiktokIcon, href: 'https://www.tiktok.com/@travelsceylonsoul' },
]

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
                        {socialLinks.map(({ Icon, href }, i) => (
                            <a
                                key={i}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
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
