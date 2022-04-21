import React,{useState,useRef} from 'react'
import adStyle from './Styles/AllDevices.module.css'
function AllDevices() {
  const [visible,setVisible] = useState(false);
  const selectRef = useRef('');
  const selectChange = ()=>{
    const selectValue = selectRef.current.value;
    if(selectValue === '4'){
      setVisible(true);
    }
    else{
      setVisible(false)
    }
  }
  return (
    <form action="">
    <div className={adStyle.container}>
      <header>All Devices</header>
 {/* <div style={{padding:'0px 50px'}} class="mb-3">
 <label for="exampleFormControlInput1" class="form-label">ID</label>
 <input type="number" class="form-control" id="exampleFormControlInput1" placeholder="ID"/>
</div>  */}
<div style={{padding:'0px 50px',marginBottom:'10px'}}>
 <label for="exampleFormControlInput1" class="form-label">Device Type</label>
 <select onChange={selectChange} class="form-select" aria-label="Default select example" ref={selectRef}>
 <option selected>Select Device</option>
 <option value="1">Tablet</option>
 <option value="2">Chromebook</option>
 <option value="3">Hootspot</option>
 <option value="4">Other</option>
</select>
 </div> 
{visible && 
  <div style={{padding:'0px 50px',marginBottom:'15px'}}>
<input type="text" class="form-control" aria-label="Dollar amount (with dot and two decimal places)"/>
</div>
}
<div style={{padding:'0px 50px'}} class="mb-3">
 <label for="exampleFormControlInput1" class="form-label">FCC Approval Status</label>
 <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="FCC Approval Status"/>
</div> 
 <div style={{padding:'0px 50px'}} class="mb-3">
 <label  for="exampleFormControlInput1" class="form-label">FCC Approval Name</label>
 <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="FCC Approval Name"/>
</div> 
<div style={{padding:'0px 50px'}} class="mb-3">
 <label for="exampleFormControlInput1" class="form-label">FCC Approval Date</label>
 <input type="date" class="form-control" id="exampleFormControlInput1" />
</div> 
 <div style={{padding:'0px 50px'}} class="mb-3">
 <label for="exampleFormControlInput1" class="form-label">IMEI 1</label>
 <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="IMEI 1"/>
</div> 
<div style={{padding:'0px 50px'}} class="mb-3">
 <label for="exampleFormControlInput1" class="form-label">IMEI 2</label>
 <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="IMEI 2"/>
</div>  <div style={{padding:'0px 50px'}} class="mb-3">
 <label for="exampleFormControlInput1" class="form-label">IMEI 3</label>
 <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="IMEI 3"/>
</div> 
<div style={{padding:'0px 50px'}} class="mb-3">
 <label for="exampleFormControlInput1" class="form-label">Model</label>
 <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Model"/>
</div> 
 <div style={{padding:'0px 50px'}} class="mb-3">
 <label for="exampleFormControlInput1" class="form-label">Serial Number</label>
 <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Serial Number"/>
</div> 
<div style={{padding:'0px 50px'}} class="mb-3">
 <label for="exampleFormControlInput1" class="form-label">Color</label>
 <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Color"/>
</div> 
<div style={{padding:'0px 50px',marginBottom:'10px'}}>
 <label for="exampleFormControlInput1" class="form-label">Network</label>
 <select class="form-select" aria-label="Default select example">
 <option selected>Select Network</option>
 <option value="1">3G</option>
 <option value="2">4G</option>
 <option value="3">3G/4G</option>
</select>
 </div> 
 <div style={{padding:'0px 50px'}} class="mb-3">
 <label for="exampleFormControlInput1" class="form-label">Agent</label>
 <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Agent"/>
</div>
 <div style={{padding:'0px 50px'}} class="mb-3">
 <label for="exampleFormControlInput1" class="form-label">Vendor</label>
 <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Vendor"/>
</div>
<div style={{padding:'0px 50px'}} class="mb-3">
 <label for="exampleFormControlInput1" class="form-label">Distributor</label>
 <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Distributor"/>
</div>
<div style={{padding:'0px 50px'}} class="mb-3">
 <label for="exampleFormControlInput1" class="form-label">Device Order Number</label>
 <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Device Order Number"/>
</div>
<div style={{padding:'0px 50px'}} class="mb-3">
  <label for="formFileMultiple" class="form-label">Upload Pictures</label>
  {/* <label for="img">Select image:</label> */}
  <input class="form-control" type="file" id="img" name="img" multiple/>
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
export default AllDevices