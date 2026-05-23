import { useState } from 'react'
import UserCard from './UserCard';
import UsestateLearn from './learnings/UsestateLearn';
import SocketConnection from "/src/Services/SocketConnection.jsx"
import Bell from './BackendTest/Bell'; 
import InfoInput from './BackendTest/InfoInput';


function App() {
// this is where you write variable and other js code to be returned

 const name = "dev tony";
  const { notifications, connected, clearNotification } = SocketConnection (
    "http://localhost:8080/ws",      // your Spring Boot base URL
    "/topic/notifications"           // the topic to subscribe to
  );

  return (
    
      <div className=" p-8 font-serif">
      <nav className="  flex justify-between p-4 bg-gray-950 text-white rounde-8 mb-8 align-center  ">
      <span className=' font-bold text-2xl '>
        My App
      </span>
      <Bell notifications={notifications} connected={connected } onClear={clearNotification} />
      </nav>

      <h2>Dashboard</h2>
      <p className=' text-white' > notification will appear on the bell in real time</p>
      <InfoInput />
       
      </div>
  )
}

export default App
