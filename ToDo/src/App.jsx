import { useState } from 'react'
import './App.css'
import Button from 'react-bootstrap/Button'
import AddTask from './AddTask.jsx'
import Task from './Task.jsx'
//import SignIn from './SignIn'
import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.css';

import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
//import 'firebase/analytics';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

import GrabData from './GrabData';

firebase.initializeApp({
  apiKey: "AIzaSyCHxPV3qdlMiczHRksKE8oi7ZvYu7ZsOPU",
  authDomain: "todo-c99c9.firebaseapp.com",
  projectId: "todo-c99c9",
  storageBucket: "todo-c99c9.appspot.com",
  messagingSenderId: "777472247932",
  appId: "1:777472247932:web:2ea24b017159da881421f9",
  measurementId: "G-CKYMJWZWPP"
})
const auth = firebase.auth();
const firestore = firebase.firestore();

// import Modal from 'react-bootstrap/Modal';

function SignIn() {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }

  return (
    <>
      <button className="sign-in" onClick={signInWithGoogle}>Sign in with Google</button>
    </>
  )

}

function SignOut(){
  return auth.currentUser && (
    <button onClick={() => auth.signOut()} style={{color: 'white', backgroundColor: '#192A51',position: 'absolute', top: '0', right: '0', marginRight: '10px', marginTop: '10px'}}>Sign Out</button>
  )
}



function App() {
  const [list, setList] = useState([{name: 'test', checked: false, section: '', days: '0000000'}])
  const [add, setAdd] = useState(false)

  const [storedSections, setStoredSections] = useState(['test1', 'test2'])

  const [user] = useAuthState(auth)

  // function handleSectionClick(item) {
  //   console.log("sections item props children: " + item)
  //   //if they select the Add New section from the dropdown then bring up the option to type a new one
  //   if (item === "Add New") {
  //       console.log(item + "=== Add New")
  //       setNewSection(true)
  //     }
  //     //updates the header for the dropdown and keeps track of which section should be saved for the task
  //     else{
  //       setCurrentSection(item)
  //     }
  // }

  // const [sections, setSections] = useState([<Dropdown.Item onClick={()=>handleSectionClick("Work")}>Work</Dropdown.Item>, 
  // <Dropdown.Item onClick={()=>handleSectionClick("Personal")}>Personal</Dropdown.Item>, 
  // <Dropdown.Item onClick={()=>handleSectionClick("Add New")}>Add New</Dropdown.Item>])


  // function displayTasks(){
  //   console.log(list)
  //   console.log("This is the list length:" + list.length)
  // }

  // function checkListSize() {
  //   console.log("list: " + list.length)
  // }





  return (
    <>
    <section style={{height: '100vh'}}>
      {user ? 
      <div className="fullPage" style={{height: '100vh'}}>
        <SignOut/>
        <GrabData/>
        {/* <Task list={list} setList={setList}/> */}
        
        
        {/* <AddTaskModal show={add} onHide={() => setAdd(false)}/> */}

        {/* displayTasks={displayTasks} */}
        {/* {add && (<AddTask list={list} setList={setList} add={add} setAdd={setAdd} checkListSize={checkListSize} storedSections={storedSections} setStoredSections={setStoredSections}/>)} */}
      </div> : <SignIn/>}
    </section>
    
    
    </>
  )
}



export default App
