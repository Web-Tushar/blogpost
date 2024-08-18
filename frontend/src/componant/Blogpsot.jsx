import React, { useState } from 'react';
import axios  from "axios";
const Blogpsot = (realtime) => {
 const [bloginput,setbloginput] = useState({
     username:"",
     email:"",
     blog: "", 
})
 const  blogHandaler = (event)=>{
     const {id,value} = event.target
     setbloginput({
          ...bloginput,
          [id]:value,
     },

)
 } ; 

//  handleBlogpost
const handleBlogpost = async()=>{
     try {
          const {username,email,blog} = bloginput
     if(!username ||!email,!blog){
          return;
     }
       await axios.post(
          "http://localhost:3000/creatblog",{
          username: username,
          email: email,
          blog: blog,
     
     },{ 
          'Content-Type': 'application/json'

     });
     realtime(); 

     } catch (error) {
          console.log(error);
     }
    }
  return (
    <div>
          <form class="max-w-sm mx-auto" onSubmit={(e)=>e.preventDefault()}>
          <div class="mb-5">
          <label 
               for="username" 
               class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    User Name
          </label>
          <input 
               type="username" 
               id="username" 
               class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
               placeholder="User Name" 
               required 
               onChange={blogHandaler}
          />
          </div>

          <div class="mb-5">
          <label 
               for="Email" 
               class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Email
          </label>
          <input 
               type="email" 
               id="Email" 
               class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
               placeholder="Email" 
               required 
               onChange={blogHandaler}

          />
          </div>

          <div class="mb-5">
          <label 
               for="Blog" 
               class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Blog
          </label>
          <textarea
               type="text" 
               id="Blog" 
               class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
               placeholder="Blog" 
               required 
               onChange={blogHandaler}

          />
          </div>

          {/* <div class="flex items-start mb-5">
          <div class="flex items-center h-5">
               <input
                    id="remember" 
                    type="checkbox" 
                    value="" 
                    class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" 
                    required 
                />
          </div>

          <label 
               for="remember" 
               class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    Remember me
          </label>
          </div> */}
               <button 
               
                    onClick={handleBlogpost}
                    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                         Submit
               </button>
          </form>
    </div>
  )
}

export default Blogpsot
     

