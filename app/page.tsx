import { TopBar } from '../components/TopBar'

export default function LandingPage() {
  return (
    <div>
      <TopBar />
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Create and Run Your Own Student Marketplace</h1>
            <p className="text-gray-600 mb-6">A school-controlled commerce simulation where students start stores, sell products, and track performance.</p>
            <div className="flex gap-3">
              <a href="/login" className="px-5 py-3 bg-brand text-white rounded-lg hover:bg-brand-dark">Sign in with Google</a>
              <a href="/marketplace" className="px-5 py-3 bg-gray-100 rounded-lg hover:bg-gray-200">Explore Marketplace</a>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="h-64 bg-gray-100 rounded-lg" />
            <div className="mt-4 grid grid-cols-4 gap-4">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="h-24 bg-gray-100 rounded" />
              ))}
            </div>
          </div>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="font-semibold mb-2">Start a Store</div>
            <div className="text-gray-600">Create your shop and start listing products.</div>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="font-semibold mb-2">Sell Products</div>
            <div className="text-gray-600">From crafts to stationery, list items easily.</div>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="font-semibold mb-2">Track Performance</div>
            <div className="text-gray-600">See sales, orders, and revenue in dashboards.</div>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="font-semibold mb-2">School Controlled</div>
            <div className="text-gray-600">Admins enforce rules and approve listings.</div>
          </div>
        </div>
      </section>
    </div>
  )
}
