'use client';

import Image, { ImageProps } from 'next/image';
import { useState } from 'react';

const FALLBACK_SRC = '/placeholder.png';

export default function FallbackImage({
  src,
  alt,
  ...props
}: Omit<ImageProps, 'src'> & { src: string; alt: string }) {
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <Image
      {...props}
      src={imgSrc}
      alt={alt}
      onError={() => setImgSrc(FALLBACK_SRC)}
    />
  );
}