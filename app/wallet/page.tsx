import { PageShell } from '../../components/PageShell'

export default function WalletPage() {
  return (
    <PageShell sidebar>
      <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
        <div className="text-sm text-gray-500">Current Balance</div>
        <div className="text-3xl font-semibold text-brand">$25.00</div>
      </div>
      <div className="bg-white rounded-lg shadow-sm">
        <div className="p-4 border-b font-semibold">Transaction History</div>
        <div className="p-4">
          <table className="w-full text-left">
            <thead>
              <tr className="text-sm text-gray-500">
                <th className="py-2">Type</th>
                <th className="py-2">Amount</th>
                <th className="py-2">Date</th>
                <th className="py-2">Order</th>
              </tr>
            </thead>
            <tbody>
              {[...Array(8)].map((_, i) => (
                <tr key={i} className="border-t">
                  <td className="py-2">{i % 2 === 0 ? 'Sale Credit' : 'Purchase Debit'}</td>
                  <td className="py-2">$9.99</td>
                  <td className="py-2">2026-03-06</td>
                  <td className="py-2">#O-100{i}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </PageShell>
  )
}
