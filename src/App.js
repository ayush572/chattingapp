import './App.css';
import Sidebar from "./sidebar";
import Chat from "./chat";
import Pusher from 'pusher-js';
import React, {useEffect,useState} from 'react';
import axios from './axios';
import { response } from 'express';

function App() {
  // const [messages,setMessages]=useState([])//empty array of usestate
  // useEffect(()=>{
  //   axios.get('/messages/sync')
  //   .then(response=>{
  //     setMessages(response.data)
  //   })
  // },[])
  //when the app loads, run this piece of code once. It is runned by useEffect
  // useEffect(()=>{
  //   const pusher = new Pusher('7cf0a53e03d656fc6cb0', {
  //     cluster: 'ap2'});
  //     var channel = pusher.subscribe('messages');
  //     channel.bind('inserted', (newMessage)=> {
  //     alert(JSON.stringify(newMessage));//something will be poped up on our screen when something is added to dbs
  //     setMessages([...messages,newMessage])//keep all of the current messages and keep on adding new ones
  //   });
  //   // return ()=>{
  //   //   channel.unbind_all();
  //   //   channel.unsubscribe();
  //   // }
  // },[messages]);
  // console.log(messages)
  return (
    <div className="app">
      <div className="appbody">
        <Sidebar/>
        <Chat/>
      </div>
    </div>
  );
}

export default App;
