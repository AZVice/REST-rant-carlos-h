//folder controller file places.js
const router = require('express').Router()
const places = require('../models/places.js')

router.get('/', (req, res) => {        ///GET '/' Home page
  res.render('places', {places})
});

router.get('/', (req, res) => {       // GET '/places'  Places index page
  res.render('places/index', {places})
});

router.post('/', (req, res) => {      // POST '/places'  Create a new page
  if(!req.body.pic) {
    req.body.pic = 'http://placekitten.com/400/400'
  }
  if (!req.body.city) {
    req.body.city = 'Anytown'
  }
  if (!req.body.state){
    req.body.state = 'USA'
  }
  places.push(req.body)
  res.redirect('/places')
  
});

router.get('/new', (req, res) => {      //GET'/places/new' Form page for creating a new place
  res.render('places/new')
});


router.get('/:id', (req, res) => {     //GET '/places/:id' Details about a particular page
  let id = Number(req.params.id)
  if (isNaN(id)) {
    res.status(404).render('error404')
  }else if (!places[id]){
    res.status(404).render('error404')
  }else{
    res.render('places/show', {place: places[id], id})
  }
})

router.put('/:id', (req, res) => {    //PUT '/places/:id' Update a particular place
  console.log('Put is executing')
  let id = Number(req.params.id)
  console.log('ID from params:' , req.params.id);
  if (isNaN(id)) {
    console.log('invalid ID')
      res.render('error404')
  }
  else if (!places[id]) {
    console.log('Place not found')
      res.status(404).render('error404')
  }
  else {
    console.log('place not found')
    if (!req.body.pic) {
      req.body.pic = 'http://placekitten.com/400/400'
    }
    if (!req.body.city) {
      req.body.city = 'Anytown'
    }
    if (!req.body.state) {
      req.body.state = 'USA'
    }
    places[id] = req.body;
    res.render('places/index', {places });
    res.redirect(`/places/${id}`)
      
  }
})

router.get('/:id/edit', (req, res) => {      //GET '/places/:id/edit' Form page for editing an existing place 
  let id = Number(req.params.id)
  if (isNaN(id)) {
      res.render('error404')
  }
  else if (!places[id]) {
      res.render('error404')
  }
  else {
    res.render('places/edit', { place: places[id] })
  }
})

router.delete('/:id', (req, res) => {             //DELETE '/places/:id' Delete a particular place 
  let id = Number(req.params.id)
  if (isNaN(id)){
    res.render('error404')
  }else if (!places[id]) {
    res.render('error404')
  }else{
    places.splice(id, 1)
    res.redirect('/places')
  }
})




module.exports = router