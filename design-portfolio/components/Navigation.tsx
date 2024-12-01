"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 w-full bg-cream/80 backdrop-blur-md border-b border-cambridge-blue/20 z-50 h-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex justify-between items-center h-full">
          <div className="flex items-center">
            <Link 
              href="/" 
              className="font-bold text-2xl gradient-text"
            >
              Motion
            </Link>
          </div>
          <div className="flex items-center gap-2 overflow-x-auto">
            {[
              ['Value Proposition', '/value-proposition'],
              ['Users', '/users'],
              ['Interviews', '/interviews'],
              ['Initial Design', '/initial-design'],
              ['Paper Prototype', '/paper-prototype'],
              ['Iteration', '/iteration'],
              ['High-Fidelity Prototype', '/high-fidelity-prototype'],
              ['Conclusion', '/conclusion']
            ].map(([title, href]) => (
              <Link
                key={href}
                href={href}
                className={`nav-link ${pathname === href ? 'bg-cambridge-blue/20' : ''}`}
              >
                {title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
