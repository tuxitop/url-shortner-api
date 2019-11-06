# url-shortner-api
A simple url shortner api web app powered with expressjs and mongodb for
freecodecamp.com backend developement courses.

## View the app
you can view the app on https://murmuring-fjord-70054.herokuapp.com/

## Purpose
You can pass a url as a paramater after "/new/" and you will recieve a shortend
URL in the response. the response would be in JSON format. visiting the
shortened url will redirect you to the original link.

### Example usage

https://murmuring-fjord-70054.herokuapp.com/new/http://alimsvi.ir/blog

https://murmuring-fjord-70054.herokuapp.com/new/https://google.com

### Example output

https://murmuring-fjord-70054.herokuapp.com/SkCAoG2Vg

## Installation

#### Install and configure mongodb

#### Clone the repo
`git clone https://github.com/tuxitop/url-shortner-api.git`

`cd url-shortner-api`
#### Install the dependecies
`npm install`
#### Run the app
`npm start`

you can view it by visiting [http://localhost:3000](http://localhost:3000) with a browser.
