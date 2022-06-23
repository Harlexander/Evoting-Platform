import { Switch } from '@headlessui/react'
import { TrashIcon } from '@heroicons/react/outline'
import { useState } from 'react'
import { useCreateEvent } from '../../context/CreateEventContext'

export const CreateEvent = () => {
    const [enabled, setEnabled] = useState(false)
    const { handleChanges, data, setData, handleImage } = useCreateEvent();
    console.log(data.register)

    return (
    <div className='bg-white font-mulish p-5 md:p-10'>
      <form className='space-y-10'>
        <div>
            <lable>Event Name</lable>
            <input onChange={handleChanges} type={'text'} name="event_name" className='bg-gray-light p-3 w-full'/>
        </div>
        <div>
            <lable>Event Type</lable>
            <div className="flex justify-start w-full">
                <div className="form-check form-check-inline">
                    <input onChange={handleChanges} className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-green checked:border-green focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="event_type" value="pagentry" />
                    <label className="form-check-label inline-block text-gray-800" htmlFor="pagentry">Pagentry</label>
                </div>
                <div className="form-check form-check-inline">
                    <input onChange={handleChanges} className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-green checked:border-green focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="event_type" value="award" />
                    <label className="form-check-label inline-block text-gray-800" htmlFor="award">Award Event</label>
                </div>
                </div>
        </div>
        <div className="">
        <lable className="block">Event Image</lable>
            <input onChange={handleImage} className="form-control
            block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-gray-light
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-green focus:outline-none" type="file" name='event_image'/>
        </div>
        <div>
            <Switch.Group>
            <div className="flex justify-between">
                <Switch.Label className="mr-4">Online Registration</Switch.Label>
                <Switch
                checked={data.registration}
                name="registration"
                onChange={() => setData(prev => ({...prev, registration : !data.registration}))}
                className={`relative flex h-6 gap-0 bg-gray-light w-20 px-0 items-center justify-center  rounded-full transition-colors focus:outline-none focus:ring-0 focus:ring-indigo-500 focus:ring-offset-2`}
                >
                <span className={`${data.registration ? 'bg-green text-white' : 'bg-gray-light'} px-3 rounded-full`}>Yes</span>
                <span className={`${!data.registration ? 'bg-green text-white' : 'bg-gray-light'} px-3 rounded-full`}>No</span>
               
                </Switch>
            </div>
            </Switch.Group>  
          </div>

          <div>
            <label>Event Description</label>
            <textarea
            name='event_description'
            onChange={handleChanges}
            className='bg-gray-light p-3 w-full'/>
          </div>
      </form>
    </div>
  )
}


