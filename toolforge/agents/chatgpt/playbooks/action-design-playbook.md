# Action Design Playbook

## When To Use

Use this playbook when a ChatGPT action idea needs to be documented, reviewed, or rejected for Core Tools.

## Inputs

- Action purpose
- Triggering user request
- Expected request/response shape
- Auth needs
- Data dependencies
- Fallback behavior

## Steps

1. Define the action's job and why it matters.
2. Document the request and response contract.
3. Note every dependency the action would require.
4. Check whether the repo can support that dependency without runtime features.
5. Record a static-safe fallback if the action is out of scope.

## Outputs

- Action design note
- Contract summary
- Dependency list
- Safe fallback

## Validation Checks

- No hidden server or database requirement
- No secret-handling assumption in the repo
- The action can be described without implementation details

## Failure / Stop Conditions

- The action depends on runtime APIs the app does not use
- The contract is too vague to review
- The fallback is unclear

## Follow-Up Prompts

- "Rewrite this as a static-safe design note."
- "List the repository constraints that block implementation."
