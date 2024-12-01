import Link from 'next/link';

const sections = [
  {
    title: "Value Proposition",
    description: "Our mission and project goals",
    href: "/value-proposition",
    color: "from-cambridge-blue to-tea-green",
    delay: "stagger-delay-1"
  },
  {
    title: "Users",
    description: "Target users and personas",
    href: "/users",
    color: "from-tea-green to-light-green",
    delay: "stagger-delay-2"
  },
  {
    title: "Interviews",
    description: "User research and findings",
    href: "/interviews",
    color: "from-light-green to-celadon",
    delay: "stagger-delay-3"
  },
  {
    title: "Initial Design",
    description: "Early concepts and sketches",
    href: "/initial-design",
    color: "from-celadon to-cambridge-blue",
    delay: "stagger-delay-4"
  },
  {
    title: "Paper Prototype",
    description: "Testing and validation",
    href: "/paper-prototype",
    color: "from-cambridge-blue to-light-pink",
    delay: "stagger-delay-1"
  },
  {
    title: "Iteration",
    description: "Design refinements",
    href: "/iteration",
    color: "from-light-pink to-dark-purple",
    delay: "stagger-delay-2"
  },
  {
    title: "High-Fidelity Prototype",
    description: "User testing results",
    href: "/high-fidelity-prototype",
    color: "from-dark-purple to-gray",
    delay: "stagger-delay-3"
  },
  {
    title: "Conclusion",
    description: "Final thoughts and learnings",
    href: "/conclusion",
    color: "from-gray to-cambridge-blue",
    delay: "stagger-delay-4"
  }
];

export default function Home() {
  const funnyComments = [
    "Powered by coffee and determination ☕",
    "No pixels were harmed in the making of this page 🖥️",
    "Built with love and occasional frustration 💝",
    "Warning: May contain traces of genius 🧠",
    "Made while petting a virtual cat 🐱",
    "Designed in the matrix 🕶️",
    "60% of the time, it works every time 📊",
    "Built by humans, tested by cats 🐈",
    "Don Norman approved this design* (*not really) 📚",
    "404: Dark Pattern Not Found 🚫",
    "Affordance level: over 9000! 💪",
    "Jakob Nielsen would probably raise an eyebrow 🤨",
    "More iterations than a while(true) loop 🔄",
    "User-centered design, coffee-powered execution ☕",
    "Passed the squint test... barely 👀"
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-cream to-beige p-8 pt-24">
      <section className="text-center mb-16 animate-fade-in">
        <h1 className="text-6xl font-bold mb-6">Motion Design Portfolio</h1>
        <p className="text-xl text-gray max-w-2xl mx-auto">
          A comprehensive journey through our design process
        </p>
      </section>
      
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        {sections.map((section) => (
          <div key={section.title} className={`card ${section.delay}`}>
            <Link href={section.href} className="block">
              <div className={`h-2 w-20 mb-4 rounded-full bg-gradient-to-r ${section.color}`} />
              <h2 className="text-xl font-semibold mb-2 group-hover:text-cambridge-blue transition-colors">
                {section.title}
              </h2>
              <p className="text-gray">{section.description}</p>
            </Link>
          </div>
        ))}
      </section>
      
      <div className="text-center pt-4 pb-6 text-gray-500 italic text-sm">
        <p className="mb-1">{funnyComments[Math.floor(Math.random() * funnyComments.length)]}</p>
        <p>© {new Date().getFullYear()} Motion</p>
      </div>
    </main>
  );
}
