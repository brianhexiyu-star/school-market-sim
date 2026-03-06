import { TopBar } from '../../components/TopBar'

export default function LoginPage() {
  return (
    <div>
      <TopBar />
      <section className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="text-3xl font-bold mb-4">Sign in to Student Market</h1>
        <p className="text-gray-600 mb-6">Use your school account to access the marketplace.</p>
        <a href="/api/dev/login" className="px-5 py-3 bg-brand text-white rounded-lg hover:bg-brand-dark">Sign in with Google</a>
        <div className="mt-10">
          <div className="font-semibold mb-2">Why sign in?</div>
          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            <li>Create your own store</li>
            <li>List and manage products</li>
            <li>Track sales and wallet balance</li>
          </ul>
        </div>
      </section>
    </div>
  )
}
