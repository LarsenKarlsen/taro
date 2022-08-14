import React from "react";

import './Modal.css'

const Modal = props => {
    console.log(`modal visible = ${props.visible}`)
    
    if (!props.visible) {
        return null
    }
    return (
    <div className="m" onClick={props.closeEvent}>
        <div className="m-content" onClick={e=>e.stopPropagation()}>
            <div className="m-header">
                <h4 className="m-title">Выбери карту</h4>
            </div>
            <div className="m-body">
                <p>Modal content</p>
            </div>
            <div className="m-footer">
                <button className="btn btn-danger" onClick={props.closeEvent}>Close</button>
            </div>
        </div>
    </div>
    )
}

export default Modal