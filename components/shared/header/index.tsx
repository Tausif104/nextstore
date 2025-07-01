import { Store } from 'lucide-react'
import Link from 'next/link'
import { APP_NAME } from '@/lib/constants'
import Menu from './menu'

const Header = () => {
  return (
    <header className='w-full border-b py-4'>
      <div className='container mx-auto flex justify-between items-center'>
        <div className='flex-start'>
          <Link className='flex items-center' href='/'>
            <Store strokeWidth={1} size={30} />
            <span className='hidden lg:block font-bold text-2xl ml-3'>
              {APP_NAME}
            </span>
          </Link>
        </div>

        <div className='space-x-2 flex items-center'>
          <Menu />
        </div>
      </div>
    </header>
  )
}

export default Header
