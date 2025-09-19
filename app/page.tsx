"use client";
import AOS from 'aos';
import 'aos/dist/aos.css';

import { useEffect } from 'react';
import DashboardPage from './dashboard/page';

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
