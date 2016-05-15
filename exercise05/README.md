# 5. Run your application
## 5.1. If you don't have the modules installed, remember to do *npm install*
```sh
$ npm install
```
## 5.2. You'll need to have your mongodb up *mongod*
```sh
$ mongod
```
## 5.3. Run your app using *slc run*
```sh
$ slc run
```
![running](https://raw.githubusercontent.com/nodejsbcn/course27May/master/exercise05/screenshots/screenshot01.png)

## 5.4. You're app will be up. In the main page you'll se the uptime information
![uptime](https://raw.githubusercontent.com/nodejsbcn/course27May/master/exercise05/screenshots/screenshot02.png)

## 5.5. You can see also the API explorer
![explorer](https://raw.githubusercontent.com/nodejsbcn/course27May/master/exercise05/screenshots/screenshot03.png)

## 5.6. Let's create several persons
### 5.6.1. Go to the verb POST of People
![People POST](https://raw.githubusercontent.com/nodejsbcn/course27May/master/exercise05/screenshots/screenshot04.png)
### 5.6.2. Click in the proposed model schema. It will copy the model schema to the data input.
![People POST](https://raw.githubusercontent.com/nodejsbcn/course27May/master/exercise05/screenshots/screenshot05.png)
### 5.6.3. Fill the data and remove the field id (it will be automatically filled by the backend)
![People Fill data](https://raw.githubusercontent.com/nodejsbcn/course27May/master/exercise05/screenshots/screenshot06.png)
### 5.6.4. Click the button *Try it out!* and the row will be inserted. You can see the id generated in the response.
![People Inserted](https://raw.githubusercontent.com/nodejsbcn/course27May/master/exercise05/screenshots/screenshot07.png)
### 5.6.5. You can check that the person is created at the database.
![People Inserted](https://raw.githubusercontent.com/nodejsbcn/course27May/master/exercise05/screenshots/screenshot08.png)
### 5.6.6. You can try the GET of People and see the response
![People Inserted](https://raw.githubusercontent.com/nodejsbcn/course27May/master/exercise05/screenshots/screenshot09.png)
### 5.6.7. In the GET you can use filters in JSON format
![Filter](https://raw.githubusercontent.com/nodejsbcn/course27May/master/exercise05/screenshots/screenshot10.png)
![Filter Result](https://raw.githubusercontent.com/nodejsbcn/course27May/master/exercise05/screenshots/screenshot11.png)


