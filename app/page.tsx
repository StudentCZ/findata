import type { AppProps } from 'next/app'
import { initThinBackend } from 'thin-backend';
import { ThinBackend } from 'thin-backend-react';

// initThinBackend({ host: process.env.NEXT_PUBLIC_BACKEND_URL });

export default function Home() {
  return (
    <main className="">
      <div>
        <h1>Hello</h1>
      </div>
    </main>
  )
}
