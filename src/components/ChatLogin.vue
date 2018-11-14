<template>
<div class="login">
<!-- <form class="dropdown-menu p-4"> -->
  <div class="form-group">
    <label for="exampleDropdownFormEmail2" align="center">Email address</label>
    <input type="email" class="form-control" id="exampleDropdownFormEmail2" placeholder="email@example.com"  align="center">
  </div>
  <div class="form-group" >
    <label for="exampleDropdownFormPassword2" align="center">Password</label>
    <input type="password" class="form-control" id="exampleDropdownFormPassword2" placeholder="Password" align="center">
  </div>
  <!-- <div class="form-check">
    <input type="checkbox" class="form-check-input" id="dropdownCheck2">
    <label class="form-check-label" for="dropdownCheck2">
      Remember me
    </label>
  </div> -->
  <button type="submit" class="btn btn-dark">Sign in</button>
  
    <div class="dropdown-divider"></div>
  <a class="signUp" href="#">New around here? Sign up</a>
  <!-- <a class="dropdown-item" href="#">Forgot password?</a> -->
</div>
<!-- </form> -->

</template>

<script> 
export default {
  name: 'ChatLogin'
}
</script>
<style>
label{
  font-size: 1.5rem;
}
.form-control{ 
width: 80%;
}
.login{
  width: 100%;
    height: auto;
    margin-top: 68%;
    margin-bottom: 76%;
    table-layout: fixed;
    color: rgba(255,255,255,0.5);
    text-decoration: none;
}
.signUp {
    color: rgba(255,255,255,0.5);
    text-decoration: none;
    font-size: 1.5rem;
}

.signUp:hover 
{
     color:rgb(236, 116, 116); 
     text-decoration:none; 
     cursor:pointer;  
}
</style>
