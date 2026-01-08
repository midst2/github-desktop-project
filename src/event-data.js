import React from 'react'

const EventData2 = () => {
    const onClickStartStop = (ev) => {
        // let t = ev.target.innerText
        // let s = (t === 'Start') ? 'Stop' : 'Start'
        ev.target.innerText = (ev.target.innerText === 'Start') ? 'Stop' : 'Start'
    }
    const onClickAdd = (ev) => {
        let t = ev.target.innerText
        let r = eval(t)
        alert(`${t} = ${r}`)
    }
  return (
    <div style={{textAlign:"center", marginTop:'20'}}>
        <button onClick={(ev)=> onClickStartStop(ev)}>Start</button><br/><br/>
        <button onClick={(ev)=> onClickAdd(ev)}>10+20</button><br/><br/>
        <button onClick={(ev)=> onClickAdd(ev)}>30 *40</button>
    </div>
  )
}

export default EventData2