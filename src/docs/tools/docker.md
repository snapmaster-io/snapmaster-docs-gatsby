# Docker

## Connection

### Connection type

The Docker connection type is **simple**.  

### Entity name

The Docker connection entity is named **account**.

### Connection info ###

A Docker connection requires two pieces of information:

| name     | description                                             | type     |
|----------|---------------------------------------------------------|----------|
| username | user name                                               | name     |
| password | triggers require password (not a personal access token) | password |

## Triggers

The Docker provider exposes the following events:

| name     | description                                             |
|----------|---------------------------------------------------------|
| push     | push event into a repository                            |

Parameters:

| name    | description               | entity          | required |
|---------|---------------------------|-----------------|----------|
| account | account name              | docker:accounts | true     |
| repo    | name of docker repository |                 | true     |

## Actions

The Docker provider currently does not have any actions.

## Docker provider definition

Here is the full Docker provider definition:

```yaml
---
version: provider-v1alpha1 
name: docker
description: Docker Provider Definition
connection: 
  type: simple
  entity: docker:accounts
  connectionInfo:
  - name: username
    description: user name
    type: name
  - name: password
    description: triggers require password (not a personal access token)
    type: password
triggers: 
  - name: push
    description: push event into a repository
    parameters:
    - name: account
      description: account name
      entity: docker:accounts
      required: true 
    - name: repo
      description: name of docker repository
      required: true 
actions:
```