import React, { createContext, useState, useContext, useEffect } from 'react'

const SavedJobsContext = createContext()

export function SavedJobsProvider({ children }) {
  const [savedJobs, setSavedJobs] = useState([])

  // Load saved jobs from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('savedJobs')
    if (saved) {
      try {
        setSavedJobs(JSON.parse(saved))
      } catch (e) {
        console.error('Error loading saved jobs:', e)
      }
    }
  }, [])

  // Save to localStorage whenever savedJobs changes
  useEffect(() => {
    localStorage.setItem('savedJobs', JSON.stringify(savedJobs))
  }, [savedJobs])

  const toggleSaveJob = (job) => {
    setSavedJobs(prev => {
      const isSaved = prev.some(j => j.id === job.id)
      if (isSaved) {
        return prev.filter(j => j.id !== job.id)
      } else {
        return [...prev, job]
      }
    })
  }

  const isJobSaved = (jobId) => {
    return savedJobs.some(j => j.id === jobId)
  }

  return (
    <SavedJobsContext.Provider value={{ savedJobs, toggleSaveJob, isJobSaved }}>
      {children}
    </SavedJobsContext.Provider>
  )
}

export function useSavedJobs() {
  const context = useContext(SavedJobsContext)
  if (!context) {
    throw new Error('useSavedJobs must be used within SavedJobsProvider')
  }
  return context
}
