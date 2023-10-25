import React, {useRef} from 'react';

const App = () => {
    const name = useRef();
    const age = useRef();
    const save = (e) => {
      e.preventDefault()
        //console.log(e.form.name.value);
      //console.log(e.form.age.value);
        console.log(name.current.value);
        console.log(age.current.value);

    }


    return (
        <div>
          <form onSubmit={save}>
              <input type={'text'} placeholder={'name'} ref={'name'}/>
              <input type={'text'} placeholder={'age'} ref={'age'}/>
              <button>save</button>
          </form>
        </div>
    );
};

export default App;