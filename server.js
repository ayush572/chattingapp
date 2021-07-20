//this thing is meant as creating an API
//express.js is a way of building backend server
import express from 'express';
import mongoose from 'mongoose';
import Messages from './dbmessages.js';
import Pusher from 'pusher';
import cors from 'cors';
const app = express(); //creating our application
// const url = "mongodb+srv://admin:@yushisTony2@cluster0.klskv.mongodb.net/chatappdb?retryWrites=true&w=majority";
// mongoose.connect(url, {
//     //This is configuaration stuff. It will help the mongoose to connect smoothly to database
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// })
// const db = mongoose.connection;
// db.once("open", () => {
//     console.log("db connected");
//     const msgcollection = db.collection("messageContent");
//     const changeStream = msgcollection.watch();
//     changeStream.on("change", (change) => {
//         if (change.operationType === 'insert') {
//             const messageDetails = change.fullDocument;
//             pusher.trigger('messages', 'inserted', {
//                 name: messageDetails.user,
//                 message: messageDetails.message,
//                 timestamp: messageDetails.timestamp,
//                 received: messageDetails.received,
//             });
//         }
//         else {
//                 console.log("error occured");
//             }
//         }
//     )
// })


// const pusher = new Pusher({
//     appId: "1237519",
//     key: "7cf0a53e03d656fc6cb0",
//     secret: "b95b6898e8ad474cd24c",
//     cluster: "ap2",
//     useTLS: true
// });

//middleware
app.use(express.json());
// app.use(cors());
//api routes
app.get("/", (req, res) => {
    res.send("Hello world");
});
//this will be used to get all the messages
// app.get('/messages/sync', (req, res) => {
//     Messages.find((err, data) => {
//         if (err) {
//             res.status(500).send(err);
//         }
//         else {
//             res.send(200).send(data)
//         }
//     })
// })
// app.post('/messages/new', (req, res) => {
//     const msg = req.body;
//     Messages.create(msg, (err, data) => {
//         if (err) {
//             res.status(500).send(err);
//         }
//         else {
//             res.status(201).send(data);
//         }
//     })
// })

//for adding messages to mongodb
app.listen(9000);