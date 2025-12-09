/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { Product, JournalArticle } from './types';

export const BRAND_NAME = 'NEXUS';

export const PRODUCTS: Product[] = [
  // --- COMPUTING ---
  {
    id: 'c1',
    name: 'Blade X1 Carbon',
    tagline: 'Portable power.',
    description: 'Ultra-thin magnesium alloy laptop with integrated AI processing unit.',
    longDescription: 'The Blade X1 Carbon is the ultimate tool for the nomadic engineer. Weighing just 980g, it packs a 16-core processor and a dedicated NPU for local LLM execution. The 4K OLED display covers 100% DCI-P3 color space.',
    price: 1999,
    originalPrice: 2199,
    category: 'Computing',
    imageUrl: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&q=80&w=1000',
    gallery: [
        'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?auto=format&fit=crop&q=80&w=1000',
        'https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?auto=format&fit=crop&q=80&w=1000'
    ],
    features: ['16-Core CPU', 'Local NPU', 'Magnesium Chassis', '4K OLED']
  },
  {
    id: 'c2',
    name: 'Obelisk Tower',
    tagline: 'The monolith.',
    description: 'Liquid-cooled workstation chassis with sound dampening architecture.',
    price: 349,
    category: 'Computing',
    imageUrl: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&q=80&w=1000',
    features: ['Dual Chamber', 'Acoustic Dampening', 'E-ATX Support', 'Vertical GPU Mount']
  },
  {
    id: 'c3',
    name: 'CyberDeck Go',
    tagline: 'Hacking evolved.',
    description: 'Modular portable terminal with mechanical keys and transparent chassis.',
    price: 899,
    category: 'Computing',
    imageUrl: 'https://images.unsplash.com/photo-1587831990711-23ca6441447b?auto=format&fit=crop&q=80&w=1000',
    gallery: [
        'https://images.unsplash.com/photo-1555618568-963d8d6447c2?auto=format&fit=crop&q=80&w=1000'
    ],
    features: ['Modular GPIO', 'Mechanical Keys', 'Transparent Design', 'Linux Native']
  },
  {
    id: 'c4',
    name: 'Core Station Pro',
    tagline: 'Desktop reimagined.',
    description: 'Compact form factor PC with external GPU support.',
    price: 1299,
    originalPrice: 1499,
    category: 'Computing',
    imageUrl: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?auto=format&fit=crop&q=80&w=1000',
    features: ['Thunderbolt 4', '32GB RAM', '2TB NVMe', 'Silent Fan']
  },

  // --- GAMING ---
  {
    id: 'g1',
    name: 'Nexus Console X',
    tagline: 'Next-gen reality.',
    description: '8K ready gaming console with 12TB SSD and custom silicon.',
    price: 599,
    originalPrice: 699,
    category: 'Gaming',
    imageUrl: 'https://images.unsplash.com/photo-1605901309584-818e25960b8f?auto=format&fit=crop&q=80&w=1000',
    gallery: [
        'https://images.unsplash.com/photo-1592840496053-812c25d0e3df?auto=format&fit=crop&q=80&w=1000'
    ],
    features: ['8K 60FPS', 'Ray Tracing', '12TB Storage', 'Haptic Controller']
  },
  {
    id: 'g2',
    name: 'Handheld Alpha',
    tagline: 'Power in your palms.',
    description: 'Portable PC gaming handheld with 7-inch OLED and hall effect joysticks.',
    price: 649,
    category: 'Gaming',
    imageUrl: 'https://images.unsplash.com/photo-1531297424005-06342e7f3947?auto=format&fit=crop&q=80&w=1000',
    features: ['Ryzen Z1', '120Hz OLED', 'Windows 11', 'MicroSD Expansion']
  },
  {
    id: 'g3',
    name: 'Pro Controller Elite',
    tagline: 'Total control.',
    description: 'Wireless controller with swappable modules and rear paddles.',
    price: 199,
    category: 'Gaming',
    imageUrl: 'https://images.unsplash.com/photo-1592840496053-812c25d0e3df?auto=format&fit=crop&q=80&w=1000',
    gallery: [
        'https://images.unsplash.com/photo-1600080972464-8cb008c98c7e?auto=format&fit=crop&q=80&w=1000'
    ],
    features: ['Mechanical Switches', 'Zero Deadzone', '40h Battery', 'Custom Profiles']
  },

  // --- MOBILE ---
  {
    id: 'm1',
    name: 'Nexus Phone V',
    tagline: 'Pure signal.',
    description: 'Ceramic body smartphone with privacy-first OS and satellite connectivity.',
    price: 999,
    originalPrice: 1099,
    category: 'Mobile',
    imageUrl: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&q=80&w=1000',
    gallery: [
        'https://images.unsplash.com/photo-1598327105666-5b89351aff23?auto=format&fit=crop&q=80&w=1000'
    ],
    features: ['Ceramic Body', 'Satellite Comms', 'Hardened OS', 'Physical Kill Switches']
  },
  {
    id: 'm2',
    name: 'Fold Z Pro',
    tagline: 'Expand your vision.',
    description: 'Tri-fold display technology allowing a tablet experience in a phone form factor.',
    price: 1799,
    originalPrice: 1899,
    category: 'Mobile',
    imageUrl: 'https://images.unsplash.com/photo-1627906936647-12356c9d7842?auto=format&fit=crop&q=80&w=1000',
    features: ['Tri-Fold OLED', 'Stylus Support', 'Snapdragon 9 Gen 2', '16GB RAM']
  },
  {
    id: 'm3',
    name: 'Slate Tab Ultra',
    tagline: 'Canvas for code.',
    description: '14-inch e-ink and OLED hybrid tablet for documentation and design.',
    price: 699,
    category: 'Mobile',
    imageUrl: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&q=80&w=1000',
    features: ['Hybrid Display', 'Weeks Battery', 'Wacom Layer', '5G']
  },

  // --- PHOTOGRAPHY ---
  {
    id: 'ph1',
    name: 'CineCam 6K',
    tagline: 'Hollywood in hand.',
    description: 'Compact cinema camera shooting raw 6K video with 15 stops of dynamic range.',
    price: 3499,
    originalPrice: 3999,
    category: 'Photography',
    imageUrl: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=1000',
    gallery: [
        'https://images.unsplash.com/photo-1500634245200-e5245c7574ef?auto=format&fit=crop&q=80&w=1000'
    ],
    features: ['Super 35 Sensor', 'BRAW Recording', 'Dual Native ISO', 'EF Mount']
  },
  {
    id: 'ph2',
    name: 'Lens Master 50mm',
    tagline: 'Perfect portrait.',
    description: 'f/1.2 prime lens with ultra-sonic autofocus motor.',
    price: 899,
    category: 'Photography',
    imageUrl: 'https://images.unsplash.com/photo-1617005082133-548c4dd27f35?auto=format&fit=crop&q=80&w=1000',
    features: ['f/1.2 Aperture', 'Weather Sealed', 'Nano Coating', 'Smooth Bokeh']
  },
  {
    id: 'ph3',
    name: 'Stabilizer X3',
    tagline: 'Steady shot.',
    description: '3-axis gimbal for DSLR and mirrorless cameras up to 4kg.',
    price: 499,
    originalPrice: 599,
    category: 'Photography',
    imageUrl: 'https://images.unsplash.com/photo-1585675100412-40c8cdf6aeb0?auto=format&fit=crop&q=80&w=1000',
    features: ['Carbon Fiber', '12h Battery', 'Touchscreen', 'Focus Motor']
  },

  // --- PERIPHERALS ---
  {
    id: 'p1',
    name: 'Titan Mech Key',
    tagline: 'Tactile precision.',
    description: 'Heavy industrial aluminum keyboard with solenoid feedback.',
    price: 349,
    originalPrice: 399,
    category: 'Peripherals',
    imageUrl: 'https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&fit=crop&q=80&w=1000',
    gallery: [
         'https://images.unsplash.com/photo-1595225476360-238d35678177?auto=format&fit=crop&q=80&w=1000'
    ],
    features: ['Solenoid Feedback', 'QMK/VIA', 'CNC Aluminum', 'Hot-Swap PCB']
  },
  {
    id: 'p2',
    name: 'Ghost 60%',
    tagline: 'Invisible input.',
    description: 'Transparent acrylic mechanical keyboard with south-facing RGB LEDs.',
    price: 129,
    originalPrice: 149,
    category: 'Peripherals',
    imageUrl: 'https://images.unsplash.com/photo-1563191911-e65f8655ebf9?auto=format&fit=crop&q=80&w=1000',
    features: ['Full Transparency', 'Silent Linear', 'Gasket Mount', 'Bluetooth 5.2']
  },
  {
    id: 'p3',
    name: 'Viper Ultralight',
    tagline: 'Zero drag.',
    description: 'Magnesium alloy gaming mouse weighing only 42 grams.',
    price: 129,
    category: 'Peripherals',
    imageUrl: 'https://images.unsplash.com/photo-1615663245857-acda5b247195?auto=format&fit=crop&q=80&w=1000',
    gallery: [
        'https://images.unsplash.com/photo-1629429408209-1f912961dbd8?auto=format&fit=crop&q=80&w=1000'
    ],
    features: ['42g Weight', '30K DPI', 'Magnesium Alloy', '8K Polling']
  },
  {
    id: 'p4',
    name: 'Ergo Lift Vertical',
    tagline: 'Save your wrists.',
    description: 'Vertical ergonomic mouse designed to reduce carpal tunnel strain.',
    price: 79,
    originalPrice: 89,
    category: 'Peripherals',
    imageUrl: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&q=80&w=1000',
    features: ['57° Angle', 'Multi-Device Flow', 'Silent Click', 'USB-C Charging']
  },
  {
    id: 'p5',
    name: 'Prism Monitor Arm',
    tagline: 'Floating pixels.',
    description: 'Heavy duty gas-spring monitor arm with integrated cable management.',
    price: 149,
    category: 'Peripherals',
    imageUrl: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?auto=format&fit=crop&q=80&w=1000',
    features: ['Holds 35lbs', 'RGB Base', 'Quick Release', 'Full Motion']
  },
  {
    id: 'p6',
    name: 'Desk Mat XL RGB',
    tagline: 'Surface control.',
    description: 'Micro-textured cloth surface with addressable RGB edge lighting.',
    price: 49,
    category: 'Peripherals',
    imageUrl: 'https://images.unsplash.com/photo-1616453982858-6da93c528ab3?auto=format&fit=crop&q=80&w=1000',
    features: ['Water Resistant', '900x400mm', 'Non-Slip Base', 'Software Control']
  },

  // --- AUDIO ---
  {
    id: 'a1',
    name: 'Sonic Pro X',
    tagline: 'Hear the void.',
    description: 'Open-back planar magnetic headphones for critical listening.',
    price: 499,
    category: 'Audio',
    imageUrl: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=1000',
    gallery: [
        'https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&q=80&w=1000'
    ],
    features: ['Planar Magnetic', 'Open Back', 'Velour Pads', 'Detachable Cable']
  },
  {
    id: 'a2',
    name: 'Pulse Earbuds',
    tagline: 'Rhythm in motion.',
    description: 'Active noise cancelling earbuds with transparency mode.',
    price: 199,
    originalPrice: 249,
    category: 'Audio',
    imageUrl: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&q=80&w=1000',
    features: ['ANC', '24h Battery', 'Wireless Charging', 'Low Latency']
  },
  {
    id: 'a3',
    name: 'Soundbar Cinema',
    tagline: 'Room filling.',
    description: 'Dolby Atmos soundbar with wireless subwoofer.',
    price: 699,
    originalPrice: 799,
    category: 'Audio',
    imageUrl: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&q=80&w=1000',
    features: ['Dolby Atmos', 'eARC', 'WiFi Streaming', 'Voice Control']
  },

  // --- STREAMING ---
  {
    id: 's1',
    name: 'StreamCommand Pro',
    tagline: 'Total control.',
    description: '32-key programmable LCD deck for broadcast management.',
    price: 249,
    category: 'Streaming',
    imageUrl: 'https://images.unsplash.com/photo-1520509414578-d9cbf09933a1?auto=format&fit=crop&q=80&w=1000',
    features: ['32 OLED Keys', 'Metal Faceplate', 'Haptic Touch', 'Macro Scripting']
  },
  {
    id: 's2',
    name: 'Vox Studio Mic',
    tagline: 'Broadcast clarity.',
    description: 'Dynamic XLR microphone with built-in preamp and DSP processing.',
    price: 349,
    category: 'Streaming',
    imageUrl: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&q=80&w=1000',
    features: ['Built-in Preamp', 'Internal DSP', 'Cardioid Pattern', 'Integrated Shockmount']
  },
  {
    id: 's3',
    name: 'Luma Key Light',
    tagline: 'Perfect illumination.',
    description: 'Edge-lit LED panel with adjustable color temperature.',
    price: 159,
    originalPrice: 199,
    category: 'Streaming',
    imageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000',
    features: ['2800 Lumens', 'Edge-Lit', 'WiFi Control', 'Desk Clamp']
  },

  // --- VR/AR ---
  {
    id: 'v1',
    name: 'Neural Link X1',
    tagline: 'Immerse fully.',
    description: 'Next-gen VR headset with 8K resolution per eye.',
    price: 1499,
    category: 'VR/AR',
    imageUrl: 'https://images.unsplash.com/photo-1622979135225-d2ba269fb1bd?auto=format&fit=crop&q=80&w=1000',
    features: ['8K Micro-OLED', 'Neural Tracking', 'Haptic Gloves', 'Wireless']
  },
  {
    id: 'v2',
    name: 'Glass AR Pro',
    tagline: 'Augmented reality.',
    description: 'Lightweight AR glasses that overlay digital info on the real world.',
    price: 999,
    category: 'VR/AR',
    imageUrl: 'https://images.unsplash.com/photo-1555255707-c07966088b7b?auto=format&fit=crop&q=80&w=1000',
    features: ['MicroLED', 'All-Day Battery', 'Prescription Inserts', 'Hand Tracking']
  },

  // --- COMPONENTS ---
  {
    id: 'comp1',
    name: 'Vortex GPU Ultra',
    tagline: 'Render the impossible.',
    description: '48GB VRAM graphics card with cryo-cooling chamber.',
    price: 2499,
    category: 'Components',
    imageUrl: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&q=80&w=1000',
    gallery: [
        'https://images.unsplash.com/photo-1632738367468-1c4b7b3b3b2c?auto=format&fit=crop&q=80&w=1000'
    ],
    features: ['48GB GDDR7X', 'AI Tensor Cores', 'Cryo-Cooling', 'Ray Tracing Pro']
  },
  {
    id: 'comp2',
    name: 'Quantum CPU',
    tagline: 'Compute everything.',
    description: '64-Core consumer processor for massive multitasking.',
    price: 799,
    category: 'Components',
    imageUrl: 'https://images.unsplash.com/photo-1555616635-640960031520?auto=format&fit=crop&q=80&w=1000',
    features: ['64 Cores', '5.5 GHz', '128MB Cache', 'Low TDP']
  },
  {
    id: 'comp3',
    name: 'NVMe Bolt 4TB',
    tagline: 'Instant load.',
    description: 'Gen5 NVMe SSD with read speeds up to 14,000 MB/s.',
    price: 399,
    originalPrice: 459,
    category: 'Components',
    imageUrl: 'https://images.unsplash.com/photo-1628557044797-f21a177c37ec?auto=format&fit=crop&q=80&w=1000',
    features: ['14GB/s Read', 'Heatsink Included', '3D NAND', '5 Year Warranty']
  },
  {
    id: 'comp4',
    name: 'Fusion PSU 1200W',
    tagline: 'Pure energy.',
    description: 'Titanium rated modular power supply for enthusiast builds.',
    price: 299,
    category: 'Components',
    imageUrl: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&q=80&w=1000',
    features: ['80+ Titanium', 'Fully Modular', 'Zero RPM Mode', 'ATX 3.0']
  },

  // --- NETWORKING ---
  {
    id: 'n1',
    name: 'Mesh Velocity 7',
    tagline: 'Blanket coverage.',
    description: 'WiFi 7 Mesh system covering up to 6,000 sq ft.',
    price: 699,
    originalPrice: 799,
    category: 'Networking',
    imageUrl: 'https://images.unsplash.com/photo-1544197150-b99a580bbcbf?auto=format&fit=crop&q=80&w=1000',
    features: ['WiFi 7', '10GbE Ports', 'Quad-Band', 'AI Security']
  },
  {
    id: 'n2',
    name: 'Data Vault NAS',
    tagline: 'Your cloud.',
    description: '4-Bay NAS server for personal cloud storage and media streaming.',
    price: 499,
    category: 'Networking',
    imageUrl: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=1000',
    features: ['4-Bay', '2.5GbE', 'Docker Support', 'Plex Transcoding']
  },

  // --- DRONES ---
  {
    id: 'd1',
    name: 'SkyScout Drone',
    tagline: 'See everything.',
    description: 'Autonomous surveillance drone with thermal imaging.',
    price: 1199,
    originalPrice: 1299,
    category: 'Drones',
    imageUrl: 'https://images.unsplash.com/photo-1507582020474-9a35b7d455d9?auto=format&fit=crop&q=80&w=1000',
    features: ['Thermal Imaging', 'AI Autopilot', 'Swarm Link', '5km Range']
  },
  {
    id: 'd2',
    name: 'Racer FPV',
    tagline: 'Speed demon.',
    description: 'Ready-to-fly FPV racing drone with digital low-latency video.',
    price: 499,
    category: 'Drones',
    imageUrl: 'https://images.unsplash.com/photo-1527977966376-1c8408f9f108?auto=format&fit=crop&q=80&w=1000',
    features: ['120mph Max', '4K60 Recording', 'Goggles Included', 'Carbon Frame']
  },
  
  // --- SMART HOME ---
  {
    id: 'sh1',
    name: 'Aura Light Strip',
    tagline: 'Cyberpunk ambience.',
    description: 'Addressable RGB strips with music sync and API control.',
    price: 49,
    originalPrice: 69,
    category: 'Smart Home',
    imageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000',
    features: ['RGBIC', 'Matter Support', 'Music Sync', 'Cuttable']
  },
  {
    id: 'sh2',
    name: 'Sentry Cam 4K',
    tagline: 'Always watching.',
    description: 'Local storage security camera with person detection.',
    price: 199,
    category: 'Smart Home',
    imageUrl: 'https://images.unsplash.com/photo-1558002038-10917738179d?auto=format&fit=crop&q=80&w=1000',
    features: ['4K HDR', 'Local AI', 'Night Vision', 'No Subscriptions']
  },
  {
    id: 'sh3',
    name: 'Hub Prime',
    tagline: 'Central command.',
    description: 'Smart home hub that unifies Zigbee, Z-Wave, and Matter devices.',
    price: 129,
    originalPrice: 149,
    category: 'Smart Home',
    imageUrl: 'https://images.unsplash.com/photo-1558002038-10917738179d?auto=format&fit=crop&q=80&w=1000',
    features: ['Touchscreen', 'Offline Voice', 'All Protocols', 'Privacy First']
  }
];

