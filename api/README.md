SETUP #

## Pre-Requisites ##
node version 8.9.4
mysql version 5.7


```
#!shell
nvm install 8.9.4
nvm use 8.9.4
npm install -g mysql2
npm install -g sequelize-auto

```

# CODE SETUP #
## Get the repository ##
```
#!shell
git clone <THIS_PROJECT_GIT_URL>

```

## Install packages ##

```
#!shell

npm install

```

# DB SETUP #
## Login to mysql ##


```
#!shell

mysql -u root -p
create user 'skill'@'localhost' identified by 'skill';
drop database skill;
create database skill;
grant all privileges on skill.* to 'skill'@'localhost' with grant option;
exit;

mysql -u skill -pskill skill < db/schema.sql;
```

## If you would like to re-generate the models from the DB, run the below ##

```
#!shell

sequelize-auto -o "./models" -d skill -h localhost -u skill -p 3306 -x skill -e mysql

```

# RUN #
## Start server on command line ##

```
#!shell

PORT=7546 NODE_ENV=development DEBUG=skill:* npm start