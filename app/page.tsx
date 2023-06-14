import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { initThinBackend } from 'thin-backend';
import { ThinBackend } from 'thin-backend-react';

export default function Home() {
  return (
    <main className="">
      <div>
        <h1>Hello</h1>
      </div>
    </main>
  )
}
