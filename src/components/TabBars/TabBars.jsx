import { useContext, useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { AuthContext } from '../../provider/AuthProvider';
import { Link } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import TitleComponent from '../../NewComponents/TitleComponent/TitleComponent';
const TabBars = () => {
  const { user } = useContext(AuthContext)
  const [categoryOne, setCategoryOne] = useState([]);
  const [categoryTwo, setCategoryTwo] = useState([]);
  const [categoryThree, setCategoryThree] = useState([]);

  const handleClickOne = () => {
    toast.success('You have to log in first to view details')
  }
  const handleClickTwo = () => {
    toast.success('You have to log in first to view details')
  }
  const handleClickThree = () => {
    toast.success('You have to log in first to view details')
  }


  useEffect(() => {
    fetch('https://toys-cars-server.vercel.app/categoryOne')
      .then(res => res.json())
      .then(data => setCategoryOne(data))
  }, []);
  useEffect(() => {
    fetch('https://toys-cars-server.vercel.app/categoryTwo')
      .then(res => res.json())
      .then(data => setCategoryTwo(data))
  }, []);
  useEffect(() => {
    fetch('https://toys-cars-server.vercel.app/categoryThree')
      .then(res => res.json())
      .then(data => setCategoryThree(data))
  }, []);

  return (
    <div className='my-10 container mx-auto'>
     {/* title */}
     <TitleComponent title="RECENT" subTitle="Our Recent Arrives Cars"/>
      <Tabs>
        <TabList className='md:flex justify-center mt-10 container mx-auto mb-12 gap-5'>
          <Tab className="mb-5 md:mb-0 border px-12 py-4 rounded-lg text-center mx-6 text-lg cursor-pointer focus:outline-none hover:shadow-md focus:border-blue-600 focus:text-purple-600 font-semibold hover:text-purple-500 duration-500" >Sports Car</Tab>
          <Tab className="mb-5 md:mb-0 border px-12 py-4 rounded-lg text-center mx-6 text-lg cursor-pointer focus:outline-none hover:shadow-md focus:border-blue-600 focus:text-purple-600 font-semibold hover:text-purple-500 duration-500" >Truck</Tab>
          <Tab className="mb-5 md:mb-0 border px-12 py-4 rounded-lg text-center mx-6 text-lg cursor-pointer focus:outline-none hover:shadow-md focus:border-blue-600 focus:text-purple-600 font-semibold hover:text-purple-500 duration-500">Mini Police Car</Tab>
        </TabList>

        <TabPanel>
          <div className='grid md:grid-cols-2 gap-5 mx-3 md:mx-8 my-10' >
            {categoryOne.map(pbOne =>  <div key={pbOne.id}><div className="card card-side bg-base-100 shadow-xl">
              <figure><img className='w-full h-56' src={pbOne.picture} alt="" /></figure>
              <div className="card-body">
                <h2 className="card-title">Toy Name: {pbOne.name}</h2>
                <p>Price: ${pbOne.price}</p>
                <p>Rating: {pbOne.rating}</p>
                <div className="card-actions justify-end">
                  {user ? <button className="btn btn-secondary mt-4">View Details</button> : <Link to='/login'><button onClick={handleClickOne} className="btn btn-secondary mt-4">View Details</button></Link>}
                </div>
              </div>
            </div></div>
            )}
          </div>
        </TabPanel>
        <TabPanel>
          <div className='grid md:grid-cols-2 gap-5 mx-3 my-10'>
            {categoryTwo.map(pbOne => <div key={pbOne.id}><div className="card card-side bg-base-100 shadow-xl">
              <figure><img className='w-full h-56' src={pbOne.picture} alt="" /></figure>
              <div className="card-body">
                <h2 className="card-title">Toy Name: {pbOne.name}</h2>
                <p>Price: ${pbOne.price}</p>
                <p>Rating: {pbOne.rating}</p>
                <div className="card-actions justify-end">
                  {user ? <button className="btn btn-secondary mt-5 ml-5">View Details</button> : <Link to='/login'><button onClick={handleClickTwo} className="btn btn-secondary mt-5 ml-5">View Details</button></Link>}
                </div>
              </div>
            </div></div>)}
          </div>
        </TabPanel>
        <TabPanel>
          <div className='grid md:grid-cols-2 gap-5 mx-3 my-10' data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1000">
            {categoryThree.map(pbOne => <div key={pbOne.id}><div className="card card-side bg-base-100 shadow-xl">
              <figure><img className='w-full h-56' src={pbOne.picture} alt="" /></figure>
              <div className="card-body">
                <h2 className="card-title">Toy Name: {pbOne.name}</h2>
                <p>Price: ${pbOne.price}</p>
                <p>Rating: {pbOne.rating}</p>
                <div className="card-actions justify-end">
                  {user ? <button className="btn btn-secondary mt-4">View Details</button> : <Link to='/login'><button onClick={handleClickThree} className="btn btn-secondary mt-4">View Details</button></Link>}
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