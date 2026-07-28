export const IMAGE_SIGIRIYA = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7BWZRlXtSmaMC3ts8SEDvf9d7cUs4QrWULPkjpIX7OR4yh834ubvSKk7E&s=10'
export const IMAGE_ELLA = 'https://www.orienthotelsl.com/wp-content/uploads/2023/01/Nine-Arch-Bridge-Ella-1920x800-1.webp'
export const IMAGE_YALA = 'https://media.istockphoto.com/id/1489566726/photo/leopard-in-sri-lanka.jpg?s=612x612&w=0&k=20&c=kIHqKhwO_JCq94l7yg8zkZuY-v-BbiaaRxr-giy97w4='
export const IMAGE_GALLE = 'https://do6raq9h04ex.cloudfront.net/sites/8/2021/07/galle-fort-1050x700-1.jpg'
export const IMAGE_MIRISSA = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRETCRdy4uZepXl6p5vQMpBj-C1vQRrYfKhNrnJFDqJR7WG1fTI4rIeJ7M&s=10'
export const IMAGE_KANDY = 'https://lakshmisharath.com/wp-content/uploads/2022/09/Kandy-toothrelictemple-dawn.jpg'
export const IMAGE_ARUGAM_BAY = 'https://images.unsplash.com/photo-1574227492706-f65b24c3688a?q=80&w=1000&auto=format&fit=crop'
export const IMAGE_UDAWALAWE = 'https://images.unsplash.com/photo-1541689221361-5a5e07c24b25?q=80&w=1000&auto=format&fit=crop'

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
        image: IMAGE_SIGIRIYA,
        blurb: 'Climb the famous ancient rock palace in the jungle.',
        tags: ['History', 'Nature', 'Views'],
    },
    {
        name: 'Ella',
        slug: 'ella-hill-country',
        region: 'Hill Country',
        image: IMAGE_ELLA,
        blurb: 'A beautiful mountain village with tea gardens, waterfalls, and the Nine Arch Bridge.',
        tags: ['Mountains', 'Tea', 'Hiking'],
    },
    {
        name: 'Yala National Park',
        slug: 'yala-safari',
        region: 'South Coast',
        image: IMAGE_YALA,
        blurb: 'Go on a safari to see wild elephants and leopards.',
        tags: ['Wildlife', 'Safari', 'Nature'],
    },
    {
        name: 'Galle Fort',
        slug: 'galle-dutch-fort',
        region: 'South Coast',
        image: IMAGE_GALLE,
        blurb: 'Walk around the old Dutch fort by the sea.',
        tags: ['Heritage', 'Coastal', 'Architecture'],
    },
    {
        name: 'Mirissa',
        slug: 'mirissa-beach',
        region: 'South Coast',
        image: IMAGE_MIRISSA,
        blurb: 'Relax on the beach, surf, and go whale watching.',
        tags: ['Beach', 'Whales', 'Relaxation'],
    },
    {
        name: 'Kandy',
        slug: 'kandy-temple-of-tooth',
        region: 'Central Province',
        image: IMAGE_KANDY,
        blurb: 'Visit the famous Temple of the Tooth in this beautiful city.',
        tags: ['Culture', 'Heritage', 'Temple'],
    },
    {
        name: 'Arugam Bay',
        slug: 'arugam-bay-surfing',
        region: 'East Coast',
        image: IMAGE_ARUGAM_BAY,
        blurb: 'Catch the best waves in Sri Lanka at this world-famous surfing destination.',
        tags: ['Beach', 'Surfing', 'Relaxation'],
    },
    {
        name: 'Udawalawe Safari',
        slug: 'udawalawe-national-park',
        region: 'Sabaragamuwa Province',
        image: IMAGE_UDAWALAWE,
        blurb: 'Experience incredible wildlife sightings, especially large herds of elephants.',
        tags: ['Wildlife', 'Safari', 'Nature'],
    },
]
