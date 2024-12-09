import React from 'react'
import Hero from '../components/Hero'
import HomeCard from '../components/HomeCard'
import JobListings from '../components/JobListings'
import ViewAllJobs from '../components/ViewAllJobs'

const HomePage = () => {
  return (
    <>
      <Hero title='Technology - Job Finder' subtitle = 'find a job that can fix you in'/>
      < HomeCard />
      < JobListings isHome={true} />
      < ViewAllJobs />
    </>
  )
}

export default HomePage