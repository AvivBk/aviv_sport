import { useQuery } from '@tanstack/react-query';
import type { BrandConfig } from '../../brand';
import MarketCard from './MarketCard';
import { getMarkets } from '../../core/rain/rainApi';

interface FeedProps {
  brand: BrandConfig;
}

export default function Feed({ brand }: FeedProps) {
  const { data: markets = [], isLoading, error } = useQuery({
    queryKey: ['markets', brand.marketIds],
    queryFn: () => getMarkets(brand.marketIds || []),
    enabled: (brand.marketIds?.length || 0) > 0,
  });

  if (isLoading) {
    return <div className="text-center py-8">Loading markets...</div>;
  }

  if (error) {
    return <div className="text-center py-8 text-red-400">Failed to load markets</div>;
  }

  if (!markets.length) {
    return (
      <div className="text-center py-16">
        <p className="text-[#9ca3af]">No markets yet. Check back soon!</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {markets.map(market => (
        <MarketCard key={market.id} market={market} />
      ))}
    </div>
  );
}
