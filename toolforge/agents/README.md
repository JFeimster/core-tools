# ToolForge Agents

This directory contains platform-specific instructions for agent workflows that touch Core Tools.

## Purpose

The files here define how different agent environments should operate against this repo without breaking static-export assumptions or data validation.

## Use Cases

- Choosing the right operating style for a given platform
- Standardizing prompts, templates, and playbooks
- Keeping role, inputs, outputs, and stop conditions explicit
- Making future handoffs to agents consistent

## When To Use It

Use the platform folder that matches the environment you are working in. If the environment is mixed, read the shared ToolForge README first and then the platform-specific instructions.

## How It Fits Core Tools

- Keeps agent actions aligned with repo constraints
- Supports repo maintenance without drifting into app logic changes
- Makes build and validation expectations explicit
- Gives future utility-expansion batches a reusable operating base
