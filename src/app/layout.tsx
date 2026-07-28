import type { Metadata } from 'next'
import { Cormorant_Garamond, Montserrat, Great_Vibes } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { FloatingWidgets } from '@/components/FloatingWidgets'

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

const greatVibes = Great_Vibes({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-vine',
})

export const metadata: Metadata = {
  title: 'Ceylon Soul Travels | Sri Lanka Tours & Holidays',
  description: 'Experience the magic of Sri Lanka with Ceylon Soul Travels. We offer bespoke tour packages, wildlife safaris, beach holidays, and cultural tours tailored just for you.',
  keywords: 'Ceylon Soul Travels, Ceylon Soul, Ceylon Soul Tours, Ceylon Soul Travels Sri Lanka, travels and tours sri lanka, sri lanka tours, sri lanka tour package, sri lanka holiday packages, sri lanka trip, sri lanka travel agency, best sri lanka tour package, sri lanka vacation packages, sri lanka family holiday packages, luxury sri lanka tours, sri lanka beach holiday, sri lanka private tour, sri lanka tour itinerary, sri lanka guided tours, sri lanka wildlife tour packages, sri lanka round trip, sri lanka day tours, sri lanka tour operators, sri lanka holiday deals, sri lanka travel itinerary',
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

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Ceylon Soul Travels',
  image: 'https://ceylonsoultravels.lk/logo.png',
  '@id': 'https://ceylonsoultravels.lk',
  url: 'https://ceylonsoultravels.lk',
  telephone: '+94771234567',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '143, Seeduwa 11410',
    addressLocality: 'Seeduwa',
    addressRegion: 'Western Province',
    postalCode: '11410',
    addressCountry: 'LK'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 7.1404,
    longitude: 79.8827
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday'
    ],
    opens: '09:00',
    closes: '18:00'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${montserrat.variable} ${greatVibes.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans bg-white text-ink antialiased">
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <FloatingWidgets />
      </body>
    </html>
  )
}
