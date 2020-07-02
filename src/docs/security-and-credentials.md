# Security and credentials

To fulfill its function, SnapMaster is typically trusted with user credentials, which allow it to access the different systems that it integrates via triggers and actions.  To gain user trust, SnapMaster must have a robust and comprehensive security model.

## User credentials

SnapMaster encrypts each credential that a user provides with a system-generated per-user secret, and stores the encrypted credential in a secure secrets manager.  For the SnapMaster SaaS platform, we currently use the GCP secret store.

The only time SnapMaster ever accesses user secrets is at the time that it is required execute an action on behalf of the user, or create/delete a trigger.  The SnapMaster API is the only service that has access to the secret store, and always mediates the process of handing a Tool provider a user's access token.

## Sensitive information in Logs

SnapMaster nevers log any sensitive information (keys / secrets) in console logs.

## SnapMaster internal secrets

SnapMaster’s own secrets (e.g. GCP / Auth0 secrets) are also stored in a secret store (GCP secrets in the case of the SaaS deployment), and are retrieved by the SnapMaster API at initialization time.  Credentials are never baked into any artifacts (e.g. Docker images).  Docker images for SnapMaster-API or any its providers are currently not public, but they can easily become public without leakage of secrets.

## Wire communication

Any communication between SnapMaster-API and its providers is done over HTTPS and follows a secure mutual authentication flow.  Any key material sent over the wire (e.g. between the user and SnapMaster-API, or the API and the providers) is always sent over HTTPS, and is never logged.

## Secrets in API calls

No SnapMaster API call ever returns secrets in its JSON payload.  The only time secrets appear in an API call is when a user connects a tool or creates a new credential-set for that tool - both done over HTTPS POST.

## Provider access to secrets

SnapMaster providers never have direct access to secrets. Only SnapMaster-API stores secrets, and it only retrieves a provider secret when it needs to hand to that provider.

## SnapMaster Admin access to user credentials

SnapMaster admins cannot read secrets directly.  From a threat modeling perspective, defense-in-depth includes: 
* SnapMaster has a separate service account for deployment, which does not have access to the secret store
* SnapMaster has a single restricted service account that can read secrets from the secret store
* Every user account has a unique secret that all user secrets are encrypted with, and is also stored in the secret store; secrets are only decrypted at the time that they get handed to providers - they are never stored or logged outside the secret store
* All production service accounts follow the principle of least privilege
