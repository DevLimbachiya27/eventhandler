import React, { Fragment } from 'react'

function StudentCard({ student, onDelete, onToggle, onMark }) {
  const { id, name, detailsVisible, status } = student

  return (
    <>
      <div className="card mb-2">
        <div className="card-body d-flex justify-content-between align-items-start">

          <div>
            <h6>{name}</h6>
            <div className="small text-muted">
              Status: <strong>{status}</strong>
            </div>

            {detailsVisible && (
              <div className="mt-2 small">
                Extra details about {name}
              </div>
            )}
          </div>

          <div className="btn-group-vertical">
            <button
              className="btn btn-sm btn-outline-secondary"
              onClick={() => onToggle(id)}
            >
              {detailsVisible ? 'Hide' : 'Details'}
            </button>

            <button
              className={`btn btn-sm ${status === 'present' ? 'btn-success' : 'btn-outline-success'}`}
              onClick={() => onMark(id, 'present')}
            >
              Present
            </button>

            <button
              className={`btn btn-sm ${status === 'absent' ? 'btn-danger' : 'btn-outline-danger'}`}
              onClick={() => onMark(id, 'absent')}
            >
              Absent
            </button>

            <button
              className="btn btn-sm btn-outline-danger"
              onClick={() => onDelete(id)}
            >
              Delete
            </button>
          </div>

        </div>
      </div>
    </>
  )
}

export default StudentCard;