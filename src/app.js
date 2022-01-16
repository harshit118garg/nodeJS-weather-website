const express = require('express');
const hbs = require('hbs')

const app = express();
const port = process.env.PORT || 8000;

const path = require('path');

const filepath = path.join(__dirname, "../public")
const template_path = path.join(__dirname, "../templates/views")
const partials_path = path.join(__dirname, "../templates/partials")


app.set("view engine", 'hbs')
app.set ('views', template_path)
hbs.registerPartials(partials_path); 

app.use(express.static(filepath))

app.get('/' , (req , res)=>{

   res.render('index')

})

app.get('/weather' , (req , res)=>{

   res.render('weather')

})

app.get('/about' , (req , res)=>{

   res.render('about')

})

app.get('*' , (req , res)=>{

   res.status(404).render('404error', {
      errorMsg : "OOPS! Page Not found"
   })

})

app.listen(8000, () => {
    console.log(`listening to the port ${port}`);
})