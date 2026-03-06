import { PageShell } from '../../components/PageShell'
import { MetricCard } from '../../components/MetricCard'

export default function AdminPage() {
  return (
    <PageShell sidebar>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <MetricCard title="Total Revenue" value="$12,430" />
        <MetricCard title="Transactions" value="742" />
        <MetricCard title="Active Stores" value="34" />
        <MetricCard title="Top Product" value="School Hoodie" accent="positive" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-sm p-4">
          <div className="font-semibold mb-2">Sales over time</div>
          <div className="h-48 bg-gray-100 rounded" />
        </div>
        <div className="bg-white rounded-lg shadow-sm p-4">
          <div className="font-semibold mb-2">Category distribution</div>
          <div className="h-48 bg-gray-100 rounded" />
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-sm">
        <div className="p-4 border-b font-semibold">Product Approval Queue</div>
        <div className="p-4">
          <table className="w-full text-left">
            <thead>
              <tr className="text-sm text-gray-500">
                <th className="py-2">Product</th>
                <th className="py-2">Store</th>
                <th className="py-2">Price</th>
                <th className="py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {[...Array(5)].map((_, i) => (
                <tr key={i} className="border-t">
                  <td className="py-2">Pending Product {i + 1}</td>
                  <td className="py-2">Store {i + 1}</td>
                  <td className="py-2">$12.00</td>
                  <td className="py-2">
                    <a href="#" className="text-green-600 mr-3">Approve</a>
                    <a href="#" className="text-red-600">Reject</a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </PageShell>
  )
}
