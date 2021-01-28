import React,{useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import { fetchAccount } from './action';
import {connect} from 'react-redux';


function Account(props){
const history=useHistory();

useEffect(()=>{
props.fetchAccount();
},[fetchAccount,props.accountUpd])

const handleAdd=()=>{
    history.push('/addaccount')
}

return(
    <div>
        <h2>In Account!</h2>
        <button onClick={handleAdd}>Add Account</button>
        {props.isLoading ? 'Please wait...loading' :
            props.accounts.map(item=>{
                return <div key={item.id}>
                        <li>{item.name},{item.budget}</li>
                        </div>
            }) 
        }

    </div>
)
}

const mapStateToProps=(state)=>{
    return {
        isLoading:state.isLoading,
        accountUpd:state.accountUpd,
        accounts:state.accounts,
        error:state.error
    }
}
export default connect(mapStateToProps,{fetchAccount})(Account);