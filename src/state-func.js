import React, { useState } from 'react'

const StateFunc = () => {
    let [text, setText] = useState('Hello World')
    let [size, setSize] = useState(16)

    const onClickSetText = () => {
        let t = prompt("กำหนดข้อความ")
        if (t) {
            setText(t)
        }
    }

    const onClickZoomIn = () => {
        let newSize = size + 1
        setSize(newSize)
    }

    let msgBoxStyle = {
        display: 'inline-block',
        width: 350,
        fontSize: size,
        backgroundColor: '#ccc',
        padding: '5',
        textAlign: 'left'
    }
    return (
        <>
        <div style={{textAlign : "center", marginTop : 20}}>
            <div style={msgBoxStyle}>{text}</div><br/><br/>
            <button onClick={onClickSetText}>ข้อความ</button>
            <button onClick={onClickZoomIn}>เพิ่มขนาด</button>
            <button onClick={() => setSize(size - 1)}>ลดขนาด</button>
        </div>
        </>
    )
}

export default StateFunc