import { Link } from "react-router-dom";
// import { AuthContext } from "../../provider/AuthProvider";
// import { useContext } from "react";

const Header = () => {
  // const {user}=useContext(AuthContext)

    const navLits=<>
                
                <img className="w-20  md:mr-96" src="https://img.freepik.com/free-vector/sticker-template-with-rocket-rides-fun-fair-isolated_1308-59298.jpg?w=900&t=st=1684339334~exp=1684339934~hmac=6f3406040f516c534e3264a44f975b93aa4236bf0177adf474bc55a69fb0a1c1" alt="" /> 


                <li> <Link className="font-semibold" to='/'>CarsToy<span className="text-red-500">World</span></Link> </li>           
                <li> <Link to='/'>Home</Link> </li>           
                 <li> <Link to='/'>All Toys</Link> </li>           
                 <li> <Link to='/'>My Toy</Link> </li>           
                 <li> <Link to='/'>Add A Toy</Link> </li>           
                 <li> <Link to='/blog'>Blogs</Link> </li>           
              
    </>
    return (
        <div className="navbar bg-base-100 p-10 h-28 mb-5">
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
        <div className="navbar-end">
     
          <Link to='/login'><button className="btn btn-outline btn-secondary">Login/Registration</button></Link>
        </div>
      </div>
    );
};

export default Header;