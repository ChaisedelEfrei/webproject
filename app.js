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
