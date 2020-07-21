# Slack

## Connection

### Connection type

The Slack connection type is **oauth**.  

### Entity name

The Slack connection entity is named **workspaces**.

### Connection info ###

Slack supports OAuth2 as the primary authentication mechanism.  When you 
connect Slack, it stores the OAuth2 access token for the workspace that you 
authorize as the default Slack credentials.  These credentials are accessed 
by setting the `workspace` parameter to any Slack action to `slack:workspaces:default`.

In addition, the Slack provider supports adding more workspaces through 
("legacy") access tokens.  To add another named workspace, supply the following 
information:

| name      | description           | type     |
|-----------|-----------------------|----------|
| workspace | workspace name        | name     |
| token     | personal access token | password |

**Note: you do not have to add a workspace via a personal access token in 
order to use the Slack default credentials, that come from the OAuth2 flow that 
is used to connect Slack.**

## Triggers

The Slack provider currently does not have any events.

## Actions

The Slack provider exposes the following actions:

| name | description                 |
|------|-----------------------------|
| send | send a message to a channel |

Parameters:

| name      | description        | entity           | required |
|-----------|--------------------|------------------|----------|
| workspace | workspace name     | slack:workspaces | true     |
| channel   | channel to send to |                  | true     |
| message   | message to send    |                  | true     |

## Slack provider definition

Here is the full Slack provider definition:

```yaml
---
version: provider-v1alpha1 
name: slack
description: Slack Provider Definition
connection: 
  type: oauth
  infoUrl: https://api.slack.com/legacy/custom-integrations/legacy-tokens
  infoText: Click here to create a legacy access token
  entity: slack:workspaces
  connectionInfo:
  - name: workspace
    description: workspace name ({workspace}.slack.com)
  - name: token
    description: personal access token
    type: password
triggers: 
actions:
  - name: send
    description: send a message to a channel 
    parameters:
    - name: workspace
      description: workspace name
      entity: slack:workspaces
      required: true 
    - name: channel
      description: channel to send to
      required: true
    - name: message
      description: message to send
      required: true
```