import React, { useState } from 'react'
import Blogpsot from './componant/Blogpsot'
import AllBlog from './componant/AllBlog'

const App = () => {
  const [realtime,setRealtime] = useState (false);
  const makerealtime = ()=>{
    setRealtime(!realtime);

  }
  return (
    <div className='bg-red-400  flex justify-around  py-8'>
       <Blogpsot  realtime = {makerealtime}/>
       <AllBlog  observerState={realtime} />
    </div>
  )
}

export default App