import { Button } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import ChildrenUseEffect from './ChildrenUseEffect';

export default function DemoHookUsestate() {
    let [state,setState] = useState(1);
    const [like,setLike]= useState(1)
    const handleChange = () =>{  
     const newState = state +1 
        setState(
            newState
        )
    }
    //run after renderlayout
    // useEffect(()=>{
    //     console.log('didmount')
    //     console.log('didupDate')
    // })
    useEffect(()=>{
        console.log('didmount') //using to call api
    },[])
    useEffect(()=>{
        console.log('didupdate khi tham so thu 2 thay doi')// run => value param2 change  
        return () =>{
            console.log('willunmount')
        }
    },[state == 5])
    console.log('render')
    return (
        <div>
            <Button onClick  ={()=>{
                setLike(
                    like+1
                )
                console.log(like)
            }}>Like</Button>
                 <div className="card text-left">
                <img className="card-img-top" style={{width:'300px'}} src="https://scontent.fdad3-3.fna.fbcdn.net/v/t1.0-9/131379682_391575711928383_2866243729105996208_o.jpg?_nc_cat=109&ccb=3&_nc_sid=174925&_nc_ohc=WwNW8MwgfIoAX9oWqro&_nc_ht=scontent.fdad3-3.fna&oh=e9f054471896ce3f216546c4426d5b9e&oe=605F79F3" alt />
                    <h4 className="card-title"></h4>
                    <p className="card-text text-danger" >{state}💗</p>
                </div>
            <Button onClick={handleChange}>Thả tim +</Button>
           {like%3 ==0 ?  <ChildrenUseEffect /> : ''}
        </div>
    )
}
