//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require('lodash');
const homeStartingContent = "Lacus vel facilisis volutpat est velit egestas dui id ornare. Semper auctor neque vitae tempus quam. Sit amet cursus sit amet dictum sit amet justo. Viverra tellus in hac habitasse. Imperdiet proin fermentum leo vel orci porta. Donec ultrices tincidunt arcu non sodales neque sodales ut. Mattis molestie a iaculis at erat pellentesque adipiscing. Magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Adipiscing elit ut aliquam purus sit amet luctus venenatis lectus. Ultrices vitae auctor eu augue ut lectus arcu bibendum at. Odio euismod lacinia at quis risus sed vulputate odio ut. Cursus mattis molestie a iaculis at erat pellentesque adipiscing.";
const aboutContent = "Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Non diam phasellus vestibulum lorem sed. Platea dictumst quisque sagittis purus sit. Egestas sed sed risus pretium quam vulputate dignissim suspendisse. Mauris in aliquam sem fringilla. Semper risus in hendrerit gravida rutrum quisque non tellus orci. Amet massa vitae tortor condimentum lacinia quis vel eros. Enim ut tellus elementum sagittis vitae. Mauris ultrices eros in cursus turpis massa tincidunt dui.";
const contactContent = "Scelerisque eleifend donec pretium vulputate sapien. Rhoncus urna neque viverra justo nec ultrices. Arcu dui vivamus arcu felis bibendum. Consectetur adipiscing elit duis tristique. Risus viverra adipiscing at in tellus integer feugiat. Sapien nec sagittis aliquam malesuada bibendum arcu vitae. Consequat interdum varius sit amet mattis. Iaculis nunc sed augue lacus. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Pulvinar elementum integer enim neque. Ultrices gravida dictum fusce ut placerat orci nulla. Mauris in aliquam sem fringilla ut morbi tincidunt. Tortor posuere ac ut consequat semper viverra nam libero.";

const Day1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
const Day2 = "Tempus egestas sed sed risus pretium quam vulputate dignissim. Quis commodo odio aenean sed adipiscing diam donec adipiscing. Pulvinar etiam non quam lacus suspendisse faucibus interdum posuere. Tincidunt eget nullam non nisi. Massa tincidunt dui ut ornare. Ullamcorper a lacus vestibulum sed arcu non. Gravida arcu ac tortor dignissim. Egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium. Donec ultrices tincidunt arcu non sodales neque sodales ut etiam. Ultricies leo integer malesuada nunc vel. Felis bibendum ut tristique et egestas. Faucibus ornare suspendisse sed nisi lacus sed viverra tellus in. Ut tellus elementum sagittis vitae et leo duis ut. Donec adipiscing tristique risus nec feugiat. Orci phasellus egestas tellus rutrum. Et malesuada fames ac turpis egestas.\nPellentesque habitant morbi tristique senectus. Turpis massa sed elementum tempus. Eget nunc scelerisque viverra mauris in aliquam sem. Mollis aliquam ut porttitor leo a diam sollicitudin tempor. Facilisis magna etiam tempor orci eu lobortis elementum nibh tellus. Ac turpis egestas integer eget aliquet nibh. Ut etiam sit amet nisl purus. Vel risus commodo viverra maecenas accumsan lacus vel. Enim praesent elementum facilisis leo. Nullam eget felis eget nunc. Ac tortor dignissim convallis aenean et tortor. Odio facilisis mauris sit amet massa vitae tortor. Mattis nunc sed blandit libero volutpat sed. Semper eget duis at tellus at urna condimentum mattis pellentesque. Orci ac auctor augue mauris augue neque gravida in.\nGravida dictum fusce ut placerat orci. Sed egestas egestas fringilla phasellus. In ante metus dictum at tempor commodo ullamcorper a. Ac turpis egestas maecenas pharetra convallis posuere morbi leo. Viverra justo nec ultrices dui sapien eget mi. Eget felis eget nunc lobortis mattis aliquam faucibus. Fringilla ut morbi tincidunt augue interdum velit euismod in. At erat pellentesque adipiscing commodo elit at imperdiet dui. Tempor commodo ullamcorper a lacus. A diam maecenas sed enim ut. Tincidunt id aliquet risus feugiat in ante metus dictum at. Volutpat consequat mauris nunc congue nisi vitae suscipit. Dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in. Purus in mollis nunc sed. Velit ut tortor pretium viverra.\nNulla posuere sollicitudin aliquam ultrices sagittis orci a scelerisque purus. Turpis tincidunt id aliquet risus. Viverra adipiscing at in tellus. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Pellentesque habitant morbi tristique senectus et netus et malesuada fames. Nunc pulvinar sapien et ligula ullamcorper malesuada proin. Nec tincidunt praesent semper feugiat nibh sed pulvinar proin. Dui vivamus arcu felis bibendum ut tristique et. Adipiscing enim eu turpis egestas pretium aenean. Integer eget aliquet nibh praesent. Aliquam sem fringilla ut morbi tincidunt augue interdum velit euismod. Viverra vitae congue eu consequat. Nisi scelerisque eu ultrices vitae auctor eu augue. Proin sed libero enim sed faucibus turpis in eu mi. Ut lectus arcu bibendum at varius vel. Convallis tellus id interdum velit laoreet. Adipiscing at in tellus integer feugiat. Lectus quam id leo in vitae turpis."

const app = express();

const posts = [
  {title:'Day 1',
   content:Day1},
  {title:'Day 2',
   content:Day2}
];

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));



app.get('/',function(req,res) {
  res.render('home',{startingContent:homeStartingContent,posts:posts});
});

app.get('/about',function(req,res) {
  res.render('about',{aboutContent:aboutContent});
});

app.get('/contact',function(req,res) {
  res.render('contact',{contactContent:contactContent});
});

app.get('/compose',function(req,res) {
  res.render('compose');
});

app.post('/compose',function(req,res) {
  const post = {
    title:req.body.postTitle,
    content:req.body.postBody
  };
  posts.push(post);
  res.redirect('/');
});

app.get('/posts/:postName',function(req,res) {
  const requiredTitle = _.lowerCase(req.params.postName);
  posts.forEach(function(post) {
    const storedTitle = _.lowerCase(post.title);
    if(storedTitle===requiredTitle) {
      res.render('post',{title:post.title,content:post.content});
    }
  });
});












app.listen(3000, function() {
  console.log("Server started on port 3000");
});
