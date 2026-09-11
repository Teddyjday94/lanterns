export const skillGroups = [
  {
    label: "Build",
    eyebrow: "Interactive systems",
    summary: "Useful interfaces with atmosphere, structure, and a reason to keep exploring.",
    skills: ["Responsive interfaces", "Narrative UI", "Interaction design"],
  },
  {
    label: "Broadcast",
    eyebrow: "Live connection",
    summary: "Gaming stories shaped for live audiences, short-form clips, and community moments.",
    skills: ["Live hosting", "Channel concepts", "Community engagement"],
  },
  {
    label: "Motion",
    eyebrow: "Ideas in movement",
    summary: "Animation studies that give characters, interfaces, and moments a readable pulse.",
    skills: ["Pixel animation", "Motion direction", "Visual timing"],
  },
  {
    label: "Worldcraft",
    eyebrow: "Original universes",
    summary: "Game concepts built from a strong hook, clear systems, and worlds worth entering.",
    skills: ["Worldbuilding", "Game systems", "Narrative concepts"],
  },
];

export function getSkillGroup(label) {
  return skillGroups.find((group) => group.label === label) ?? skillGroups[0];
}

export const projects = [
  {
    title: "Cinderella's Pet Palace",
    category: "Websites",
    status: "Published",
    description: "A colorful local grooming site built around real pets, services, and easy booking.",
    tags: ["Local business", "Photo gallery", "Responsive UI"],
    image: "/projects/cinderellas-pet-palace-home.webp",
    visualType: "screenshot",
    url: "https://cinderellas-pet-palace.vercel.app/",
  },
  {
    title: "HandFX",
    category: "Websites",
    status: "Published",
    description: "A browser-based visual effects rig that turns webcam hand tracking into reactive light and motion.",
    tags: ["Hand tracking", "Creative coding", "Interactive effects"],
    image: "/projects/handfx-home.webp",
    visualType: "screenshot",
    url: "https://handfx-three.vercel.app/",
  },
  {
    title: "The Chocolate Oracle",
    category: "Websites",
    status: "In development",
    description: "A colorful website concept for my friend's sweets business.",
    tags: ["Responsive UI", "Brand storytelling", "Motion"],
    image: "/projects/chocolate-oracle-home.webp",
    visualType: "screenshot",
    url: "https://chocolateoracle.vercel.app/",
  },
  {
    title: "The Black Faction Network",
    category: "Websites",
    status: "In development",
    description: "A fantasy fan hub built around riders, ravens, and reported sightings.",
    tags: ["Interaction design", "Narrative UI", "Content systems"],
    image: "/projects/black-faction-home.webp",
    visualType: "screenshot",
    url: "https://targaryan.vercel.app/",
  },
  {
    title: "Loop & Petal",
    category: "Websites",
    status: "Published",
    description: "A colorful crochet studio site for handmade pieces and commissions.",
    tags: ["Responsive UI", "Product gallery", "Brand design"],
    image: "/projects/loop-and-petal-home.webp",
    visualType: "screenshot",
    url: "https://loop-and-petal.vercel.app/",
  },
  {
    title: "Helping Hands Lawn Care",
    category: "Websites",
    status: "Published",
    description: "A lawn-care site focused on local service, clear options, and quick contact.",
    tags: ["Local business", "Service design", "Responsive UI"],
    image: "/projects/helping-hands-home.webp",
    visualType: "screenshot",
    url: "https://helping-hands-coral-alpha.vercel.app/",
  },
  {
    title: "Vargo Automotive",
    category: "Websites",
    status: "Published",
    description: "A straightforward auto repair site built around trust, services, and easy contact.",
    tags: ["Local business", "Information design", "Responsive UI"],
    image: "/projects/vargo-home.webp",
    visualType: "screenshot",
    url: "https://vargo-seven.vercel.app/",
  },
  {
    title: "Aim to Please Salon & Gifts",
    category: "Websites",
    status: "Published",
    description: "A bright local-business site for a Gonzales salon and gift shop.",
    tags: ["Brand design", "Local business", "Responsive UI"],
    image: "/projects/aim-to-please-home.webp",
    visualType: "screenshot",
    url: "https://aim2please.vercel.app/",
  },
  {
    title: "Ascension Wash N' Geaux",
    category: "Websites",
    status: "Published",
    description: "A service site for a local pressure-washing crew with strong before-and-after proof.",
    tags: ["Service design", "Lead generation", "Responsive UI"],
    image: "/projects/ascension-wash-home.webp",
    visualType: "screenshot",
    url: "https://awag-preview.vercel.app/",
  },
  {
    title: "Table Scraps",
    category: "Websites",
    status: "Published",
    description: "A dog-safe ingredient guide that helps people check dinner before sharing it.",
    tags: ["Product design", "Data interface", "Responsive UI"],
    image: "/projects/table-scraps-home.webp",
    visualType: "screenshot",
    url: "https://tablescraps.vercel.app/",
  },
  {
    title: "Asterion the Unmarred",
    category: "Animation",
    status: "Concept",
    description: "A pixel-art boss concept with idle, attack, hit, and death animations.",
    tags: ["Pixel art direction", "Animation states", "Game feel"],
    image: "/projects/asterion.webp",
    visualType: "artwork",
  },
];

export function filterProjects(category) {
  if (category === "All work") return projects;
  return projects.filter((project) => project.category === category);
}
