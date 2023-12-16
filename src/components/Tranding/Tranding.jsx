import Swal from 'sweetalert2';
import TitleComponent from '../../NewComponents/TitleComponent/TitleComponent';

const Tranding = () => {

    const handleToast = () => {
        Swal.fire({
            title: 'Thank You !',
            text: 'For Buy This Toy',
            icon: 'success',
            confirmButtonText: 'Done'
        })
    }
    return (
        <div className="mx-10 my-16">
            <TitleComponent title="Toys Car World" subTitle="Popular in Store" />

        </div>
    );
};

export default Tranding;