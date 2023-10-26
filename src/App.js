import React, {useRef, useState} from 'react';

const App = () => {
    const [user, setUser] = useState({});
    const [count, setCount] = useState(0);
    const name = useRef();
    const age = useRef();
    const save = (e) => {
      //e.preventDefault()
        //e.target.reset();
        //console.log(e.form.name.value);
      //console.log(e.form.age.value);
        //console.log(name.current.value);
        //console.log(age.current.value);

    }
     console.log(user);
    const hendler = (e) => {
      e.preventDefault()
        setUser(prevState => ({...prevState, [e.target.name] : e.target.value}))
    }


    return (
        <div>
          <form onSubmit={save}>
              <input type={'text'} placeholder={'name'} name={'name'} onChange={hendler}/>
              <input type={'text'} placeholder={'age'} name={'age'} onChange={hendler}/>
              <button>save</button>
          </form>
        </div>
    );
};

export default App;