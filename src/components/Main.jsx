import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto'; // Import Chart.js library
import './Main.css';
import post from '../assets/post.png';
import Card from './Card';
import { FaEye } from "react-icons/fa";
import { HiDotsHorizontal } from "react-icons/hi";
import { FaArrowUp } from "react-icons/fa";
import graph from '../assets/graph.png'
import { Bar } from 'react-chartjs-2';


const Main = () => {
  const data = {
    labels: ['A', 'B', 'C', 'D', 'E'],
    datasets: [
      {
        label: 'Horizontal Bar Graph',
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(75,192,192,0.4)',
        hoverBorderColor: 'rgba(75,192,192,1)',
        data: [65, 59, 80, 81, 56],
      },
    ],
  };

  const chartRef = useRef(null); // Reference for the first chart canvas element
  const doeChartRef = useRef(null); // Reference for the second chart canvas element

  useEffect(() => {
    const ctx = chartRef.current; // Get canvas context for the first chart
    const ctxx = doeChartRef.current; // Get canvas context for the first chart
    const myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [{
          label: '',
          data: [0, 19, 3, 5, 2, 3],
          backgroundColor: 'rgb(200, 255, 235)',
          borderWidth: 0.2
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          }
        }
      }
    });
    const myChartt = new Chart(ctxx, {
      type: 'doughnut',
      data: {
        labels: ['Male', 'Female', 'Others'],
        datasets: [{
          label: '',
          data: [35, 55, 15],
          backgroundColor: ['rgba(40, 51, 80, 1)', 'rgba(15, 164, 74, 1)', 'rgba(255, 248, 84, 1)'],
          borderWidth: 0.2
        }]
      },
    });

    // Clean up function to destroy the chart
    return () => {
      myChart.destroy();
      myChartt.destroy();
    };
  }, []); // Empty dependency array means this useEffect runs only once

  return (
    <div className="main">
      <div className="header">
        <div className="titles">
          <p>Performance Metrics</p>
          <p className="under">Download Summary</p>
        </div>
        <div className="cards">
          <Card props={{ title: "Followers", numbers: "93.2K", percent: "0.8%" }} />
          <Card props={{ title: "Likes", numbers: "400K", percent: "1.21%" }} />
          <Card props={{ title: "Comments", numbers: "289.1K", percent: "2.7%" }} />
        </div>
      </div>
      <div className="rates-demos">
        <div className="rates">
          <div className="header">
            <p>Engagement Rates</p>
            <select name="" id="">
              <option value="">Weekly</option>
              <option value="">Monthly</option>
              <option value="">Yearly</option>
            </select>
          </div>
          <div className="body">
            {/* Add canvas element for the first chart */}
            <canvas ref={chartRef} id="myChart"></canvas>
          </div>
          <div className="footer">
            <div className="title">Post Activity</div>
            <div className="post">
              <div className="content">
                <img src={post} alt="" />
                <p className="subtitle">
                  Success can be achieved by being bold enough...
                </p>
              </div>
              <p className="date">May 30</p>
              <p className="views"><FaEye color='rgba(15, 164, 74, 1)' /> 1.1k</p>
              <p className="dots"><HiDotsHorizontal /></p>
            </div>
            <div className="post">
              <div className="content">
                <img src={post} alt="" />
                <p className="subtitle">
                  Success can be achieved by being bold enough...
                </p>
              </div>
              <p className="date">May 30</p>
              <p className="views"><FaEye color='rgba(15, 164, 74, 1)' /> 1.1k</p>
              <p className="dots"><HiDotsHorizontal /></p>
            </div>
          </div>
        </div>
        <div className="demos">
          <div className="header">
            <p>Audience Demography</p>
          </div>
          <div className="body">
            Gender
            {/* Add canvas element for the second chart */}
            {/* <canvas ref={doeChartRef}></canvas> */}
            <img src={graph} height={200} alt="" />
          </div>
          <div className="locations">
            <p className="loc">Top Locations</p>
            <button>See More</button>
          </div>
          <div className="conts">
            <p>Country</p>
            <p>Visitors</p>
          </div>
          <div className="list">
            <div className="item">
              <p>Nigeria</p>
              <div className="vis">
                <p className="count">5430</p>
                <p className='small green'><FaArrowUp size={10} /> 2.2%</p>
              </div>
            </div>
            <div className="item">
              <p>Germany</p>
              <div className="vis">
                <p className="count">2610</p>
                <p className='small green'><FaArrowUp size={10} /> 1.2%</p>
              </div>
            </div>
            <div className="item">
              <p>Switzerland</p>
              <div className="vis">
                <p className="count">1925</p>
                <p className='small green'><FaArrowUp size={10} /> 1.1%</p>
              </div>
            </div>
            <div className="item">
              <p>Iraq</p>
              <div className="vis">
                <p className="count">1571</p>
                <p className='small green'><FaArrowUp size={10} /> 0.8%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
