<template>
<div class="login">
<!-- <form class="dropdown-menu p-4"> -->
  <div class="form-group">
    <label for="exampleDropdownFormEmail2">Email address</label>
    <input type="email" class="form-control" id="exampleDropdownFormEmail2" placeholder="email@example.com"  align="center">
  </div>
  <div class="form-group">
    <label for="exampleDropdownFormPassword2">Password</label>
    <input type="password" class="form-control" id="exampleDropdownFormPassword2" placeholder="Password" align="center">
  </div>
  <!-- <div class="form-check">
    <input type="checkbox" class="form-check-input" id="dropdownCheck2">
    <label class="form-check-label" for="dropdownCheck2">
      Remember me
    </label>
  </div> -->
  <button type="submit" class="btn btn-primary">Sign in</button>
  
    <div class="dropdown-divider"></div>
  <a class="dropdown-item" href="#">New around here? Sign up</a>
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
.form-control{ 
width: 300px;
}
.login{
    margin-top: 43%;
}
</style>
