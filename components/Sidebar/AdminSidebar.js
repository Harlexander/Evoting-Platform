import React, { useState } from 'react'
import { MenuIcon, ChartBarIcon, ChartPieIcon, UserIcon, DocumentAddIcon, DocumentIcon, ViewListIcon, LogoutIcon, ArrowDownIcon, ArrowNarrowDownIcon, ArrowSmDownIcon, ArrowCircleDownIcon, ChevronUpIcon, ChevronDownIcon, UserAddIcon, DocumentTextIcon, ChartSquareBarIcon, ChevronRightIcon } from '@heroicons/react/outline'
import { Dialog, Disclosure, Transition } from '@headlessui/react'
import { XIcon } from '@heroicons/react/outline'
const AdminSidebar = () => {
  return (
    <div className='w-64 border-r border-grey sidebar fixed bg-primary h-screen md:block hidden overflow-auto'>
        <img src='/adminlogo.png' className='mx-auto py-5' />
        <Links/>
    </div>
  )
}

const Links = () => {
    const navigation = [
        {
            href : "/admin/overview",
            item  : "Overview",
            icon : <ChartPieIcon className='h-5'/>
        },
        {
            href : "/admin/profile",
            item  : "Profile",
            icon : <UserIcon className='h-5'/>
        },
        {
            href : "/admin/create-event",
            item  : "Create Event",
            icon : <DocumentAddIcon className='h-5'/>
        },
        {
            href : "/admin/transactions",
            item  : "Transactions",
            icon : <ViewListIcon className='h-5'/>
        },
        {
            href : "/admin/signout",
            item  : "Sign Out",
            icon : <LogoutIcon className='h-5'/>
        },
    ]
    const events = [
      {
        name : "Student Icon Award"
      },
      {
        name : "Edsu Carnival Week"
      },
    ]
    return(
        <div className="flex justify-center pt-10">
  <div className=" w-96 text-gray-900">
      {
          navigation.map(({href, item, icon},index) => (
            index < 3 &&
              <a
                key={href}
                href={href}
                aria-current="true"
                className="
                    flex items-center gap-3
                    block
                    py-3
                    w-full
                    hover:bg-[#3E4049] hover:text-white
                    hover:border-l-2 hover:border-white 
                    font-mulish
                    bg-blue-600
                    text-[#A4A6B3]
                    pl-5
                    cursor-pointer
                "
                >
                {icon}
               {item}
                </a>

          ))
      }
      {
        events.map(({name}, index) => (
          <Disclosure key={index}>
          {({ open }) => (
            <>
              <Disclosure.Button className="w-full">
                <a
                data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample"
                aria-current="true"
                className="
                    flex items-center gap-3
                    block
                    py-3
                    w-full
                    hover:bg-[#3E4049] hover:text-white
                    hover:border-l-2 hover:border-white 
                    font-mulish
                    bg-blue-600
                    text-[#A4A6B3]
                    pl-5
                    cursor-pointer
                "
                >
                 <DocumentIcon className='h-5'/> <div className='flex justify-between items-center w-full pr-3'>{name} <ChevronDownIcon className='h-4'/></div>
                </a>
              </Disclosure.Button>
              <Disclosure.Panel className="pl-5">
              <a
                data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample"
                aria-current="true"
                className="
                    flex items-center gap-3
                    block
                    py-3
                    w-full
                    hover:bg-[#3E4049] hover:text-white
                    hover:border-l-2 hover:border-white 
                    font-mulish
                    bg-blue-600
                    text-[#A4A6B3]
                    pl-5
                    cursor-pointer
                "
                >
               <ChartPieIcon className='h-4'/> Overview
                </a>
              <a
                data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample"
                aria-current="true"
                className="
                    flex items-center gap-3
                    block
                    py-3
                    w-full
                    hover:bg-[#3E4049] hover:text-white
                    hover:border-l-2 hover:border-white 
                    font-mulish
                    bg-blue-600
                    text-[#A4A6B3]
                    pl-5
                    cursor-pointer
                "
                >
               <DocumentTextIcon className='h-4'/> Registration
                </a>
              <a
                data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample"
                aria-current="true"
                className="
                    flex items-center gap-3
                    block
                    py-3
                    w-full
                    hover:bg-[#3E4049] hover:text-white
                    hover:border-l-2 hover:border-white 
                    font-mulish
                    bg-blue-600
                    text-[#A4A6B3]
                    pl-5
                    cursor-pointer
                "
                >
               <UserAddIcon className='h-4'/> Add Contestant 
                </a>
              <a
                data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample"
                aria-current="true"
                className="
                    flex items-center gap-3
                    block
                    py-3
                    w-full
                    hover:bg-[#3E4049] hover:text-white
                    hover:border-l-2 hover:border-white 
                    font-mulish
                    bg-blue-600
                    text-[#A4A6B3]
                    pl-5
                    cursor-pointer
                "
                >
               <UserIcon className='h-4'/> Contestants 
                </a>
              <a
                data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample"
                aria-current="true"
                className="
                    flex items-center gap-3
                    block
                    py-3
                    w-full
                    hover:bg-[#3E4049] hover:text-white
                    hover:border-l-2 hover:border-white 
                    font-mulish
                    bg-blue-600
                    text-[#A4A6B3]
                    pl-5
                    cursor-pointer
                "
                >
               <ChartSquareBarIcon className='h-4'/> Categories
                </a>
              <a
                data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample"
                aria-current="true"
                className="
                    flex items-center gap-3
                    block
                    py-3
                    w-full
                    hover:bg-[#3E4049] hover:text-white
                    hover:border-l-2 hover:border-white 
                    font-mulish
                    bg-blue-600
                    text-[#A4A6B3]
                    pl-5
                    cursor-pointer
                "
                >
               <DocumentIcon className='h-4'/> Voting Information
                </a>
              <a
                data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample"
                aria-current="true"
                className="
                    flex items-center gap-3
                    block
                    py-3
                    w-full
                    hover:bg-[#3E4049] hover:text-white
                    hover:border-l-2 hover:border-white 
                    font-mulish
                    bg-blue-600
                    text-[#A4A6B3]
                    pl-5
                    cursor-pointer
                "
                >
               <ChartBarIcon className='h-4'/> Voting Results
                </a>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        )) 
      }
      {
          navigation.map(({href, item, icon},index) => (
            index >= 3 &&
              <a
                key={href}
                href={href}
                aria-current="true"
                className="
                    flex items-center gap-3
                    block
                    py-3
                    w-full
                    hover:bg-[#3E4049] hover:text-white
                    hover:border-l-2 hover:border-white 
                    font-mulish
                    bg-blue-600
                    text-[#A4A6B3]
                    pl-5
                    cursor-pointer
                "
                >
                {icon}
               {item}
                </a>

          ))
      }

  </div>
</div>
    )
}

export default AdminSidebar


export function MobileSidebar() {
  const [open, setOpen] = useState(false)

  const onClose = () =>  setOpen(false)

  return (
      <>
      <div className='bg-primary w-full py-4 px-5 md:hidden flex justify-between'>
          <img src='/adminlogo.png' className='mr-auto' />
          <MenuIcon className='h-8 my-auto text-[#A4A6B3]' onClick={() => setOpen(true)}/>
      </div>
      <Dialog as="div" open={open} className="relative z-10 md:hidden" onClose={onClose}>
        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute bg-[rgba(164, 166, 179, 0.37)] inset-0 overflow-hidden">
            <div className="w-2/3 pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-5">
                <Dialog.Panel className="pointer-events-auto relative w-screen max-w-md">
                  <div className="flex h-full flex-col overflow-y-scroll bg-primary py-6 shadow-xl">
                         <img src='/adminlogo.png' className='mr-auto py-5 px-5' />
                         <Links/>
                  </div>
                </Dialog.Panel>
            </div>
          </div>
        </div>
      </Dialog>
      </>
      
  )
}