export const JOURNAL_ARTICLES: JournalArticle[] = [
    {
        id: 1,
        title: "The Rise of Silicon Photonics",
        date: "May 02, 2025",
        excerpt: "Why moving light, not electrons, is the future of computing speed.",
        image: "https://images.unsplash.com/photo-1555664424-778a1e5e1b48?auto=format&fit=crop&q=80&w=1000",
        content: React.createElement(React.Fragment, null,
            React.createElement("p", { className: "mb-6 first-letter:text-5xl first-letter:font-bold first-letter:text-cyan-400 first-letter:mr-3 first-letter:float-left text-gray-300" },
                "Moore's Law is slowing down. We've shrunk transistors to the point where quantum tunneling is becoming a problem. The answer isn't smaller wires; it's no wires at all."
            ),
            React.createElement("p", { className: "mb-8 text-gray-300" },
                "Silicon photonics replaces copper traces with microscopic waveguides that carry data as light pulses. This means zero resistance, zero heat from data transmission, and light-speed communication between chiplets. NEXUS is partnering with labs to bring this tech to consumer motherboards by 2026."
            ),
            React.createElement("div", { className: "border-l-4 border-cyan-500 pl-6 my-10 bg-gray-900 p-6" },
                React.createElement("p", { className: "text-xl text-white font-mono" }, "\"Bandwidth is the currency of the future. Photonics is the mint.\"")
            )
        )
    },
    {
        id: 2,
        title: "Cybersecurity in the Age of AI",
        date: "April 18, 2025",
        excerpt: "How generative defense networks are fighting autonomous malware.",
        image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=1000",
        content: React.createElement(React.Fragment, null,
            React.createElement("p", { className: "mb-6 text-gray-300" },
                "The hackers of yesterday wrote scripts. The hackers of tomorrow train models. We are seeing the emergence of 'polymorphic malware'—code that rewrites itself to evade signature detection."
            ),
            React.createElement("p", { className: "mb-8 text-gray-300" },
                "To combat this, we need AI on the defense. Generative Adversarial Networks (GANs) are now being deployed in enterprise firewalls, playing a constant game of cat and mouse with intruders, predicting attacks before they even execute."
            )
        )
    },
    {
        id: 3,
        title: "Drowning in Data, Starving for Wisdom",
        date: "April 05, 2025",
        excerpt: "The challenge of finding signal in the noise of the Exabyte Era.",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1000",
        content: React.createElement(React.Fragment, null,
            React.createElement("p", { className: "mb-6 text-gray-300" },
                "We generate 2.5 quintillion bytes of data every day. But how much of it is useful? The next frontier of tech isn't just storage; it's synthesis."
            ),
            React.createElement("p", { className: "mb-8 text-gray-300" },
                "Personal AI agents, like our own Nexus Support, are the filter. They don't just search; they understand context, stripping away the noise to present only the data that drives decision-making."
            )
        )
    },
    {
        id: 4,
        title: "Beyond Binary: The Quantum Leap",
        date: "March 28, 2025",
        excerpt: "Qubits are rewriting the rules of encryption and processing power.",
        image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=1000",
        content: React.createElement(React.Fragment, null,
            React.createElement("p", { className: "mb-6 text-gray-300" },
                "Classical computers think in 1s and 0s. Quantum computers think in possibilities. With the recent breakthrough in error correction at near-room temperatures, we are inching closer to 'Quantum Supremacy' in consumer applications."
            ),
            React.createElement("p", { className: "mb-8 text-gray-300" },
                "While we may not see quantum processors in home rigs next year, the hybrid era is approaching fast. Cloud-based quantum acceleration for simulation and cryptography is the first step."
            )
        )
    }
];