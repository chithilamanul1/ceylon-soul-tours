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
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Beauty_of_Sigiriya_by_Bimalka_Workz.jpg/800px-Beauty_of_Sigiriya_by_Bimalka_Workz.jpg',
        blurb: 'Climb the famous ancient rock palace in the jungle.',
        tags: ['History', 'Nature', 'Views'],
    },
    {
        name: 'Ella',
        slug: 'ella-hill-country',
        region: 'Hill Country',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Nine_Arch_Bridge%2C_Ella.jpg/800px-Nine_Arch_Bridge%2C_Ella.jpg',
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
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Galle_Fort_Lighthouse_Sri_Lanka.jpg/800px-Galle_Fort_Lighthouse_Sri_Lanka.jpg',
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
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Temple_of_the_Tooth_Relic_Kandy.jpg/800px-Temple_of_the_Tooth_Relic_Kandy.jpg',
        blurb: 'Visit the famous Temple of the Tooth in this beautiful city.',
        tags: ['Culture', 'Heritage', 'Temple'],
    },
]
