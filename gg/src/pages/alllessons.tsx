
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabPanel from '@mui/lab/TabPanel';
import Tabs from '@mui/material/Tabs';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import {Bulla} from '../components/grab-user-input/Hook'
import React from 'react';
import ShareIcon from '@mui/icons-material/Share';
import { Thorsu } from '../components/reactshare/socialmediasharing';
import {Danny} from "../components/props/Myprops"

export const LabTabs:React.FC<{}>=()=>{ 
  let [value, setValue] = React.useState('3');

  const handleChange = (event: React.SyntheticEvent, newvalue: string) => {
    setValue(newvalue);
  }

  return <>
    <Box sx={{ width: '100%', typography: 'body2' }}>
      <TabContext value={value}>
          
            <Tabs onChange={handleChange}>
            <Tab icon={<PersonPinIcon />} iconPosition="bottom"  label="USER STATE" value="1" />
            <Tab icon={<ShareIcon/>} iconPosition="bottom"  label="2" value="2" />
            <Tab icon={<FavoriteIcon />} iconPosition="bottom"  label="3"   value="3" />
            <Tab icon={<PersonPinIcon />} iconPosition="bottom" label="4"   value="4"  />
            </Tabs>
              
            <TabPanel value={'1'}>  <Bulla/>  </TabPanel>
            <TabPanel value={'2'}>  <Thorsu/>  </TabPanel>
            <TabPanel value={'3'}>   <Danny/> </TabPanel>
            <TabPanel value={'4'}>   lesson 4 </TabPanel>
          </TabContext>

    </Box>
    </>
}






