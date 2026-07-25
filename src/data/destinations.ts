export interface Destination {
    slug: string
    name: string
    region: string
    price: number
    image: string
    blurb: string
    tags: string[]
}

export const destinations: Destination[] = [
    {
        slug: 'sigiriya',
        name: 'Sigiriya Rock Fortress',
        region: 'Cultural Triangle',
        price: 65,
        image: 'https://cdn.magicpatterns.com/patterns/generated-images/60dec7c3-a6c5-47c8-8bb9-22cfe508a07e.jpg',
        blurb: 'Climb the ancient sky palace and gaze over emerald jungle from a 5th-century wonder.',
        tags: ['Heritage', 'Hiking'],
    },
    {
        slug: 'ella-highlands',
        name: 'Ella & Tea Highlands',
        region: 'Hill Country',
        price: 55,
        image: 'https://cdn.magicpatterns.com/patterns/generated-images/d2c1bb89-c22c-482c-8698-46b9012ea473.jpg',
        blurb: 'Ride the world’s most scenic train through mist-wrapped tea estates and waterfalls.',
        tags: ['Nature', 'Rail Journey'],
    },
    {
        slug: 'mirissa-beach',
        name: 'Mirissa & Southern Coast',
        region: 'South Coast',
        price: 48,
        image: 'https://cdn.magicpatterns.com/patterns/generated-images/ca02a5b6-bc17-44a4-9758-c42ec71fd9ed.jpg',
        blurb: 'Golden bays, whale watching and palm-fringed sunsets along the Indian Ocean.',
        tags: ['Beach', 'Whale Watching'],
    },
    {
        slug: 'yala-safari',
        name: 'Yala Wildlife Safari',
        region: 'Southeast',
        price: 72,
        image: 'https://cdn.magicpatterns.com/patterns/generated-images/2c4fb8e5-74c8-44ec-b346-d516c0b64af9.jpg',
        blurb: 'Track leopards, wild elephants and peacocks across Sri Lanka’s iconic national park.',
        tags: ['Wildlife', 'Safari'],
    },
    {
        slug: 'kandy-temple',
        name: 'Kandy Sacred City',
        region: 'Central Province',
        price: 50,
        image: 'https://cdn.magicpatterns.com/patterns/generated-images/e8904b1c-45d2-4b30-92cb-bee225db894c.jpg',
        blurb: 'Discover the Temple of the Sacred Tooth Relic and the soul of Sinhalese culture.',
        tags: ['Culture', 'Temple'],
    },
]
