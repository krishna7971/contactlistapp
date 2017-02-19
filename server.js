var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('contactlist',['contactlist']);
var bodyParser = require('body-parser');

app.use(express.static(__dirname+'/public'));
app.use(bodyParser.json())
app.get('/contactList',function(req,res){
	db.contactlist.find(function(error,docs){
		console.log(docs);
		res.json(docs);
	});
});
app.post('/addContactList',function(req,res){
	console.log(req.body);
	db.contactlist.insert(req.body,function(error,docs){
		res.json(docs);
	});
});

app.delete('/removeContactList/:id',function(req,res){
	var listId = req.params.id;
	db.contactlist.remove({_id:mongojs.ObjectId(listId)},function(req,docs){
		res.json(docs);
	})
});
app.listen(3000);

console.log('server running at port:3000');