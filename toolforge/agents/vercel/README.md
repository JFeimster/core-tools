# Vercel Operating Guide

Use this folder for deployment-oriented checks that matter to Core Tools.

## Purpose

These notes keep deployment checks focused on static export, generated JSON, and live route health.

## Use Cases

- Static export deployment review
- Build log inspection
- Live route smoke tests
- Confirming `public/tools.json` generation during deploy

## When To Use It

Use this folder when the task touches deployment status, build logs, or live routes.

## How It Fits Core Tools

- Matches the repo's Vercel deployment model
- Reinforces `output: "export"`
- Helps verify the live directory after changes
- Keeps deployment checks tied to the static app surface
