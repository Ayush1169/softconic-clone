import React from 'react'
import Hero from '../evd-academy/Hero'
import Vision from "../evd-academy/Vision"
import Objectives from "../evd-academy/Objectives"
import Customdesign from "../evd-academy/Customdesign"
import Features from "../evd-academy/Features"
import Technologystack from "../evd-academy/Technologystack"
import Benefitforstudent from "../evd-academy/Benefitforstudent"
import Benefitforteacher from "../evd-academy/Benefitforteacher"
import Benefitforadministration from "../evd-academy/Benefitforadministration"
import Applicability from "../evd-academy/Applicability"
import Commonfeature from "../evd-academy/Commonfeature"
import Casestudies from "../evd-academy/Casestudies"
import Conclusion from "../evd-academy/Conclusion"

const page = () => {
  return (
  <>
    <Hero/>
     <Vision/>
     <Objectives/>
     <Customdesign/>
     <Features/>
     <Technologystack/>
     <Benefitforstudent/>
     <Benefitforteacher/>
     <Benefitforadministration/>
    <Applicability/>
    {/* <Casestudies/> */}
    <Commonfeature/>
<Conclusion/>




  </>
  )
}

export default page