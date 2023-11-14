
const router = require('express').Router()


router.get('/', (req, res) => {
    let places = [{
        name: 'Baklava Restaurant',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Desserts',
        pic: './images/rest1.jpg',  // Photo by Optical Chemist from Unsplash.com https://unsplash.com/photos/a-group-of-people-walking-down-a-street-at-night-uz7dXgkdvkU
      }, 
    {
        name: 'Open Flame Restaurant',
        city: 'Las Cruzes',
        state: 'NM',
        cuisines: 'Steak, Bakery',
        pic: '/images/rest2.jpg',  //Photo by Prithviraj A. from Unsplashed.com. https://unsplash.com/photos/a-restaurant-filled-with-wooden-tables-and-chairs-vDlt9BQND-o
      }];
    res.render('places/index', {places})
});

module.exports = router