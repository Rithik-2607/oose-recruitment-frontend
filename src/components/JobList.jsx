import JobCard from './JobCard'

const jobs = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "Google",
    location: "Bangalore",
    salary: "₹8–12 LPA"
  },
  {
    id: 2,
    title: "React Developer",
    company: "Amazon",
    location: "Hyderabad",
    salary: "₹6–10 LPA"
  }
]

function JobList() {
  return (
    <div className="job-list">
      {jobs.map(job => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  )
}

export default JobList
