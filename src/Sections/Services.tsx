import React from 'react'
import { services } from '../constants'
import ServiceCard from '../Components/ServiceCard'

const Services = () => {
  return (
    <section className="max-container flex flex-wrap gap-10  justify-center">
      {services.map((service)=>(
        <ServiceCard key={service.label} imgURL={service.imgURL} label={service.label} subtext={service.subtext}  />
      ))}
      
    </section>
  )
}

export default Services
