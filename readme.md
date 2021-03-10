## overview

This is my final project for CS602 Server Side Web Development. The requirments
included having an API that could handle both JSON and XML requests.

## confirguring database

You will need to create a credentials.js file with the credentials for your mongoDB instance. 

## starting the application

cd into the root directory.
run 'npm install'
once modules have finished installing, the application can be run with
'node app.js'
The application will then start at http://localhost:3000


## api documentation

get /api/programminglanguages 
will return all programming languages

post /api/programminglanguages 
add a new language

get /api/programminglanguages?name=
takes a programming language name as a parameter
and returns a programming language wit that name

get /api/programminglanguages?id=
takes a programming language id as a parameter
and returns a programming language wit that id

get /api/programminglanguages?createdAfter=
takes a year and displays programming languages created after that
year



