import React from "react";
import  {userContext} from "./context/context";
import Header2 from "./context/context-header2";
import Content2 from "./context/context-content2";
import "./style.css"

function App() {
  let [user, setUser] = React.useState()

  let a = ""
  let b = ""
  console.log(a || b)
  return <>
    <userContext.Provider value ={[user, setUser]}>
    <Header2/>
    <Content2/>
    </userContext.Provider>
      
    
  </>
}

export default App;
