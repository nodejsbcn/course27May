# 4. Create the models

## 4.1. Install the mongodb connector.

This is the model that we want for the first version of the API:

![model](https://raw.githubusercontent.com/nodejsbcn/course27May/master/exercise04/screenshots/screenshot01.png)

So we will start creating the two models, with no relationships.
In the case of the Message collection, we will skip for this first phase the fields *parentId* and *personId*, because are Foreign Keys that we will define in the relations.
Also we will skip the fields *created* and *modified* that we will add in the chapter about hooks.

## 4.2. Create the model Person

### 4.2.1. Add a model

Use the command *slc loopback:model*

```sh
$ slc loopback:model
```
![add a model](https://raw.githubusercontent.com/nodejsbcn/course27May/master/exercise04/screenshots/screenshot02.png)

### 4.2.2. Enter a name for the model: *Person*
![name of the model](https://raw.githubusercontent.com/nodejsbcn/course27May/master/exercise04/screenshots/screenshot03.png)

### 4.2.3. Select the datasource: *mongo*
![select datasource](https://raw.githubusercontent.com/nodejsbcn/course27May/master/exercise04/screenshots/screenshot04.png)

### 4.2.4. Select the base class: *PersistedModel*
![select base class](https://raw.githubusercontent.com/nodejsbcn/course27May/master/exercise04/screenshots/screenshot05.png)

### 4.2.5. Indicate if you want to expose the model as a REST Api: *Y*
![select base class](https://raw.githubusercontent.com/nodejsbcn/course27May/master/exercise04/screenshots/screenshot06.png)

### 4.2.6. Enter the plural of the model name: *People*
![select base class](https://raw.githubusercontent.com/nodejsbcn/course27May/master/exercise04/screenshots/screenshot07.png)

### 4.2.7. Indicate if this is a common model or server only: *common*
![select base class](https://raw.githubusercontent.com/nodejsbcn/course27May/master/exercise04/screenshots/screenshot08.png)

### 4.2.8. Create the property *name*

#### 4.2.8.1. Enter the property name: *name*
![select base class](https://raw.githubusercontent.com/nodejsbcn/course27May/master/exercise04/screenshots/screenshot09.png)

#### 4.2.8.2. Select a type for the property: *string*
![select base class](https://raw.githubusercontent.com/nodejsbcn/course27May/master/exercise04/screenshots/screenshot10.png)

#### 4.2.8.3. Indicate if the property is required: *y*
![select base class](https://raw.githubusercontent.com/nodejsbcn/course27May/master/exercise04/screenshots/screenshot11.png)

#### 4.2.8.4. Indicate a default value: *press Enter*
![select base class](https://raw.githubusercontent.com/nodejsbcn/course27May/master/exercise04/screenshots/screenshot12.png)

### 4.2.9. Create the property *nickname*: *string, required*

### 4.2.10. Create the property *email*: *string, required*

### 4.2.11. Press enter to end
![select base class](https://raw.githubusercontent.com/nodejsbcn/course27May/master/exercise04/screenshots/screenshot13.png)

## 4.3. Create the model Message

### 4.3.1. Repeat the process done for Person: *Message*, *mongo*, *PersistedModel*, *y*, *Messages*, *common*

### 4.3.2. Add the property *text*: *string, required*

## 4.4. Add the folder /common/models you'll find the generated code for the models
![select base class](https://raw.githubusercontent.com/nodejsbcn/course27May/master/exercise04/screenshots/screenshot14.png)

