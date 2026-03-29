export const designTokens = {
  heroStyle: "cinematic",
  typography: {
    heading: "Sora",
    body: "Inter",
    display: "Space Grotesk",
  },
  effects: {
    noise: true,
    glassmorphism: "none",
    floatingShapes: false,
    scrollProgress: true,
    meshGradient: false,
    gradientBorders: false,
    cursorGlow: false,
  },
  animationPreset: "dramatic",
  serviceCardStyle: "overlay",
  projectGridStyle: "bento",
  testimonialStyle: "cards",
  statsStyle: "overlay",
  bgPattern: "none",
  homeSectionOrder: [
    "hero", "stats", "services", "projects", "whyChooseUs", "testimonials", "cta"
  ],
};

const siteData = {
  business: {
    name: "Protinterz",
    legalName: "Protinterz (Pvt) Ltd",
    tagline: "Print That Speaks",
    description:
      "Harare's bold printing and branding agency delivering large format printing, vehicle wrapping, signage, business cards, banners, and branded merchandise that makes businesses impossible to ignore.",
    phone: "+263 77 258 0030",
    phoneRaw: "+263772580030",
    whatsappNumber: "263772580030",
    email: "info@protinterz.co.zw",
    address: "Harare, Zimbabwe",
    country: "Zimbabwe",
    city: "Harare",
    rating: 4.8,
    ratingRounded: 5,
    reviewCount: 67,
    established: "2016",
    yearsExperience: "9+",
    projectsCompleted: "5,000+",
    employees: "25+",
    coordinates: { lat: -17.8292, lng: 31.0522 },
    hours: [
      { day: "Monday - Friday", time: "7:30 AM - 5:30 PM" },
      { day: "Saturday", time: "8:00 AM - 2:00 PM" },
      { day: "Sunday", time: "Closed" },
    ],
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3798.5!2d31.0522!3d-17.8292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDQ5JzQ1LjEiUyAzMcKwMDMnMDcuOSJF!5e0!3m2!1sen!2szw!4v1700000000000!5m2!1sen!2szw",
    cookieConsentKey: "protinterz-cookie-consent",
    socialLinks: {
      facebook: "#",
      instagram: "#",
      linkedin: "#",
    },
  },

  navbar: {
    logoImage: null,
    logoLine1: "PROT",
    logoLine2: "INTERZ",
  },

  hero: {
    badge: "Large Format Printing & Branding",
    titleParts: [
      { text: "Print " },
      { text: "That Speaks.", highlight: true },
    ],
    subtitle:
      "From billboard-sized banners to precision vehicle wraps. Business cards that demand a second look. Signage that stops traffic. We do not just print. We make brands impossible to ignore.",
    ctaPrimary: "Get a Quote",
    ctaSecondary: "View Our Work",
    trustBadge: "5,000+ Projects Delivered",
    backgroundImages: [
      { url: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=1920&q=80", alt: "Large format printing press in operation" },
      { url: "https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=1920&q=80", alt: "Professional signage and branding" },
      { url: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1920&q=80", alt: "Creative design and printing studio" },
    ],
  },

  stats: [
    { number: "5,000+", label: "Projects Printed" },
    { number: "1,000+", label: "Businesses Branded" },
    { number: "9+", label: "Years in Print" },
    { number: "25+", label: "Specialists" },
  ],

  servicesPreview: [
    {
      iconName: "Image",
      title: "Large Format Printing",
      desc: "Billboards, wall graphics, floor graphics, and exhibition displays. UV-resistant inks on premium substrates. Built to last outdoors and demand attention.",
    },
    {
      iconName: "Car",
      title: "Vehicle Wrapping",
      desc: "Full wraps, partial wraps, and fleet branding. 3M and Avery vinyl that transforms your vehicle into a mobile billboard. Professional installation with warranty.",
    },
    {
      iconName: "Flag",
      title: "Signage",
      desc: "Illuminated signs, channel letters, pylons, and directional signage. From concept to installation. Built to building regulations and built to last.",
    },
    {
      iconName: "Notebook",
      title: "Business Cards & Stationery",
      desc: "Spot UV, foil stamping, embossing, and die-cut cards. Letterheads, compliment slips, and envelopes. First impressions that close deals.",
    },
    {
      iconName: "Flag",
      title: "Banners & Flags",
      desc: "Pull-up banners, teardrop flags, A-frames, and hanging banners. Lightweight, portable, and trade-show ready. Same-day turnaround available.",
    },
    {
      iconName: "TShirt",
      title: "Branded Merchandise",
      desc: "T-shirts, caps, mugs, pens, lanyards, and corporate gifts. Embroidery, screen printing, and sublimation. Your brand on everything people touch.",
    },
  ],

  featuredProjects: [
    {
      image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&q=80",
      title: "Fleet Branding — Logistics Company",
      category: "Vehicle Wrapping",
    },
    {
      image: "https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&q=80",
      title: "Shopfront Signage — Retail Chain",
      category: "Signage",
    },
    {
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
      title: "Exhibition Stand — Mining Expo",
      category: "Large Format",
    },
  ],

  whyChooseUs: {
    titleParts: [
      { text: "Why " },
      { text: "Protinterz?", highlight: true },
    ],
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&q=80",
    imageAlt: "Protinterz printing workshop",
    experienceYears: "5,000+",
    experienceLabel: "Projects Delivered",
    points: [
      {
        title: "In-House Production",
        desc: "No outsourcing. Every print job runs through our own equipment. This means faster turnaround, tighter quality control, and lower prices.",
      },
      {
        title: "Premium Materials Only",
        desc: "3M vinyl, Avery film, UV-resistant inks, and heavyweight paper stock. We do not cut corners on materials because your brand is on the line.",
      },
      {
        title: "Design to Delivery",
        desc: "From concept and design through production to installation. One team, one invoice, one point of accountability.",
      },
      {
        title: "Same-Day Turnaround",
        desc: "Need business cards tomorrow? Banners for a trade show this afternoon? Rush orders are our specialty. We thrive under pressure.",
      },
    ],
  },

  homeCta: {
    backgroundImage: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=1920&q=80",
    backgroundAlt: "Printing press in action",
    titleParts: [
      { text: "Ready to " },
      { text: "Print?", highlight: true },
    ],
    subtitle:
      "Send us your artwork or let our designers create something fresh. Free quotes within an hour. Rush orders welcome. Your brand deserves to be seen.",
    ctaPrimary: "Get a Free Quote",
    whatsappText:
      "Hi Protinterz! I need a printing quote. Can you help?",
  },

  homeTestimonials: [
    {
      name: "Tendai Moyo",
      role: "Marketing Director, Steward Bank",
      text: "Protinterz branded our entire fleet of 30 vehicles. Clean wraps, precise installation, and they finished ahead of schedule. The quality of the 3M vinyl is outstanding — still looks perfect after two years.",
      rating: 5,
    },
    {
      name: "Chiedza Nhamo",
      role: "Events Coordinator",
      text: "They printed exhibition stands, banners, business cards, and merchandise for our mining expo. Everything was delivered on time and the quality was better than the South African suppliers we used to use. Never going back.",
      rating: 5,
    },
    {
      name: "Kudzai Mapfumo",
      role: "Restaurant Owner",
      text: "The shopfront signage Protinterz designed and installed completely changed how people see our restaurant. Foot traffic increased 40% in the first month. The illuminated sign looks incredible at night.",
      rating: 5,
    },
  ],

  // ====== ABOUT PAGE ======
  about: {
    heroTitle: [{ text: "Ink in " }, { text: "Our Blood.", highlight: true }],
    heroSubtitle: "Protinterz was built by people who believe that print is not dead — it is just waiting for the right hands.",
    storyImage: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&q=80",
    storyImageAlt: "Protinterz production facility",
    storyProjectCount: "5,000+",
    storyProjectLabel: "Jobs Printed",
    storyTitle: "From a Single Press to Harare's Boldest Print Shop.",
    storyParagraphs: [
      "Protinterz started in 2016 with one large format printer and a garage full of ambition. We saw an industry full of slow turnaround, poor quality, and imported prices. We decided to build the print shop we wished existed.",
      "We invested in top-tier equipment — Roland, Mimaki, and HP Latex printers. We sourced 3M and Avery vinyl directly. We hired installers who take pride in bubble-free wraps and perfectly aligned signage.",
      "Today, we run one of Harare's largest in-house print operations. Five thousand projects later, our reputation speaks: fast, precise, and bold. If your brand needs to be seen, we are the people you call.",
    ],
    mission: "To make every brand visible, memorable, and impossible to ignore through the power of exceptional print and branding.",
    vision: "To be Zimbabwe's most respected print and branding agency — known for speed, quality, and creative fearlessness.",
    values: [
      { iconName: "Lightning", title: "Speed", desc: "Same-day turnaround is not a gimmick. It is how we operate. Urgency is in our DNA." },
      { iconName: "Eye", title: "Precision", desc: "Every millimeter matters. Color matching, alignment, finishing — we are obsessive about detail." },
      { iconName: "Rocket", title: "Boldness", desc: "Safe design is invisible design. We push creative boundaries because timid print gets ignored." },
      { iconName: "Handshake", title: "Reliability", desc: "We deliver what we promise, when we promise it. Full stop." },
      { iconName: "Leaf", title: "Sustainability", desc: "Eco-friendly inks and recyclable substrates wherever possible." },
      { iconName: "Heart", title: "Pride", desc: "Every print job carries our name. We treat your brand like our own." },
    ],
    team: [
      { name: "Peter Nhamo", role: "Founder & Creative Director", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80" },
      { name: "Tatenda Mhizha", role: "Production Manager", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80" },
      { name: "Ruvimbo Chitema", role: "Lead Designer", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80" },
      { name: "Blessing Dube", role: "Installation Lead", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80" },
    ],
    milestones: [
      { year: "2016", title: "Protinterz Founded", desc: "One printer, one garage, unlimited ambition." },
      { year: "2017", title: "Vehicle Wrapping", desc: "Added 3M certified vehicle wrapping to our services." },
      { year: "2019", title: "Signage Division", desc: "Launched illuminated signage manufacturing." },
      { year: "2020", title: "1,000 Projects", desc: "Crossed 1,000 completed printing projects." },
      { year: "2022", title: "Fleet Branding", desc: "Landed first major fleet contract — 30 vehicles." },
      { year: "2024", title: "5,000+ Projects", desc: "Surpassed 5,000 projects. Largest in-house print facility in Harare." },
    ],
    ctaTitle: "Let Us Print Your Vision",
    ctaSubtitle: "Send us your artwork or brief. Free quote within an hour.",
    ctaCta: "Get Free Quote",
  },

  // ====== SERVICES PAGE ======
  services: {
    heroTitle: [{ text: "Bold " }, { text: "Print.", highlight: true }, { text: " Bigger Impact." }],
    heroSubtitle: "Six print and branding services under one roof. Designed, printed, and installed by the same team.",
    items: [
      {
        iconName: "Image", title: "Large Format Printing", slug: "large-format-printing",
        image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&q=80",
        desc: "Billboards, wall graphics, floor decals, exhibition backdrops, and window graphics. UV-resistant inks on premium substrates rated for 3+ years outdoors.",
        features: ["Billboard and hoarding printing", "Wall and floor graphic vinyl", "Exhibition backdrop and pop-up displays", "Window graphics and one-way vision", "Canvas printing and art reproduction", "UV-resistant outdoor-rated inks"],
      },
      {
        iconName: "Car", title: "Vehicle Wrapping", slug: "vehicle-wrapping",
        image: "https://images.unsplash.com/photo-1625047509248-ec889cbff17f?w=800&q=80",
        desc: "Full wraps, partial wraps, and fleet branding using 3M and Avery vinyl. Bubble-free installation with 5-year warranty on materials.",
        features: ["Full vehicle wraps", "Partial wraps and accent graphics", "Fleet branding (5+ vehicles)", "3M and Avery certified vinyl", "Color change wraps", "5-year material warranty"],
      },
      {
        iconName: "Flag", title: "Signage", slug: "signage",
        image: "https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&q=80",
        desc: "Illuminated signs, channel letters, pylons, fascia boards, and directional signage. From design to fabrication to installation.",
        features: ["LED illuminated signage", "3D channel letters", "Pylon and monument signs", "Fascia boards and shopfronts", "Directional and wayfinding signage", "Electrical certification included"],
      },
      {
        iconName: "Notebook", title: "Business Cards & Stationery", slug: "business-cards",
        image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
        desc: "Premium business cards with spot UV, foil, embossing, and die-cut options. Plus letterheads, envelopes, and branded folders.",
        features: ["Spot UV and matte lamination", "Gold and silver foil stamping", "Embossing and debossing", "Die-cut custom shapes", "Letterheads and compliment slips", "Same-day printing available"],
      },
      {
        iconName: "Flag", title: "Banners & Flags", slug: "banners-flags",
        image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&q=80",
        desc: "Pull-up banners, teardrop flags, X-banners, A-frames, and hanging banners for events, trade shows, and retail.",
        features: ["Pull-up / roll-up banners", "Teardrop and feather flags", "X-frame and A-frame banners", "PVC and mesh outdoor banners", "Fabric hanging banners", "Same-day turnaround available"],
      },
      {
        iconName: "TShirt", title: "Branded Merchandise", slug: "branded-merchandise",
        image: "https://images.unsplash.com/photo-1562157873-818bc0726f68?w=800&q=80",
        desc: "Corporate gifts and promotional products. T-shirts, caps, mugs, pens, notebooks, USB drives, and lanyards.",
        features: ["Screen printing and DTG t-shirts", "Embroidered caps and polos", "Sublimation mugs and bottles", "Branded pens, notebooks, and USBs", "Corporate gift hampers", "Minimum order: 20 pieces"],
      },
    ],
    ctaTitle: "Need Something Custom?",
    ctaSubtitle: "From concept to delivery. Send your brief and we will make it real.",
  },

  // ====== PROJECTS PAGE ======
  projects: {
    heroTitle: [{ text: "Our " }, { text: "Portfolio.", highlight: true }],
    heroSubtitle: "Real work for real businesses. Every project shown here was designed, printed, and delivered by Protinterz.",
    categories: ["All", "Vehicle Wrapping", "Signage", "Large Format", "Merchandise", "Events"],
    items: [
      { id: 1, title: "30-Vehicle Fleet — Logistics Company", category: "Vehicle Wrapping", location: "Harare", year: "2024", image: "https://images.unsplash.com/photo-1625047509248-ec889cbff17f?w=800&q=80", desc: "Full wraps on 30 delivery vehicles. 3M vinyl, 5-year warranty, completed in 6 weeks.", services: ["Vehicle Wrapping"] },
      { id: 2, title: "Shopfront Signage — Retail Chain (8 stores)", category: "Signage", location: "Nationwide", year: "2024", image: "https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&q=80", desc: "LED illuminated signage for 8 retail locations. Consistent branding across all stores.", services: ["Signage"] },
      { id: 3, title: "Mining Exhibition Stand — ZIMEC 2024", category: "Large Format", location: "Harare", year: "2024", image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80", desc: "6m x 4m exhibition backdrop, pull-up banners, business cards, and branded merchandise.", services: ["Large Format Printing", "Business Cards", "Merchandise"] },
      { id: 4, title: "Corporate Rebrand — Law Firm", category: "Events", location: "Harare", year: "2023", image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&q=80", desc: "Complete brand collateral: 5,000 business cards, letterheads, signage, and vehicle wraps.", services: ["Business Cards", "Signage", "Vehicle Wrapping"] },
      { id: 5, title: "500 Branded Polos — Mining Company", category: "Merchandise", location: "Harare", year: "2024", image: "https://images.unsplash.com/photo-1562157873-818bc0726f68?w=800&q=80", desc: "Embroidered polo shirts, caps, and branded safety vests for an entire mining operation.", services: ["Branded Merchandise"] },
      { id: 6, title: "Billboard Campaign — FMCG Brand", category: "Large Format", location: "Harare", year: "2023", image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&q=80", desc: "12 billboard-sized prints across Harare. UV-resistant inks rated for 3+ years outdoor exposure.", services: ["Large Format Printing"] },
    ],
  },

  // ====== REVIEWS PAGE ======
  reviews: {
    heroTitle: [{ text: "What They " }, { text: "Say.", highlight: true }],
    heroSubtitle: "Our clients are our best salespeople. Here is what they think about our work.",
    ratingBreakdown: { 5: 52, 4: 11, 3: 3, 2: 1, 1: 0 },
    items: [
      { name: "Tendai Moyo", role: "Marketing Director, Steward Bank", text: "Branded 30 vehicles. Still perfect after two years. Outstanding quality.", rating: 5, date: "1 month ago", project: "Vehicle Wrapping", avatar: "https://lh3.googleusercontent.com/a/default-user=s120-c" },
      { name: "Chiedza Nhamo", role: "Events Coordinator", text: "Exhibition stands, banners, cards, merchandise — all delivered on time and better than imports.", rating: 5, date: "2 months ago", project: "Large Format", avatar: "https://lh3.googleusercontent.com/a/default-user=s120-c" },
      { name: "Kudzai Mapfumo", role: "Restaurant Owner", text: "Foot traffic up 40% after the new illuminated signage. Incredible design and installation.", rating: 5, date: "3 months ago", project: "Signage", avatar: "https://lh3.googleusercontent.com/a/default-user=s120-c" },
      { name: "Farai Chimbetete", role: "HR Manager, Mining Corp", text: "500 embroidered polos and 200 branded caps. Perfect quality, fast delivery, fair pricing.", rating: 5, date: "4 months ago", project: "Branded Merchandise", avatar: "https://lh3.googleusercontent.com/a/default-user=s120-c" },
    ],
  },

  contact: {
    heroTitle: [{ text: "Let Us " }, { text: "Print.", highlight: true }],
    heroSubtitle: "Send artwork, describe your project, or request a quote. We respond within an hour.",
    formTitle: "Request a Quote",
    formSubtitle: "Tell us what you need and we will price it fast.",
  },

  careers: {
    heroTitle: [{ text: "Join the " }, { text: "Press.", highlight: true }],
    heroSubtitle: "We are hiring designers, printers, and installers who take pride in bold work.",
    perks: [
      { iconName: "Star", title: "Creative Freedom", desc: "Design work you are proud to put in your portfolio." },
      { iconName: "Heart", title: "Health Cover", desc: "Medical aid for you and your family." },
      { iconName: "Wrench", title: "Equipment", desc: "Work on Roland, Mimaki, and HP Latex printers." },
      { iconName: "GraduationCap", title: "Growth", desc: "3M and Avery installation certification funded." },
    ],
    positions: [
      { title: "Graphic Designer", department: "Creative", type: "Full-time", location: "Harare", desc: "Design print-ready artwork for large format, signage, and branding projects." },
      { title: "Vehicle Wrap Installer", department: "Production", type: "Full-time", location: "Harare", desc: "Install vinyl wraps on vehicles. 3M certification a plus." },
    ],
  },

  footer: {
    tagline: "Bold print and branding that makes businesses impossible to ignore.",
    bottomLinks: [
      { label: "Privacy Policy", url: "/privacy" },
      { label: "Terms of Service", url: "/terms" },
    ],
  },
};

export default siteData;
