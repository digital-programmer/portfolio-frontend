
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
    console.log(props)
;
    return (
      <figure className='relative h-96'>
        <Image
          src={url}
          alt={alt}
          fill
        />
        {caption && (
          <figcaption className="mt-2 text-center italic text-sm text-text-900 dark:text-text-900 text-pretty absolute bottom-[-24px] z-10">
            {caption}
          </figcaption>
        )}
      </figure>
    )
  }