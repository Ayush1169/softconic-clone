import React from 'react'
import Hero from '../components/evd-academy/Hero'
import Vision from '../components/evd-academy/Vision'
import Objectives from '../components/evd-academy/Objectives'
import Customdesign from '../components/evd-academy/Customdesign'
import Features from '../components/evd-academy/Features'
import Technologystack from '../components/evd-academy/Technologystack'
import Benefitforstudent from '../components/evd-academy/Benefitforstudent'
import Benefitforteacher from '../components/evd-academy/Benefitforteacher'
import Benefitforadministration from '../components/evd-academy/Benefitforadministration'
import Applicability from '../components/evd-academy/Applicability'
import Commonfeature from '../components/evd-academy/Commonfeature'
import Conclusion from '../components/evd-academy/Conclusion'
import Layout from '../components/layout/Layout'


const page = () => {
    return (
        <>
        
            <Layout>
                <div className='academy'>
                <Hero />
                <Vision />
                <Objectives />
                <Customdesign />
                <Features />
                <Technologystack />
                <Benefitforstudent />
                <Benefitforteacher />
                <Benefitforadministration />
                <Applicability />
                {/* <Casestudies/> */}
                <Commonfeature />
                <Conclusion />
                </div>
            </Layout>
        </>
    )
}

export default page