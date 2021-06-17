import React, { useEffect, useRef, useState } from 'react';

function TodoForm(props) {
    const [input, setInput] = useState(props.edit ? props.edit.value : '');

    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus()
    })

    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        });

        setInput('');
    };

    const handleChange = e => {
        setInput(e.target.value);
    };

    return (
        <form className='todo-form' onSubmit={handleSubmit}>
            {props.edit ?
                (<>
                    <input
                        type='text'
                        placeholder='atualize atividade:'
                        value={input}
                        name='text'
                        className='todo-input'
                        onChange={handleChange}
                        ref={inputRef}
                    />
                    <button className='todo-button edit'> Atualizar </button>
                </>
                ) : (
                    <>
                        <input
                            type='text'
                            placeholder='insira aqui sua atividade:'
                            value={input}
                            name='text'
                            className='todo-input'
                            onChange={handleChange}
                            ref={inputRef}
                        />
                        <button className='todo-button'> Adicionar </button>
                    </>
                )
            }
        </form>
    );
}
export default TodoForm;