import React from 'react'
import { Stepper } from '../components/Stepper'
import { StepperControl } from '../components/StepperControl'
import { Place } from '../components/steps/Place';
import { Details } from '../components/steps/Details';
import { Contract } from '../components/steps/Contract';
import { Info } from '../components/steps/Info';
import {Form} from '../components/steps/Form';
import { useState } from 'react';
import { StepperContext } from '../contexts/StepperContext';
import Nav from '../components/Nav';


export default function cadastrar() {
  const [currentStep, setCurrentStep] = useState(1);
  const [userData, setUserData] = useState('');
  const [finalData, setFinalData] = useState([]);
  const steps = [
    "Account information",
    "Personal Details",
    "ok",
    "lo",
    "Complete"
  ];

  const displayStep = (step) => {
    switch(step){
      case 1:
        return <Place />
      case 2:
        return <Info />
      case 3:
        return <Contract /> 
      case 4:
        return <Form /> 
      case 5:
        return <Details />
      default:
    }
  }

  const handleClick = (direction) => {
    //s
    let newStep = currentStep;
    direction === "next" ? newStep++ : newStep--;
    //
    newStep > 0 && newStep <= steps.length && setCurrentStep(newStep)
  }

  return (
    <>
    <Nav test={"test"} />
       {/* <div className=' md:w-1/2 mx-auto shadow-xl rounded-2xl pb-2 bg-black'> */}
      <div className=' mx-auto pb-2 '>
        <div className="container horizontal mt-5 ">
          {/* <Stepper 
            steps= {steps} 
            currentStep={currentStep}
          /> */}

          {/*  */}
          <div className='my-10 p-10'>
            <StepperContext.Provider value={{
              userData,
              setUserData,
              finalData,
              setFinalData
            }} >
              {displayStep(currentStep)}
            </StepperContext.Provider>
          </div>
        </div>
        <div className='fixed  bottom-0 w-full shadow-xl bg-white'>
        
        <Stepper 
            steps= {steps} 
            currentStep={currentStep}
          />
        {currentStep !== steps.length &&
        <StepperControl 
          handleClick={handleClick} 
          currentStep={currentStep} 
          steps={steps} />
        }
        </div>
      </div>
    </>
  )
}
