const express = require('express');
const mongoose = require('mongoose');
const app = express();
const categoryRoutes = require('./routes/category');
const port = process.env.PORT || 3000;
app.use(express.json());


app.use('/category', categoryRoutes)

app.get('/',(req, res) => {
    res.send('Welcome to the My API');
})

let employees = [
  { id: 1, name: 'John Doe', age: 30 },
  { id: 2, name: 'Jane Smith', age: 28 },
];
app.get('/employees', (req, res) => {
  res.json(employees);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
})

// mongoo Db Connection
async function connectDb()
{
 try {
   await mongoose.connect('mongodb://localhost:27017/', {
    dbName: 'myShopDb',
    // useNewUrlParser: true,
    //  useUnifiedTopology: true
    });
    console.log('Connected to MongoDB');
  }catch (error) {
    console.error('Failed to connect to MongoDB', error);
  }
}
connectDb().catch((error)=>{ console.error('Failed to connect to MongoDB', error)})
 

