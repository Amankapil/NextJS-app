// import React from "react";
// import {
//   CardHeader,
//   CardContent,
//   CardFooter,
//   Card,
// } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
/**
 * v0 by Vercel.
//  * @see https://v0.dev/t/2RKma4mXDYG
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

import Choose from '@/components/trainingpage/Choose'
import Chose from '@/components/trainingpage/Chose'
import Meeting from '@/components/trainingpage/Meeting'
import Trainig from '@/components/trainingpage/Trainig'
import TrainingHero from '@/components/trainingpage/TrainingHero'

// export default function Component() {
//   return (

const page = () => {
  return (
    <>
      <div className='max-w-8xl mx-auto'>
        <TrainingHero />
        <Choose />
        <Trainig />
        {/* <Meeting /> */}
      </div>
    </>
  )
}

export default page
