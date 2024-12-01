interface PageLayoutProps {
  title: string;
  children: React.ReactNode;
}

export default function PageLayout({ title, children }: PageLayoutProps) {
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
    <div className="min-h-screen bg-gradient-to-b from-cream to-beige pt-24 pb-24">
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative mb-16 animate-fade-in">
          <div className="absolute -left-8 top-1/2 w-4 h-24 bg-gradient-to-b from-cambridge-blue to-tea-green rounded-r-lg transform -translate-y-1/2" />
          <h1 className="relative">{title}</h1>
        </div>
        <div className="grid gap-12">
          {children}
        </div>
        <div className="text-center mt-20 text-gray-500 italic text-sm">
          <p className="mb-1">{funnyComments[Math.floor(Math.random() * funnyComments.length)]}</p>
          <p>© {new Date().getFullYear()} Motion</p>
        </div>
      </main>
    </div>
  );
} 