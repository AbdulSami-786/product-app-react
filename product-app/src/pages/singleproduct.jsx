import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from './hooks/useFetch'

function singleproduct() {
  const params = useParams()
  const [load, error, data] = useFetch(`https://dummyjson.com/products/${params.id}`)
  if(load){
    return<h1 className='flex justify-center h-[80vh] items-center text-3xl font-bold'>LOADING <span className="loading loading-infinity loading-xl"></span></h1>
  }
  if(error){
    return <h1 className='flex justify-center w-[80vh] m-auto h-[80vh] items-center text-1xl font-bold'>ERROR <br /><br />
    1. Check Your Internet Connection: Ensure that your internet connection is stable and working properly.
  2. Server Error: There might be a server-side issue. Please try again later or contact our support team.
  3. Invalid Input: Make sure you have entered the correct information. Check for any typos or invalid characters.
  4. Try Refreshing the Page: Sometimes, a simple page refresh can resolve the issue. Try refreshing the page and see if the error persists.
  
  If the issue persists, please contact our support team for further assistance</h1>
  }
  return (
    <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12 xl:p-24">
      <div className="flex flex-wrap -mx-4">
        <div className="w-full md:w-1/2 xl:w-1/3 p-4">
          <img
            src={data.thumbnail}
            alt={data.title}
            className="w-full h-full object-cover object-center rounded-lg shadow-md"
          />
        </div>
        <div className="w-full md:w-1/2 xl:w-2/3 p-4">
          <h1 className="text-3xl font-bold mb-2">{data.title}</h1>
          <p className="text-lg font-semibold mb-4">${data.price}</p>
          <p className="text-lg mb-4">{data.description}</p>
          <div className="flex flex-wrap -mx-2 mb-4">
            <div className="w-full md:w-1/2 xl:w-1/3 p-2">
              <h2 className="text-lg font-bold mb-2">Brand:</h2>
              <p className="text-lg">{data.brand}</p>
            </div>
            <div className="w-full md:w-1/2 xl:w-1/3 p-2">
              <h2 className="text-lg font-bold mb-2">Category:</h2>
              <p className="text-lg">{data.category}</p>
            </div>
            <div className="w-full md:w-1/2 xl:w-1/3 p-2">
              <h2 className="text-lg font-bold mb-2">Availability:</h2>
              <p className="text-lg">{data.availabilityStatus}</p>
            </div>
          </div>
          <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-lg">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
  
  

export default singleproduct