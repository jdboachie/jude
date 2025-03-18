import Image from 'next/image'

interface ImageProps {
  src: string
  alt: string
}

const CompareImages = (
  {
   images,
   darkModeImages
  }
  :
  {
    images: ImageProps[],
    darkModeImages?:  ImageProps[],
  }
) => {
  return (
    <div className='mt-6 flex gap-4 sm:col-span-3 z-10'>
      {images.map((image, index) => (
        <Image
          key={index}
          src={image.src}
          alt={image.alt}
          width={7000}
          height={7000}
          className={`${darkModeImages && 'dark:hidden'} h-fit w-full border border-neutral-300 dark:border-neutral-600 bg-neutral-100 dark:bg-neutral-800 rounded-xl`}
        />
      ))}
      {darkModeImages && darkModeImages.map((image, index) => (
        <Image
          key={index}
          src={image.src}
          alt={image.alt}
          width={7000}
          height={7000}
          className={`${darkModeImages && 'hidden'} dark:block h-fit w-full border border-neutral-300 dark:border-neutral-600 bg-neutral-100 dark:bg-neutral-800 rounded-xl`}
        />
      ))}
    </div>
  )
}

export default CompareImages
