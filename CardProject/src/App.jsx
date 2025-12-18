import React from 'react'

import Card from './components/Card'
const App = () => {

  const jobs = [
  {
    brandLogo: "https://img.logo.dev/google.com?token=live_6a1a28fd-6420-4492-aeb0-b297461d9de2&size=100&retina=true&format=png&theme=dark",
    name: "Google",
    datePosted: "5 days ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$82/hour",
    location: "Mountain View, USA"
  },
  {
    brandLogo: "https://img.logo.dev/facebook.com?token=live_6a1a28fd-6420-4492-aeb0-b297461d9de2&size=100&retina=true&format=png&theme=dark",
    name: "Meta",
    datePosted: "2 weeks ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$65/hour",
    location: "Menlo Park, USA"
  },
  {
    brandLogo: "https://img.logo.dev/salesforce.com?token=live_6a1a28fd-6420-4492-aeb0-b297461d9de2&size=100&retina=true&format=png&theme=dark",
    name: "Salesforce",
    datePosted: "10 weeks ago",
    post: "UI/UX Designer",
    tag1: "Part Time",
    tag2: "Senior Level",
    pay: "$70/hour",
    location: "Cupertino, USA"
  },
  {
    brandLogo: "https://img.logo.dev/spotify.com?token=live_6a1a28fd-6420-4492-aeb0-b297461d9de2&size=100&retina=true&format=png&theme=dark",
    name: "Spotify",
    datePosted: "3 days ago",
    post: "Cloud Architect",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$90/hour",
    location: "Paris, FRANCE"
  },
  {
    brandLogo: "https://img.logo.dev/microsoft.com?token=live_6a1a28fd-6420-4492-aeb0-b297461d9de2&size=100&retina=true&format=png&theme=dark",
    name: "Microsoft",
    datePosted: "1 week ago",
    post: "Backend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$55/hour",
    location: "Redmond, USA"
  },
  {
    brandLogo: "https://img.logo.dev/tesla.com?token=live_6a1a28fd-6420-4492-aeb0-b297461d9de2&size=100&retina=true&format=png&theme=dark",
    name: "Tesla",
    datePosted: "4 days ago",
    post: "Data Analyst",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$48/hour",
    location: "Austin, USA"
  },
  {
    brandLogo: "https://img.logo.dev/netflix.com?token=live_6a1a28fd-6420-4492-aeb0-b297461d9de2&size=100&retina=true&format=png&theme=dark",
    name: "Netflix",
    datePosted: "6 weeks ago",
    post: "Machine Learning Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$88/hour",
    location: "Los Gatos, USA"
  },
  {
    brandLogo: "https://img.logo.dev/intel.com?token=live_6a1a28fd-6420-4492-aeb0-b297461d9de2&size=100&retina=true&format=png&theme=dark",
    name: "Intel",
    datePosted: "8 days ago",
    post: "Embedded Systems Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$77/hour",
    location: "Santa Clara, USA"
  },
  {
    brandLogo: "https://img.logo.dev/nvidia.com?token=live_6a1a28fd-6420-4492-aeb0-b297461d9de2&size=100&retina=true&format=png&theme=dark",
    name: "NVIDIA",
    datePosted: "2 days ago",
    post: "AI Researcher",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$95/hour",
    location: "Santa Clara, USA"
  },
  {
    brandLogo: "https://img.logo.dev/starbucks.com?token=live_6a1a28fd-6420-4492-aeb0-b297461d9de2&size=100&retina=true&format=png&theme=dark",
    name: "Starbucks",
    datePosted: "5 weeks ago",
    post: "Product Manager",
    tag1: "Part Time",
    tag2: "Senior Level",
    pay: "$60/hour",
    location: "San Jose, USA"
  }
];

  console.log(jobs);

  return (
    <div className='parent'>
      {jobs.map(function(elem , idx){
        return <div key = {idx}>
          <Card company={elem.name} post={elem.post} datePosted={elem.datePosted} tag1={elem.tag1} tag2={elem.tag2} pay={elem.pay} brandLogo={elem.brandLogo} location={elem.location}/>
      </div>
      })}
    </div>
  )
}

export default App