export const RegistrationForm =() => {
        const { handleChanges, regFields, data, setData } = useCreateEvent();

    return(
        <div  className={`${!data.registration ? "hidden" : "block"} bg-white font-mulish p-5 md:p-10 my-20`}>
            <p className='text-xl mb-5'>Registration Information</p>

        <form className='space-y-8'>
             <div>
                <label>Start Date : </label>
                <input onChange={handleChanges}
                 className='bg-gray-light p-2 w-full'
                type={"date"}
                name="reg_start_date"/>
            </div>
            <div>
                <label>Close Date : </label>
                <input onChange={handleChanges}
                 className='bg-gray-light p-2 w-full'
                type={"date"}
                name="reg_end_date"/>
            </div>

            <div className='space-y-5'>
                <p >Select the neccessary information needed for registration</p>

                <div className='fields flex flex-wrap gap-3'>
                    <div className='mt-3'>
                        <input onChange={regFields} type={"checkbox"} checked={data.reg_fields.name} className="hidden" id="name" name='name'/>
                        <label htmlFor="name" className='px-3 py-3 bg-gray-light rounded-full'>Contestant Name +</label>
                    </div>
                    <div className='mt-3'>
                        <input onChange={regFields} type={"checkbox"} checked={data.reg_fields.email} className="hidden" id="email" name='email'/>
                        <label htmlFor="email" className='px-3 py-3 bg-gray-light rounded-full'>Contestant Email +</label>
                    </div>
                    <div className='mt-3'>
                        <input onChange={regFields} type={"checkbox"} checked={data.reg_fields.mobile} className="hidden" id="mobile" name='mobile'/>
                        <label htmlFor="mobile" className='px-3 py-3 bg-gray-light rounded-full'>Contestant Mobile +</label>
                    </div>
                    <div className='mt-3'>
                        <input onChange={regFields} type={"checkbox"} checked={data.reg_fields.category} className="hidden" id="category" name='category'/>
                        <label htmlFor="category" className='px-3 py-3 bg-gray-light rounded-full'>Category +</label>
                    </div>
                </div>
                <p className=''>The following selected fields are the information a user as to fill to register; Name, Image, Title are selected by default.</p>
            </div>
            <hr/>
            <div>
            <Switch.Group>
            <div className="flex justify-between">
                <Switch.Label className="mr-4">Is Registration Free</Switch.Label>
                <Switch
                    checked={data.registration_free}
                    name="registration_free"
                    onChange={() => setData(prev => ({...prev, registration_free : !data.registration_free}))}
                    className={`relative flex h-6 gap-0 bg-gray-light w-20 px-0 items-center justify-center  rounded-full transition-colors focus:outline-none focus:ring-0 focus:ring-indigo-500 focus:ring-offset-2`}
                    >
                    <span className={`${data.registration_free ? 'bg-green text-white' : 'bg-gray-light'} px-3 rounded-full`}>Yes</span>
                    <span className={`${!data.registration_free ? 'bg-green text-white' : 'bg-gray-light'} px-3 rounded-full`}>No</span>     
                </Switch>
            </div>
            </Switch.Group>  
          </div>
          <div className={`${data.registration_free ? "hidden" : "block"}`}>
            <label>Registration Fee</label>
            <input onChange={handleChanges}
                className='bg-gray-light p-2 w-full'
                type={'number'}
                name="reg_fee"/>
          </div>
        </form>
        </div>
    )
}


export const CategoriesForm = () => {
    const { handleChanges, handleCategory, data, addCategory, removeCategory } = useCreateEvent();

    return(
      <div className={`${data.event_type !== "award" ? "hidden" : "block"} bg-white font-mulish p-5 md:p-10 my-20`}>
        <p className='text-2xl'>Categories</p>
        <p className=''>Kindly input all the categories for voting</p>
      
        <div className='space-y-2'>
            {
                data.categories.map(( item, index ) => (
                    <div className='flex gap-2' key={index}>
                        <input name='category' value={data.categories[index].category} onChange={(e) => handleCategory(e, index)} type={'text'} className='bg-gray-light p-3 w-full rounded-full'/>
                        <div onClick={() => removeCategory(index)} className='bg-red rounded-full p-3'><TrashIcon className='h-7 text-white'/></div>
                    </div>
                ))
            }
            <button onClick={addCategory} className='bg-green px-3 py-2 md:px-5 md:py-3 rounded-full md:text-xl text-white mt-5'>Add New Category</button>
            <p className='text-md font-semibold'>You can add more categories later!</p>
        </div>
      </div>  
    )
}


export const VotingForm = () => {
        const { handleChanges } = useCreateEvent();

    return(
        <div className='bg-white font-mulish space-y-5 my-10 p-5 md:p-10'>
            <p className='text-2xl'>Voting Information</p>
            <div className='grid grid-cols-2 gap-3'>
                <div>
                    <label>Start Date</label>
                    <input onChange={handleChanges}
                    className='bg-gray-light p-2 w-full'
                    type={"date"}
                    name="voting_start_date"/>
                </div>
                <div>
                    <label>Closing Date</label>
                    <input onChange={handleChanges}
                    className='bg-gray-light p-2 w-full'
                    type={"date"}
                    name="voting_close_date"/>
                </div>
            </div>
            <div>
                <label>Voting Fee</label>
                <input onChange={handleChanges}
                className='bg-gray-light p-2 w-full'
                type={"number"}
                name="voting_fee"/>
            </div>

            <div className='flex justify-end'>
                <button className='bg-green px-5 py-3 my-10 text-xl text-white'>Create Event</button>
            </div>
        </div>
    )
}