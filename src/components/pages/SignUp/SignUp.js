import React from 'react'
import HeroSection from '../../HeroSection'
import Pricing from '../../Pricing'
import {homeObjOne,homeObjTwo,homeObjThree,homeObjFour} from './Data'


function SignUp() {
    return (
        <>
            <HeroSection {...homeObjThree} />
            <Pricing />
        </>
    )
}

export default SignUp;
