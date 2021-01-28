import React,{useState} from 'react';
import {addAccount} from './action';
import {connect} from 'react-redux';
import {useHistory} from 'react-router-dom';

function AddForm(props){
const history=useHistory();
const [accounts,setAccounts]=useState({
    name:'',
    budget:0
})

const handleChange=(e)=>{
    setAccounts({...accounts,
        [e.target.name] : e.target.value})
}

const handleSubmit=(e)=>{
    e.preventDefault();
    console.log('submit=',accounts);
    props.addAccount(accounts);
    history.push('/');
}

return(
    <div>
        <h3>In AddForm</h3>
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input 
            id="name"
            name="name"
            value={accounts.name}
            onChange={handleChange}></input>

            <label htmlFor="budget">Budget</label>
            <input 
            id="budget"
            name="budget"
            value={accounts.budget}
            onChange={handleChange}></input>
            <button>Add Account!</button>
        </form>
        
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
export default connect(mapStateToProps,{addAccount})(AddForm);
 