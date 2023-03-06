import { Link } from "react-router-dom";
import museumoff from './art/museumoff.png'

const Navbar = ({setLanguage, language}) => {

  const home = {'EN': "Home", 'LV': "Māja", 'JP':"家"}
  const exhibition = {'EN': "Exhibition", 'LV':"Izstāde",'JP':"展示"}
  const contacts = {'EN': "Contact", 'LV':"Sazināties",'JP':"コンタクト"}



  function changeLanguage(event) {
    setLanguage(event.target.value)
  }
 

  return (
      <div className="h-16 w-full bg-gray-900  flex flex-row justify-between px-3">
        <div className="pt-3">
          <Link to="/"><img src={museumoff} alt="" className="h-12 pl-2"/></Link>
        </div>
        <div className="text-white flex flex-row space-x-20 text-sm pb-6 pt-5">
          <Link to="/">{home[language]}</Link>  
          <Link to="/markrothko">Mark Rothko</Link>
          <Link to="/exhibition">{exhibition[language]}</Link>
          <Link to="/contacts">{contacts[language]}</Link>
        </div>
        <div className="text-white flex flex-row space-x-2 text-xs">
          <button onClick={changeLanguage} value='EN'>EN</button>
          <button onClick={changeLanguage} value='LV'>LV</button>
          <button onClick={changeLanguage} value='JP'>JP</button>
        </div>
      </div>
  )
}




export default Navbar;