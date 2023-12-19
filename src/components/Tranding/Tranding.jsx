// import Swal from 'sweetalert2';
import TitleComponent from '../../NewComponents/TitleComponent/TitleComponent';
import { useState } from 'react';
import { useEffect } from 'react';
import SingleTrading from './SingleTrading';

const Tranding = () => {

    const [card,setCards] = useState([]);
    useEffect(()=>{
        fetch('popular.json')
        .then(res=>res.json())
        .then(data=>setCards(data))
    },[])

    // const handleToast = () => {
    //     Swal.fire({
    //         title: 'Thank You !',
    //         text: 'For Buy This Toy',
    //         icon: 'success',
    //         confirmButtonText: 'Done'
    //     })
    // }
    return (
        <div className=" my-1 py-8 rounded-md container mx-auto">
            <TitleComponent title="Toys Car World" subTitle="Popular in Store" />

            <div className='grid md:grid-cols-4 gap-3 md:gap-8 mt-10 mx-3'>
                {
                    card.map(item=><SingleTrading
                    key={item.id}
                    item={item}
                    ></SingleTrading>)
                }
            </div>

        </div>
    );
};

export default Tranding;