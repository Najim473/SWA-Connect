import React from 'react'
import Container from '@mui/material/Container';
import From01 from './Form01/From01'
import AllDevices from './AllDevices/AllDevices';
import DeviceOrders from './DeviceOrders/DeviceOrders';
import SimcardOrder from './SimcardOrder/SimcardOrder';
import Vendor from './Vendor/Vendor';
import SimcardReturn from './SimcardReturn/SimcardReturn';
import PhonePlansf from './PhonePlansf/PhonePlansf';
import ServiceCform from './ServiceCform/ServiceCform';
function AddNewSim() {
  return (
    <div>
        <Container fixed>
        <From01/>
      <ServiceCform/>
      <PhonePlansf/>
      <SimcardReturn/>
      <Vendor/>
      <SimcardOrder/>
      <DeviceOrders/>
      <AllDevices/>
      </Container>
    </div>
  )
}

export default AddNewSim