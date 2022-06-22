import { CategoriesForm, CreateEvent, RegistrationForm, VotingForm } from '../../../components/Forms/CreateEvent'
import { useCreateEvent } from '../../../context/CreateEventContext'
import Dashboard from '../../../layouts/dashboard'

const Index = () => {
  const {data} = useCreateEvent();
  console.log(data)
  return (
    <div>
      <p className='font-mulish text-2xl flex items-center md:w-1/2 py-10 space-x-10'>Create Event +</p>
      <CreateEvent/>
      <RegistrationForm/>
      <CategoriesForm/>
      <VotingForm/>
    </div>
  )
}

Index.getLayout = function getLayout(page) {
    return (
        <Dashboard>
            {page}
        </Dashboard>
    )
}

export default Index
