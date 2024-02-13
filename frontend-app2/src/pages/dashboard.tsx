import React from 'react'
import { Navbar } from '../components/navbar'
import Category from '../components/category'
import { DashboardContainer } from '../styles/dashboard'
export const Dashboard=()=>{
    return (
        <>
        <DashboardContainer>
        <Navbar/>
                <Category/>
            
        </DashboardContainer>
               

        </>
    )

}
