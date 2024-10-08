<<<<<<< HEAD
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render("home", { title: 'Home', layout:'main' });
=======
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const menuItems = [
    {
        name: "Nasi Goreng Spesial",
        description: "Nasi goreng dengan ayam, udang, dan sayuran.",
        price: "Rp 45.000"
    },
    {
        name: "Sate Ayam",
        description: "Sate ayam dengan bumbu kacang yang lezat.",
        price: "Rp 30.000"
    },
    {
        name: "Mie Goreng",
        description: "Mie goreng dengan sayuran dan telur.",
        price: "Rp 40.000"
    },
    {
        name: "Ayam Penyet",
        description: "Ayam goreng yang disajikan dengan sambal dan tempe.",
        price: "Rp 50.000"
    },
    {
        name: "Es Teh Manis",
        description: "Minuman es teh manis yang segar.",
        price: "Rp 10.000"
    }
];
app.get('/api/menu', (req, res) => {
    res.json(menuItems);
});
app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
>>>>>>> 61a3018b5c3a0ca0687d02ab0da9400ede545aa5
});
