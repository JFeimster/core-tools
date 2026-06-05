# Codex Operating Guide

Use this folder when working in Codex-style repo automation against Core Tools.

## Purpose

Codex tasks here should be fast, sequential, and anchored to the current repo state. The goal is to turn instructions into safe file changes, validation, and review-ready output.

## Use Cases

- Branch-based feature batches
- Repo health checks
- Documentation or data work that needs local validation
- Small platform resource expansions

## When To Use It

Use the Codex workflow when the work can be done locally, validated locally, and reviewed before merge.

## How It Fits Core Tools

- Matches the repo's batch workflow
- Keeps local validation first
- Supports static-export-safe changes
- Preserves a clean handoff into PR review
