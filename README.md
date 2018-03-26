# M5power

### Live
[M5Power Live](http://www.m5power.co/)

### About
M5Power is a BMW M series forums based full stack application. The app is built with Angular2 for the client side and Express/Node for the backend. The app allows users to add new BMW M Series cars so that other users are able to discuss and make posts about certain topics they may have (e.g "Do it yourself engine oil change"). The app uses Multer for image uploads and has MongoDB on the backend to save users, cars, posts, and discussion data. This is made possible by nested schemas within the database to properly render the required data on the front end with api calls sent from Angular. M5Power also uses the Youtube iFrame API for video rendering of M series cars.

### Authentication
M5Power authentication is built from the ground up with PassportJS on the express side of the app. There is also successful error handling for data that conflicts such as if a username is already taken. There is also encryption with Bcrypt to keep users passwords safe with gen salt hashing incorporated. 

### The App
![M5Power image](https://i.imgur.com/nE5CScS.png)
M5Power has a search page for all BMW M Cars for users to search for the car that they need to post on or they can add a new BMW M Vehicle to the database for their specific car. This allows for a dynamic application in which users can talk to each other about different topics or issues they may be having with their car. 

### YouTube API 
M5Power in future iterations will pull from the YouTube Data V3 API. Currently it is pulling from the YouTube iFrame API to render a single M Car video. The data API will allow for many different M car videos to be rendered on the website with a search form for users to find specific videos. 
![youtube-api](https://i.imgur.com/Glj3HqT.gif)


