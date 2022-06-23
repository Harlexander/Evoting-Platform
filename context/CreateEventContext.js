import { createContext, useContext, useState } from "react";

const CreateEventContext = createContext();

export const useCreateEvent = () => useContext(CreateEventContext);

export const CreateEventProvider = ({children}) => {
    const [data, setData] = useState({
        categories : [{category : ""}],
        reg_fields : {
            name : true,
            email : false,
            mobile : false,
            category : false
        }
    });

    const handleImage = (e) => {
        const image = e.target.files[0]
        setData(prev => ({...prev, event_image : image}))
    }
    
    const handleChanges = (e) => {
        const { name, value } = e.target
        setData(prev => ({...prev, [name] : value}))
    } 
    const handleCategory = (e, index) => {
        const { name, value } = e.target
        let category = data.categories
        category[index][name] = value
        setData(prev => ({...prev, categories : category}))
    } 

    const addCategory = () => {
        const previous = data.categories;
        setData( prev => ({...prev, categories : [...previous, {category : ""}]}))
    }

    const regFields = (e) => {
        const { name } = e.target
        setData( prev => ({...prev, reg_fields : { ...data.reg_fields, [ name ] : !data.reg_fields[name] } }))
    }

    const removeCategory = (index) => {
        console.log(index)
        const category = [...data.categories]
        category.splice(index, 1)
        // console.log(category)
        setData( prev => ({...prev, categories : category}))
    }
    const value = {
        data : data,
        setData : setData,
        handleChanges : handleChanges,
        addCategory : addCategory,
        removeCategory : removeCategory,
        handleCategory : handleCategory,
        handleImage : handleImage,
        regFields : regFields
    }
    return(
        <CreateEventContext.Provider value={value}>
            {children}
        </CreateEventContext.Provider>
    )
}