import React from 'react';

const Todo = ({todo}) => {
    const {id, title} = todo;
    return (
        <div>
            <div>id:{id}</div>
            <br/>
            <div>title:{title}</div>
        </div>
    );
};

export default Todo;