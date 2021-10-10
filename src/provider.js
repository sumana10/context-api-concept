import React, {useState} from 'react'
//importing context
import PackageContext from "./context"

//Provider provide something here mission
const Provider = props =>{

  //set an object in state
  const [mission, setMission] = useState({
    "mission name" : "Go to Russia",
    agent: "007",
    accept: "Not accepted"
  })

  //contextname.provider
  return(
    <PackageContext.Provider
    value={{
      data: mission,
      isMissionAccepted: () =>{ setMission({

        //load all the value and modify one
        ...mission, accept: "ACCEPTED"

      })
    }
    }}
    >
    
    {props.children}
    </PackageContext.Provider>
  )

}
export default Provider