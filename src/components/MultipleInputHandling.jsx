import React from 'react'
import { useState } from 'react'
const MultipleInputHandling = () => {

    const [formdata, setformdata] = useState({
        firstname: '',
        lastname: "",
        age: '',
        number: '',

    })
    const changeHandler=(e)=>{
        const {name, value} = e.target

        setformdata({...formdata, [name]:value})

    }
    const submitHandler=(e)=>{
        e.preventDefault();
        alert("Form Submitted Successfully");
        setformdata({
        firstname: '',
        lastname: "",
        age: '',
        number: '',

    })
    }
  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
            First Name: <input value={formdata.firstname} onChange={changeHandler} placeholder="enter your name" name="firstname" type="text"></input>
        </div>
         <div>
            Last Name: <input value={formdata.lastname} name="lastname" onChange={changeHandler} type="text"></input>
        </div>
         <div>
            Age: <input type="number" value={formdata.age} name="age" onChange={changeHandler}></input>
        </div>
         <div>
            Number: <input type="number" value = {formdata.number} name="number" onChange={changeHandler} ></input>
        </div>
        <div>
            <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
}

export default MultipleInputHandling
