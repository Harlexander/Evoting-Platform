import React from 'react'
import AdminSidebar, { MobileSidebar } from '../components/Sidebar/AdminSidebar'

const Dashboard = ({children}) => {
  return (
      <>
        <AdminSidebar/>
        <MobileSidebar/>
        <div className='md:ml-64 bg-[#DEDDDD] min-h-screen'>
            <div className='px-5 py-5'>
               {children}  
            </div>
        </div>
      </>

  )
}

export default Dashboard