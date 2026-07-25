import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

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

const TikTokIcon = ({ className }: { className?: string }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.12-3.44-3.17-3.8-5.46-.4-2.51.33-5.11 1.9-7.02 1.28-1.56 3.16-2.57 5.14-2.88 1.05-.15 2.12-.11 3.16.14v4.14c-1.83-.31-3.8.12-5.11 1.4-1.04 1.02-1.45 2.5-1.12 3.92.34 1.46 1.51 2.66 2.94 3.08 1.6.48 3.39.05 4.62-1.07 1.05-.96 1.61-2.35 1.63-3.76.04-5.32.01-10.64.02-15.96h3.63z" />
    </svg>
)

export function Footer() {
    return (
        <footer className="bg-ink text-white pt-20 md:pt-24 pb-10 border-t border-gray-800">
            <div className="max-w-7xl mx-auto px-5">
                <div className="grid gap-12 md:gap-16 lg:grid-cols-4">
                    <div className="lg:col-span-1">
                        <Link href="/" className="flex items-center gap-3 mb-6">
                            <div className="bg-white p-1.5 rounded-full">
                                <Image src="/logo.png" alt="Ceylon Soul Travels" width={40} height={40} className="h-10 w-10 object-contain" />
                            </div>
                            <div className="leading-none">
                                <div className="font-display text-xl text-white">Ceylon Soul</div>
                                <div className="text-[10px] tracking-[0.35em] text-primary uppercase">Travels</div>
                            </div>
                        </Link>
                        <p className="text-white/60 text-sm leading-relaxed mb-8">
                            Crafting bespoke journeys across Sri Lanka. We believe in travel that touches the soul, protects the wild, and supports local communities.
                        </p>
                        <div className="flex items-center gap-4">
                            <a href="https://web.facebook.com/profile.php?id=61586557000730" target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:bg-primary hover:text-white transition-colors">
                                <FacebookIcon className="h-5 w-5" />
                            </a>
                            <a href="https://www.instagram.com/ceylonsoultravels" target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:bg-primary hover:text-white transition-colors">
                                <InstagramIcon className="h-5 w-5" />
                            </a>
                            <a href="https://www.tiktok.com/@travelsceylonsoul" target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:bg-primary hover:text-white transition-colors">
                                <TikTokIcon className="h-4 w-4" />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-semibold text-white mb-6 uppercase tracking-wider text-sm">Quick Links</h4>
                        <ul className="space-y-4">
                            <li><Link href="/" className="text-white/60 hover:text-primary transition-colors text-sm">Home</Link></li>
                            <li><Link href="/destinations" className="text-white/60 hover:text-primary transition-colors text-sm">Destinations</Link></li>
                            <li><Link href="/tours" className="text-white/60 hover:text-primary transition-colors text-sm">Tour Packages</Link></li>
                            <li><Link href="/about" className="text-white/60 hover:text-primary transition-colors text-sm">About Us</Link></li>
                            <li><Link href="/contact" className="text-white/60 hover:text-primary transition-colors text-sm">Contact</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold text-white mb-6 uppercase tracking-wider text-sm">Popular Tours</h4>
                        <ul className="space-y-4">
                            <li><Link href="/tours" className="text-white/60 hover:text-primary transition-colors text-sm">Cultural Triangle Explorer</Link></li>
                            <li><Link href="/tours" className="text-white/60 hover:text-primary transition-colors text-sm">Hill Country Rail Journey</Link></li>
                            <li><Link href="/tours" className="text-white/60 hover:text-primary transition-colors text-sm">Wild South Safari & Beach</Link></li>
                            <li><Link href="/tours" className="text-white/60 hover:text-primary transition-colors text-sm">Grand Sri Lanka Odyssey</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold text-white mb-6 uppercase tracking-wider text-sm">Contact Us</h4>
                        <ul className="space-y-4">
                            <li className="text-white/60 text-sm flex items-start gap-3">
                                <span className="mt-0.5 text-primary">📍</span>
                                <span>42 Galle Road<br />Colombo 03, Sri Lanka</span>
                            </li>
                            <li className="text-white/60 text-sm flex items-center gap-3">
                                <span className="text-primary">📞</span>
                                <a href="tel:+94765996958" className="hover:text-primary transition-colors">+94 76 599 6958</a>
                            </li>
                            <li className="text-white/60 text-sm flex items-center gap-3">
                                <span className="text-primary">📞</span>
                                <a href="tel:+94741310832" className="hover:text-primary transition-colors">+94 74 131 0832</a>
                            </li>
                            <li className="text-white/60 text-sm flex items-center gap-3">
                                <span className="text-primary">✉️</span>
                                <a href="mailto:info@ceylonsoultravels.lk" className="hover:text-primary transition-colors">info@ceylonsoultravels.lk</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-white/40 text-xs">
                        © {new Date().getFullYear()} Ceylon Soul Travels. All rights reserved.
                    </p>
                    <div className="flex items-center gap-6 text-xs text-white/40">
                        <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
