#M5power

### About
M5Power is a BMW M series forums based full stack application. The app is built with Angular2 for the client side and Express/Node for the backend. The app allows users to add new BMW M Series cars so that other users are able to discuss and make posts about certain topics they may have (e.g "Do it yourself engine oil change"). The app uses Multer for image uploads and has MongoDB on the backend to save users, cars, posts, and discussion data. This is made possible by nested schemas within the database to properly render the required data on the front end with api calls sent from Angular. M5Power also uses the Youtube iFrame API for video rendering of M series cars.

### Authentication
M5Power authentication is built from the ground up with PassportJS on the express side of the app. There is also successful error handling for data that conflicts such as if a username is already taken. There is also encryption with Bcrypt to keep users passwords safe with gen salt hashing incorporated. 

