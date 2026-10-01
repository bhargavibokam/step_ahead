import React from 'react'

type Stat = {
  id: string
  label: string
  value: string
  delta?: string
}

const stats: Stat[] = [
  { id: '1', label: 'Users', value: '1,234', delta: '+3.2%' },
  { id: '2', label: 'Revenue', value: '$12,345', delta: '+1.1%' },
  { id: '3', label: 'New Signups', value: '98', delta: '-0.5%' },
  { id: '4', label: 'Active', value: '512', delta: '+4.0%' },
]

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <header className="mb-6">
          <h1 className="text-3xl font-semibold text-gray-900">Dashboard</h1>
          <p className="text-sm text-gray-600">Overview of your application metrics</p>
        </header>

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {stats.map((s) => (
            <div key={s.id} className="bg-white p-4 rounded-lg shadow-sm border">
              <div className="text-xs text-gray-500">{s.label}</div>
              <div className="mt-2 flex items-baseline justify-between">
                <div className="text-2xl font-bold text-gray-900">{s.value}</div>
                {s.delta && (
                  <div className="text-sm text-green-600 font-medium">{s.delta}</div>
                )}
              </div>
            </div>
          ))}
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-white p-4 rounded-lg shadow-sm border">
            <h2 className="text-lg font-medium text-gray-800">Traffic (last 30 days)</h2>
            <div className="mt-4 h-64 flex items-center justify-center text-gray-400 border-2 border-dashed rounded">
              {/* Placeholder for chart - replace with a chart library component */}
              Chart placeholder
            </div>
            <p className="mt-2 text-sm text-gray-500">Use a chart library like Chart.js, Recharts or ApexCharts here.</p>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-sm border">
            <h2 className="text-lg font-medium text-gray-800">Recent Activity</h2>
            <div className="mt-4">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="text-gray-500">
                    <th className="pb-2">User</th>
                    <th className="pb-2">Action</th>
                    <th className="pb-2">When</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  <tr className="border-t">
                    <td className="py-2">Alice</td>
                    <td className="py-2">Signed up</td>
                    <td className="py-2 text-sm text-gray-500">2h ago</td>
                  </tr>
                  <tr className="border-t">
                    <td className="py-2">Bob</td>
                    <td className="py-2">Upgraded plan</td>
                    <td className="py-2 text-sm text-gray-500">5h ago</td>
                  </tr>
                  <tr className="border-t">
                    <td className="py-2">Carol</td>
                    <td className="py-2">Added a project</td>
                    <td className="py-2 text-sm text-gray-500">1d ago</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
