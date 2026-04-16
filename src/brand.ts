export interface BrandConfig {
  siteName: string;
  tagline: string;
  primaryColor: string;
  accentColor: string;
  logoPath: string;
  marketIds: string[];
}

let _brand: BrandConfig | null = null;

export async function loadBrand(): Promise<BrandConfig> {
  if (_brand) return _brand;
  try {
    const res = await fetch('/brand.json');
    _brand = await res.json();
  } catch {
    _brand = {
      siteName: 'Markets',
      tagline: 'Where conviction meets the future',
      primaryColor: '#F97316',
      accentColor: '#3b82f6',
      logoPath: '/brand/logo.png',
      marketIds: [],
    };
  }
  return _brand!;
}
