const createError = require('http-errors');
// not found handler
function notFoundHandler (req, res, next) {
    next(createError(404, "Your requested content was not found!"));
}

function errorHandler (err, req, res, next) {
    // res.locals.title = "Error page";
    // res.render('error',{
    //     title: "error page",
    // });
    res.locals.title = process.env.NODE_ENV === "development" ? err : {message: err.message};
    res.status(err.status || 500);

    if(res.locals.html){
        // html response
        res.render('error',{
            title: "error page",
        });
    }else{
        // json response
        res.json(res.locals.error);
    }

}

module.exports = {
    notFoundHandler,
    errorHandler
}