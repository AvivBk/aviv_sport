import type { Market } from '../../core/rain/rainApi';

interface MarketCardProps {
  market: Market;
}

const OPTION_COLORS = ['#3b82f6', '#a855f7', '#22c55e', '#eab308', '#ef4444', '#ec4899', '#6366f1', '#14b8a6'];

export default function MarketCard({ market }: MarketCardProps) {
  return (
    <div className="bg-[#141414] border border-[#262626] rounded-lg p-6 hover:border-[#3d3d3d] transition-colors">
      <h3 className="font-semibold mb-4 text-sm">{market.title}</h3>
      <div className="space-y-3">
        {(market.options || []).map((option, idx) => (
          <div key={idx} className="flex items-center gap-2">
            <span className="text-xs text-[#9ca3af] flex-shrink-0 w-20 truncate" title={option}>{option}</span>
            <div className="flex-1 bg-[#0a0a0a] rounded h-6 overflow-hidden">
              <div
                className="h-full transition-all"
                style={{
                  width: `${market.barValues?.[idx] || 0}%`,
                  backgroundColor: OPTION_COLORS[idx % OPTION_COLORS.length],
                }}
              />
            </div>
            <span className="text-xs font-semibold w-10 text-right">{market.barValues?.[idx] || 0}%</span>
          </div>
        ))}
      </div>
      <button
        type="button"
        className="w-full mt-6 py-2 rounded-lg text-white text-sm font-medium transition-opacity hover:opacity-80"
        style={{ backgroundColor: 'var(--primary-color)' }}
      >
        Trade
      </button>
    </div>
  );
}
