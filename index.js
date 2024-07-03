
const express=require('express');
const app=express();

const products=require('./Routes/product');
const orders=require('./Routes/order');

app.use('/api/v1/',products);
app.use('/api/v1',orders);

app.get('/', (req, res) => {
    res.send('Website working fine da');
  });

app.listen(3000,()=>{
    console.log(`server listing to port 3000 in development}`)
})