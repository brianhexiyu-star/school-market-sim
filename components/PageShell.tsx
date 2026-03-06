import { ReactNode } from 'react'
import { TopBar } from './TopBar'
import { Sidebar } from './Sidebar'

export function PageShell({ children, sidebar = false }: { children: ReactNode; sidebar?: boolean }) {
  return (
    <div>
      <TopBar />
      <div className="mx-auto max-w-7xl px-6 py-6">
        {sidebar ? (
          <div className="flex gap-6">
            <Sidebar />
            <div className="flex-1">{children}</div>
          </div>
        ) : (
          <div>{children}</div>
        )}
      </div>
    </div>
  )
}
