# Managing connections

## Interacting with the Tool library

`snap tools list` will retrieve all the tools in the library:

![snap tools list](img/snap-tools-list.png)

`snap tools get {tool}` will get the description of a tool.  The tool definition 
language is a YAML syntax documented elsewhere.

![snap tools get](img/snap-tools-get.png)

## Connecting tools

`snap connect {tool}` will connect a tool, prompting for credentials, and will store a 
default credential-set associated with that tool.

![snap connect](img/snap-connect.png)

`snap connections list` will list all connected tools.


## Adding and removing credential-sets

`snap connections credential-set add {tool}` will add a new credential-set for the 
specificed tool:

![credential set add](img/credential-set-add.png)

`snap connections credential-set remove {tool} {credential-set-name}` will remove 
the specified credential set from the tool.

![credential set remove](img/credential-set-remove.png)
