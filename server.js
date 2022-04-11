const express = require('express')
const app = express()
const cors = require('cors');
const MongoClient = require('mongodb').MongoClient;
let projectCollection;


//adding a db connection
// Database Connection
const uri = "mongodb+srv://admin:admin@cluster0.ycgjk.mongodb.net/SIT725_2022_t1?retryWrites=true&w=majority";
const client = new MongoClient(uri,{ useNewUrlParser: true })


//serve statically from a folder called public
app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

//connects my collection name to my client\
const createColllection = (collectionName) => {
    client.connect((err,db) => {
        projectCollection = client.db().collection(collectionName);
        if(!err) {
            console.log('MongoDB Connected')
        }
        else {
            console.log("DB Error: ", err);
            process.exit(1);
        }
    })
}

const insertProjects = (project,callback) => {
    projectCollection.insert(project,callback);
}
const getProjects = (callback) => {
    projectCollection.find({}).toArray(callback);
}

const cardList = [
    {
        title: "Kuala 2",
        image: "images/kuala2.jpeg",
        link: "About kuala 2",
        desciption: "Demo desciption about kuala 2"
    },
    {
        title: "Kuala 3",
        image: "images/kuala3.jpeg",
        link: "About Kuala 3",
        desciption: "Demo desciption about kuala 3"
    }
]

app.get('/api/projects', (req, res) => {
    
    getProjects((err,result) => {
        if(err) {
            res.json({statusCode: 400, message: err})
        }
        else {
            res.json({statusCode: 200, message:"Success", data: result})
        }
    })
})
app.post('/api/projects',(req,res) => {
    console.log("New Project added", req.body)
    var newProject = req.body;
    insertProjects(newProject,(err,result) => {
        if(err) {
            res.json({statusCode: 400, message: err})
        }
        else {
            res.json({statusCode: 200, message:"Project Successfully added", data: result})
        }
    })
})


var port = process.env.port || 3000;

//has a callback
app.listen(port, () => {
    console.log(`App listening on port ${port}`);
    createColllection('pets');

})

