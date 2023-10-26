import React, {useRef, useState} from 'react';

const App = () => {
    const [user, setUser] = useState();
    const name = useRef();
    const age = useRef();
    const save = (e) => {
      e.preventDefault()
        e.target.reset();
        //console.log(e.form.name.value);
      //console.log(e.form.age.value);
        console.log(name.current.value);
        console.log(age.current.value);

    }

    const hendler = (e) => {
      e.preventDefault()
        setUser(yuliiaT => ({...yuliiaT, [e.target.name] : e.target.value}))
    }


    return (
        <div>
          <form onSubmit={save}>
              <input type={'text'} placeholder={'name'} name={'name'}/>
              <input type={'text'} placeholder={'age'} name={'age'}/>
              <button>save</button>
          </form>
        </div>
    );
};

export default App;