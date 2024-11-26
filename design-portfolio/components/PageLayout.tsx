interface PageLayoutProps {
  title: string;
  children: React.ReactNode;
}

export default function PageLayout({ title, children }: PageLayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-cream to-beige pt-24">
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative mb-16 animate-fade-in">
          <div className="absolute -left-8 top-1/2 w-4 h-24 bg-gradient-to-b from-cambridge-blue to-tea-green rounded-r-lg transform -translate-y-1/2" />
          <h1 className="relative">{title}</h1>
        </div>
        <div className="grid gap-12">
          {children}
        </div>
      </main>
    </div>
  );
} 