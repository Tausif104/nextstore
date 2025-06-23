import Image from 'next/image'

const LoadingPage = () => {
  return (
    <div className='flex h-screen w-full items-center justify-center'>
      <Image src='/images/loader.gif' alt='test' width={200} height={200} />
    </div>
  )
}

export default LoadingPage
