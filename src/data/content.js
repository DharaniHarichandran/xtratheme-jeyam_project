export const phone = '+1 (818) 23 45 678'
export const phoneHref = 'tel:+18182345678'

export const navItems = [
  { id: 'home', label: 'Home', to: '/', icon: true },
  { id: 'about', label: 'About', to: '/about' },
  { id: 'services', label: 'Services', to: '/services' },
  { id: 'faq', label: 'FAQ', to: '/faq' },
  { id: 'blog', label: 'Blog', to: '/blog' },
  {
    id: 'pages',
    label: 'Pages',
    to: '/about',
    children: [
      { label: 'Shop', to: '/shop' },
      { label: 'Cart', to: '/cart' },
      { label: 'Wishlist', to: '/wishlist' },
      { label: 'My account', to: '/account' },
      {
        label: 'Dropdown menu',
        to: '/about',
        children: [
          { label: 'Submenu 1', to: '/about' },
          { label: 'Submenu 2', to: '/services' },
        ],
      },
    ],
  },
  { id: 'contact', label: 'Contact', to: '/contact' },
]

export const slides = [
  {
    id: 1,
    type: 'split',
    eyebrow: 'Why choose us?',
    titleLines: [
      { text: 'START', accent: false },
      { text: 'NEW', accent: false },
      { text: 'PROJECTS', accent: true },
    ],
    subtitle: "Don't get framed by the competition, trust our solid reputation.",
    image: '/images/man-model.png',
    imageAlt: 'Construction worker wearing a hard hat on a building site',
    videoUrl: 'https://www.youtube.com/embed/FyS_zcvmUr4',
  },
  {
    id: 2,
    type: 'photo',
    image: '/images/slide-2.jpg',
    imageAlt: 'Construction team working on a large building project',
    headline: 'Committed to superior quality and results',
    subhead: "We'll get it done, like us there are none",
  },
]

export const features = [
  {
    title: 'Building Engineering',
    icon: '/images/s1.png',
    image: '/images/service-1.jpg',
    text: 'A Building Engineer is recognised as being expert in the use of technology for the design, construction, assessment and maintenance of the built environment.',
  },
  {
    title: 'Safety First',
    icon: '/images/s2.png',
    image: '/images/service-2.jpg',
    text: 'Safety First explores the challenges at the heart of needlestick and sharps safety and highlights promising efforts to ensure patient and health care worker safety in hospitals.',
  },
  {
    title: 'Road Construction',
    icon: '/images/s3.png',
    image: '/images/service-3.jpg',
    text: 'The construction of a new road whether from asphalt or concrete requires the production of an bonded pavement structure, beginning with a stable base.',
  },
]

export const aboutChecks = [
  'Excellent engineering',
  'Modern & up to date',
  'Grade #1 materials',
  'Structures with long life',
]

export const services = [
  {
    slug: 'building',
    title: 'Building',
    icon: '/images/s1.png',
    image: '/images/service-1.jpg',
    text: 'A building, or edifice, is a structure with a roof and walls standing.',
  },
  {
    slug: 'road-construction',
    title: 'Road Construction',
    icon: '/images/s2.png',
    image: '/images/service-2.jpg',
    text: 'Road construction involves the use of asphalt, liquid asphalt, concrete, soil stabilization, rebar, paving and pavement recycling machines, and other road repair materials.',
  },
  {
    slug: 'maintenance',
    title: 'Maintenance',
    icon: '/images/s3.png',
    image: '/images/service-3.jpg',
    text: 'All are assigned responsibilities relate to the maintenance mode.',
  },
]

export const processSteps = [
  {
    number: '01',
    title: 'Agency / Bidding',
    text: 'Ensure design documents are reviewed and permitted',
  },
  {
    number: '02',
    title: 'Construction',
    text: 'Helps to coordinate furnishings and move-in process',
  },
  {
    number: '03',
    title: 'Project Execution',
    text: 'Client directs move in of equipment, operations & staff',
  },
]

export const projects = [
  {
    slug: 'riverview-green-building',
    title: 'Riverview Green Building',
    categories: 'Building, Road Construction',
    image: '/images/project-1.jpg',
  },
  {
    slug: 'the-langham-hotel',
    title: 'The Langham Hotel',
    categories: 'Building, Construction',
    image: '/images/project-2.jpg',
  },
  {
    slug: 'villa-rustica-renovation',
    title: 'Villa Rustica Renovation',
    categories: 'Construction, Road Construction',
    image: '/images/project-3.jpg',
  },
  {
    slug: 'land-rustica-renovation',
    title: 'Land Rustica Renovation',
    categories: 'Building, Maintenance',
    image: '/images/project-4.jpg',
  },
  {
    slug: 'kitchen-and-living-room',
    title: 'Kitchen And Living Room',
    categories: 'Architecture, Building',
    image: '/images/project-5.jpg',
  },
  {
    slug: 'house-under-the-palms',
    title: 'House Under The Palms',
    categories: 'Construction, Road Construction',
    image: '/images/project-6.jpg',
  },
  {
    slug: 'green-house',
    title: 'Green House',
    categories: 'Construction, Road Construction',
    image: '/images/project-7.jpg',
  },
  {
    slug: 'inside-renovation',
    title: 'Inside renovation',
    categories: 'Construction, Road Construction',
    image: '/images/project-8.jpg',
  },
]

