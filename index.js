import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
app.use(express.json());

// return html 
app.get('/home', (req, res) => {

    // const subject = req.query.subject;
    // const time = req.query.time;

    const { subject, time } = req.query;

    res.json({
        msg: `studying ${subject} for ${time} hours`
    })
});



// return json
app.get('/about', (req, res) => {
    res.json({ msg: 'about page' })
});

app.post('/dinner', (req, res)=>{
    const {name , food} = req.body;
res.json({
    msg: `hello ${name} , here is ${food}`
})
});


const PORT = 5000;

app.listen(PORT, () => {
    console.log("server is running on port 5000")
})