// server: nodeJs file, expressJs
const express = require('express');
const app = express();
const bodyParser = require('body-parser');


app.use(bodyParser.json());

bodyParser.urlencoded({extended: false});


//get methods
app.get('/', (req, res) => {
  // console.log(req);
  res.send('<h1>The server works</h1>');
});

app.get('/1', (req, res) => {
  res.send(req.url);
});
app.get('/tasks', (req, res) => {
  res.json(tasks);
});
app.get('/tasks/:id', (req, res) => {
  let reqestedId = parseInt(req.originalUrl.slice(7));
  let result = tasks.filter(elem => {
    return elem.id === reqestedId;
  });
  res.json(result);
});

//post methods
app.post("/tasks", (req, res) => {
  const task = req.body;
  tasks.push(task);
  res.json(tasks);
});


//put methods
app.put("/tasks/:id", (req, res) => {
  let reqestedIsCompleted = parseInt(req.originalUrl.slice(7));
  let result = tasks.map(elem => {
     if(elem.id === reqestedIsCompleted){
      elem.isCompleted = !elem.isCompleted
     }
     return elem;
  });
  res.json(result);
});

//Delete methods
app.delete('/tasks/:id', (req, res) => {
  let reqestedId = parseInt(req.params.id);
  
  for (let index = 0; index < tasks.length; index++) {
    if(tasks[index].id === reqestedId) {
      tasks.splice(index, 1);
    }
   }
  res.json(tasks);

  // let result = tasks.filter(elem => {
  //   return elem.id !== reqestedId;
  // });
  // res.json(result);
});



const PORT = 4000;
app.listen(PORT, () => console.log(`listen to port ${PORT}`));



const tasks = [
  {
    id: 1,
    title: "Download Zoom",
    isCompleted: false
  },
  {
    id: 2,
    title: "Eat Fried Chicken",
    isCompleted: true
  },
  {
    id: 3,
    title: "Play Games",
    isCompleted: false
  },
  {
    id: 4,
    title: "Go for Shopping",
    isCompleted: true
  },
  {
    id: 5,
    title: "Watch Movie",
    isCompleted: false
  },
  {
    id: 6,
    title: "Reading",
    isCompleted: false
  },
  {
    id: 7,
    title: "writing",
    isCompleted: true
  }
]

