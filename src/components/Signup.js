import React from 'react';


function Signup() {
  return <div>
      <section class="section-1 ">
    <div class="container-fluid  page-bg">
 <p  class = "beam-text mt-5">&nbsp; buildEasy</p>

 <div class = "signup-container">
     <h4 class = "signup-text text-center ">Signup to buildEasy</h4>
<p class="p-3 text-center" >Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p> 

<form>
 <div class = "mb-3">
    <label for="exampleInputEmail1" class="form-label">Account type</label>
    <div class="form-floating">
    
        <select class="form-select form-control" id="floatingSelect" aria-label="Floating label select example">
          <option selected>Open this select menu</option>
          <option value="1"> I am a contractor</option>
          <option value="2">I am a client</option>
          <option value="3">Three</option>
        </select>
         <label for="floatingSelect">Works with selects</label> 
      </div>
    </div>

    <div class="row mb-3">
        <div class="col ">
          <input type="text" class="form-control" placeholder="First name" aria-label="First name"></input>
        </div>
        <div class="col">
          <input type="text" class="form-control" placeholder="Last name" aria-label="Last name"></input>
        </div>
      </div>

    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">Email address</label>
      <input type="email" class="form-control" placeholder="your@email.com" id="exampleInputEmail1" aria-describedby="emailHelp"></input>

    </div>
    <div class="mb-3 input-box">
      <label for="exampleInputPassword1" class="form-label ">Password</label>
      <input type="password" class="form-control " placeholder="enter a password"  id="Password"></input>
    </div>

    <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Confirm password</label>
        <input type="password" class="form-control" placeholder="Conform your password" id="conformPassword"></input>
      </div>
    <div class="mb-3 form-check">
      <input type="checkbox" class="form-check-input" placeholder="" id="exampleCheck1"></input>
      <label class="form-check-label" for="exampleCheck1">I accept the terms and conditions.</label>
    </div>
    <div class= "form-group">
        <button type="submit" class="btn-primary btn-signup w-100 p-3">Sign up</button>
    </div>
     
    <p class="p-3 text-center">Are you an user? Login to your account</p>

  </form>
 </div>


</div>
    
</section>

  </div>;
}

export default Signup;
