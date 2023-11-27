// express app
const express = require('express');

// require express returns function express() that we can reference during our code.
const app = express()

const morgan = require('morgan')

const mongoose = require('mongoose')
// require('./config/mongo')

const Blog = require('./models/blog')



// mongoose and mongo sandbox routes

app.get('/add-blog', (req, res) => {
  const blog =new Blog ({
    title: 'new blog',
    snippet: 'about',
    body: 'more about my new blog'
  });

  blog.save()
  .then ((result)=>{
    res.send(result)
  })
  .catch((err)=>{
    console.log(err);
  })
})


// if we want to use different folder than default(views)
// app.set('views', 'foldername')



mongoose.connect('mongodb+srv://db_group_14:db_group_14@cluster0.95qeqy7.mongodb.net/')

.then((result)=> console.log(app.listen(3000),'db is connected, yayy'))

.catch(err => console.log(err));

// register view engine/ ejs will be used to create templates
app.set('view engine', 'ejs');

//listen for request
// app.listen(3000);

// middleware & static files (morgan)
app.use(express.static('public'))
app.use(morgan('tiny'));




//listens to get requests
app.get('/',(req,res) => {
  // instead res.write('') and res.end() we can just write res.send()
 //  auto header(type of contenttext/url etc) auto status code 
//   res.send('<p>home page</p>');
const blogs = [
    {title: 'I am therefore my leg is green', snippet: 'Spinach is sugar of the masses '},
    {title: 'My bars are like skyscraper in', snippet: 'gimme da dus bos'},
    {title: 'Some words and more words', snippet: 'Here again to be born later'},
];

res.render('index', {shmitle: 'Home', blogs});
});

app.get('/about',(req,res) => {
    // res.send('<p>About page</p>');
    res.render('about',{shmitle: 'About'});
  })

  app.get('/blogs/create', (req, res) => {
    res.render('create',{shmitle: 'Create a new blog'});
  })

// 404 page /default path/ 
app.use((req,res) => {
    res.status(404).render('404',{shmitle: '404'});
})



// id: server 1 password: server123

// id: db_group_14 password: db_group_14
