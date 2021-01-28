import React,{useState,useEffect} from 'react';
import { fetchAccount } from './action';
import {connect} from 'react-redux';


function Account(props){

useEffect(()=>{
    console.log('to fetch useeff')
props.fetchAccount();
},[])

return(
    <div>
        <h2>In Account!</h2>
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