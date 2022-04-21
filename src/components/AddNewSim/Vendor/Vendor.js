import React from 'react'
import vsStyle from './Styles/Vendor.module.css'
function Vendor() {
  return (
    <form action="">
    <div className={vsStyle.container}>
      <header>Vendors</header>
 {/* <div style={{padding:'0px 50px'}} class="mb-3">
 <label for="exampleFormControlInput1" class="form-label">ID</label>
 <input type="number" class="form-control" id="exampleFormControlInput1" placeholder="ID"/>
</div>  */}
<div style={{padding:'0px 50px'}} class="mb-3">
 <label for="exampleFormControlInput1" class="form-label">Company Name</label>
 <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Company Name"/>
</div> 
 <div style={{padding:'0px 50px'}} class="mb-3">
 <label  for="exampleFormControlInput1" class="form-label">First Name</label>
 <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="First Name"/>
</div> 
 <div style={{padding:'0px 50px'}} class="mb-3">
 <label for="exampleFormControlInput1" class="form-label">Last Name</label>
 <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Last Name"/>
</div> 
 <div style={{padding:'0px 50px'}} class="mb-3">
 <label for="exampleFormControlInput1" class="form-label">Phone Number</label>
 <input type="number" class="form-control" id="exampleFormControlInput1" placeholder="Phone Number"/>
</div> 
 <div style={{padding:'0px 50px'}} class="mb-3">
 <label for="exampleFormControlInput1" class="form-label">Email</label>
 <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Email"/>
</div>
 <div style={{padding:'0px 50px'}} class="mb-3">
 <label for="exampleFormControlInput1" class="form-label">Address 1</label>
 <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Address 1"/>
</div> 
 <div style={{padding:'0px 50px'}} class="mb-3">
 <label for="exampleFormControlInput1" class="form-label">Address 2</label>
 <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Address 2"/>
</div> 
 <div style={{padding:'0px 50px'}} class="mb-3">
 <label for="exampleFormControlInput1" class="form-label">City</label>
 <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="City"/>
</div>
 <div style={{padding:'0px 50px'}} class="mb-3">
 <label for="exampleFormControlInput1" class="form-label">State</label>
 <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="State"/>
</div> 
 <div style={{padding:'0px 50px'}} class="mb-3">
 <label for="exampleFormControlInput1" class="form-label">Zip Code</label>
 <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Zip Code"/>
</div> 
<div style={{padding:'0px 50px'}} class="mb-3">
  <label for="formFileMultiple" class="form-label">Upload Files</label>
  <input class="form-control" type="file" id="formFileMultiple" multiple/>
</div>
<div>
</div> 
 <div style={{padding:'0px 50px',marginTop:'20px'}} class="form-floating">
  <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
  <label style={{padding:'10px 0px 0px 60px'}} for="floatingTextarea">Notes</label>
</div>
</div>
 <div style={{marginTop:'30px'}} class="col-12 text-center">
   <button class="btn btn-primary" type="submit">Submit form</button>
 </div> 
   </form>
  )
} 
export default Vendor