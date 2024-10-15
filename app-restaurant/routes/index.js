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

router.get('/location', function(req, res, next) {
  res.render("location", { title: 'Location', layout:'main' });
});

app.get('/listBooking',function(req, res, next) {
  const listBooking = [
      { id: 1, customerName: 'John Doe', date: '2024-10-15', time: '19:00', guests: 2, status: 'Confirmed' },
      { id: 2, customerName: 'Jane Smith', date: '2024-10-16', time: '18:30', guests: 4, status: 'Pending' },
      { id: 3, customerName: 'Alice Johnson', date: '2024-10-17', time: '20:00', guests: 3, status: 'Cancelled' }
  ];

  res.json(listBooking);
});

module.exports = router;
