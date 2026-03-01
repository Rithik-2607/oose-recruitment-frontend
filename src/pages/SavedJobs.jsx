import { useSavedJobs } from '../context/SavedJobsContext'

function SavedJobs() {
  const { savedJobs, toggleSaveJob } = useSavedJobs()

  return (
    <div className="page-container" style={{ padding: '40px 20px' }}>
      <h1 style={{ marginBottom: 30, fontSize: 28, fontWeight: 600 }}>Saved Jobs</h1>
      {savedJobs.length === 0 ? (
        <div style={{ background: '#fff', borderRadius: 12, boxShadow: '0 2px 8px #eee', padding: 40, textAlign: 'center' }}>
          <p style={{ fontSize: 18, color: '#666', marginBottom: 10 }}>You haven't saved any jobs yet.</p>
          <p style={{ fontSize: 16, color: '#999' }}>Browse jobs and click the bookmark icon to save them for later!</p>
        </div>
      ) : (
        <div style={{ display: 'grid', gap: 20, maxWidth: 800 }}>
          {savedJobs.map(job => (
            <div
              key={job.id}
              style={{
                background: '#fff',
                borderRadius: 12,
                boxShadow: '0 2px 8px #eee',
                padding: 24,
                border: '1px solid #e0e0e0'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: 16 }}>
                <div>
                  <div style={{ fontWeight: 600, fontSize: 18, marginBottom: 6 }}>{job.title}</div>
                  <div style={{ color: '#2557a7', fontWeight: 500, marginBottom: 4 }}>{job.company}</div>
                  <div style={{ color: '#666', fontSize: 14, marginBottom: 8 }}>{job.location}</div>
                  <span style={{ background: '#eaf1fb', color: '#2557a7', borderRadius: 4, padding: '4px 10px', fontSize: 13, fontWeight: 500 }}>{job.type}</span>
                </div>
                <button
                  onClick={() => toggleSaveJob(job)}
                  style={{
                    background: 'none',
                    border: 'none',
                    fontSize: 24,
                    cursor: 'pointer',
                    padding: 0
                  }}
                  title="Remove from saved"
                >
                  🔖
                </button>
              </div>
              <div style={{ color: '#555', fontSize: 14, lineHeight: 1.6, marginBottom: 16 }}>
                {job.description}
              </div>
              <div style={{ display: 'flex', gap: 10 }}>
                <button style={{ background: '#2557a7', color: '#fff', border: 'none', borderRadius: 6, padding: '8px 22px', fontWeight: 500, fontSize: 14, cursor: 'pointer' }}>Apply now</button>
                <button style={{ background: '#f0f0f0', color: '#333', border: 'none', borderRadius: 6, padding: '8px 22px', fontWeight: 500, fontSize: 14, cursor: 'pointer' }}>View details</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default SavedJobs
