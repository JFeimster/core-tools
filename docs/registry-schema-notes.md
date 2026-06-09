# Registry Schema Notes

Registry items may include:

- public-safe identity fields
- artifact paths
- workflow status
- collection membership
- internal routing and compliance metadata

Public projections should keep only the fields the app needs to render and route users safely.

Blocked from public projection:

- `internal`
- affiliate partner routing notes
- provider routing notes
- private commission logic
- underwriting logic that would reveal internal decision paths

