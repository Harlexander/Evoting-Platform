import React, { useState } from 'react'
import { MenuIcon, ChartBarIcon, ChartPieIcon, UserIcon, DocumentAddIcon, DocumentIcon, ViewListIcon, LogoutIcon, ArrowDownIcon, ArrowNarrowDownIcon, ArrowSmDownIcon, ArrowCircleDownIcon, ChevronUpIcon, ChevronDownIcon, UserAddIcon } from '@heroicons/react/outline'
import { Dialog, Disclosure, Transition } from '@headlessui/react'
import { XIcon } from '@heroicons/react/outline'
const AdminSidebar = () => {
  return (
    <div className='w-64 border-r border-grey  fixed bg-primary h-screen md:block hidden '>
        <img src='/adminlogo.png' className='mx-auto py-5' />
        <Links/>
    </div>
  )
}

const Links = () => {
    const navigation = [
        {
            href : "/overview",
            item  : "Overview",
            icon : <ChartPieIcon className='h-5'/>
        },
        {
            href : "/profile",
            item  : "Profile",
            icon : <UserIcon className='h-5'/>
        },
        {
            href : "/events",
            item  : "My Events",
            icon : <DocumentAddIcon className='h-5'/>
        },
        {
            href : "/Event-1",
            item  : "Event 1",
            icon : <DocumentIcon className='h-5'/>
        },
        {
            href : "/transactions",
            item  : "Transactions",
            icon : <ViewListIcon className='h-5'/>
        },
        {
            href : "/signout",
            item  : "Sign Out",
            icon : <LogoutIcon className='h-5'/>
        },
    ]
    return(
        <div class="flex justify-center pt-10">
  <div class="rounded- w-96 text-gray-900">
      {
          navigation.map(({href, item, icon}) => (

              <a
                key={href}
                href={href}
                aria-current="true"
                class="
                    flex items-center gap-5
                    block
                    py-3
                    w-full
                    hover:bg-[#3E4049] hover:text-white
                    hover:border-l-2 hover:border-white 
                    font-mulish
                    bg-blue-600
                    text-[#A4A6B3]
                    pl-10
                    cursor-pointer
                "
                >
                {icon}
               {item}
                </a>

          ))
      }
                
                <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="w-full">
                <a
                data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample"
                aria-current="true"
                class="
                    flex items-center gap-5
                    block
                    py-3
                    w-full
                    hover:bg-[#3E4049] hover:text-white
                    hover:border-l-2 hover:border-white 
                    font-mulish
                    bg-blue-600
                    text-[#A4A6B3]
                    pl-10
                    cursor-pointer
                "
                >
                 <DocumentIcon className='h-5'/> <div className='flex  gap-5 justify-between items-center'>Event Name <ChevronDownIcon className='h-4'/></div>
                </a>
              </Disclosure.Button>
              <Disclosure.Panel className="pl-5">
              <a
                data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample"
                aria-current="true"
                class="
                    flex items-center gap-5
                    block
                    py-3
                    w-full
                    hover:bg-[#3E4049] hover:text-white
                    hover:border-l-2 hover:border-white 
                    font-mulish
                    bg-blue-600
                    text-[#A4A6B3]
                    pl-10
                    cursor-pointer
                "
                >
               <UserAddIcon className='h-4'/> Menu 1 
                </a>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
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
            <div className="w-2/3 pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
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
