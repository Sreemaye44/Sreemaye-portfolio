import React from 'react';
import goodwill from '../../assets/resale.png';
import coding from '../../assets/codinghub.png';
import kids from '../../assets/kidsplay.png';
import './Project.css'


const Project = () => {
  const projects = [
    {id: 1, name: 'good-will Store', img: goodwill},
    {id: 2, name: 'CODING HUB', img: goodwill},
    {id: 1, name: 'Kids Play Zone', img: goodwill}
  ]
    return (
        <div className="grid grid-cols-3  w-10/12 mx-auto gap-5" id='projects'>
            <div className=" bg-white bg-opacity-5 backdrop-blur-lg drop-shadow-lg wrapper antialiased text-gray-900">
<div>
    
    <img src={goodwill} alt=" random imgee" className="w-96 h-56 object-cover object-center rounded-lg shadow-md"/>    
    
 <div className="relative px-4 -mt-16  ">
   <div className="bg-teal-500  p-6 rounded-lg shadow-lg">
    <div className="flex items-baseline">
     <a href='https://goodwill-store.web.app/' target="_blank" rel="noopener noreferrer" className="bg-teal-200 text-teal-800 text-xs px-2 inline-block rounded-full  uppercase font-semibold tracking-wide">
        Live </a>
       
    </div>
    
    <h4 className="mt-1 text-xl font-semibold uppercase leading-tight truncate">Good-Will Store</h4>
 
  {/* <div className="mt-1">
    $1800
    <span className="text-gray-600 text-sm">   /wk</span>
  </div>
  <div className="mt-4">
    <span className="text-teal-600 text-md font-semibold">4/5 ratings </span>
    <span className="text-sm text-gray-600">(based on 234 ratings)</span>
  </div>   */}
  </div>
 </div>
  
</div>
  </div>
            <div className=" bg-white bg-opacity-5 backdrop-blur-lg drop-shadow-lg wrapper antialiased text-gray-900">
<div>
    
    <img src={coding} alt=" random imgee" className="w-96 h-56 object-cover object-center rounded-lg shadow-md"/>    
    
 <div className="relative px-4 -mt-16  ">
   <div className="bg-teal-400   p-6 rounded-lg shadow-lg">
    <div className="flex items-baseline">
    <a href='https://coding-hub-51f12.web.app/' target="_blank" rel="noopener noreferrer" className="bg-teal-200 text-teal-800 text-xs px-2 inline-block rounded-full  uppercase font-semibold tracking-wide">
        Live
      </a>
       
    </div>
    
    <h4 className="mt-1 text-xl font-semibold uppercase leading-tight truncate">Coding HUB</h4>
 
  {/* <div className="mt-1">
    $1800
    <span className="text-gray-600 text-sm">   /wk</span>
  </div>
  <div className="mt-4">
    <span className="text-teal-600 text-md font-semibold">4/5 ratings </span>
    <span className="text-sm text-gray-600">(based on 234 ratings)</span>
  </div>   */}
  </div>
 </div>
  
</div>
  </div>
            <div className=" bg-white bg-opacity-5 backdrop-blur-lg drop-shadow-lg wrapper antialiased text-gray-900">
<div>
    
    <img src={kids} alt=" random imgee" className="w-96 h-56 object-cover object-center rounded-lg shadow-md"/>    
    
 <div className="relative px-4 -mt-16  ">
   <div className="bg-teal-500  p-6 rounded-lg shadow-lg">
    <div className="flex items-baseline">
    <a href='https://timely-meerkat-fec5df.netlify.app/' target="_blank" rel="noopener noreferrer"  className="bg-teal-200 text-teal-800 text-xs px-2 inline-block rounded-full  uppercase font-semibold tracking-wide">
        Live
      </a>
      
    </div>
    
    <h4 className="mt-1 text-xl font-semibold uppercase leading-tight truncate">Kid's play Zone</h4>
 
  {/* <div className="mt-1">
    $1800
    <span className="text-gray-600 text-sm">   /wk</span>
  </div>
  <div className="mt-4">
    <span className="text-teal-600 text-md font-semibold">4/5 ratings </span>
    <span className="text-sm text-gray-600">(based on 234 ratings)</span>
  </div>   */}
  </div>
 </div>
  
</div>
  </div>
        </div>
    );
};

export default Project;