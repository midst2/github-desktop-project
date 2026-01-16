import React from 'react'

const Calendar = ({ beginAt, days}) => {

    const tableRef = React.useRef()
    let tableArr = []
    let i = 1
    while (i <= days) {
        tableArr.push(i++);

    }

    let j = 0
    while (j < beginAt) {
        tableArr.unshift(" ")
        j++
    }

    console.log("aaa",tableArr)
    return (
        <>
            <table ref={tableRef} >
                {tableArr.map((item, i)=>{
                    if (i % 7 === 1) {
                        return <tr style={{border : "1px solid black"}}></tr>
                    }
                    else if (i%7 === 0){}
                    return <td >{i%7}</td>
                })}
            </table>
        </>
    )
}

export default Calendar