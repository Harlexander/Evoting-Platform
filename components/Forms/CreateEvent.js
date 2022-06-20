import React from 'react'

export const CreateEvent = () => {
  return (
    <div className='bg-white p-10'>
      <form>
        <div>
            <lable>Event Name</lable>
            <input type={'text'} name="event_name" className='bg-[#D9D9D9] p-5'/>
        </div>
        <div>
            <lable>Event Type</lable>
            <div className="flex justify-center">
                <div className="form-check form-check-inline">
                    <input className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="pagentry"/>
                    <label className="form-check-label inline-block text-gray-800" for="inlineRadio10">Pagentry</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="award"/>
                    <label className="form-check-label inline-block text-gray-800" for="inlineRadio20">Award Event</label>
                </div>
                </div>
        </div>
        <div>
            <div className="flex justify-center">
  <div className="mb-3 w-96">
  <lable>Event Name</lable>
    <input className="form-control
    block
    w-full
    px-3
    py-1.5
    text-base
    font-normal
    text-gray-700
    bg-white bg-clip-padding
    border border-solid border-gray-300
    rounded
    transition
    ease-in-out
    m-0
    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" type="file" name='image'/>
  </div>
</div>
        </div>
      </form>
    </div>
  )
}
