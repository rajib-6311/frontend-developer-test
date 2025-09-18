"use client";
import AOS from 'aos';
import 'aos/dist/aos.css';


// import { motion } from "framer-motion";
import { useEffect } from 'react';
import DashboardPage from './dashboard/page';
// import {
//   LineChart,
//   Line,
//   CartesianGrid,
//   XAxis,
//   YAxis,
//   Tooltip,
//   ResponsiveContainer,
// } from "recharts";

// const data = [
//   { name: "Mon", value: 10 },
//   { name: "Tue", value: 30 },
//   { name: "Wed", value: 20 },
//   { name: "Thu", value: 50 },
//   { name: "Fri", value: 40 },
//   { name: "Sat", value: 60 },
//   { name: "Sun", value: 35 },
// ];

export default function DashboardHome() {

  useEffect(()=>{
    const initAOS = async ()=>{
      await import('aos');
      AOS.init({
        duration: 1000,
        easing: "ease",
        once: true,
        anchorPlacement: "top-bottom"
      })
    }
    initAOS();
  },[])
  return (
    <div>
       <DashboardPage/>
    </div>
  );
}
