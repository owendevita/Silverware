# How to Setup and Run the Project

## Setup

### Needed Programs:
  Download [NPM/Node.js](https://nodejs.org/en/download/), [Python](https://www.python.org/downloads/), [VS Code](https://code.visualstudio.com/download)

### Useful VS Code Extensions:
  Babel JavaScript, Auto Rename Tag, Django, ES7+ React/Redux/React-Native snippets, JavaScript (ES6) code snippets, Prettier, Python

### Python downloads:
  `pip install django djangorestframework`
  (pip3 if on mac)

### NPM Install:
  cd into the frontend folder through the VS Code terminal and run `npm install` to download all current dependencies.


## Running the Project

### Starting the React frontend
  cd into the frontend folder and use the VS Code terminal to run `npm run dev`

### Starting the Django server
  open a new VS Code terminal and cd into restaurant-software/restaurant_software (where manage.py is) and run `python manage.py makemigrations`, then run `python manage.py migrate`, and finally run `python manage.py runserver`
