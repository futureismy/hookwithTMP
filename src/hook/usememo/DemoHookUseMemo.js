import React, { useMemo, useState } from 'react'
import ChildUseMemo from './ChildUseMemo';

export default function DemoHookUseMemo(props) {
    let[like,setLike] = useState(1)
    let cart = [
        {id:1, name: "Iphone 7 Plus",price : 1000},
        {id:2, name: "Iphone 8s Plus",price : 2000},
        {id:3, name: "Iphone 11 Pro MAX",price : 1500},
        {id:4, name: "Iphone XS MAX",price : 2100},
    ]
    const cartMemo = useMemo(()=>cart,[]);
    //memo sẽ bị thay đổi khi setLike => render component => tạo ra cart mới => render lai props con
    /* tham số thứ 1 : giá trị trả về
        tham số 2: điều kiện đẻ render lại child component
        chỉ render lại khi tham số thứ 2 thay đổi
        sử dụng useMemo đối vs object , giá trị
    */
    return (
        <div className='m-5'>
              like: {like} 💗
            <br />
            <span style={{cursor:'pointer',color:'red',fontSize:'35'}} 
            onClick={()=>{
                setLike(like+1)
            }}
            >💗</span>

              <br />
              <br />
              <ChildUseMemo cart = {cartMemo}/>
        </div>
    )
}
