import { Home } from '@/components/Home';

export const metadata = {
  title: 'Portfolio | Home',
  description: 'Wildemberg Renovato portfolio',
}

export default function Page() {
  return (
    <main className="flex flex-col items-center justify-between">
      <Home />
    </main>
  )
}
