import { useState } from 'react';
import uuid from 'react-uuid';
import { Todo } from '../type/types';

interface Props {
    todoList: Todo[],
    setTodoList: React.Dispatch<React.SetStateAction<Todo[]>>
}
const TodoInsert = ({ todoList, setTodoList }: Props) => {
    const [value, setValue] = useState("");
    const [switchOnInput, setSwitchOnInput] = useState(true);
    const handleInputChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
        setValue(evt.target.value);
    }
    const handleFormSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
        evt.preventDefault();
        setTodoList((current) => [...current, { todoId: uuid(), todoName: value, todoClear: false }])
        setValue("");
    }
    const handleHiddenValue = () => setSwitchOnInput((current) => !current);

    return (
        <div>
            <span hidden={!switchOnInput} onClick={handleHiddenValue}><span>&nbsp;➕&nbsp;</span>{`작업추가`}</span>
            <form onSubmit={handleFormSubmit}>
                <span hidden={switchOnInput}>&nbsp;{`⚪`}&nbsp;</span>
                <input hidden={switchOnInput} type="text" value={value} onChange={handleInputChange} onBlur={handleHiddenValue}></input>
            </form>
        </div>
    );
}

export default TodoInsert;