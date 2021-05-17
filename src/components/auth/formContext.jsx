import { createContext, useContext, useState } from 'react';

const FormContext = createContext({})

export const FormProvider = ({children}) => {
    const [amount, setAmount] = useState('')

    return (
        <FormContext.Provider
        value={{amount, setAmount}}>
            {children}
        </FormContext.Provider>
    )
}

export const useFormCall = () => (
    useContext(FormContext)
)