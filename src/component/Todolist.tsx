import React from 'react';

type PropType = {
    tasks: TasksPropType[],
    title?: string
}

type TasksPropType = {
    id: number,
    title: string,
    isDone: boolean
}

export const Todolist = (props: PropType) => {


    return (
        <div>
            <div>
                <h3>{props.title}</h3>
                <div>
                    <input/>
                    <button>+</button>
                </div>
                <ul>
                    {props.tasks.map((el) => {
                            return (
                                <li><input type="checkbox" checked={el.isDone}/> <span>{el.title}</span></li>
                            )
                    })}
                </ul>
                <div>
                    <button>All</button>
                    <button>Active</button>
                    <button>Completed</button>
                </div>
            </div>
        </div>
    );
};

export default Todolist;