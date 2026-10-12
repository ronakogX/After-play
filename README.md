# PLAY//ROOM — Premium Gaming Lounge Demo

A responsive React + TypeScript + Vite gaming parlour frontend prototype. It includes station discovery, four GamePasses, browser-local bookings, simulated OTP, rewards, redeem codes, a customer dashboard and a local operator panel.

## Requirements
- Node.js 20.19+ (or a compatible current LTS release)
- npm

## Run locally
1. Extract the project folder.
2. Open a terminal in this folder.
3. Run `npm install`.
4. Run `npm run dev`.
5. Open the local URL printed in the terminal.

## Production build
- `npm run build`
- `npm run preview` to preview the production build locally.
- Vite outputs the static website into `dist/`.

## Cloudflare Pages
1. Push this folder to a Git repository, or upload the project using a supported Cloudflare Pages workflow.
2. In Cloudflare Dashboard, open **Workers & Pages → Create → Pages** and connect the repository.
3. Framework preset: **Vite**.
4. Build command: `npm run build`.
5. Build output directory: `dist`.
6. Deploy and test `/`, `/stations`, `/book`, `/gamepasses`, `/rewards`, `/dashboard`, and `/admin`, including a direct refresh on each route. `public/_redirects` routes unknown paths to `index.html` for client-side routing.
7. No deployment has been performed by generating this project; you must connect/upload it to your Cloudflare account.

## Edit your business settings
- `src/data/business-config.ts`: brand placeholder, contact details, hours, booking rules.
- `src/data/stations.ts`: exactly seven stations and hourly rates.
- `src/data/gamepasses.ts`: fixed GamePass names, prices, and minutes.
- `src/data/availability.ts`: deterministic sample bookings.
- `src/data/rewards.ts`: reward catalogue and conversion settings.
- `src/data/demo-redeem-codes.ts`: sample test codes.

### Exact GamePass defaults
- Starter Pass — ₹570 / 180 minutes
- Gamer Pass — ₹930 / 300 minutes
- Ultimate Pass — ₹1,799 / 600 minutes
- Legend Pass — ₹2,650 / 900 minutes

### Demo sign-in and redeem codes
The sign-in screen validates a 10-digit Indian mobile number and then uses demo OTP `123456`. No SMS is sent. Test codes: `PLAY-100`, `ROOM-250`, `TEST-050`. These are visible in source configuration only, not displayed on customer-facing cards. They are not suitable for production.

## Important prototype limitations
- All bookings, pass balances, transactions, session state, and redeemed codes are saved in the current browser's localStorage. They do not synchronize between devices and can be edited by a user.
- Demo slot conflict checking is local and not authoritative across users.
- No real payment, SMS, account verification, or secure administrator authentication is connected.
- The operator route is a demonstration and is not protected.
- The reward catalogue and demo codes are examples; edit them before presenting the prototype.

## Recommended production architecture
- **Frontend:** this Vite app on Cloudflare Pages.
- **API:** Cloudflare Workers endpoints for availability, booking creation/cancellation, pass purchases, reward redemption and admin operations.
- **Shared database:** Cloudflare D1 with transactional constraints / unique indexes for station-slot conflicts, redemption limits and idempotency. Re-check slot availability in the Worker at confirmation time.
- **Authentication:** a trusted OTP provider, server-side rate limits, short-lived secure session cookies, abuse protection and phone-number verification. Never store OTP secrets or provider keys in the browser.
- **Payments:** a real payment provider with server-side order creation and verified signed webhooks before adding pass minutes. Never trust a frontend “payment success” callback.
- **Security:** enforce admin roles on every server endpoint, validate all input, apply rate limits, audit sensitive actions, and store secrets as Cloudflare Worker secrets. Never put private keys in `VITE_` environment variables.
- **Rewards:** validate codes and redemption limits in the Worker, use database transactions and idempotency keys, and write an immutable transaction record.

## Design and accessibility notes
The interface uses reduced-motion-aware CSS and Framer Motion transitions, responsive mobile navigation, semantic controls, and external replaceable image URLs. Keep local image fallbacks or replace URLs with optimized licensed images before launch.
