# ToolForge Resource Library

ToolForge is the repo-side resource library for agent-assisted work in Core Tools.

## Purpose

This folder gives future agents a stable set of platform guides, prompts, playbooks, and reusable workflows. It is meant to reduce setup time and keep agent output aligned with the way this repo actually ships: static export, JSON-driven content, and lightweight validation.

## Use Cases

- Bootstrapping a new agent workflow
- Reusing a known-good repo cleanup flow
- Creating or reviewing static pages, docs, and tool entries
- Preparing repeatable instructions for local validation and deployment checks
- Sharing platform-specific operating instructions with future Codex, Jules, VS Code, GitHub Actions, Vercel, and Notion workflows

## When To Use It

Use ToolForge when the task is more than a one-off edit and should be repeated, reviewed, or handed off safely.

## How It Fits Core Tools

- Matches the repo's static-export architecture
- Supports the tool and collection JSON workflow
- Reinforces validation before commit and release
- Keeps generated artifacts, platform notes, and safe operating steps in one place

## Folder Layout

- `agents/`: platform-specific operating guides and prompt assets
- `skills/`: reusable cross-platform skills and workflows

## Platform Packs

Current platform packs in the library:

- Codex
- Jules
- VS Code
- GitHub Actions
- Vercel
- Notion
- ChatGPT
- Claude
- Cursor
- Windsurf
- Automation Platforms

Keep adding packs only when they help a builder act faster or more safely inside Core Tools.

## Maintenance Rule

Keep ToolForge practical. If a file does not help future work happen faster or safer, it does not belong here.
