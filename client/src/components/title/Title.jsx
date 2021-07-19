import React from 'react'

const Title = ({ titleName }) => {
    return (
        <div className="p-5">
            <span className="text-center d-block p-1 m-auto" style={{ borderBottom: '4px solid red', fontSize: '30px', fontWeight: '600', width: '20%' }}>{titleName}</span>
        </div>
    )
}

export default Title
