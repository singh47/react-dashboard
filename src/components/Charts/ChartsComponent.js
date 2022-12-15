import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Legend,
    ArcElement,
    Tooltip,

  } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { Stack, Container } from '@mui/system';
import { Doughnut } from 'react-chartjs-2';
import Grid2 from '@mui/material/Unstable_Grid2'; // Grid version 2
import { Grid } from '@mui/material';
import { GridDensityTypes } from '@mui/x-data-grid';
import axios from 'axios';
import {useEffect, useState} from 'react';
import confiData from "../../config.json"


ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    ArcElement,
    Tooltip,
    Legend
  );

export const options = {
    responsive: true
  };

const labels = ['IT', 'Build Service', 'Fleet', 'Mobile Technology', 'Network'];

function ChartsComponent() {

    const [statusData, setStatusData] = useState([]);
    const [categoryData, setCategoryData] = useState([]);

    const fetchStatus = async () => {
        const res = await axios.get(confiData.EXPIRED_API);
        setStatusData(res.data);
        };

    const fetchCategories = async () => {
            const res = await axios.get(confiData.CATEGORY_API);
            console.log(res.data);
            setCategoryData(res.data);
        };

    useEffect(() => { 
        fetchStatus(); 
        fetchCategories();
    }, []);

    const data = {
        labels,
        datasets: [
          {
            label: 'Contract Categories',
            data: [categoryData.IT, categoryData.Build_Service, categoryData.Fleet, categoryData.Mobile_Technology, categoryData.Network, 
            categoryData.Power, categoryData.Fiber],
            backgroundColor: 'rgba(255, 99, 132, 0.8)',
          }
        ],
      };
      
    const data2 = {
        labels: ['Active', 'Expired'],
        datasets: [
          {
            label: 'Contract Status',
            data: [statusData.expired, statusData.active],
            backgroundColor: [
              'rgba(255, 99, 132, 0.8)',
              'rgba(54, 162, 235, 0.8)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
            ],
            borderWidth: 1,
          },
        ],
      };

    return(
      <Container sx={{paddingTop: 3 ,paddingBottom: 4}}>
          <Stack direction="row" maxWidth="sm" height={400}>
          <Bar options={options} data={data} />
          <Doughnut data={data2} />
          </Stack>
      </Container>
    ) ;
  }



export default ChartsComponent;