import React,{CreateContext} from React;
import Reducer from './Reducer'
export const contextData=createContext()
function Context({children}){
    let {state,add,remove}=Reducer();
    return(
        <div>
            <contextData.Provider value ={{state,add,remove}}>
                {children}
            </contextData.Provider>
        </div>
    )
}