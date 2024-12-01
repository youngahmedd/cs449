"use client";

import Image from 'next/image';

export default function ImageModal({ src, alt }: { src: string; alt: string }) {
  const handleClick = () => {
    // Open image in new window with custom window features
    window.open(
      src,
      '_blank',
      'toolbar=yes,scrollbars=yes,resizable=yes,width=1000,height=800'
    );
  };

  return (
    <div 
      className="relative w-full h-full cursor-pointer" 
      onClick={handleClick}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-contain"
      />
    </div>
  );
} 