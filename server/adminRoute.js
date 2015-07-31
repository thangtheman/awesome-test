

//admin main page, the dashboard (http://localhost:1337/admin
module.exports = function (app,express){



//create routes for the admin section
//get an instance of the router
var adminRouter = express.Router();

adminRouter.get('/', function(req,res){
    res.send('I am the dashboard');
});

//user main page, the dashboard (http://localhost:1337/users
adminRouter.get('/users', function(req,res){
    res.send('I show all the users');
});


//post page, the dashboard (http://localhost:1337/posts
adminRouter.get('/posts', function(req,res){
    res.send('I show all the posts');
});
//apply routes to application
app.use('/admin', adminRouter);

};