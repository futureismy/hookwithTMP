import React,{useEffect,useState} from 'react'
import { Button } from '@material-ui/core'
export default function ChildrenUseEffect() {
    let [number,setNumber] = useState(1);
    console.log('render ChildrenEffect')
    useEffect(() => {
        //write for didupdate
        console.log('didUpdate')
        return () => {
            console.log('willUnmount')
        }
    }, [number])
    return (
        <div>
            <textarea></textarea>
            <br /> <br />
            <Button>Send</Button>
         </div>
    )
}
