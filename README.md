# Zuko

By Mark Cox-Smith, Toby Little and Ben Butterworth as part of [Oak National Academy’s Hackathon](https://www.thenational.academy/blog/you-re-invited-to-our-hackathon)

## URLs:

- Frontend: https://zuko.pages.dev/
- Backend/API: https://zuko-backend.benz.workers.dev
- Backend OpenAPI: https://zuko-backend.benz.workers.dev/docs
- Modern OpenAPI (Scalar): https://zuko-backend.benz.workers.dev/scalar
- Note: The API pages don't work over some VPNs
- Third party:
  - Oak National Academy: https://open-api.thenational.academy/playground
  - Hacker pack: https://hacklabs.notion.site/Oak-Edhack-Hacker-Pack-120ff48ab12080709c99c8df4a04f00c

## Technologies

- Frontend: React, Vite, Shadcn/ui
- Backend: Cloudflare Workers and Workers AI
- APIs: LLMs, Oak North, Webscraping Oak North's website

## Setup

- Install NodeJS
- Install pnpm
- Install dependencies: `pnpm install`
- Install turso https://docs.turso.tech/cli/installation
- Database setup:
  - Create database in the cloud: `turso db create zuko-production`
  - Migration: 

## Project history

- The name was inspired by Zuko from Avatar: The Last Airbender. Zuko also means "long life" in Japanese.

## Deployment
- Make sure DB is migrated
- Deploy backend
- Build frontend, then deploy frontend

## Nice to haves
- Deploy backend from CI: https://hono.dev/docs/getting-started/cloudflare-workers#deploy-from-github-action
