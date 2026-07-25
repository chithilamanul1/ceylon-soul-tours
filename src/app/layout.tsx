import type { Metadata } from 'next'
import { Cormorant_Garamond, Montserrat } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-cormorant',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-montserrat',
})

export const metadata: Metadata = {
  title: 'Ceylon Soul Travels | Sri Lanka Tours & Holidays',
  description: 'Experience the magic of Sri Lanka with Ceylon Soul Travels. We offer bespoke tour packages, wildlife safaris, beach holidays, and cultural tours tailored just for you.',
  keywords: 'travels and tours sri lanka, sri lanka tours, sri lanka tour package, sri lanka holiday packages, sri lanka trip, sri lanka travel agency, best sri lanka tour package, sri lanka vacation packages, sri lanka family holiday packages, luxury sri lanka tours, sri lanka beach holiday, sri lanka private tour, sri lanka tour itinerary, sri lanka guided tours, sri lanka wildlife tour packages, sri lanka round trip, sri lanka day tours, sri lanka tour operators, sri lanka holiday deals, sri lanka travel itinerary',
  openGraph: {
    title: 'Ceylon Soul Travels | Sri Lanka Tours & Holidays',
    description: 'Experience the magic of Sri Lanka with Ceylon Soul Travels. We offer bespoke tour packages, wildlife safaris, beach holidays, and cultural tours tailored just for you.',
    url: 'https://ceylonsoultravels.com',
    siteName: 'Ceylon Soul Travels',
    images: [
      {
        url: '/logo.png',
        width: 800,
        height: 600,
        alt: 'Ceylon Soul Travels Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${montserrat.variable}`}>
      <body className="font-sans bg-white text-ink antialiased">
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
