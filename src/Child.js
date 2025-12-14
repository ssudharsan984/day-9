
import {ContextData} from './context';
function Child(){
  let {State,add}=useContext(ContextData);
  console.log(state)
return (
<button onClick={()=>add("something")}>add</button>
)
}
