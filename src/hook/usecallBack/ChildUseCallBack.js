import { Button } from '@material-ui/core'
import React, { memo, useState, useEffect } from 'react'

function ChildUseCallBack(props) {
    const [number, setNumber] = useState(1)
    let title = 'phuDepTrai'
    console.log('re-render')
    useEffect(() => {
        console.log('didupDate change')
    }, [number == 5])
    
    return (
        <div>
            <h4>{number}</h4>
           <small> {props.renderNotify()}</small> 
           <br/>
            <textarea></textarea>
            <br />
            <br />
            <Button onClick={() => {
                setNumber(number + 1)
            }}>Send</Button>
        </div>
    )
}
export default memo(ChildUseCallBack) // dung memo giup component k anh huong khi thg cha thay doi. chi thay doi khi nó tự thay đổi