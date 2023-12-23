import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { useContext, useState } from "react";
import LoadingBarComponent from "../Custome/LoadingBarComponent/LoadingBarComponent";
import WebSiteLogo from '../../assets/ToyLogo.png';

const Header = () => {
  const { user, logOutUser } = useContext(AuthContext);
  const [progress, setProgress] = useState(0)



  const navLits = <>
    <LoadingBarComponent progress={progress} setProgress={setProgress} />

    <Link onClick={() => setProgress(100)}  to='/'>  <img className="w-24  md:mr-96" src={WebSiteLogo}alt="" /> </Link>


    <li> <Link onClick={() => setProgress(100)} className="font-semibold" to='/'>Toy Cars<span className="text-red-500">World</span></Link> </li>
    <li> <Link onClick={() => setProgress(100)}  to='/'>Home</Link> </li>
    <li> <Link onClick={() => setProgress(100)}  to='/allToys'>All Toys</Link> </li>
    <li> <Link onClick={() => setProgress(100)}  to='/blog'>Blogs</Link> </li>

    {user ? <><li> <Link onClick={() => setProgress(100)}  to='/myToy'>My Toy</Link> </li>
      <li> <Link onClick={() => setProgress(100)}  to='/addToy'>Add A Toy</Link> </li>
      <p><img className="w-10 h-10 rounded-full mr-10" src={user?.photoURL} alt="" /></p>


    </>

      :
      <></>}


  </>;

  const handleLogOut = () => {
    logOutUser()
      .then(() => { })

      .catch(error => {
        console.log(error)
      })
  }
  return (
    <div className="navbar bg-base-100 p-10 h-28">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            {navLits}
          </ul>
        </div>
        <Link to='/' className="btn btn-ghost normal-case text-xl">
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navLits}
        </ul>
      </div>
      <div onClick={() => setProgress(100)}  className="navbar-end">

        {user ? <><button  onClick={handleLogOut} className="btn btn-outline btn-warning hover:rounded-3xl">Log Out</button></> : <><Link to='/login'><button className="btn btn-outline btn-secondary hover:rounded-3xl">Login/Registration</button></Link></>}
      </div>
    </div>
  );
};

export default Header;