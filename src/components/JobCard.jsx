function JobCard({ job }) {
    return (
      <div className="job-card">
        <h3>{job.title}</h3>
        <p><strong>{job.company}</strong></p>
        <p>{job.location}</p>
        <p className="salary">{job.salary}</p>
        <button>Apply Now</button>
      </div>
    )
  }
  
  export default JobCard
  