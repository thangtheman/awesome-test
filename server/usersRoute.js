/**
 * Created by ThangTheMan on 7/31/15.
 */
module.exports = function (app,express){



//create routes for the admin section
//get an instance of the router
var usersRouter = express.Router();

    usersRouter.get('/', function(req,res){
        res.send('I am the dashboard');
    });

//user main page, the dashboard (http://localhost:1337/users
    usersRouter.get('/users', function(req,res){
        res.send('I show all the users');
    });


//post page, the dashboard (http://localhost:1337/posts
    usersRouter.get('/posts', function(req,res){
        res.send('I show all the posts');
    });

//apply routes to application
    app.use('/user', usersRouter);

};