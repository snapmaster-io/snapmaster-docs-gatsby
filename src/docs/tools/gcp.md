# Google Cloud Platform (GCP)

## Connection

### Connection type

The GCP connection type is **simple**.  

### Entity name

The GCP connection entity is named **gcp:projects**.

### Connection info ###

**Before connecting to a GCP project, the following steps must be performed:**
1.  A GCP service account must be created, with the name `snapmaster`.  The email address for the service account MUST be in the following form: `snapmaster@<project-id>.iam.gserviceaccount.com` where `<project-id>` is the project ID that the service account was created under.  Service accounts can be created in the GCP console here: https://console.cloud.google.com/iam-admin/serviceaccounts?project=project-id where `project-id` is the project ID you are managing.
2.  The Cloud Resource Manager API must be enabled in the project.  This can be done in the console here: https://console.developers.google.com/apis/api/cloudresourcemanager.googleapis.com/overview?project=project-number where `project-number` is the project number associated with the project ID (you can find it in the console).

Once you have done both of these things, you are ready to connect to a GCP project.

A GCP connection requires two pieces of information:

| name    | description                                      | type     |
|---------|--------------------------------------------------|----------|
| project | project ID                                       | name     |
| key     | paste the JSON from the service account key file | password |

## Triggers

The GCP provider currently does not have any triggers.

## Actions

The GCP provider exposes the following actions:

| name      | description                                                                  |
|-----------|------------------------------------------------------------------------------|
| build     | clone a repo and build a container image                                     |
| copyimage | copy container image from a dockerhub $repo to gcr.io/$project/$image        |
| deploy    | deploy a container image from $gcr.io/$project/$image to $service in $region |

Parameters for `build` action:

| name    | description             | entity       | required |
|---------|-------------------------|--------------|----------|
| project | project ID              | gcp:projects | true     |
| image   | image name              |              | true     |
| repo    | repo to clone and build |              | true     |

Parameters for `copyimage` action:

| name    | description         | entity       | required |
|---------|---------------------|--------------|----------|
| project | project ID          | gcp:projects | true     |
| repo    | dockerhub repo name |              | true     |
| image   | image name          |              | true     |

Parameters for `deploy` action:

| name    | description           | entity       | required |
|---------|-----------------------|--------------|----------|
| project | project ID            | gcp:projects | true     |
| image   | image to deploy       |              | true     |
| service | service name          |              | true     |
| region  | region to deploy into |              | true     |

## GCP provider definition

Here is the full GCP provider definition:

```yaml
---
---
version: provider-v1alpha1 
name: gcp
description: GCP Provider Definition
connection: 
  type: simple
  infoText: create a service account and download the key file
  infoUrl: https://console.cloud.google.com/apis/credentials
  entity: gcp:projects
  connectionInfo:
  - name: project
    description: project ID 
    type: name
  - name: key
    description: paste the JSON from the service account key file
    type: password
parameters: 
  - name: region
    description: region to operate in
triggers: 
actions:
  - name: build
    description: clone a repo and build a container image 
    parameters:
    - name: project
      description: project ID
      entity: gcp:projects
      required: true
    - name: image
      description: image name
      required: true
    - name: repo
      description: repo to clone and build
      required: true
  - name: copyimage
    description: copy container image from a dockerhub $repo to gcr.io/$project/$image
    parameters:
    - name: project
      description: project ID
      entity: gcp:projects
      required: true
    - name: repo
      description: dockerhub repo name
      required: true
    - name: image
      description: image name
      required: true
  - name: deploy
    description: deploy a container image 
    parameters:
    - name: project
      description: project ID
      entity: gcp:projects
      required: true
    - name: image
      description: image to deploy
      required: true
    - name: service
      description: service name
      required: true
    - name: region
      description: region to deploy into
      required: true
```