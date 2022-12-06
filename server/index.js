const express = require('express')
const cors = require('cors')
const mysql = require('mysql')
const app = express()

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "freedom"
})


    app.use(express.json());
    app.use(cors());

    
    
    app.post("/register", (req, res) => {
        const { post } = req.body;
      
        let sql = 'INSERT INTO freedompost (post) VALUES (?)';
    
        db.query(sql, [post], (err, result)=> {
            if (err) console.log(err)
            else res.send(result);
          });
        });
        
    app.get('/getpost', (req, res) => {
        let sql = 'SELECT * from freedompost ORDER BY post ASC'
        db.query(sql, (err, result)=>{
            if (err) console.log(err)
            else res.send(result)
        })
    })


app.listen(3001, ()=>{
    console.log('server on')
})