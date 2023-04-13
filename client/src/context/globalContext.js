import React, {useContext, useState}from "react";
import axios from "axios";
const BAse_Url = "http://localhost:5000/api/v1";
const GlobalContext = React.createContext();

export const GlobalProvider = ({ 
    children } )=> {

        const [income, setIncomes] = useState([]);
        const [expense, setExpenses] = useState([]);
        const [error, setError] = useState(null);

         const addIncome = async (income) => {
            const response = await axios.post(`${BAse_Url}/add-incomes`, income)
            .catch((err) => {
                setError(err.response.data.message);
        })
    }
    return (
        <GlobalContext.Provider value={{
            addIncome
        }}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGLobalContext = () => {
    return useContext 
    
    (GlobalContext)
}