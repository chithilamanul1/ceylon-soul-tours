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
        image: '/hero-1.png',
        blurb: 'Climb the ancient rock fortress rising from the jungle, a masterpiece of ancient engineering and art.',
        tags: ['History', 'Nature', 'Views'],
    },
    {
        name: 'Ella',
        slug: 'ella-hill-country',
        region: 'Hill Country',
        image: '/hero-2.png',
        blurb: 'A misty mountain village famous for tea plantations, waterfalls, and the iconic Nine Arch Bridge.',
        tags: ['Mountains', 'Tea', 'Hiking'],
    },
    {
        name: 'Yala National Park',
        slug: 'yala-safari',
        region: 'South Coast',
        image: '/hero-4.png',
        blurb: 'Experience thrilling wildlife safaris with the highest density of leopards in the world.',
        tags: ['Wildlife', 'Safari', 'Nature'],
    },
    {
        name: 'Galle Fort',
        slug: 'galle-dutch-fort',
        region: 'South Coast',
        image: '/hero-3.png',
        blurb: 'Wander through cobbled streets of this UNESCO World Heritage site, blending European architecture and South Asian traditions.',
        tags: ['Heritage', 'Coastal', 'Architecture'],
    },
    {
        name: 'Mirissa',
        slug: 'mirissa-beach',
        region: 'South Coast',
        image: '/hero-1.png',
        blurb: 'Relax on golden sands, surf the waves, and embark on unforgettable whale watching expeditions.',
        tags: ['Beach', 'Whales', 'Relaxation'],
    },
    {
        name: 'Kandy',
        slug: 'kandy-temple-of-tooth',
        region: 'Central Province',
        image: '/hero-2.png',
        blurb: 'Discover the cultural capital of Sri Lanka, home to the sacred Temple of the Tooth and traditional Sinhalese culture.',
        tags: ['Culture', 'Heritage', 'Temple'],
    },
]
