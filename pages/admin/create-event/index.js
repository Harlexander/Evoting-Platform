import { DocumentAddIcon } from '@heroicons/react/outline'
import { CreateEvent } from '../../../components/Forms/CreateEvent'
import Dashboard from '../../../layouts/dashboard'

const Index = () => {
  return (
    <div>
      <p className='font-mulish text-2xl flex items-center py-10 space-x-10'>Create Event +</p>
      <CreateEvent/>
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
