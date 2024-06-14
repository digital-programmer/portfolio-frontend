
import urlFor from '@/config/sanity.image'
import type { SanityImageSource } from '@sanity/image-url/lib/types/types'
import Image from 'next/image'

interface Props {
  asset: SanityImageSource
  alt: string
  caption?: string
}

export const SanityImage = (props: Props) => {
    const { asset, alt, caption } = props;
    const url = urlFor(asset).url();
    return (
      <figure className='relative h-56 md:h-72 my-8 md:my-12'>
        <Image
          src={url}
          alt={alt}
          className="rounded-lg"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {caption && (
          <figcaption className="text-center italic text-xs md:text-sm text-text-900 dark:text-text-900 text-pretty absolute bottom-[-24px] z-10">
            {caption}
          </figcaption>
        )}
      </figure>
    )
}