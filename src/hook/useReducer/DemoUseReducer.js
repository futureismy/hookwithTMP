import { Button } from '@material-ui/core'
import React, { useReducer } from 'react'
const initialCart = [
   
]
const cartReducer = (state, action) => {
    switch(action.type){
        case 'addToCart':{
            let cartUpdate = [...state]
            let index = cartUpdate.findIndex(itemCart => itemCart.id === action.item.id)
            if(index !== -1){
                cartUpdate[index].quantity+=1;
            }else{
                const itemCart = {...action.item,quantity:1}
                cartUpdate.push(itemCart)
            }
            return cartUpdate
        }
        case 'deleteItem':{
            let cartUpdate = [...state]
             cartUpdate.splice(action.index,1)
       
            return cartUpdate
        }
    }
    return [...state]
}
let arrProduct = [
    { id: 1, name: 'iphone 6', price: 1000 },
    { id: 2, name: 'iphone 7', price: 123000 },
    { id: 3, name: 'iphone 8', price: 44000 },
    
]
export default function DemoUseReducer() {
    /* useReducer giống hook useState nâng cao
         cart = statem dispatch = setState,
         nhận vào 1 obj xử lý => giá trị mới
    */
    let [cart, dispatch] = useReducer(cartReducer, initialCart)
    /*
        dispatch action => cartReducer xử lý => initialCart(state) => cart biding data
    */
    const addToCart = (item) =>{
        console.log(item)
        const action = {
            type:'addToCart',
            item
        }
        dispatch(action)
    }
    const deleteItem = (index) =>{
        console.log('id', index)
        const action = {
            type:'deleteItem',
            index
        }
        dispatch(action)
    }
    return (
        <div className='container'>
            <div className='row'>
                {arrProduct.map((item, index) => {
                    return <div className='col-4' key={index}>
                             <div className="card text-left">
                                <img className="card-img-top" style={{width:'300px'}} src="https://zicxaphotos.com/wp-content/uploads/2019/07/Girl-xinh-cute.jpg" alt={index} />
                                <div className="card-body">
                                    <h4 className="card-title">{item.name}</h4>
                                    <p className="card-text">{item.price}</p>
                                </div>
                          </div>
                          <Button variant='contained' color='primary' onClick={()=>{addToCart(item)}}>Thêm</Button>
                          
                    </div>
                })}
            </div>
            <h3>Giỏ hàng</h3>
            <table className='table'>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>price</th>
                        <th>quantity</th>
                        <th>total</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map((product,index)=>{
                        return <tr key={index}>
                            <td>{product.id}</td>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                            <td>{product.quantity}</td>
                            <td>{product.quantity*product.price}</td>
                            <button className='btn btn-danger' onClick={()=>{deleteItem(index)}}>X</button>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    )
}
