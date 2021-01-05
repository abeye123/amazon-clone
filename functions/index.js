const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')('sk_test_51I1HJXGYxQO8lfxn1chTVY3VrouUIRBfScrCff3NPnki8OgNwR9fnoCWOgW9YLUO68DSbAdOdSUdYWf2e6AMOk9X00a9UCFWyw'
);  
 //app config
const app = express();
//middlewares
app.use(cors({origin:true}));
app.use(express.json());

app.get ('/',(request,response) => response.status(200).send('hello world'));
app.post ('/payments/create',async(request,response)=> { const total = request.query.total;
   console.log('Payment Request Recieved for this amount >>>',total);
   const paymentIntent = await stripe.paymentIntents.create({
       amount:total,currency:'usd',
   });
   response.status(201).send({
       clientSecret:paymentIntent.client_secret,
   });
});


// listencommand
exports.api = functions.https.onRequest(app);




// http://localhost:5001/clon-1f6eb/us-central1/api.
//http://localhost:5001/clon-1f6eb/us-central1/api).
