'use client'

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
      <AppWelcome headTitle="thj" isShow = {true} />
      <button className="bg-amber-300 text-amber-50 rounded-lg" onClick={handleClick}>clicke here</button>
      <p>{title.toUpperCase()}</p>
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
