import Card from './UI/Card'
import Button from './UI/Button'
import classes from './AddUser.module.css'
import { useState } from 'react'
import ErrorModal from './UI/ErrorModal'

const AddUser = (props)=>{

    const [enteredUsername,setenteredUsername]=useState('');
    const [enteredAge,setenteredAge]=useState('');
    const [error, setError] = useState('');




   const addUserHandler = (event)=>{
    event.preventDefault();
    if(enteredUsername.trim().length ===0 || enteredAge.trim().length === 0 ){
        setError({
            title : 'invalid input',
            message: "please enter a valid name and age "
        })
        return;
    }
    if( +enteredAge < 1){
        setError({
            title : 'invalid age',
            message: "please enter a valid age(>0)"
        })
        return;
    }
   props.onAddUser(enteredUsername,enteredAge)
    setenteredUsername('');
    setenteredAge('');
     
}

const usernameChangeHandler= (event) =>{
    setenteredUsername(event.target.value)
}

const ageChangeHandler= (event) =>{
    setenteredAge(event.target.value)
}

const errorHandler = () => {
    setError(null);
}


return (
      <div>


       {error && <ErrorModal title ={error.title} message={error.message} onConfirm={errorHandler} /> }

          <Card className={classes.input} >
              <form  onSubmit={addUserHandler}>
             <label  htmlFor="username">Username</label>
             <input id="username " value={enteredUsername} onChange={usernameChangeHandler} type="text"></input>
             <label  htmlFor="age">Age (Years)</label>
             <input id="submit" value={enteredAge} onChange={ageChangeHandler} type="number"></input>
             <Button type="submit">Add User</Button>
              </form>
          </Card>
      </div>
)
}

export default AddUser;