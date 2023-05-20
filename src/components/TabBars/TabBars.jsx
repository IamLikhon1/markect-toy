import { useContext, useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { AuthContext } from '../../provider/AuthProvider';
import { Link } from 'react-router-dom';
import { toast } from 'react-hot-toast';
const TabBars = () => {
  const{user}=useContext(AuthContext)
  const [categoryOne,setCategoryOne]=useState([]);
  const [categoryTwo,setCategoryTwo]=useState([]);
  const [categoryThree,setCategoryThree]=useState([]);

  const handleClickOne=()=>{
    toast.success('You have to log in first to view details')
  }
  const handleClickTwo=()=>{
    toast.success('You have to log in first to view details')
  }
  const handleClickThree=()=>{
    toast.success('You have to log in first to view details')
  }


  useEffect(()=>{
    fetch('https://toys-cars-server.vercel.app/categoryOne')
    .then(res=>res.json())
    .then(data=>setCategoryOne(data))
  },[]);
  useEffect(()=>{
    fetch('https://toys-cars-server.vercel.app/categoryTwo')
    .then(res=>res.json())
    .then(data=>setCategoryTwo(data))
  },[]);
  useEffect(()=>{
    fetch('https://toys-cars-server.vercel.app/categoryThree')
    .then(res=>res.json())
    .then(data=>setCategoryThree(data))
  },[]);

    return (
        <div className='my-14'>
            <h2 className="text-5xl font-serif text-center my-10 text-violet-500">Toy Cars Categories</h2>
            <Tabs>
        <TabList className='text-xl  p-3 font-medium font-serif'>
          <Tab >Sports Car</Tab>
          <Tab >Truck</Tab>
          <Tab>Mini Police Car</Tab>
        </TabList>
    
        <TabPanel>
          <div className='grid md:grid-cols-2 gap-5 mx-10 my-10' data-aos="fade-up"
     data-aos-duration="2000">
          {categoryOne.map(pbOne=><div key={pbOne.id}><div className="card card-side bg-base-100 shadow-xl">
  <figure><img className='w-full h-56' src={pbOne.picture} alt=""/></figure>
  <div className="card-body">
    <h2 className="card-title">Toy Name: {pbOne.name}</h2>
    <p>Price: ${pbOne.price}</p>
    <p>Rating: {pbOne.rating}</p>
    <div className="card-actions justify-end">
    { user?<button className="btn btn-primary mt-4">View Details</button>:<>
    <Link to='/login'><button onClick={handleClickOne} className="btn btn-primary mt-4">View Details</button></Link></>}
    </div>
  </div>
</div></div>)}
          </div>
        </TabPanel>
        <TabPanel>
        <div className='grid md:grid-cols-2 gap-5 mx-10 my-10'data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
          {categoryTwo.map(pbOne=><div key={pbOne.id}><div className="card card-side bg-base-100 shadow-xl">
  <figure><img className='w-full h-56' src={pbOne.picture} alt=""/></figure>
  <div className="card-body">
    <h2 className="card-title">Toy Name: {pbOne.name}</h2>
    <p>Price: ${pbOne.price}</p>
    <p>Rating: {pbOne.rating}</p>
    <div className="card-actions justify-end">
      { user?<button className="btn btn-secondary mt-4">View Details</button>:<Link to='/login'><button onClick={handleClickTwo} className="btn btn-secondary mt-4">View Details</button></Link>}
    </div>
  </div>
</div></div>)}
          </div>
        </TabPanel>
        <TabPanel>
        <div className='grid md:grid-cols-2 gap-5 mx-10 my-10'data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1000">
          {categoryThree.map(pbOne=><div key={pbOne.id}><div className="card card-side bg-base-100 shadow-xl">
  <figure><img className='w-full h-56' src={pbOne.picture} alt=""/></figure>
  <div className="card-body">
    <h2 className="card-title">Toy Name: {pbOne.name}</h2>
    <p>Price: ${pbOne.price}</p>
    <p>Rating: {pbOne.rating}</p>
    <div className="card-actions justify-end">
    { user?<button className="btn btn-accent mt-4">View Details</button>:<Link to='/login'><button onClick={handleClickThree} className="btn btn-accent mt-4">View Details</button></Link>}
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