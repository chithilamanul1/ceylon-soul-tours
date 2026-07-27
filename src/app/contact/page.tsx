'use client'

import React, { useState, useEffect, Suspense } from 'react'
import { motion } from 'framer-motion'
import { MapPinIcon, PhoneIcon, MailIcon, ClockIcon, SendIcon, CheckCircleIcon } from 'lucide-react'
import { PageHeader } from '@/components/PageHeader'
import { useSearchParams } from 'next/navigation'

const HERO = '/hero-1.png'

const info = [
    { icon: MapPinIcon, title: 'Visit us', lines: ['42 Galle Road', 'Colombo 03, Sri Lanka'] },
    { icon: PhoneIcon, title: 'Call us', lines: ['+94 76 599 6958 (WhatsApp)', '+94 74 131 0832'] },
    { icon: MailIcon, title: 'Email us', lines: ['info@ceylonsoultravels.lk'] },
    { icon: ClockIcon, title: 'Office hours', lines: ['Mon – Sat: 9am – 6pm', 'Sunday: By appointment'] },
]

function ContactContent() {
    const searchParams = useSearchParams()
    const [sent, setSent] = useState(false)

    useEffect(() => {
        if (searchParams.get('success') === 'true') {
            setSent(true)
        }
    }, [searchParams])

    return (
        <div className="w-full bg-white">
            <PageHeader
                eyebrow="Let's talk"
                title="Contact Us"
                image={HERO}
                crumbs={[{ label: 'Home', to: '/' }, { label: 'Contact' }]}
            />

            <section className="max-w-7xl mx-auto px-4 py-10 md:px-5 md:py-24 grid gap-10 md:gap-16 lg:grid-cols-[1fr_1.2fr]">
                <div>
                    <span className="text-primary text-xs font-semibold tracking-[0.3em] uppercase">Get in touch</span>
                    <h2 className="font-display text-3xl md:text-5xl font-bold text-ink mt-4 leading-tight">
                        Let's plan your Sri Lankan adventure
                    </h2>
                    <p className="mt-4 md:mt-6 text-ink/70 text-base md:text-lg leading-relaxed">
                        Have a question or ready to book? Our travel experts will reply within 24 hours to help you plan the perfect trip.
                    </p>

                    <div className="mt-8 md:mt-12 grid gap-4 md:gap-6 sm:grid-cols-2">
                        {info.map((item) => (
                            <div key={item.title} className="rounded-2xl bg-gray-50 border border-gray-100 p-5 md:p-6">
                                <div className="h-10 w-10 md:h-12 md:w-12 flex items-center justify-center rounded-full bg-primary/10 text-primary mb-4 md:mb-5">
                                    <item.icon className="h-5 w-5 md:h-6 md:w-6" />
                                </div>
                                <h3 className="font-semibold text-ink text-base md:text-lg">{item.title}</h3>
                                <div className="mt-2 space-y-1">
                                    {item.lines.map((l) => (
                                        <p key={l} className="text-sm text-ink/70">
                                            {l}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="rounded-2xl md:rounded-3xl bg-white border border-gray-200 shadow-xl p-5 md:p-12">
                    {sent ? (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="h-full min-h-[300px] md:min-h-[400px] flex flex-col items-center justify-center text-center"
                        >
                            <CheckCircleIcon className="h-16 w-16 md:h-20 md:w-20 text-primary" />
                            <h3 className="font-display text-2xl md:text-3xl font-bold text-ink mt-6">Thank you!</h3>
                            <p className="text-ink/70 mt-4 text-base md:text-lg max-w-sm">
                                Your message is on its way to our team. We will contact you within 24 hours to start planning your journey.
                            </p>
                            <button
                                onClick={() => setSent(false)}
                                className="mt-8 text-primary font-semibold text-xs md:text-sm uppercase tracking-widest hover:text-primary/80"
                            >
                                Send another message
                            </button>
                        </motion.div>
                    ) : (
                        <form action="https://formsubmit.co/ceylonsoultravel@gmail.com" method="POST" className="space-y-4 md:space-y-6">
                            {/* FormSubmit Configuration */}
                            <input type="hidden" name="_subject" value="New Contact Form Submission - Ceylon Soul Travels" />
                            <input type="hidden" name="_captcha" value="false" />
                            <input type="hidden" name="_next" value="https://ceylonsoultravels.com/contact?success=true" />
                            <input type="hidden" name="_template" value="table" />

                            <h3 className="font-display text-2xl md:text-3xl font-bold text-ink mb-5 md:mb-8">Send us a message</h3>
                            <div className="grid gap-4 md:gap-6 sm:grid-cols-2">
                                <Field label="Full name" name="name" placeholder="Your name" />
                                <Field label="Email" name="email" type="email" placeholder="you@email.com" />
                            </div>
                            <div className="grid gap-4 md:gap-6 sm:grid-cols-2">
                                <Field label="Phone" name="phone" placeholder="+94 ..." required={false} />
                                <div>
                                    <label className="block text-sm font-medium text-ink/80 mb-2">Interested in</label>
                                    <select name="interest" className="w-full rounded-xl bg-gray-50 border border-gray-200 text-ink px-4 py-3.5 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-shadow">
                                        <option value="Cultural Triangle">Cultural Triangle</option>
                                        <option value="Hill Country Rail">Hill Country Rail</option>
                                        <option value="Wildlife Safari">Wildlife Safari</option>
                                        <option value="Custom itinerary">Custom itinerary</option>
                                    </select>
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-ink/80 mb-2">Your message</label>
                                <textarea
                                    name="message"
                                    required
                                    rows={4}
                                    placeholder="Tell us about your dream trip..."
                                    className="w-full rounded-xl bg-gray-50 border border-gray-200 text-ink px-4 py-3.5 text-sm placeholder:text-ink/40 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-shadow resize-none"
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-primary text-white font-semibold px-8 py-3.5 md:py-4 hover:bg-primary/90 transition-colors shadow-lg shadow-primary/30 mt-2"
                            >
                                Send message <SendIcon className="h-5 w-5" />
                            </button>
                        </form>
                    )}
                </div>
            </section>
        </div>
    )
}

export default function Contact() {
    return (
        <Suspense fallback={<div className="min-h-screen bg-white" />}>
            <ContactContent />
        </Suspense>
    )
}

function Field({
    label,
    name,
    type = 'text',
    placeholder,
    required = true,
}: {
    label: string
    name: string
    type?: string
    placeholder?: string
    required?: boolean
}) {
    return (
        <div>
            <label htmlFor={name} className="block text-sm font-medium text-ink/80 mb-2">
                {label}
            </label>
            <input
                id={name}
                name={name}
                type={type}
                required={required}
                placeholder={placeholder}
                className="w-full rounded-xl bg-gray-50 border border-gray-200 text-ink px-4 py-3.5 text-sm placeholder:text-ink/40 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-shadow"
            />
        </div>
    )
}
