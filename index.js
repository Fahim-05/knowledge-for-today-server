const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');

app.use(cors());

const courseOptions = require('./data/courseOptions.json');
const course = require('./data/course.json');



app.get('/', (req, res) => {
    res.send('Knowledge API running')
})

app.get('/course-options', (req, res) => {
    res.send(courseOptions);
});

app.get('/course', (req, res) => {
    res.send(course);
})

app.get('/course/:id', (req, res) => {
    const id = req.params.id;
    // console.log(id);

    if (id === '99') {
        res.send(course);
    }
    else {
        const selectedCourse = course.find(course => course.id === id);
        res.send(selectedCourse);
    }
})

app.listen(port, () => {
    console.log('Knowledge for today server running on port', port);
})