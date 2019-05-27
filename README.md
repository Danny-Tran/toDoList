# Check It
The place to store your recommomendations and check them out later!

## User Stories

1. After running into my friend the other day, he recommended that I CheckOut this awesome place downtown for my next date night. A couple weeks went by and I couldn't for the life of me remember where he suggested. Another disappointing date night at Boston Pizza. If only there was an app to store my restaurant recs!

2. After finding another piece of paper in my lint catcher, I need a place to store my jotted down reminders. It'd be awesome if it could categorize it for me so I know what everything means and I stay organized.

3. As a user I want a place to quickly jot down something and it categorizes it. This will help me remember all the recommendations I get and jog my memory when I'm ready to check it out later!


## Dependencies

- body parser 
- dotenv
- ejs
- express
- knex & knex-logger
- morgan
- sass
- pg

## Getting Started

1. Install the dependancies with ```npm install```
2. run the server ```npm start```
3. Visit localhost 8080


## How to use it

Once you're logged in, you will see a window to input your item in your todo list. Just select your category and type in whatever you want. 

Once  you have items in your todo list, you'll see them below already categorized! 

## Screenshots:
![Once you're logged in you have access to the window where you have to CheckIt](https://github.com/Danny-Tran/toDoList/blob/frontEnd/public/images/homepage.png?raw=true)

![Easily add an item to your to do list and see it appear under the correct tab](https://github.com/Danny-Tran/toDoList/blob/frontEnd/public/images/addingtomovies.png?raw=true)

## the nitty gritty ...

We have set up API GET requests fetching from 3 different sources making our database to search through endless! These are integrated into HTML with jQuery and populated into the provided categories. 

Once you've completed an item from your CheckIts, click and and it will get crossed out. This is handy incase you want to CheckOut something again.


