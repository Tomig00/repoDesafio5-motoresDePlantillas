const express = require('express')
const handlebars = require('express-handlebars')


const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))

const prod = []


app.set('view engine', 'ejs')


app.get('/', (req, res) => {
  res.render('formulario', {prod})
})

app.get('/productos', (req, res) => {
  res.render('datos', {prod});
  })



app.post('/productos',(req, res) => {
  console.log(req.body)
  const { title, price, thumbnail } = req.body;
  prod.push({ title, price, thumbnail });
  console.log(prod);
  res.render('datos', {prod})
});


const PORT = 8080
const server = app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${server.address().port}`)
})
server.on('error', (error) => console.log(`Error en servidor ${error}`))
