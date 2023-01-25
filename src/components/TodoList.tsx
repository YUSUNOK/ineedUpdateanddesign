import { isElementAccessExpression } from 'typescript';
import { Todo } from '../type/types';
import { useState } from 'react';
interface Props {
    todoList: Todo[],
    setTodoList: React.Dispatch<React.SetStateAction<Todo[]>>,
    clearCount: number,
    setClearCount: React.Dispatch<React.SetStateAction<number>>,
}

const TodoList = ({ todoList, setTodoList, clearCount, setClearCount, }: Props) => {
    const [clearListShow, setClearListShow] = useState(true);
    const itemClearChange = (item: Todo) => {
        setTodoList(
            todoList.map((i: Todo) => {
                if (i.todoId === item.todoId) {
                    return { ...i, todoClear: !(i.todoClear) };
                }
                else {
                    return i;
                }
            }));

        item.todoClear ? setClearCount((current) => current - 1) : setClearCount((current) => current + 1);


    }
    const todoDelete = (item: Todo) => {
        setTodoList(
            todoList.filter((i: Todo) =>
                i.todoId !== item.todoId
            ));

        item.todoClear ? setClearCount((current) => current - 1) : console.log();

    }

    const todoUpdate = (item: Todo) => {

    }

    const handleClearListShow = () => {
        setClearListShow((current) => !current);
    }

    return (
        <div>
            {todoList.map((item) => {
                if (item.todoClear === false)
                    return (
                        <ul key={item.todoId}>
                            <li>
                                <span onClick={() => itemClearChange(item)}>
                                    &nbsp;⚪&nbsp;
                                </span>
                                <span>{item.todoName}</span>
                                <span onClick={() => todoUpdate(item)}>
                                    &nbsp;✏︎&nbsp;
                                </span>
                                <span onClick={() => todoDelete(item)}>
                                    &nbsp;❌&nbsp;
                                </span>
                            </li>
                        </ul>)
            })
            }
            <div onClick={handleClearListShow}>{`${clearCount}개 완료됨`}</div>
            {(clearListShow) ?
                todoList.map((item) => {
                    if (item.todoClear === true)
                        return (
                            <ul key={item.todoId}>
                                <li>
                                    <span onClick={() => itemClearChange(item)}>
                                        &nbsp;✔️&nbsp;
                                    </span>
                                    <span>{item.todoName}</span>
                                    <span onClick={() => todoUpdate(item)}>
                                        &nbsp;✏︎&nbsp;
                                    </span>
                                    <span onClick={() => todoDelete(item)}>
                                        &nbsp;❌&nbsp;
                                    </span>
                                </li>
                            </ul>
                        )
                })
                : null}
        </div >
    );
}

export default TodoList;