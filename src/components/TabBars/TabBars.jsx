import { useContext, useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { AuthContext } from '../../provider/AuthProvider';
import { Link } from 'react-router-dom';
const TabBars = () => {
  const{user}=useContext(AuthContext)
  const [categoryOne,setCategoryOne]=useState([]);
  const [categoryTwo,setCategoryTwo]=useState([]);
  const [categoryThree,setCategoryThree]=useState([]);


  useEffect(()=>{
    fetch('http://localhost:5000/categoryOne')
    .then(res=>res.json())
    .then(data=>setCategoryOne(data))
  },[]);
  useEffect(()=>{
    fetch('http://localhost:5000/categoryTwo')
    .then(res=>res.json())
    .then(data=>setCategoryTwo(data))
  },[]);
  useEffect(()=>{
    fetch('http://localhost:5000/categoryThree')
    .then(res=>res.json())
    .then(data=>setCategoryThree(data))
  },[]);

    return (
        <div className='my-14'>
            <h2 className="text-5xl font-serif text-center my-10 text-violet-500">Toy Cars Categories</h2>
            <Tabs>
        <TabList>
          <Tab>Sports Car</Tab>
          <Tab>Truck</Tab>
          <Tab>Mini Police Car</Tab>
        </TabList>
    
        <TabPanel>
          <div className='grid md:grid-cols-2 gap-5 mx-10 my-10'>
          {categoryOne.map(pbOne=><div key={pbOne.id}><div className="card card-side bg-base-100 shadow-xl">
  <figure><img className='w-96 h-56' src={pbOne.picture} alt=""/></figure>
  <div className="card-body">
    <h2 className="card-title">Toy Name: {pbOne.name}</h2>
    <p>Price: ${pbOne.price}</p>
    <p>Rating: {pbOne.rating}</p>
    <div className="card-actions justify-end">
    { user?<button className="btn btn-primary mt-4">View Details</button>:<>
    <Link to='/login'><button className="btn btn-primary mt-4">View Details</button></Link></>}
    </div>
  </div>
</div></div>)}
          </div>
        </TabPanel>
        <TabPanel>
        <div className='grid md:grid-cols-2 gap-5 mx-10 my-10'>
          {categoryTwo.map(pbOne=><div key={pbOne.id}><div className="card card-side bg-base-100 shadow-xl">
  <figure><img className='w-96 h-56' src={pbOne.picture} alt=""/></figure>
  <div className="card-body">
    <h2 className="card-title">Toy Name: {pbOne.name}</h2>
    <p>Price: ${pbOne.price}</p>
    <p>Rating: {pbOne.rating}</p>
    <div className="card-actions justify-end">
      { user?<button className="btn btn-secondary mt-4">View Details</button>:<Link to='/login'><button className="btn btn-secondary mt-4">View Details</button></Link>}
    </div>
  </div>
</div></div>)}
          </div>
        </TabPanel>
        <TabPanel>
        <div className='grid md:grid-cols-2 gap-5 mx-10 my-10'>
          {categoryThree.map(pbOne=><div key={pbOne.id}><div className="card card-side bg-base-100 shadow-xl">
  <figure><img className='w-96 h-56' src={pbOne.picture} alt=""/></figure>
  <div className="card-body">
    <h2 className="card-title">Toy Name: {pbOne.name}</h2>
    <p>Price: ${pbOne.price}</p>
    <p>Rating: {pbOne.rating}</p>
    <div className="card-actions justify-end">
    { user?<button className="btn btn-accent mt-4">View Details</button>:<Link to='/login'><button className="btn btn-accent mt-4">View Details</button></Link>}
    </div>
  </div>
</div></div>)}
          </div>
        </TabPanel>
      </Tabs>
        </div>
    );
};

export default TabBars;