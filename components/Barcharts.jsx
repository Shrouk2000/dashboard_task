'use client'
import {React,useState,useEffect} from 'react'
// import '../app/globals.css'
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
function Barcharts() {
    const [chartData,setChartData]=useState({
        datasets:[],
    });
    const [chartOptions,setChartOptions]=useState({});
    useEffect(()=>{
        setChartData({
            labels:['Sat','Sun','Mon','Tues','Wed','Thurs','Fri'],
            datasets:[
                {
                    label:"sales $",
                    data:[18127,22201,1940,24182,17842,22475],
                    borderColor:'rgb(53,162,235)',
                    backgroundColor:'rgb(53,162,235,0.4)',
                },
            ]
        })
   
        setChartOptions({
    plugins:{
        legend:{
            postion:'top',
        } ,
        title:{
            display:true,
            text:'Daily Revenue'
        }
    },
    maintainAspectRatio:false,
    Responsive:true
})
},[])
  return (
    <div className='w-full md:col-span-2 relative lg:h-[70vh] h-[50vh m-auto p-4 border rounded-lg bg-white' >
        <Bar data={chartData} options={chartOptions}/>
      
    </div>
  )
}

export default Barcharts
