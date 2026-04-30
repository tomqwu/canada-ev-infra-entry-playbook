---
title: "Software and O&M Platform"
summary: "Architecture for a Canadian-hosted CPMS, telemetry, billing, and field-service platform — the highest-leverage long-term asset."
status: "draft"
audience: "Internal"
tags: ["software", "CPMS", "OCPP", "data residency"]
author: "Research team"
lastUpdated: 2026-04-05
order: 5
sources: ["src-zevip"]
---

## Why software is the defensible layer

Hardware will commoditize. Funding programs will rotate. The asset that compounds is the platform — chargers, sites, and customers all generate operational data, and the operator that owns the software layer captures that compounding.

## Functional scope

- **Charge point management (CPMS)** — OCPP 2.0.1 native, multi-vendor hardware support.
- **Telemetry** — high-frequency operating data, fault detection, predictive maintenance.
- **Billing and settlement** — Measurement Canada-compliant, multi-currency, roaming-ready (OCPI).
- **Driver/fleet experience** — RFID, plug-and-charge (ISO 15118), in-app session management.
- **Energy management** — load curtailment, BESS dispatch, time-of-use optimization.
- **Field service** — work-order management, parts inventory, technician dispatch.

## Non-negotiables for the Canadian context

- All customer telemetry hosted in Canadian cloud regions.
- Cybersecurity controls aligned with critical-infrastructure expectations.
- Independent third-party penetration testing before public launch.
- Open APIs to avoid creating a closed ecosystem.

## Commercial pathway

Year 1: Operate the platform for owned sites only.
Year 2: Offer the platform to selected third-party site hosts (small networks, fleets).
Year 3+: Software/O&M contributes ≥25% of recurring revenue.
