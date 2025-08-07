import React from 'react'

const Register = () => {
  return (
     <div className='container' style={{width: "68%"}}>
        <h1 className='text-center'>React Firebase Authentication</h1>
        <div className="container  my-5">
            <form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
   
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1"/>
  </div>
  <div className='text-center'>
      <button  style={{width: "40%"}} type="submit" class="btn btn-primary">Register</button>

  </div>
</form>
        </div>
       
    </div>
  )
}

export default Register