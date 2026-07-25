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
        image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Beauty_of_Sigiriya_by_Bimalka_Workz.jpg?width=800',
        blurb: 'Climb the famous ancient rock palace in the jungle.',
        tags: ['History', 'Nature', 'Views'],
    },
    {
        name: 'Ella',
        slug: 'ella-hill-country',
        region: 'Hill Country',
        image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Nine_Arch_Bridge,_Ella.jpg?width=800',
        blurb: 'A beautiful mountain village with tea gardens, waterfalls, and the Nine Arch Bridge.',
        tags: ['Mountains', 'Tea', 'Hiking'],
    },
    {
        name: 'Yala National Park',
        slug: 'yala-safari',
        region: 'South Coast',
        image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Sri_Lankan_Leopard_in_Yala_National_Park.jpg?width=800',
        blurb: 'Go on a safari to see wild elephants and leopards.',
        tags: ['Wildlife', 'Safari', 'Nature'],
    },
    {
        name: 'Galle Fort',
        slug: 'galle-dutch-fort',
        region: 'South Coast',
        image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Galle_Fort_Lighthouse_Sri_Lanka.jpg?width=800',
        blurb: 'Walk around the old Dutch fort by the sea.',
        tags: ['Heritage', 'Coastal', 'Architecture'],
    },
    {
        name: 'Mirissa',
        slug: 'mirissa-beach',
        region: 'South Coast',
        image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Coconut_Tree_Hill_Mirissa.jpg?width=800',
        blurb: 'Relax on the beach, surf, and go whale watching.',
        tags: ['Beach', 'Whales', 'Relaxation'],
    },
    {
        name: 'Kandy',
        slug: 'kandy-temple-of-tooth',
        region: 'Central Province',
        image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Temple_of_the_Tooth_Relic_Kandy.jpg?width=800',
        blurb: 'Visit the famous Temple of the Tooth in this beautiful city.',
        tags: ['Culture', 'Heritage', 'Temple'],
    },
]
