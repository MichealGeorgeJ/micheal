import { createFileRoute } from '@tanstack/react-router'
import Intro from '@/components/pages/IntroPage'
import { useState } from 'react'
import LandingPage1 from '@/components/pages/LandingPage';
import About from '@/components/pages/About';


export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {

  const [showAnimation, setShowAnimation] = useState(true);
   const handleAnimationComplete = () => {
    setShowAnimation(false);
    // Your main content starts here
    console.log('Animation completed! Show your main content now.');
  };
  return (
    <div>
      { showAnimation &&
         <Intro onComplete={handleAnimationComplete} />
      }
      {!showAnimation && <LandingPage1 />}
      {/* <About /> */}
     
    </div>
  )
}