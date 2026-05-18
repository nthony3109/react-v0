import { useState } from 'react'
import UserCard from './UserCard';
import UsestateLearn from './learnings/UsestateLearn';


function App() {
// this is where you write variable and other js code to be returned

 const name = "dev tony";
  return (
    
      <div className="h-screen  gap-7 justify-center mt-10">
        <UserCard name="dev Tony" id={234} />
        <UserCard name="dev Tony" id={23} />
        <UserCard name="dev Tony" id={2} />
        <UsestateLearn />
      </div>
  )
}

export default App
