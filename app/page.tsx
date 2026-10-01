import React from 'react'
import DashboardPage from './dashboard/page'

export default function Home() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Welcome to StepAhead</h1>
      <DashboardPage />
    </div>
  )
}