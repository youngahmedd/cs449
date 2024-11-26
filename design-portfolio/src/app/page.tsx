import Image from "next/image";
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
    title: "Prototypes",
    description: "Testing and validation",
    href: "/prototypes",
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
    title: "Evaluation",
    description: "User testing results",
    href: "/evaluation",
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
  return (
    <div className="min-h-screen bg-gradient-to-b from-cream to-beige">
      <main className="section-container">
        <section className="text-center mb-16 animate-fade-in">
          <h1 className="text-6xl font-bold mb-6">Motion Design Portfolio</h1>
          <p className="text-xl text-gray max-w-2xl mx-auto">
            A comprehensive journey through our design process
          </p>
        </section>
        
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
      </main>
    </div>
  );
}
