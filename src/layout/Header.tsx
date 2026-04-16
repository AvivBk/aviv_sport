import { ConnectButton } from '@rainbow-me/rainbowkit';
import type { BrandConfig } from '../brand';

interface HeaderProps {
  brand: BrandConfig;
}

export default function Header({ brand }: HeaderProps) {
  return (
    <header className="h-16 border-b border-[#262626] bg-[#0a0a0a] sticky top-0 z-50">
      <div className="container mx-auto h-full px-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src={brand.logoPath}
            className="h-9 w-auto max-w-[180px] object-contain"
            alt={brand.siteName}
            onError={(e) => {
              e.currentTarget.style.display = 'none';
              const fallback = e.currentTarget.nextElementSibling;
              if (fallback) fallback.style.display = 'flex';
            }}
          />
          <span
            className="items-center gap-2 text-xl font-bold text-white"
            style={{ display: 'none' }}
          >
            <span
              className="w-5 h-5 rounded-full inline-block"
              style={{ backgroundColor: 'var(--primary-color)' }}
            />
            {brand.siteName}
          </span>
        </div>
        <ConnectButton />
      </div>
    </header>
  );
}
