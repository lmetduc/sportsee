# Sportsee


## Prerequisite :hammer:
NodeJS (version 14.16.0)
react version 18.2.0
recharts version 2.1.13

## Install and launch the back-end :key:
Clone the SportSee backend repo:

`git clone https://github.com/lmetduc/sportsee.git`

From the back-end repo, install its dependencies :

`npm install` or `yarn`

Run the backend on port 3000 (default port):

`npm run start` or `yarn dev`

## Install and launch the front-end :key:
Clone the present SportSee front-end repo :

`git clone https://github.com/lmetduc/sportsee.git`

From this front-end repo, install dependencies :

`npm install`

Launch the front-end on port 3001:

`npm start`

The front-end is then available at the URL http://localhost:3001.

## Endpoints

This project includes four endpoints that you will be able to use:

http://localhost:3000/user/${userId} - retrieves information from a user. This first endpoint includes the user id, user information (first name, last name and age), the current day's score (todayScore) and key data (calorie, macronutrient, etc.).

http://localhost:3000/user/${userId}/activity - retrieves a user's activity day by day with kilograms and calories.

http://localhost:3000/user/${userId}/average-sessions - retrieves the average sessions of a user per day. The week starts on Monday.

http://localhost:3000/user/${userId}/performance - retrieves a user's performance (energy, endurance, etc.).

Warning, currently only two users have been mocked. They have userId 12 and 18 respectively.

Examples of queries

http://localhost:3000/user/12/performance - Retrieves the performance of the user with id 12

http://localhost:3000/user/18 - Retrieves user 18's main information.