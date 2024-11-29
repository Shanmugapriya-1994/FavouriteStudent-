import { createContext } from "react";
import { useState } from "react";


const NameContext = createContext()

function StudentContext(data)
{
    const [namelist, setnamelist] = useState([
        "Vanitha",
        "Priya",
        "Kannan",
        "John",
        "Henry",
        "Sandhiya",
      ]);

    const [favstudent,setfavstudent] = useState([])
    const [isdisabled, setisdisabled] = useState([false]);
  
    return(
        <div>
            <NameContext.Provider value = {{favstudent,setfavstudent,namelist,setnamelist,isdisabled,setisdisabled}}>
                {data.children}
            </NameContext.Provider>
        </div>
    )
}
export default StudentContext
export {NameContext}