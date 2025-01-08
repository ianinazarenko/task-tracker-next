import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface TasksState {
    list: Task[];
}

interface Task {
    id: number;
    name: string;
}

const initialState: TasksState = {
    list: [],
};

const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask: (state, action: PayloadAction<Task>) => {
            state.list.push(action.payload);
        },
    },
});

export const { addTask } = tasksSlice.actions;
export default tasksSlice.reducer;
