export interface Destination {
    name: string
    slug: string
    region: string
    image: string
    blurb: string
    tags: string[]
}

export const destinations: Destination[] = [
    {
        name: 'Sigiriya',
        slug: 'sigiriya-rock-fortress',
        region: 'Cultural Triangle',
        image: '/sigiriya-new.png',
        blurb: 'Climb the famous ancient rock palace in the jungle.',
        tags: ['History', 'Nature', 'Views'],
    },
    {
        name: 'Ella',
        slug: 'ella-hill-country',
        region: 'Hill Country',
        image: '/ella-new.png',
        blurb: 'A beautiful mountain village with tea gardens, waterfalls, and the Nine Arch Bridge.',
        tags: ['Mountains', 'Tea', 'Hiking'],
    },
    {
        name: 'Yala National Park',
        slug: 'yala-safari',
        region: 'South Coast',
        image: '/yala.png',
        blurb: 'Go on a safari to see wild elephants and leopards.',
        tags: ['Wildlife', 'Safari', 'Nature'],
    },
    {
        name: 'Galle Fort',
        slug: 'galle-dutch-fort',
        region: 'South Coast',
        image: '/galle-new.png',
        blurb: 'Walk around the old Dutch fort by the sea.',
        tags: ['Heritage', 'Coastal', 'Architecture'],
    },
    {
        name: 'Mirissa',
        slug: 'mirissa-beach',
        region: 'South Coast',
        image: '/mirissa.png',
        blurb: 'Relax on the beach, surf, and go whale watching.',
        tags: ['Beach', 'Whales', 'Relaxation'],
    },
    {
        name: 'Kandy',
        slug: 'kandy-temple-of-tooth',
        region: 'Central Province',
        image: '/kandy-new.png',
        blurb: 'Visit the famous Temple of the Tooth in this beautiful city.',
        tags: ['Culture', 'Heritage', 'Temple'],
    },
]
