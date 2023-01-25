import React from 'react';
import './style/TodoTitle.css';
import { useState } from "react";

interface Props {
    title: string,
    setTitle: React.Dispatch<React.SetStateAction<string>>,
}
const TodoTitle = ({ title, setTitle }: Props) => {
    const [switchOnInput, setSwitchOnInput] = useState(true);
    const handleFormSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
        evt.preventDefault();
        handleHiddenValue();
    }
    const handleInputChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(evt.target.value);
    }
    const handleHiddenValue = () => setSwitchOnInput((current) => !current);
    const handleAutoDrage = (evt: React.FocusEvent<HTMLInputElement>) => evt.target.select();

    return (
        <div>
            <h1>
                <span hidden={!switchOnInput} onClick={handleHiddenValue}>{title}</span>
                <form onSubmit={handleFormSubmit} >
                    <input hidden={switchOnInput} value={title} type="text" onFocus={handleAutoDrage} onChange={handleInputChange} onBlur={handleHiddenValue} />
                </form>
            </h1>
        </div>
    );
}

export default TodoTitle;