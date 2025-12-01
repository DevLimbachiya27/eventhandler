import React, { useRef, useState } from 'react'

function StudentForm({ onAdd }) {
  const inputRef = useRef(null)
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const value = inputRef.current.value

    if (!value.trim()) {
      setError('Please enter a student name')
      inputRef.current.focus()
      return
    }

    const ok = onAdd(value)
    if (ok) {
      inputRef.current.value = ''
      setError('')
      inputRef.current.focus()
    }
  }

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Add Student</h5>

        <form onSubmit={handleSubmit}>
          <input
            ref={inputRef}
            className="form-control mb-2"
            placeholder="Enter student name"
            onChange={() => error && setError('')}
          />

          {error && <div className="text-danger mb-2">{error}</div>}

          <button className="btn btn-primary me-2" type="submit">Add</button>

          <button
            type="button"
            className="btn btn-outline-secondary"
            onClick={() => {
              inputRef.current.value = ''
              inputRef.current.focus()
              setError('')
            }}
          >
            Reset
          </button>
        </form>
      </div>
    </div>
  )
}

export default StudentForm;