import { APP_NAME } from '@/lib/constants'

const Footer = () => {
  const currnetYear = new Date().getFullYear()

  return (
    <footer className='border-t py-4 flex justify-center container mx-auto'>
      {currnetYear} {APP_NAME} All Rights Reserved
    </footer>
  )
}

export default Footer
