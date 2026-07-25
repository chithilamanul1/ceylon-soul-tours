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
        image: 'https://images.unsplash.com/photo-1588598198321-17ef48c67288?q=80&w=1000&auto=format&fit=crop',
        blurb: 'Climb the ancient rock fortress rising from the jungle, a masterpiece of ancient engineering and art.',
        tags: ['History', 'Nature', 'Views'],
    },
    {
        name: 'Ella',
        slug: 'ella-hill-country',
        region: 'Hill Country',
        image: 'https://images.unsplash.com/photo-1578338982352-094191024345?q=80&w=1000&auto=format&fit=crop',
        blurb: 'A misty mountain village famous for tea plantations, waterfalls, and the iconic Nine Arch Bridge.',
        tags: ['Mountains', 'Tea', 'Hiking'],
    },
    {
        name: 'Yala National Park',
        slug: 'yala-safari',
        region: 'South Coast',
        image: 'https://images.unsplash.com/photo-1620218765275-5d7524941916?q=80&w=1000&auto=format&fit=crop',
        blurb: 'Experience thrilling wildlife safaris with the highest density of leopards in the world.',
        tags: ['Wildlife', 'Safari', 'Nature'],
    },
    {
        name: 'Galle Fort',
        slug: 'galle-dutch-fort',
        region: 'South Coast',
        image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=1000&auto=format&fit=crop',
        blurb: 'Wander through cobbled streets of this UNESCO World Heritage site, blending European architecture and South Asian traditions.',
        tags: ['Heritage', 'Coastal', 'Architecture'],
    },
    {
        name: 'Mirissa',
        slug: 'mirissa-beach',
        region: 'South Coast',
        image: 'https://images.unsplash.com/photo-1576695448375-1e089d316494?q=80&w=1000&auto=format&fit=crop',
        blurb: 'Relax on golden sands, surf the waves, and embark on unforgettable whale watching expeditions.',
        tags: ['Beach', 'Whales', 'Relaxation'],
    },
    {
        name: 'Kandy',
        slug: 'kandy-temple-of-tooth',
        region: 'Central Province',
        image: 'https://images.unsplash.com/photo-1625736300986-6e58762b322a?q=80&w=1000&auto=format&fit=crop',
        blurb: 'Discover the cultural capital of Sri Lanka, home to the sacred Temple of the Tooth and traditional Sinhalese culture.',
        tags: ['Culture', 'Heritage', 'Temple'],
    },
]
