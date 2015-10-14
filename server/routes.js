

//admin main page, the dashboard (http://localhost:1337/admin
module.exports = function (app,express, path){

//send our index.html file to the user for the homepage


    app.use(express.static(__dirname + "/../client"));
    app.get('/', function(req,res){
        res.sendFile( path.resolve("index.html"));
    });
//create routes for the admin section
//get an instance of the router
var adminRouter = express.Router();

// route middleware that will happen on every request

    adminRouter.use(function(req, res, next) { // log each request to the console
        console.log(req.method, req.url);
        // continue doing what we were doing and go to the route
        next(); });


adminRouter.get('/', function(req,res){
    res.send('I am the dashboard');
});

//user main page, the dashboard (http://localhost:1337/admin/users
adminRouter.get('/users', function(req,res){
    res.send('I show all the users');
});


//post page, the dashboard (http://localhost:1337/admin/posts
adminRouter.get('/posts', function(req,res){
    res.send('I show all the posts');
});
//apply routes to application
app.use('/admin', adminRouter);



//Section for users

//create routes for the admin section
//get an instance of the router
    var usersRouter = express.Router();



   //usersRouter Middle Ware

    usersRouter.use(function(req, res, next) { // log each request to the console
        console.log(req.method, req.url);
        // continue doing what we were doing and go to the route
        next(); });
    usersRouter.param('name', function(req,res,next,name){
        //do validation
        //some more
        //log something if it work
        console.log('Performing Validation On User ' + name);

        //once validation is done, save the new item in the request
        req.name = name;
        //go do the next thing
        next();
    });

    // route with parameters (http://localhost:1337/admin/hello/:name)
    usersRouter.get('/hello/:name', function(req, res) {
        res.send('hello ' + req.name + '!');
         });




    usersRouter.get('/', function(req,res){
        res.send('I am the dashboard for users');
    });

//user main page, the dashboard (http://localhost:1337/user/users
    usersRouter.get('/users', function(req,res){
        res.send('I show all the unique users info');
    });


//post page, the dashboard (http://localhost:1337/user/posts
    usersRouter.get('/posts', function(req,res){
        res.send('I show all the posts');
    });

//apply routes to application
    app.use('/user', usersRouter);



//LOGIN
    app.route('/login')
    //show the login form (get http://localhost:1337/login
        .get(function(req,res){
            res.send('this is the login form')
        })
    //post the form (post httpL//localhost:1337/login
        .post(function(req,res){
            console.log('Processing');
            res.send('Processing the login form!')
        })



    // get an instance of the express router
    var apiRouter = express.Router();
    // test route to make sure everything is working
    // accessed at GET http://localhost:8080/api
    apiRouter.get('/', function(req, res) {
        res.json({ message: 'hooray! welcome to our api!' });
        });
app.use('/api', apiRouter)

};