import React from 'react';
import Layout from '../Layouts/Layout.js'

function Error () {
    return (
       <Layout>
           <div className='bg-black text-white p-16'>
               <p className='text-5xl my-16'>Hmmm... something's not right</p>
               <p className='text-3xl'>Seems like the page you are directed to does not exist</p>
               <p className='text-3xl'>Please contact me through the form below</p>
           </div>
       </Layout>
    )
}

export default Error;