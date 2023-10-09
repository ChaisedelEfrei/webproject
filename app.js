const express= require('express');
//create an express application
const app = express();
//define port number
const port=3000;




//first static endpoint static send index.hmtl file

app.get('/',function(req,res){
    res.sendfile('./index.html');
    
});

//root to the CSS file
app.get('/styles.css',function(req,res) {
    res.sendfile('./styles.css');
});

//root to the 2 html files:
app.get('/button1.html',function(req,res){
    res.sendfile('./button1.html');
});

//dynamic endpoint
app.get('/api/endpoint', (req, res) => {
    const argument = req.query.argument;
  
    // Here, you can customize the JSON response based on the argument
    let responseData;
  
    if (argument === 'data1') {
      responseData = { message: "data 1" };
    } else if (argument === 'data2') {
      responseData = { message: "data 2" };
    } else {
      responseData = { message: "Invalid argument" };
    }
  
    res.json(responseData);
  });
   
// Make the app listen on port 3000
app.listen(port, function() {
    console.log('Server listening on http://localhost:' + port);
   });

//Assignement 4:

const knex = require('knex');
const knexConfig = require('./knexfile');

// Initialize Knex instance
const db = knex(knexConfig.development);

app.use(express.json());

// Create (Insert) Route
app.post('/api/create', async (req, res) => {
  try {
    // Extract data from request body
    const { title, test_id } = req.body;

    // Insert a new record into the database
    const [newRecord] = await db('test').insert({
      title,
      test_id
    }).returning('title','id');
    
    res.json({ success: true, newRecord });
    
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: 'Error creating record.' });
  }
});

// Read (Select) Route : search uan user with their pseudo
app.get('/api/read/:param', async (req, res) => {
  try {
    const param = req.params.param;

    // Query the database based on the parameter
    const results = await db('users').where('username', 'like', `%${param}%`);

    res.json({ success: true, results });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: 'Error fetching records.' });
  }
});

// Update Route : the user table
app.put('/api/update/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const { username, email } = req.body;

    // Update the record with the provided ID
    await db('users').where('id', id).update({
      username,
      email,
    });

    res.json({ success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: 'Error updating record.' });
  }
});

// Delete Route
app.delete('/api/delete/:id', async (req, res) => {
  try {
    const id = req.params.id;

    // Delete the record with the provided ID
    await db('test').where('test_id', id).del();

    res.json({ success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: 'Error deleting record.' });
  }
});


