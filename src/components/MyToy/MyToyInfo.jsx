import { FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import LoadingBarComponent from '../Custome/LoadingBarComponent/LoadingBarComponent';
import { useState } from 'react';
const MyToyInfo = ({ perToy, handleDelete }) => {
    const { sellerName, price, quantity, name, category, _id, picture } = perToy;
    const [progress, setProgress] = useState(0)


    return (
        <>
        <LoadingBarComponent progress={progress} setProgress={setProgress} />
            <tr>

                <td> <FaTrash onClick={() => handleDelete(_id)} className='text-3xl hover:text-red-500 text-red-600'></FaTrash></td>
                <th>{sellerName}</th>
                <td><img className="w-16 h-16 rounded-full" src={picture} alt="" /></td>
                <td>{name}</td>
                <td>{category}</td>
                <td>{price}</td>
                <td>{quantity}</td>
                <Link onClick={() => setProgress(100)} to={`/update/${_id}`}><td ><button className='btn btn-secondary'>Update</button></td></Link>
            </tr>

        </>
    );
};

export default MyToyInfo;