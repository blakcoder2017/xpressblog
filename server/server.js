const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql');

//initiate express app
const app = express();
const port = 3001;

app.use(cors());

//parse application/json
app.use(bodyParser.json());

//create MySQL database connection
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'xpressblog'
  });

//establishing the connection
connection.connect((err) => {
    if(err){
        console.log('Eror connecting : ' + err.stack);
        return;
    }
    console.log('Successfully connected to database');
});

app.get('/', (req, res) => {
    connection.query('SELECT * FROM blogs', (err, result) => {
        if(err){
            res.send(err.sqlMessage);
        }
        res.send(result);
    });
});

app.get('/create', (req, res) => {
    const post_title = req.body.title;
    const post_body = req.body.postBody;
    const author = req.body.author;
    const likes = 0;

    connection.query('INSERT INTO blogs (post_title, post_body, author,likes) VALUES(?,?,?,?)',[post_title,post_body,author, likes], (err, result) => {
        if(err){
            res.send(err.sqlMessage);
        }
        res.send(result);
    });
});

app.get('/blog/:id',(req, res) => {
    const id = req.params.id;
    connection.query('SELECT * FROM blogs WHERE id = ?',id, (err, result) => {
        if(err) {
            res.send(err.sqlMessage);
        }
        res.send(result);
    })
})

app.get('/getlikes/:id',(req, res) => {
    const id = req.params.id;
    connection.query('SELECT likes FROM blogs WHERE id = ?',id, (err, result) => {
        if(err) {
            res.send(err.sqlMessage);
        }
        res.send(result);
    })
})

app.get('/addlikes/:id',(req, res) => {
    const id = req.params.id;
    connection.query('UPDATE blogs SET likes = likes + 1 WHERE id = ?',id, (err, result) => {
        if(err) {
            res.send(err.sqlMessage);
        }
        res.send(result);
    })
})

app.get('/removelikes/:id',(req, res) => {
    const id = req.params.id;
    connection.query('UPDATE blogs SET likes = likes - 1 WHERE id = ?',id, (err, result) => {
        if(err) {
            res.send(err.sqlMessage);
        }
        res.send(result);
    })
})


app.listen(port, () => {
    console.log('Server is running hot');
});

