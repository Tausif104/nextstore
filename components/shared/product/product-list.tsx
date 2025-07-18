import ProductCard from './product-card'

const ProductList = ({
  data,
  title,
  limit,
}: {
  data: any
  title?: string
  limit?: number
}) => {
  const limitedData = limit ? data.slice(0, limit) : data

  return (
    <div className='my-10'>
      <h2 className='mb-10 font-bold text-5xl'>{title}</h2>
      {data.length > 0 ? (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
          {limitedData.map((product: any) => (
            <ProductCard product={product} key={product.slug} />
          ))}
        </div>
      ) : (
        <div>
          <p>No Products Found</p>
        </div>
      )}
    </div>
  )
}

export default ProductList
