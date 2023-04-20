import React, {useContext, useState}from "react";
import axios from "axios";
const BAse_Url = "http://localhost:5000/api/v1";
const GlobalContext = React.createContext();

export const GlobalProvider = ({ 
    children } )=> {

        const [incomes, setIncomes] = useState([]);
        const [expense, setExpenses] = useState([]);
        const [error, setError] = useState(null);

         const addIncome = async (income) => {
            const response = await axios.post(`${BAse_Url}/add-incomes`, income)
            .catch((err) => {
                setError(err.response.data.message);
        })
        getIncomes()
    }
        const getIncomes = async () => {
            const response = await axios.get(`${BAse_Url}/get-incomes`)
            setIncomes(response.data)
            console.log(response.data)
        }

        const deleteIncome = async(id) => {
            const res = await axios.delete(`${BAse_Url}/delete-income/${id}`)
            getIncomes()
        }
          const totalIncome = () => {
        let totalIncome = 0;
        incomes.forEach((income) =>{
            totalIncome = totalIncome + income.amount
        })

        return totalIncome;
    }
    console.log(totalIncome())
    return (
        <GlobalContext.Provider value={{
            addIncome,
            getIncomes,
            incomes, 
            deleteIncome,
            totalIncome
        }}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGLobalContext = () => {
    return useContext 
    
    (GlobalContext)
}