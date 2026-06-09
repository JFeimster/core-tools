# Custom GPT Build Playbook

## When To Use

Use this playbook when an idea should become a Custom GPT spec, instruction set, and validation checklist.

## Inputs

- GPT purpose
- Target user
- Knowledge sources
- Required behavior
- Safety boundaries
- Test prompts

## Steps

1. Read the source docs and snapshot files first.
2. Define the GPT's job in one sentence.
3. List the knowledge sources it should use.
4. Write the instruction rules and stop conditions.
5. Audit the spec for runtime or secret dependencies.
6. Draft test prompts that prove the GPT stays on scope.

## Outputs

- Custom GPT spec
- Instruction pack
- Source list
- Test prompt list

## Validation Checks

- No server-side requirements
- No hidden auth or API dependency
- Knowledge sources are current and specific
- The GPT can be described in one focused use case

## Failure / Stop Conditions

- The request needs a runtime action not supported by the repo
- The source knowledge is stale or contradictory
- The instructions are too vague to test

## Follow-Up Prompts

- "Turn this spec into project instructions."
- "Audit the knowledge sources for freshness."
- "Write five test prompts that expose scope drift."
