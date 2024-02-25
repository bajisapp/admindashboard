import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { LineChart, Line } from 'recharts';
import { RadialBarChart, RadialBar } from 'recharts';

const datas = [
    {
      name: 'Jan ',
      Email: 1500,
      Call: 1500,
      Total: 3000,
    },
    {
        name: 'Feb',
        Email: 1500,
        Call: 2000,
        Total: 3500,
      },
      {
        name: 'Mar',
        Email: 1200,
        Call: 1600,
        Total: 2800,
      },
      {
        name: 'Apr',
        Email: 900,
        Call: 1500,
        Total: 2400,
      },
      {
        name: 'May',
        Email: 1900,
        Call: 1800,
        Total: 3700,
      },
      {
        name: 'Jun',
        Email: 2000,
        Call: 1200,
        Total: 3200,
      },
      {
        name: 'Jul',
        Email: 1000,
        Call: 1500,
        Total: 2500,
      },{
        name: 'Aug',
        Email: 1200,
        Call: 1800,
        Total: 3000,
      },
      {
        name: 'Sep',
        Email: 900,
        Call: 1800,
        Total: 2700,
      },{
        name: 'Oct',
        Email: 1000,
        Call: 900,
        Total: 2000,
      },
      {
        name: 'Nov',
        Email: 1000,
        Call: 700,
        Total: 1700,
      },
      {
        name: 'Dec',
        Email: 800,
        Call: 700,
        Total: 1500,
      }
  ];

  const dataz = [

   {
    name: 'Jan ',
    CurrentWeek: 500,
    LastWeek: 1000,
    Total: 3000,
  },
  {
      name: 'Feb',
      CurrentWeek: 1500,
      LastWeek: 2000,
      Total: 3500,
    },
    {
      name: 'Mar',
      CurrentWeek: 700,
      LastWeek: 1200,
      Total: 2800,
    },
    {
      name: 'Apr',
      CurrentWeek: 2300,
      LastWeek: 1900,
      Total: 2400,
    },
    {
      name: 'May',
      CurrentWeek: 1500,
      LastWeek: 1700,
      Total: 3700,
    },
    {
      name: 'Jun',
      CurrentWeek: 2000,
      LastWeek: 1800,
      Total: 3200,
    },
   {
      name: 'Jul',
      CurrentWeek: 1800,
      LastWeek: 1500,
      Total: 3000,
    }

];


