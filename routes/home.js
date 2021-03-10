module.exports = async (req, res, next) => {

    let mainMessage = "Welcome to Tech Job Search, my final project for MET CS 602 Server Side Web Developemnt. It is written in Node.js, MongoDB, and Handlebars. Tech Job Search allows the user to create and run job searches. It supports two parameters: location and programming languages. The programming languages are populated from a database. The database can be updated through the admin page. The searches are run against the GitHub Jobs API. ";
    res.render('home', { message: mainMessage });

};