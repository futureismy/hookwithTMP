import './App.css';

import DemoUseEffect from './hook/useEffect/DemoHookUseEffect';
import DemoHookUsestate from './hook/useEffect/DemoHookUsestate';
import DemoHookUseCallback from './hook/usecallBack/DemoHookUseCallback';
import DemoHookUseMemo from './hook/usememo/DemoHookUseMemo';
import DemoUesRef from './hook/useRef/DemoUesRef';
import DemoUseReducer from './hook/useReducer/DemoUseReducer';
function App() {
  return (
    <div className="App">
      {/* <div>
       <h1 className='textTMP'>Trần Minh Phú  <span style={{color:'black'}}>Todo's App</span>   🕒</h1>  
        <form >
          <TextField id="standard-basic" label="Write a todo"
            onChange={(e) => setTodoInPut(e.target.value)}
            style={{ maxWidth: '500px', width: '90vw', marginTop: '24px' }}
            value={todoInput}
          />
          <Button variant="contained" type='submit' onClick={addTodo} style={{ display: 'none' }}>Add Todo</Button>
        </form>
        {todos.map((todo, index) => {
          return <TodolistItem key={index}
            todo={todo.todo} inprogress={todo.inprogress} id={todo.id} />
        })}
      </div>
         */}
         {/* <DemoUseEffect />
         <DemoHookUsestate /> */}
         {/* <DemoHookUseCallback /> */}
         {/* <DemoHookUseMemo /> */}
         {/* <DemoUesRef /> */}
         <DemoUseReducer />
    </div>
  );
}

export default App;
