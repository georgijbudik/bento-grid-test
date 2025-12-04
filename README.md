# Bento Grid Test

Responsive Bento grid built with Next.js + Tailwind where each card derives its size and image behavior purely from the provided data. The grid keeps a consistent ratio between full and half tiles using CSS grid row spans, and every image gets an adaptive `object-fit`/`object-position` combo based on its metadata to prevent distortion.

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
