import axios from 'axios'
import React, { useEffect, useState } from 'react'

const AllBlog = (observerState) => {
   const [allblog,setAllblog] = useState([])
   useEffect (()=>{
      async function getAlluser(){
      try {
         const allblog = await axios.get("http://localhost:3000/getallblog")
         setAllblog (allblog.data.data);
      } catch(error) {
         console.error(error);
         
      }
     }
     getAlluser()
   },[observerState])
  return (
    <div className='bg-red-950  p-7'>
     
<ul class="max-w-md divide-y divide-gray-200 dark:divide-gray-700">
    {allblog?.map((item)=>(
      <li class="pb-3 sm:pb-4">
         <div class="flex  flex-col  ">
            
            <div class="flex-1 min-w-0">
               <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                  {item.username}
               </p>
               <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                  {item.email}
               </p>
            </div>
         
            <blockquote class="text-xl italic font-semibold text-gray-900 dark:text-white">
                  <p>{item.blog? item.blog:"lorem lkdfhgiulhdfs"}</p>
            </blockquote>

         </div>
            <button type="button" class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2-700">Edit</button>
      
            <button type="button" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 ">Delete</button>
      </li>
    ))}
   
   
 
</ul>

    </div>
  )
}

export default AllBlog