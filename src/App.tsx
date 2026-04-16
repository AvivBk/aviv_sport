import { useEffect, useState } from 'react';
import Header from './layout/Header';
import Feed from './features/feed/Feed';
import type { BrandConfig } from './brand';

export default function App() {
  const [brand, setBrand] = useState<BrandConfig | null>(null);

  useEffect(() => {
    fetch('/brand.json')
      .then(r => r.json())
      .then(setBrand)
      .catch(() => {
        setBrand({
          siteName: 'Markets',
          tagline: 'Where conviction meets the future',
          primaryColor: '#F97316',
          accentColor: '#3b82f6',
          logoPath: '/brand/logo.png',
          marketIds: [],
        });
      });
  }, []);

  if (!brand) {
    return <div className="bg-[#0a0a0a] text-white flex items-center justify-center min-h-screen">Loading...</div>;
  }

  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen">
      <Header brand={brand} />
      <main className="container mx-auto px-4 py-8">
        <Feed brand={brand} />
      </main>
    </div>
  );
}