function Home() {
  return (
    <div>

    <h5 class="text-clr text-tp">Dashboard</h5>
    <div class=''>
    <div class="row">
    <div class="col-sm-5">
    <div class='row' >
        <div class='col-sm-6'>
        <div class='box-styles'>
                <div class='row'>
                    <div class='col-8 col-sm-10'>
                        <div>
                       <h6>Email</h6>
                       <h2>6,884 </h2>
                       <span> 6,227 Solved Tickets. </span>
                       </div>
                    </div>
                    <div class='col col-sm-2'>
                        <span class='icon-styles'><i class="bi bi-mailbox"></i></span>

                    </div>
                </div>
            </div>
        </div>
        <div class='col-sm-6'>
        <div class='box-styles'>
                <div class='row'>
                    <div class='col-8 col-sm-10'>
                        <div>
                       <h6>Phone</h6>
                       <h2>5,015</h2>
                       <span>4,537 Solved Tickets. </span>

                       </div>
                    </div>
                    <div class='col col-sm-2'>
                        <span class='icon-styles'><i class="bi bi-telephone-fill"></i></span>

                    </div>
                </div>
            </div>
        </div>
        </div>
        <div class='row' style={{marginTop:'20px'}}>
        <div class='col-sm-6'>
        <div class='box-styles'>
                <div class='row'>
                    <div class='col-8 col-sm-10'>
                        <div>
                       <h6>Chat - Whatsapp</h6>
                       <h2>730 </h2>
                       <span> 652 Solved Tickets.</span>
                       </div>
                    </div>
                    <div class='col col-sm-2'>
                        <span class='icon-styles'><i class="bi bi-whatsapp"></i></span>

                    </div>
                </div>
            </div>
        </div>
        <div class='col-sm-6'>
        <div class='box-styles'>
                <div class='row'>
                    <div class='col-8 col-sm-10'>
                        <div>
                       <h6>Social - FB</h6>
                       <h2>50 </h2>
                       <span> 20 Solved Tickets </span>
                       </div>
                    </div>
                    <div class='col col-sm-2'>
                        <span class='icon-styles'><i class="bi bi-ticket"></i></span>

                    </div>
                </div>
            </div>
        </div>
        </div>
    </div>
  
    <div class="col-sm-7">


  <ResponsiveContainer  class='box-styles' style={{backgroundColor:'#fff',borderRadius:'10px', border:'1px solid #f0e8ff',    boxshadow: '0px 0px 35px 0px rgba(154, 161, 171, 0.15)'}}>
    
    <BarChart
          width={500}
          height={300}
          data={datas}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="5 5" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Email" barSize={10}  stackId="a" fill="#727cf5" />
          <Bar dataKey="Call"  barSize={10}  stackId="a" fill="#e3e9ee" />
          <Bar dataKey="Total" barSize={10}  fill="#c7d9f5" />
        </BarChart>
        </ResponsiveContainer>
        </div>
    </div>


    <div class='row' style={{marginTop:'20px'}}>
        <div class='col-sm-5' style={{height: '250px',backgroundColor:'#fff'}}>

        <ResponsiveContainer >
        <LineChart
          width={500}
          height={200}
          data={dataz}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          
           <Line type="monotone" dataKey="volume" stroke="#82ca9d" 
   dot={{ stroke: 'red', strokeWidth: 8, r: 8, strokeDasharray:''}} />
          <CartesianGrid strokeDasharray="5 5" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line dot={false} type="monotone" dataKey="CurrentWeek" stroke="#2fd4a4"  strokeWidth={3}  />
          <Line dot={false} type="monotone" dataKey="LastWeek" stroke="#878ff6" strokeWidth={3}  />
        </LineChart>
      </ResponsiveContainer>

        </div>
        <div class='col-sm-7'>
          <div class='box-styles'>
        <table class="table" style={{ fontsize: '12px !important'}}>
  <thead>
    <tr>
      <th scope="col">Task ID</th>
      <th scope="col"><i class="bi bi-person-fill"></i> Customer Name</th>
      <th scope="col"><i class="bi bi-telephone-fill"></i> PhoneNumber</th>
      <th scope="col"><i class="bi bi-person-badge-fill"></i> AssignedTo</th>
      <th scope="col"><i class="bi bi-reply-fill"></i> CallbackTime</th>
      <th scope="col">Status</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>John Doe</td>
      <td>+1234567890</td>
      <td>Agent1</td>
      <td>2024-02-25 10:00:00</td>
      <td><span  class='bg-dangers'>Pending</span></td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jane Smith</td>
      <td>+9876543210</td>
      <td>Agent2</td>
      <td>2024-02-25 11:30:00</td>
      <td><span class='bg-primarys'>In Progress</span></td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td >Bob Johnson</td>
      <td>+5551234567</td>
      <td>Agent3</td>
      <td>2024-02-26 14:15:00</td>

      <td><span class='bg-successa' style={{backgroundcolor: '#26bf941a !important',
    color: '#26bf94 !important'}}>Completed</span></td>
    </tr>
    <tr>
      <th scope="row">4</th>
      <td >Alice Brown</td>
      <td>+3334445555</td>
      <td>Agent1</td>
      <td>2024-02-27 09:45:00</td>
      <td><span class='bg-dangers'>Pending</span></td>
    </tr>
    
  </tbody>
</table>
</div>



 
        </div>
    </div>


    

    </div>
    </div>


  )
}

export default Home
