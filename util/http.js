import axios from "axios";

const BACKEND_URL = 
     'https://react-native-course-expo-default-rtdb.firebaseio.com' ;

 export  function storeExpense(expenseData){
     return  axios.post(BACKEND_URL + '/expenses.json',expenseData);
     
};

export  async function fetchExpenses(){
    const response =  await axios.get(BACKEND_URL + '/expenses.json')

    const expenses = [];

    for(const key in response.data){
        const expenseObj = {
            id:key,
            amount:response.amount[key].amount,
            date: new Date(response.data[key].date),
            description:response.description[key].description,
        }
        expenses.push(expenseObj)
    }
    return expenses;
}

export function updatedExpenses(id, expenseData){
    return axios.put(BACKEND_URL + `/expenses/${id}.json`, expenseData)
}

export function deleteExpenses(id){
    return axios.delete(BACKEND_URL + `/expenses/${id}.json`)
}