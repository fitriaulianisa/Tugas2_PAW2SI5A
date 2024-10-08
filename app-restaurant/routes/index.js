var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render("home", { title: 'Home', layout:'main' });
});
router.get('/pegawai', function(req, res, next) {
  res.json({
    "message" : "Daftar Pegawai",
    "data": [{nama:"Juna", role:"Chef"}, 
             {nama:"Renata", role:"Chef"},
             {nama:"Spongebob", role:"Chef"},
             {nama:"Karina", role:"Kasir"},
             {nama:"Joko", role:"Pramusaji"},
             {nama:"Adit", role:"Pramusaji"},
          
            ]
          });
  
});
router.get('/about', function(req, res, next) {
  res.render("about", { title: 'About', layout:'main' });
});
// router.get('/contact', function(req, res, next) {
  // res.render("contact", { title: 'Contact', layout:'main' });
// });
router.get('/menu', function(req, res, next) {
  res.render("menu", { title: 'Menu', layout:'main' });
});

module.exports = router;
