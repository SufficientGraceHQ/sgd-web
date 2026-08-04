# Sufficient Grace Declutter Web

Production public website for **Sufficient Grace Declutter (SGD)**.

> **Structure First. Scale Second.**

## Scope

- Public SGD marketing and information pages
- Buyer and seller process guidance
- Live-inventory handoff to `@sufficientgracedeclutter`
- WhatsApp inquiry links to the authorized SGD business number

## Production boundaries

- Instagram captions are authoritative for item availability, fixed price, reference ID, location, and condition.
- The website does not publish mock inventory or independently confirm availability.
- Payment confirmation requires an authorized human approval.
- CRM, AI-agent, database, and webhook endpoints are intentionally excluded from this public deployment.
- Secure inbound webhook ingestion lives in the private `SufficientGraceHQ/sgd-gateway` repository.
- SufficientOS application services belong in the private `SufficientGraceHQ/sufficientos` repository.
- Production credentials must never be committed to this repository.

## Development

```bash
npm ci
npm run dev
```

Open `http://localhost:3000`.

## Validation

```bash
npm run lint
npm run build
npm audit --audit-level=high
```

## Deployment

The application is a standard Next.js project. Netlify automatically provisions its current Next.js adapter when the repository is imported. No custom publish directory or legacy Vite configuration is required.

## Related repositories

- `SufficientGraceHQ/sufficientos` — governed SufficientOS application and architecture
- `SufficientGraceHQ/sgd-gateway` — secure inbound webhook gateway
