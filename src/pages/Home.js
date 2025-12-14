import { Outlet } from "react-router-dom";
export default function Home(){
  return(
    <div>
    <link to ={'Comedy'}>comedy</link>
    <link to={'horror'}>Horror</link>
    Home
    <outlet/>
    <div>Footer</div>
    </div>
  )
}
