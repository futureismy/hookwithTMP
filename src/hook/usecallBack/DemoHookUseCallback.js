import React, { useState,useCallback } from 'react'
import ChildUseCallBack from './ChildUseCallBack'

export default function DemoHookUseCallback(props) {
    let [like,setLike] = useState(1)
    const renderNotify = () =>{
        return `Bạn đả thả ${like} 💛 !`
    }
    const callBackRenderNotify = useCallback(renderNotify,[])
    /*  tham số 1 : hàm cần truyền xuống
       tham số 2 : điều kiện để props con render lại ( giống useEffect)
     dùng useCallback đối với hàm truyền xuống đẻ k bị re-render component con
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
              <ChildUseCallBack renderNotify={callBackRenderNotify} />
              
        </div>/*memo khi set state Thg cha thì con k bị thay đổi, 
        nhưng khi hàm truyền xuống thg con (props) có giá trị trong hàm thay đổi vì state 
        trong hàm thay đổi từ đó nên thằng con nhận lại 1 hàm mới nên 
         thì thg con sẽ bị render lại*/
    )
}
