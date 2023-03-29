import { createContext, useReducer } from "react";

const Dummy_Expenses=[
    {
     id:'e1',
     description:"A pair of cloths",
     amount:69.65,
     date:new Date('2023-03-15')
    },
    {
     id:'e2',
     description:"some Vegetables",
     amount:29.65,
     date:new Date('2023-03-10')
    },
    {
     id:'e3',
     description:"House Rent",
     amount:269,
     date:new Date('2023-03-1')
    },
    {
     id:'e4',
     description:"Electricity Bill",
     amount:35.23,
     date:new Date('2023-02-25')
    },
    {
     id:'e5',
     description:"Celebrate a Event",
     amount:40.12,
     date:new Date('2023-03-12')
    },
    {
     id:'e6',
     description:"Accessories",
     amount:32.98,
     date:new Date('2023-03-08')
    },
    {
     id:'e7',
     description:"Buy Cell Phone",
     amount:399.50,
     date:new Date('2023-03-18')
    },
]


 export const ExpensesContext = createContext({
 expenses: [],
   addExpenses :({description, amount, date})=>{},
   setExpenses: (expenses)=>{},
   deleteExpenses:(id)=>{},
   updateExpenses:(id,{description, amount, date}) =>{}
})

function expenseReducer(state, action){
switch(action. type){
    case 'ADD':
        const id =new Date().toString()+Math.random().toString()
        return[{...action.payLoad, id:id}, ...state]

    case 'SET' :
      const inverted = action.payLoad.reverse()
      return inverted;    
    case 'UPDATE':   
      const updatableExpenseIndex = state.findIndex(
        (expenses) => expenses.id ===action.payLoad.id
      ) ;
      const updatableExpense = state[updatableExpenseIndex]
      const updatedItem = { ...updatableExpense, ...action.payLoad.data}
      const updatedExpenses = [...state]
      updatedExpenses[updatableExpenseIndex] = updatedItem
      return updatedExpenses;
    case 'DELETE':
        return state.filter((expenses) => expenses.id !== action.payLoad)
     default:
        return state;       
}
}

function ExpensesContextProvider({children}){
    const [expensesState, dispatch] = useReducer(expenseReducer,[])

    function addExpenses(expenseData){
      dispatch({type:'ADD',payLoad:expenseData})
    }

    function setExpenses(expenses){
      dispatch({type:'SET' , payLoad:expenses})
    }

    function updateExpenses(id,expenseData){
   dispatch({type:'UPDATE',payLoad: { id:id, data:expenseData}})
    }

    function deleteExpenses(id){
        dispatch({type:'DELETE', payLoad:id})
    }

    const value = {
        expenses:expensesState,
        addExpenses:addExpenses,
        setExpenses:setExpenses,
        updateExpenses:updateExpenses,
        deleteExpenses:deleteExpenses
    }
    return <ExpensesContext.Provider value={value}>{children}</ExpensesContext.Provider>
}

export default ExpensesContextProvider