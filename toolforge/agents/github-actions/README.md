# GitHub Actions Operating Guide

Use this folder for CI-oriented checks and workflows against Core Tools.

## Purpose

These files describe how automated checks should validate the repo without changing how the app runs in production.

## Use Cases

- Validate and build workflow design
- Branch and PR checks
- Automated repo health verification
- Guarding against schema or export regressions

## When To Use It

Use this folder when the task is about automation, checks, or reproducible CI behavior.

## How It Fits Core Tools

- Mirrors the repo's existing validation/build flow
- Supports static-export safety
- Keeps data validation visible in CI
- Helps prevent regressions before merge
