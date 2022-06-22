import { createContext, useContext, useState } from "react";

const CreateEventContext = createContext();

export const useCreateEvent = () => useContext(CreateEventContext);

export const CreateEventProvider = ({children}) => {
    const [data, setData] = useState({
        categories : [{category : ""}]
    });
    
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
    const regFields = () => {
        setData( prev => ({...prev, categories : [...previous, {category : ""}]}))
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
        handleCategory : handleCategory
    }
    return(
        <CreateEventContext.Provider value={value}>
            {children}
        </CreateEventContext.Provider>
    )
}