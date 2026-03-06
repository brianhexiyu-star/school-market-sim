import { PageShell } from '../../../components/PageShell'

export default function ProductDetail({ params }: { params: { id: string } }) {
  const product = {
    id: params.id,
    title: 'Handmade Bracelet',
    price: 1200,
    store: 'Craft Club',
    description: 'A handmade bracelet with school colors.',
    imageUrl: 'https://placehold.co/800x800?text=Bracelet',
  }
  return (
    <PageShell sidebar>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <img src={product.imageUrl} alt={product.title} className="w-full h-full object-cover" />
        </div>
        <div className="space-y-4">
          <h1 className="text-3xl font-bold">{product.title}</h1>
          <div className="text-gray-600">by {product.store}</div>
          <div className="text-2xl font-semibold text-brand">${(product.price / 100).toFixed(2)}</div>
          <p className="text-gray-700">{product.description}</p>
          <div className="flex gap-3">
            <button className="px-5 py-3 bg-brand text-white rounded-lg hover:bg-brand-dark">Buy Product</button>
            <a href="/marketplace" className="px-5 py-3 bg-gray-100 rounded-lg hover:bg-gray-200">Back to Marketplace</a>
          </div>
          <div className="mt-8">
            <div className="font-semibold mb-2">Similar Products</div>
            <div className="grid grid-cols-2 gap-4">
              {[...Array(4)].map((_, i) => <div key={i} className="h-24 bg-white rounded shadow-sm" />)}
            </div>
          </div>
        </div>
      </div>
    </PageShell>
  )
}
