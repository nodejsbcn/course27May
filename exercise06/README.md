# 6. Upload the app to the cloud
## 6.1. Change the database to a free mlab mongodb.
### 6.1.1. Register and login into mlab: https://mlab.com
### 6.1.2. Create a new database and select a FREE sandbox
![FREE sandbox](https://raw.githubusercontent.com/nodejsbcn/course27May/master/exercise06/screenshots/screenshot01.png)
### 6.1.3. Enter your created database. You'll see the host and the port. Lets create a new user
![Configuration](https://raw.githubusercontent.com/nodejsbcn/course27May/master/exercise06/screenshots/screenshot02.png)
#### 6.1.3.1. Click on *Users*
![Users](https://raw.githubusercontent.com/nodejsbcn/course27May/master/exercise06/screenshots/screenshot03.png)
#### 6.1.3.2. Click on *add database user*
![Users](https://raw.githubusercontent.com/nodejsbcn/course27May/master/exercise06/screenshots/screenshot04.png)
#### 6.1.3.3. Enter a valid user and password and click *Create*
### 6.1.3. Inside *server* folder, duplicate the file *datasources.json* and name it *datasources.heroku.json*
Loopback allows you to work with several environment configuration. In order to do that, every configuration file can have an environment name before the extension.
The environment name is loaded from the environment variable *NODE_ENV*
### 6.1.4. Put your mlab database host and port in this new file. For the user and password put the values *"${SENDACROW_USER}"* and *"${SENDACROW_PASSWORD}"*
Avoid allways to put your credentials in files that can be uploaded to a git or other repository.
Loopback allows you to use environment variables with the format *${VARIABLE_NAME}*
![Mlab config](https://raw.githubusercontent.com/nodejsbcn/course27May/master/exercise06/screenshots/screenshot05.png)
### 6.1.5. Set your environment variables: NODE_ENV=heroku, SENDACROW_USER=your_user, SENDACROW_PASSWORD=your_password
![Environment variables](https://raw.githubusercontent.com/nodejsbcn/course27May/master/exercise06/screenshots/screenshot06.png)
### 6.1.6. Run your app to check that is able to connect 
![Run app](https://raw.githubusercontent.com/nodejsbcn/course27May/master/exercise06/screenshots/screenshot07.png)
## 6.2. Deployment to Heroku
### 6.2.1. Register and login into Heroku: http://www.heroku.com
![Heroku dashboard](https://raw.githubusercontent.com/nodejsbcn/course27May/master/exercise06/screenshots/screenshot08.png)
### 6.2.2. Create a new app
![Create heroku app](https://raw.githubusercontent.com/nodejsbcn/course27May/master/exercise06/screenshots/screenshot09.png)
### 6.2.3. You'll se your app created
![heroku app](https://raw.githubusercontent.com/nodejsbcn/course27May/master/exercise06/screenshots/screenshot10.png)
### 6.2.3. You'll have to specify a buildpack for your app. Click on *Settings* go down and select *Add buildpack*
![heroku app](https://raw.githubusercontent.com/nodejsbcn/course27May/master/exercise06/screenshots/screenshot11.png)
### 6.2.4. Enter *https://github.com/strongloop/strongloop-buildpacks.git*
![heroku buildpack](https://raw.githubusercontent.com/nodejsbcn/course27May/master/exercise06/screenshots/screenshot12.png)
### 6.2.5. Back in settings, click on *Reveal config vars* and set your environment variables.
![heroku env variables](https://raw.githubusercontent.com/nodejsbcn/course27May/master/exercise06/screenshots/screenshot13.png)
### 6.2.6. In your application root folder, create a new file called *Procfile* (the uppercase is very important) with this content:
```sh
web: slc run
```
This will indicate heroku what command is the one that starts the application.
### 6.2.7. Click on *Deploy* and select *github* as deployment method.
![heroku github](https://raw.githubusercontent.com/nodejsbcn/course27May/master/exercise06/screenshots/screenshot14.png)
### 6.2.8. Click on *Search* and select your project
![heroku github project](https://raw.githubusercontent.com/nodejsbcn/course27May/master/exercise06/screenshots/screenshot15.png)
### 6.2.9. Now you can select your deploy method. 
I'll set it to automatic deploy, so every time a new push is done into master, heroku deploy automatically the new code
![heroku github deploy](https://raw.githubusercontent.com/nodejsbcn/course27May/master/exercise06/screenshots/screenshot16.png)
And click the manual deploy to do your first deploy. It will take a while, but you'll see the log of the remote console installing the packages.
### 6.2.10. Go to resources and start your app
![heroku start app](https://raw.githubusercontent.com/nodejsbcn/course27May/master/exercise06/screenshots/screenshot17.png)
### 6.2.11. Open app
You'll have your app running online for free during 18 hours per day. The application will set automatically to sleep when idle, so the idle time does not consume time from this 18 hours.
The mongodb at mlab is also free, to a maximum size of 500MB.
![heroku open app](https://raw.githubusercontent.com/nodejsbcn/course27May/master/exercise06/screenshots/screenshot18.png)


 




