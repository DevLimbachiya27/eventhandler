import { useState } from 'react'
import './App.css'
import StudentForm from './components/StudentForm'
import StudentList from './components/StudentList'
function App() {
  const [students, setStudents] = useState([])

  const addStudent = (name) => {
    const trimmed = name.trim()
    if (!trimmed) return false
    setStudents(prev => [
      ...prev,
      { id: Date.now(), name: trimmed, detailsVisible: false, status: 'absent' }
    ])
    return true
  }

  const deleteStudent = (id) =>
    setStudents(prev => prev.filter(s => s.id !== id))

  const toggleDetails = (id) =>
    setStudents(prev =>
      prev.map(s =>
        s.id === id ? { ...s, detailsVisible: !s.detailsVisible } : s
      )
    )

  const markStatus = (id, status) =>
    setStudents(prev =>
      prev.map(s => (s.id === id ? { ...s, status } : s))
    )

  const total = students.length
  const presentCount = students.filter(s => s.status === 'present').length
  const absentCount = total - presentCount

  return (
    <div className="container py-4">
      <h1 className="mb-3">Student Activity Manager</h1>

      <div className="row">
        <div className="col-md-5">
          <StudentForm onAdd={addStudent} />

          <div className="card mt-3">
            <div className="card-body">
              <h5 className="card-title">Dashboard Summary</h5>
              <p>Total Students: <strong>{total}</strong></p>
              <p>Present: <strong>{presentCount}</strong></p>
              <p>Absent: <strong>{absentCount}</strong></p>
            </div>
          </div>
        </div>

        <div className="col-md-7">
          <StudentList
            students={students}
            onDelete={deleteStudent}
            onToggle={toggleDetails}
            onMark={markStatus}
          />
        </div>
      </div>
    </div>
  )
}

export default App
