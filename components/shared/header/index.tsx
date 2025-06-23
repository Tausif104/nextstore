import { ShoppingBagIcon, User, Store } from 'lucide-react'
import Link from 'next/link'
import { APP_NAME } from '@/lib/constants'
import { Button } from '@/components/ui/button'
import ModeToggle from './mode-toggle'

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
          <ModeToggle />
          <Button asChild variant='ghost'>
            <Link href='/cart'>
              <ShoppingBagIcon /> Cart
            </Link>
          </Button>
          <Button asChild>
            <Link href='/sign-in'>
              <User /> Sign In
            </Link>
          </Button>
        </div>
      </div>
    </header>
  )
}

export default Header
