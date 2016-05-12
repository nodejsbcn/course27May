# 3. Configure a datasource

## 3.1. Install the mongodb connector.

To do this, use the command *npm install* inside the project folder, with the option *--save* so the connector is also added to the *package.json*. 

```sh
$ cd sendacrow
$ npm install --save loopback-connector-mongodb
```
![install connector](https://raw.githubusercontent.com/nodejsbcn/course27May/master/exercise02/screenshots/screenshot01.png)

## 3.2. Add a datasource

Use the command *slc loopback:datasource*

```sh
$ slc loopback:datasource
```
![add datasource](https://raw.githubusercontent.com/nodejsbcn/course27May/master/exercise02/screenshots/screenshot02.png)

### 3.2.1. Enter a name for the datasource. Example: *mongo*
![add datasource](https://raw.githubusercontent.com/nodejsbcn/course27May/master/exercise02/screenshots/screenshot03.png)

### 3.2.2. Choose *MongoDB*
![add datasource](https://raw.githubusercontent.com/nodejsbcn/course27May/master/exercise02/screenshots/screenshot04.png)

### 3.2.3. Enter the host of the database: *localhost*
![add datasource](https://raw.githubusercontent.com/nodejsbcn/course27May/master/exercise02/screenshots/screenshot05.png)

### 3.2.4. Enter the port of the database: *27017*
![add datasource](https://raw.githubusercontent.com/nodejsbcn/course27May/master/exercise02/screenshots/screenshot06.png)

### 3.2.5. Enter the user of the database: *press Enter*
![add datasource](https://raw.githubusercontent.com/nodejsbcn/course27May/master/exercise02/screenshots/screenshot07.png)

### 3.2.6. Enter the password of the database: *press Enter*
![add datasource](https://raw.githubusercontent.com/nodejsbcn/course27May/master/exercise02/screenshots/screenshot08.png)

### 3.2.7. Enter a name for the database: *sendacrow*
![add datasource](https://raw.githubusercontent.com/nodejsbcn/course27May/master/exercise02/screenshots/screenshot09.png)

### 3.2.8. The datasource will be created. You can check it at *server/datasources.json*
![add datasource](https://raw.githubusercontent.com/nodejsbcn/course27May/master/exercise02/screenshots/screenshot10.png)
