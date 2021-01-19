const express = require('express');
const app = express();
const path = require('path');
app.listen(3001, () => {console.log('http://127.0.0.1:3001')});

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));
app.locals.pretty = true;

app.use('/', express.static( path.join(__dirname, 'public') ));

app.get('/search', (req, res) => {
	const q = req.query.q;
	const lists = [
		{title: `${q}물산`, content: `${q}물산, ${q}물산`, img:"/img/ny.jpg"},
		{title: `${q}약국`, content: `${q}약국, ${q}약국`, img:"/img/chicago.jpg"},
		{title: `${q}상사`, content: `${q}상사, ${q}상사`, img:"/img/sanfran.jpg"},
		{title: `${q}약국`, content: `${q}약국, ${q}약국`, img:"/img/la.jpg"},
		{title: `${q}화재`, content: `${q}화재, ${q}화재`, img:"/img/map.jpg"}
	];
	res.render('search', {lists, q});
});

app.use((req, res) => {
	res.render('./html/404.html');
})
