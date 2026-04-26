# Built Not Obsessed

> Train hard. Live fully. No apologies.

The anti-perfectionist fitness site built with Astro + Tailwind CSS.

## Stack

- **Framework:** [Astro](https://astro.build)
- **Styling:** Tailwind CSS + scoped component styles
- **Fonts:** Bebas Neue (display), Playfair Display (serif), DM Sans (body)
- **Hosting:** Vercel (recommended)

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Start dev server

```bash
npm run dev
```

Open [http://localhost:4321](http://localhost:4321)

### 3. Build for production

```bash
npm run build
```

## Project Structure

```
builtnotobsessed/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Nav.astro          # Fixed navigation bar
│   │   ├── Hero.astro         # Full-screen hero section
│   │   ├── Ticker.astro       # Scrolling amber ticker
│   │   ├── Philosophy.astro   # 4-card philosophy grid
│   │   ├── Manifesto.astro    # Pullquote section
│   │   ├── Pillars.astro      # How it works section
│   │   └── Footer.astro       # CTA strip + footer
│   ├── layouts/
│   │   └── Base.astro         # HTML shell, fonts, meta
│   ├── pages/
│   │   └── index.astro        # Homepage (assembles components)
│   └── styles/
│       └── global.css         # CSS variables, base styles, Tailwind
├── astro.config.mjs
├── tailwind.config.mjs
└── package.json
```

## Deploying to Vercel

1. Push to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project → Import your repo
3. Vercel auto-detects Astro — click Deploy
4. In Vercel project settings → Domains → Add `builtnotobsessed.com`
5. Update your domain DNS at your registrar to point to Vercel

## Connecting Your Domain (Porkbun / Namecheap)

In your registrar's DNS settings, add:

| Type  | Name | Value                  |
|-------|------|------------------------|
| A     | @    | 76.76.21.21            |
| CNAME | www  | cname.vercel-dns.com   |

DNS propagates within ~1 hour.

## Customization

- **Colors:** Edit CSS variables in `src/styles/global.css`
- **Content:** Each section is its own component in `src/components/`
- **Fonts:** Swap the Google Fonts import in `src/layouts/Base.astro`
