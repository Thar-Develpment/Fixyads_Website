# Fixyads Website

Production website for [Fixyads](https://www.fixyads.com) — digital marketing agency and training institute.

Built with **Next.js 16** (App Router), **PostgreSQL** + **Prisma**, **NextAuth**, and a headless **WordPress.com** blog.

## Getting started

### Prerequisites

- Node.js 20+
- PostgreSQL database

### Setup

1. Clone the repository and install dependencies:

```bash
npm install
```

2. Copy environment variables and fill in real values:

```bash
cp .env.example .env.local
```

3. Run database migrations:

```bash
npm run db:migrate
```

4. Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment variables

See [`.env.example`](.env.example) for all required variables:

| Variable | Description |
|----------|-------------|
| `DATABASE_URL` | PostgreSQL connection string |
| `NEXTAUTH_SECRET` | Random secret for session signing (`openssl rand -base64 32`) |
| `NEXTAUTH_URL` | App URL (e.g. `https://www.fixyads.com` in production) |
| `ADMIN_PASSWORD` | Admin dashboard password (min 12 characters) |
| `NEXT_PUBLIC_TAWK_TO_SRC` | Tawk.to live chat embed URL (optional) |

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm run typecheck` | Run TypeScript checks |
| `npm run db:migrate` | Apply Prisma migrations |
| `npm run db:studio` | Open Prisma Studio |

## Deployment (Vercel)

1. Connect the repo to Vercel.
2. Set all environment variables from `.env.example`.
3. Use a managed PostgreSQL provider (Neon, Supabase, or Vercel Postgres).
4. Migrations run automatically if you add a build command override:

```bash
npx prisma migrate deploy && next build
```

Or run `npm run db:migrate` manually before the first deploy.

## Architecture

- **Marketing pages** — Static content in `src/data/` rendered via App Router
- **Blog** — WordPress.com REST API with 1-hour ISR cache
- **Contact form** — POST to `/api/contact` → PostgreSQL
- **Admin dashboard** — `/admin` protected by NextAuth credentials provider

## Security

- Security headers (HSTS, X-Frame-Options, etc.) via `next.config.ts`
- WordPress HTML sanitized with DOMPurify before rendering
- Contact form rate limiting (5 requests / 15 min per IP)
- Honeypot field on contact form
- Admin routes protected by middleware

## License

Private — Fixyads.
