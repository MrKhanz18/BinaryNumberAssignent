import React from 'react'
import Menu from './Menu'

const Base = ({
    title = "",
    description = "",
    className = "text-white p-4",
    children
}) => {
    return (
        <div>
        <Menu />
        <div className="container-fluid">
          <div className="text-white text-center">
            <h2 className="display-4">{title}</h2>
            <p className="lead">{description}</p>
          </div>
          <div className={className}>{children}</div>
        </div>
        <footer className="footer mt-auto py-3">
          <div className="container-fluid text-white text-center py-3">
            <h4>If you got any questions, feel free to reach out!</h4>
            <button className="btn btn-primary btn-lg">Contact Us</button>
          </div>
          <div className="container text-center">
            <span className="text-muted">
              An Amazing <span className="text-white">Banking System</span> 
            </span>
          </div>
        </footer>
      </div>
    )
}

export default Base
