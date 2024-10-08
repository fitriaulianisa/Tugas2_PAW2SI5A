var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render("home", { title: 'Home', layout:'main' });
});
router.get('/pegawai', function(req, res, next) {
  const pegawai = [
    {
        nama: "Chef Juna",
        role: "Chef",
       
    },
    {
        nama: "Chef Renata",
        role: "Chef",
    },
    {
        nama: "Chef Spongebob",
        role: "Chef",
    },
    {
        nama: "Karina",
        role: "Kasir",
    },
    {
        nama: "Joko",
        role: "Pramusaji",
    },
    {
        nama: "Adit",
        role: "Pramusaji",
    },

];
  res.render("pegawai", { title: 'Pegawai',pegawai, layout:'main' });
});
router.get('/about', function(req, res, next) {
  res.render("about", { title: 'About', layout:'main' });
});
router.get('/contact', function(req, res, next) {
  res.render("contact", { title: 'Contact', layout:'main' });
});
router.get('/menu', function(req, res, next) {
  res.render("menu", { title: 'Menu', layout:'main' });
});

module.exports = router;
