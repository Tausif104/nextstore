import Link from 'next/link'
import Image from 'next/image'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import ProductPrice from './product-price'

const ProductCard = ({ product }: { product: any }) => {
  return (
    <Card className='w-full max-w-sm'>
      <CardHeader className='p-0 items-center'>
        <Link href={`/product/${product.slug}`}>
          <Image
            className='mx-auto'
            src={product.images[0]}
            width={300}
            height={300}
            alt={product.name}
          />
        </Link>
      </CardHeader>
      <CardContent className='p-4 grid gap-4'>
        <div className='text-xs'>{product.brand}</div>
        <Link href={`/product/${product.slug}`}>
          <h2 className='text-sm font-medium'>{product.name}</h2>
        </Link>
        <div className='flex justify-between gap-4'>
          <p>{product.rating} Stars</p>

          {product.stock > 0 ? (
            <ProductPrice value={Number(product.price)} />
          ) : (
            <p className='text-destructive'>Out of Stock</p>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

export default ProductCard
