import * as React from 'react';
import { Stack } from '@mui/system';
import GaugeChart from 'react-gauge-chart'
// import Button from '@mui/material/Button';

function BoxComponent() {
  const styles = {
    border: '1px solid rgba(0, 0, 0, 0.05)', 
  };

  return (
    <Stack  sx={{ position:'absolute', top:'4.4rem', right:'10px', zIndex:'10', width:'15%'}}>
      <span style={{ backgroundColor: 'rgba(20, 27, 45, .7)'}}>
            <GaugeChart id="gauge-chart1" 
              nrOfLevels={420}
              arcsLength={[0.3, 0.5, 0.2]}
              colors={['#5BE12C', '#F5CD19', '#EA4228']}
              percent={1}
              arcPadding={0.02}
              needleColor="#FFFFFF" 
            />
          <p style={{textAlign:"center"}}>HBU</p>
      </span>
    </Stack>
  );
  }

export default BoxComponent;