'use client'

import { Button } from "@/components/ui/button";
import AppWelcome from "./component/App Welcome";



export default function Home() {
  const title = 'Welcome sunny';
  const currentYear = <p>2025</p>
  const isShow = true;
  const handleClick = () => {
    alert('hi sunny');
  } 

  return (
    <div>
      
      {/* <h1>Sunny Site</h1> */}
      <AppWelcome headTitle="thj" />
      <Button onClick={handleClick}>clicke me</Button>
      <p>{title.toUpperCase()}</p>
      <p>{process.env.NEXT_PUBLIC_APP_NAME}</p>
      {currentYear}
      {
        isShow && <p>Date: 10/02/2000</p> 
      }
      {
        isShow ? <p>Hello next.js</p> : <p>Hello Javascript</p>
      }
    </div>
  );
}
