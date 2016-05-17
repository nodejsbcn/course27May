# 9. Adding relations

In this exercise we will add relations to the model. The relations will also appears as REST endpoints relative to the models where we create them.

## 9.1. A Message has Responses
A message can have other messages that are response to this message. This is a has-many relationship.
Create the relationship with the command *slc loopback:relation*

```sh
$ slc loopback:relation
```

![Message has responses](https://raw.githubusercontent.com/nodejsbcn/course27May/master/exercise09/screenshots/screenshot01.png)

## 9.2. A Message can have a Parent
When a Message is a response to another Message, this means that this last one is the parent of the first one.
In this case is a relationship of type belongs-to.

![Message has parent](https://raw.githubusercontent.com/nodejsbcn/course27May/master/exercise09/screenshots/screenshot02.png)

## 9.3. A Message has an Author
A message is written by a Person, so this person is the author of the message. 
It's a relationship of type belongs-to.

![Message has author](https://raw.githubusercontent.com/nodejsbcn/course27May/master/exercise09/screenshots/screenshot03.png)

## 9.4. A Person has Messages
This is the relationship so from a person we can have all it's messages.
It's a relationship of type has-many.

![Person has messages](https://raw.githubusercontent.com/nodejsbcn/course27May/master/exercise09/screenshots/screenshot04.png)

## 9.5. Run the application
You'll find the relationships in each model.

![Relationship](https://raw.githubusercontent.com/nodejsbcn/course27May/master/exercise09/screenshots/screenshot05.png)
