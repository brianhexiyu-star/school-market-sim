import { PageShell } from '../../components/PageShell'

export default function StorePage() {
  return (
    <PageShell sidebar>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold">My Store</h1>
          <div className="text-gray-600">Manage your products and listings</div>
        </div>
        <a href="#" className="px-4 py-2 bg-brand text-white rounded hover:bg-brand-dark">Add Product</a>
      </div>
      <div className="bg-white rounded-lg shadow-sm">
        <div className="p-4 border-b font-semibold">Product List</div>
        <div className="p-4">
          <table className="w-full text-left">
            <thead>
              <tr className="text-sm text-gray-500">
                <th className="py-2">Image</th>
                <th className="py-2">Title</th>
                <th className="py-2">Price</th>
                <th className="py-2">Status</th>
                <th className="py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {[...Array(5)].map((_, i) => (
                <tr key={i} className="border-t">
                  <td className="py-2"><div className="h-12 w-12 bg-gray-100 rounded" /></td>
                  <td className="py-2">Product {i + 1}</td>
                  <td className="py-2">$9.99</td>
                  <td className="py-2">Pending</td>
                  <td className="py-2">
                    <a href="#" className="text-blue-600 mr-3">Edit</a>
                    <a href="#" className="text-red-600">Delete</a>
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
