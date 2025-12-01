import React from 'react'
import StudentCard from './StudentCard'

function StudentList({ students, onDelete, onToggle, onMark }) {
  if (!students.length) {
    return (
      <div className="alert alert-info">
        No Students Found
      </div>
    )
  }

  return (
    <div>
      {students.map(s => (
        <StudentCard
          key={s.id}
          student={s}
          onDelete={onDelete}
          onToggle={onToggle}
          onMark={onMark}
        />
      ))}
    </div>
  )
}

export default StudentList;