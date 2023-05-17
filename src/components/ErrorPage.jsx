import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <section className='flex items-center h-screen p-16 bg-gray-100 text-gray-900'>
          <div className='container flex flex-col items-center justify-center px-5 mx-auto my-8'>
           <img className='w-96 h-96 ' src="https://img.freepik.com/free-vector/404-error-lost-space-concept-illustration_114360-7891.jpg?w=740&t=st=1684234847~exp=1684235447~hmac=67ee5ecc3e7cab86db5aaa625285411410ef76e961bbf5c475bd8361048d1d15" alt="" />
        <div>
        </div>

            <div className='max-w-md text-center mt-5'>
              <Link
                to='/'
                className='px-8 py-3 font-semibold rounded bg-red-200  text-gray-900'
              >
                Back to homepage
              </Link>
              
            </div>
          </div>
        </section>
      )
};

export default ErrorPage;