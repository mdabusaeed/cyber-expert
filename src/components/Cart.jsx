import { useState } from 'react';
import expertsData from '/public/experts.json';



const Cart = () => {
    const [selectExports, setSelectExports] = useState([]);
    const [totalCost, setTotalCost] = useState(0);

    const addExpertToCart = (expert) => {
        if (selectExports.find(item => item.id === expert.id)) {
            return;
        }
    
    setSelectExports([...selectExports, expert])
    setTotalCost(totalCost + expert.salary);
    };

const removeExpertFromCart = (id) => {
    const expertRemove = selectExports.find(item => item.id === id);
    setSelectExports(selectExports.filter(item => item.id !== id));
    setTotalCost(totalCost - expertRemove.salary)
}


    return (
        
        <div className='min-h-screen flex flex-col items-center justify-start' >
            {/* header Container */}
            <div className='bg-orange-100 p-6 rounded-lg text-center shadow-lg w-3/4  max-auto mt-6'>
                <h1 className='text-3xl font-bold text-black'>Make a Cyber Security Team</h1>
                <p className='text-lg mt-2 text-black'>Our Server is under attact so we need to hire a special cyber security team</p>
                <p className='text-3xl font-bold text-black mt-3'>Total Budget: 10 Million</p>
            </div>

            <div className='flex justify-center text-center gap-5'>
                <div className="mt-6 flex justify-center text-center flex-wrap gap-6  ">
                        {expertsData.map((expert) => (
                            <div key={expert.id} className="expert-card p-4 rounded-lg shadow-md w-60 bg-gray-100 border border-gray-300 ">
                                <img src={expert.img} className='rounded-full w-24 h-24 mx-auto' ></img>
                                <h3 className='text-xl font-semibold mt-4'>{expert.name}</h3>
                                <p className='text-bold text-bl'>Age: {expert.age}</p>
                                <p className='text-bold text-bl'>Designation: {expert.designation}</p>
                                <p className='text-bold text-bl'>Address: {expert.address}</p>
                                <p className='text-bold text-bl'>Salary: {expert.salary}</p>
                                <button onClick={() => addExpertToCart(expert)} className='bg-blue-500 text-white py-2 px-4 rounded mt-4'>Add to list</button>
                            </div>
                        ))}
                    </div>
                    
                    <div className='mt-6 w-full max-w-4xl ml-4 mx-auto bg-gray-100 rounded border border-gray-300 p-6'>
                        <h2 className='text-xl font-semibold'>Expert Added: {selectExports.length} </h2>
                        <p className='text-lg mt-2'>Total Cost: {totalCost} </p>

                        <div className="mt-6">
                            {selectExports.map((expert) => (
                                <div key={expert.id} className="flex items-center justify-between bg-white p-4 rounded-lg shadow-md mb-4 mx-auto w-full">
                                    <div className="flex items-center space-x-4">
                                        <img src={expert.img} alt={expert.name} className="w-16 h-16 rounded-full border-2 border-gray-300" />
                                        <p className="text-lg font-semibold text-gray-800">{expert.name}</p>
                                        <button onClick={() => removeExpertFromCart(expert.id)} className="bg-red-500  text-white px-3 py-1 rounded">Remove</button>
                                    </div>
                                </div>
                            ))}

                            </div>

                        <button className="bg-blue-500 text-white py-2 px-4 rounded mt-4 w-full ">
                            Confirm List
                        </button>
                    </div>
            </div>

        </div>
    );
};

export default Cart;