export const departments = [
  'Business Departemant',
  'Personal Departemant',
  'Support Departemant',
  'Others',
]

export const testimonials = [
  {
    name: 'Richard Dowson',
    photo: '/images/team1.jpg',
    quote:
      'Great Experience!! Michael has made the whole process easy from the planning stage to the final plant going in. Steve & his crew did a great job. I felt like Lavish Gardens really listened to what I wanted, gave me ideas, and helped me decide how to make my backyard a place to relax and enjoy the view.',
  },
  {
    name: 'Lisa Jordan',
    photo: '/images/team2.jpg',
    quote:
      'I just wanted to say thank you to all of you for being so fun to work with and being rock stars with the best attitudes EVER on this 16th floor build for SPS. It means a great deal to me that you all come to the table every week with smiles on your faces and ready to solve whatever issue.',
  },
  {
    name: 'Michael Anderson',
    photo: '/images/team3.jpg',
    quote:
      "Greiner has been a critical partner to us on the redevelopment of West End Center Office Park. The team of project managers, supervisors, and their support teams can't be rivaled by any other contractor I have worked with over the past 15 years.",
  },
]

export const clientLogos = [
  { src: '/images/client-4.png', alt: 'Construction logo' },
  { src: '/images/client-5.png', alt: 'Building construction logo' },
  { src: '/images/client-3.png', alt: 'Client logo 3' },
  { src: '/images/client-1.png', alt: 'Solutions construction logo' },
  { src: '/images/client-2.png', alt: 'Construction company logo' },
]

export const searchIndex = [
  { label: 'Home', to: '/' },
  { label: 'About our company', to: '/about' },
  { label: 'Construction services', to: '/services' },
  { label: 'Latest projects', to: '/#projects' },
  { label: 'Request a quote', to: '/contact' },
  { label: 'FAQ', to: '/faq' },
  { label: 'Blog', to: '/blog' },
  { label: 'Shop', to: '/shop' },
]

export const innerPages = {
  about: {
    title: 'About',
    kicker: 'ABOUT OUR COMPANY',
    body: 'Always dedicated and devoted. Slogan creation for your construction company is crucial for the overall branding. We combine excellent engineering, grade #1 materials, and structures built for a long life.',
  },
  services: {
    title: 'Services',
    kicker: 'WHAT WE CAN DO FOR YOU',
    body: 'Building, road construction, and maintenance services delivered with a safety-first approach and modern construction methods.',
  },
  faq: {
    title: 'FAQ',
    kicker: 'COMMON QUESTIONS',
    body: 'This page stands in for the original FAQ destination. Browse services, request a quote, or contact the team for project-specific answers.',
  },
  blog: {
    title: 'Blog',
    kicker: 'NEWS & ARTICLES',
    body: 'This page stands in for the original blog destination. Project stories and construction updates can be published here.',
  },
  contact: {
    title: 'Contact',
    kicker: 'GET IN TOUCH',
    body: 'Call us or send a quotation request. This demo does not send email; validated messages stay in the browser.',
  },
  shop: {
    title: 'Shop',
    kicker: 'ONLINE STORE',
    body: 'This page stands in for the original WooCommerce shop. No products are for sale in this frontend reconstruction.',
  },
  cart: {
    title: 'Cart',
    kicker: 'YOUR CART',
    body: 'Your cart is empty. This is a visual reconstruction of the original cart destination.',
  },
  wishlist: {
    title: 'Wishlist',
    kicker: 'SAVED ITEMS',
    body: 'Your wishlist is empty. This page stands in for the original wishlist destination.',
  },
  account: {
    title: 'My account',
    kicker: 'CUSTOMER AREA',
    body: 'This page stands in for the original account destination. No customer accounts are created in this demo.',
  },
  privacy: {
    title: 'Privacy Policy',
    kicker: 'LEGAL',
    body: 'This reconstruction uses publicly available demo content from the XTRA Construction 2 theme for a hiring assessment. No personal data is stored on a server.',
  },
}
