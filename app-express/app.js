const express = require('express');
const app = express();
const port = 3000

// route /
app.get("/", (req, res) => {
    res.send("Hello");
});

// jalankan server
app.listen(port, () => {
    console.log(`server dapat diakses di http://localhost:${port}`);
});

