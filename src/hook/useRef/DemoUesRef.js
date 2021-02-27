import React,{useRef,useState} from 'react'
import { Button } from '@material-ui/core'
export default function DemoUesRef(props) {
    const inputUserName = useRef(null)
    const inputPassWord = useRef(null)
    let userName = useRef('')// dung de luu lai gia tri khi re-render, co thẻ dùng vs hàm, biến,mảng,obj
    let[user,setUser] = useState({
        userName:''
    })
    
    let handleSubmit = () =>{
        console.log('userName: ',userName.current)
        console.log('useLogin: ',user.userName) 
        userName.current ='Phu Dep Trai' // gan gia tri 
        // console.log(inputUserName.current.name +': '+ inputUserName.current.value)
        // console.log(inputPassWord.current.name+': '+inputPassWord.current.value)
        setUser({userName:userName.current})// setState lai user
    }
    return (
        <div className='container'>
            <h3>login</h3>
            <div className='form-group'>
                <p>Username</p>
                <input ref={inputUserName} className='form-control' name="userName"></input>
            </div>
            <div className='form-group'>
                <p>PassWord</p>
                <input ref={inputPassWord} className='form-control' name="passWord"></input>
            </div>
            <div className='form-group'>
                <Button onClick={handleSubmit} type='button'>Login</Button>
            </div>
        </div>
    )
}
