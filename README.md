
# iDid - an app to count things you do

iDid is a mobile-forward web application that lets you keep track of anything you do. It also allows for friendly competition, via a leaderboard, showing who else is doing the same things and how much!

Visit the deployed version here: https://idid.netlify.app/

## Usage Instructions

To count something you did, simply click the "I DID..." Floating Action Button:

![Floating Action Button](https://github.com/nichol88/iDid-frontend/blob/master/public/fab.png)

And you'll be taken to the form:

![Action Form](https://github.com/nichol88/iDid-frontend/blob/master/public/actionform.png)

Select or type something to count, then add the number of repetitions using the buttons, or type a number in manually. 

If you want to count something else, tap "Count Something Else"! This will allow you to add a new thing to count:

![Counter Form](https://github.com/nichol88/iDid-frontend/blob/master/public/counterform.png)

If you'd like to track weight, for example if the activity you'd like to count involves lifting weights, check the box and select the unit of measurement you would like to use.

If you would like to track a duration of time instead of repetitions, for example, time spent running or meditating, check the appropriate box.

Note: An activity can not be both weighted *and* timed, so choose only one!

## To Install Locally

*(For the app to work properly on your local machine, you will need the back end as well. Download it here and follow the installation instructions: https://github.com/nichol88/iDid-backend)*

1. After you have downloaded the repo, go to /src/Constants.js, and comment out Line 3.
2. Un-comment Line 2, and make sure the port number is the same one that your back end Rails server is running on.
3. In your terminal, run `npm start`. That's it!

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


## License

MIT License

Copyright (c) 2020 Brian Nicholls

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
