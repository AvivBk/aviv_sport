# Aviv Sport - Political Prediction Market

A political prediction market platform for Israel, powered by the Rain protocol on Arbitrum One.

## 🎨 Brand Identity

- **Colors**: Purple (#8B5CF6) & Gold (#FFD700)
- **Tagline**: Predict the future
- **Theme**: Inspired by "aviv" (spring/renewal in Hebrew)

## 🚀 Tech Stack

- **Frontend**: React 19 + TypeScript + Vite
- **Styling**: TailwindCSS 4.0
- **Blockchain**: 
  - Rain SDK for prediction markets
  - Wagmi + Viem for Ethereum interactions
  - RainbowKit for wallet connections
- **Network**: Arbitrum One
- **Query**: TanStack React Query

## 📦 Installation

```bash
npm install
```

## 🏃 Development

```bash
npm run dev
```

Opens on http://localhost:3000

## 🏗️ Build

```bash
npm run build
```

## 📁 Project Structure

```
aviv_sport/
├── public/
│   ├── brand.json          # Brand configuration
│   └── logo.png            # Site logo
├── src/
│   ├── core/
│   │   └── rain/           # Rain SDK integration
│   │       ├── WalletProvider.tsx
│   │       └── rainApi.ts
│   ├── features/
│   │   └── feed/           # Market feed
│   │       ├── Feed.tsx
│   │       └── MarketCard.tsx
│   ├── layout/
│   │   └── Header.tsx      # Site header with wallet connect
│   ├── App.tsx             # Main app component
│   ├── brand.ts            # Brand types
│   └── main.tsx            # App entry point
└── vite.config.ts
```

## 🌐 Deployment

### Option 1: Render (Free)

1. Connect this repo to Render
2. Build command: `npm install && npm run build`
3. Publish directory: `dist`

### Option 2: Vercel / Netlify

Deploy directly from GitHub with automatic builds on push.

### Option 3: AgentBase (Custom Domain + Full Stack)

Requires 50 USDT on Polygon for:
- Custom domain registration
- DNS configuration
- SSL certificates
- CDN deployment

## 🔗 Blockchain Integration

This site connects to Rain prediction markets on **Arbitrum One**.

### Environment Variables

Create a `.env` file:

```env
VITE_RAIN_ENVIRONMENT=production
```

### Wallet Support

- MetaMask
- WalletConnect
- Coinbase Wallet
- Rainbow Wallet
- And more via RainbowKit

## 📊 Market Features (Coming Soon)

- Browse political prediction markets focused on Israel
- Buy/sell outcome shares
- Real-time price updates
- Portfolio tracking
- Market resolution and claims

## 🛠️ Development Roadmap

- [ ] Deploy to hosting platform
- [ ] Fund AgentBase wallet (50 USDT on Polygon)
- [ ] Create initial political markets for Israel
- [ ] Add market creation UI
- [ ] Implement trading interface
- [ ] Add portfolio dashboard
- [ ] Multi-language support (Hebrew + English)

## 📝 License

MIT

## 🤝 Contributing

Contributions welcome! Please open an issue or PR.

## 🔗 Links

- **Repository**: https://github.com/AvivBk/aviv_sport
- **Rain Protocol**: https://www.rain.one
- **Arbitrum**: https://arbitrum.io

---

Built with 🐙 by Joni
