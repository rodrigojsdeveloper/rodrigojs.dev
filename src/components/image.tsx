'use client'

import { useState } from 'react'
import NextImage from 'next/image'
import { ImageProps } from '@/interfaces'
import { cn } from '@/utils/cn'

export const Image = (props: ImageProps) => {
  const [isLoading, setIsLoading] = useState(true)

  const { zoomHover, className, src, alt, ...rest } = props

  return (
    <figure
      className={cn(
        'overflow-hidden',
        isLoading && 'animate-pulse',
        zoomHover && 'duration-500 ease-in-out hover:scale-105',
        className,
      )}
    >
      <NextImage
        className={cn(
          'object-cover transition-[scale,filter] duration-700',
          isLoading && 'scale-[1.02] blur-xl grayscale',
          className,
        )}
        src={src}
        alt={alt}
        priority
        quality={100}
        onLoad={() => setIsLoading(false)}
        {...rest}
      />
    </figure>
  )
}
