'use client'

import { useState } from "react";

type AppWelcomeProps = {
  headTitle: string;
  isShow: boolean;
}
export default function AppWelcome({headTitle, isShow}: AppWelcomeProps) {
    //let title = 'welcome to cosci'

const [title, setTitle] = useState('Welcome to cosci')
    const currentYear = <p>2025</p>
    const handleClick = () => {
        //title = 'welcome to swu'
        setTitle('Welcome to SWU')
        //alert('Hello Typescripts')
    }

    return (
        <>
        <h1>{headTitle}</h1>
        <p>
            Welcome to Sunny site!
        </p>
        </>
    );
};