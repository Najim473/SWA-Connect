import React from 'react'
import Simcard from './Simcard/Simcard'
// import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Phonecarrier from './Phonecarrier/Phonecarrier';
import ACP from './ACP Operations/ACP Operations';
import Note from './Note/Note';
import ServiceCarrier from './SerivceCarrier/ServiceCarrier';
import Simop from './Simop/Simop';
// TAB 
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography'; 
import Box from '@mui/material/Box';
// END 
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};
function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function SimcardD2() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container style={{marginTop:'30px'}} fixed>
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="SIM Card Details" {...a11yProps(0)} />
          <Tab label="Service carrier operations" {...a11yProps(1)} />          
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
      <Simcard/>
        <Phonecarrier/>
        <ACP/>
        <Note/>
        <Simop/>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <ServiceCarrier/>
      </TabPanel>      
    </Box>
    </Container>
  );
}

export default SimcardD2