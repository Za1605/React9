import React from 'react';

const App = () => {
    const save = (e) => {
      e.preventDefault()

    }


    return (
        <div>
          <form>
              <input type={'text'} placeholder={'name'} name={'name'}/>
              <input type={'text'} placeholder={'age'} name={'age'}/>
              <button> save</button>
          </form>
        </div>
    );
};

export default App;