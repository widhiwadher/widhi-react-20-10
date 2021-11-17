import React from 'react'

export const incNum = (amount) => {
    return (dispatch) => {
        dispatch({
            type: 'deposit',
            payload: amount 
        }
            
        )
    }

    
}



export const incNum = (amount) => {
    return (dispatch) => {
        dispatch ({
          type : 'withdraw',
          payload: amount
       
        })
    }
}



