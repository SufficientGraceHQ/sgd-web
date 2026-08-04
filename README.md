# Sufficient Grace Declutter Web

Customer website and internal CRM interface for **Sufficient Grace Declutter (SGD)**.

> **Structure First. Scale Second.**

## Scope

- Public SGD marketing pages
- Listings and item-detail interfaces
- Buyer and seller information flows
- CRM contacts, tasks, notes and pipeline interfaces
- Controlled agent-draft interface
- Supabase-backed application data

## Important boundaries

- Live Instagram captions remain authoritative for item availability and fixed price.
- Payment confirmation requires an authorized human approval.
- Production credentials belong in protected deployment configuration and must never be committed.
- Webhook security and durable inbound message ingestion live in the separate private `sgd-gateway` repository.

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
```

## Related repositories

- `SufficientGraceHQ/sufficientos` — architecture and governance
- `SufficientGraceHQ/sgd-gateway` — secure inbound webhook gateway

## Status

This repository was preserved from the existing SGD website history. Production deployment connections must be verified before the old personal repository is archived.
