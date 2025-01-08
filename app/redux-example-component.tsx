'use client';

import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from './store';
import { addTask } from './store/tasks';
import { ReactNode } from 'react';

export default function Component(): ReactNode {
    const dispatch = useAppDispatch();
    const tasks = useSelector((state: RootState) => state.tasks.list);

    return (
        <div>
            <h1>Value: {tasks.length}</h1>
            <button
                onClick={() => dispatch(addTask({ id: 1, name: 'Task 1' }))}
            >
                Add Task
            </button>
        </div>
    );
}
