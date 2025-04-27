'use client'

import clsx from 'clsx'
import Image from 'next/image'
import { useState } from 'react'

export default function RenderImage(props) {
  const { alt, src, loading = 'lazy', style, className, ...rest } = props;
  const [loaded, setLoaded] = useState(false);
    // console.log("rendering image");
  return (
    <div
      className={clsx(
        // Add a `image-container` class to the parent element
        // to make it easier to adjust the styles in mdx file content
        'image-container overflow-hidden',
        !loaded && 'animate-pulse [animation-duration:4s]',
        className
      )}
    >
      <img
        className={clsx(
          '[transition:filter_1500ms_cubic-bezier(.4,0,.2,1)]',
          'h-full max-h-full w-full object-center',
          loaded ? 'blur-0' : 'blur-xl'
        )}
        src={src}
        alt={alt}
        style={{ objectFit: 'cover', ...style }}
        // loading={"lazy"}
        // priority={loading === 'eager'}
        // quality={100}
        onLoad={() => setLoaded(true)}
        {...rest}
      />
    </div>
  )
}
