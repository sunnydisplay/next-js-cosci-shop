'use client'

import { Button } from "@/components/ui/button";

type AppWelcomeProps = {
  headTitle: string;
  //isShow: boolean;
}
export default function AppWelcome({headTitle}: AppWelcomeProps) {
    //let title = 'welcome to cosci'

// const [title, setTitle] = useState('Welcome to cosci')
//     const currentYear = <p>2025</p>
//     const handleClick = () => {
//         //title = 'welcome to swu'
//         setTitle('Welcome to SWU')
//         //alert('Hello Typescripts')
//     }

    return (
        <>
        <h1>{headTitle}</h1>
        <Button> Click </Button>
        <p>
            Welcome to Sunny site!
        </p>
        </>
    );
};