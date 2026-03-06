import { PageShell } from '../../components/PageShell'
import { ProductCard } from '../../components/ProductCard'

const products = [
  { id: 'p1', title: 'Handmade Bracelet', price: 1200, store: 'Craft Club', imageUrl: 'https://placehold.co/600x600?text=Bracelet' },
  { id: 'p2', title: 'School Hoodie', price: 3500, store: 'Merch Store', imageUrl: 'https://placehold.co/600x600?text=Hoodie' },
  { id: 'p3', title: 'Art Print', price: 1500, store: 'Art Lab', imageUrl: 'https://placehold.co/600x600?text=Art+Print' },
  { id: 'p4', title: 'Snacks Pack', price: 800, store: 'Snack Bar', imageUrl: 'https://placehold.co/600x600?text=Snacks' },
  { id: 'p5', title: 'Used Book', price: 700, store: 'Book Exchange', imageUrl: 'https://placehold.co/600x600?text=Book' },
  { id: 'p6', title: 'Stationery Set', price: 900, store: 'Stationery Shop', imageUrl: 'https://placehold.co/600x600?text=Stationery' },
]

export default function MarketplacePage() {
  return (
    <PageShell sidebar>
      <div className="flex items-center justify-between mb-6">
        <input className="w-full max-w-md border rounded px-3 py-2" placeholder="Search products..." />
        <div className="ml-4 text-sm text-gray-500">Wallet: $25.00</div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((p) => <ProductCard key={p.id} {...p} />)}
      </div>
    </PageShell>
  )
}
