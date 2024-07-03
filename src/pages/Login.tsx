import {useState,FormEvent} from 'react';

const Login = () => {

    const [id,setId] = useState('')
    const [pass,setPass] = useState('')

    const handleSubmit=(event:FormEvent<HTMLFormElement>)=>{
        event.preventDefault();
        console.log({id,pass});

        setId('')
        setPass('')
    }



  return (
    <form onSubmit={handleSubmit}>
        <h1>User Login </h1>
        <input onChange={e=>{setId(e.target.value)}} value={id} type="text"placeholder="Enter your id" />
        <br />
        <br />
        <input onChange={e=>{setPass(e.target.value)}} value={pass} type="text"placeholder="Enter your pass" />
        <br />
        <br />
        <button type='submit'>login</button>
    </form>
  )
}

export default Login