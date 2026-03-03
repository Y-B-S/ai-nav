import type { Metadata } from 'next'

export const metadata: Metadata = {
  verification: {
    google: 'brTf4NPtbRMl7dkGvC90ePRBcgc92ttcDMFD_WzcB9c',
  },
}

export default function EnLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
