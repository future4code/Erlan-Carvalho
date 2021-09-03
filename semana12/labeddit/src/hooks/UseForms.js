import {useState} from 'react';

const useForms = (initialState) =>{
    const [forms, setForms] = useState(initialState)

    const dealWithInputsChange = (event) =>{
        const {value,name} = event.target
        setForms({...forms, [name]:value})
    }

    const clearTheInputs = () =>{
        setForms(initialState)
    }


    return [forms, dealWithInputsChange, clearTheInputs]
};
export default useForms;