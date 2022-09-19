import './App.css';
import {useState} from "react";
import PeopleTable from './Table/PeopleTable';
import AddPeople from "./Form/AddPeople"

function App() {
  const [content, setContent] = useState([]);

  const addContent = (contact) =>{
    setContent([...content,contact])
  };
  return (
    <div className="App">
      
      <AddPeople  addContent={addContent}/>
      {/* {console.log(content)} */}
      <PeopleTable content={content}/>
    </div>
  );
}

export default App;
