# Connection types

Tools can expose two types of connections:

* OAuth2: the tool supports the OAuth2 delegated authorization protocol.  Connecting the tool will require the user to authorize SnapMaster to act on behalf of the user.
* Custom token-based authorization: the tool requires a credential such as a password or personal access token (PAT) in order to act on on the user's behalf.  This connection type is referred to as **simple** in the CLI metadata.

## Connecting an OAuth2-based tool

When you click on the `connect` button, the OAuth2 three-legged authorization flow will automatically be invoked.  The access token returned from the tool will be encrypted with a per-user key, and securely stored in a secret store.

This connection will be the default connection for this tool.

## Connecting a tool that supports a custom token

When you click on the `connect` button, the required connection information is displayed.  It is possible to add more than one connection in this way, and each of the connections is identified by a name, and may be referenced by triggers or actions that reference this tool.

### Named connections

A `snap` parameter can reference a named connection for this tool by using the `entity: entityname` attribute for the parameter.  For example, to have a parameter draw its values from the available docker accounts, construct a parameter in the following way:

```yaml
parameters:
  name: account
  entity: docker:accounts
  description: docker account
```

### Default connections 

The initial connection is also the default connection.  It is currently not possible to set a different connection as the default.

To use the default connection in a `config` section, use the `provider:entityname:default` value.  For example, to reference the default Docker account in a config section:

```yaml
config:
  name: trigger-or-action-name
  provider: docker
  account: docker:accounts:default
  ...
```