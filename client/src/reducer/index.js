import {FETCH_ACCOUNT_START,
        FETCH_ACCOUNT_SUCCESS,
        FETCH_ACCOUNT_FAILURE,
        ADD_ACCOUNT_START,
        ADD_ACCOUNT_SUCCESS,
        ADD_ACCOUNT_FAILURE} from '../action';

const initialState={
    isLoading:false,
    accountUpd:false,
    accounts:[],
    error:''
}

export const reducer=(state=initialState,action)=>{
    switch(action.type){
        //fetch account
        case FETCH_ACCOUNT_START :
            return {
                ...state,
                error:'',
                isLoading:true,
                accountUpd:false,
            }
        case FETCH_ACCOUNT_SUCCESS:
            return {
                ...state,
                error:'',
                isLoading:false,
                accountUpd:false,
                accounts:action.payload,
        }
        case FETCH_ACCOUNT_FAILURE:
            return {
                ...state,
                error:action.payload,
                isLoading:false,
                accountUpd:false,
        }
        //add account
        case ADD_ACCOUNT_START :
            return {
                ...state,
                error:'',
                isLoading:true,
                accountUpd:false,
            }
        case ADD_ACCOUNT_SUCCESS:
            return {
                ...state,
                error:'',
                isLoading:false,
                accountUpd:true,
                // accounts:action.payload,
        }
        case ADD_ACCOUNT_FAILURE:
            return {
                ...state,
                error:action.payload,
                isLoading:false,
                accountUpd:false,
        }
        default:
            return state;     
    }
    
}

