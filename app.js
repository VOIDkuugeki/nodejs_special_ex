const express = require('express');										
// const path = require('path');										
const hbs = require('hbs');										
const pageRoutes = require('./routes/home.route');										
										
const app = express();										
const PORT = process.env.PORT || 5000;										
										
// Cấu hình view engine										
app.set('view engine', 'ejs');										
// app.set('views', path.join(__dirname, 'views'));										
// hbs.registerPartials(path.join(__dirname, 'views/partials'));										
										
// Sử dụng các routes										
app.use('/', pageRoutes);										
										
// Bắt đầu server										
app.listen(PORT, () => {										
console.log(`Server is running on http://localhost:${PORT}`);										
});										