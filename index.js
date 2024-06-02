const express = require('express');
const app = express(); 


app.get('/', (req, res) => {
    res.send('Hello Openshift');
});

app.listen(8081, () => {
    console.log('Server running on port 8081');
}); 

