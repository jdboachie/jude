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
    <div className='mt-6 gap-4 flex lg:col-span-3 z-10 max-lg:overflow-scroll w-full'>
      {images.map((image, index) => (
        <Image
          key={index}
          src={image.src}
          alt={image.alt}
          width={7000}
          height={7000}
          className={`${darkModeImages && 'dark:hidden'} max-lg:w-4/5 h-fit w-full border border-neutral-300 dark:border-neutral-600 bg-neutral-100 dark:bg-neutral-800 rounded-xl`}
        />
      ))}
      {darkModeImages && darkModeImages.map((image, index) => (
        <Image
          key={index}
          src={image.src}
          alt={image.alt}
          width={7000}
          height={7000}
          className={`${darkModeImages && 'hidden'} max-lg:w-4/5 dark:block h-fit w-full border border-neutral-300 dark:border-neutral-600 bg-neutral-100 dark:bg-neutral-800 rounded-xl`}
        />
      ))}
    </div>
  )
}

export default CompareImages
