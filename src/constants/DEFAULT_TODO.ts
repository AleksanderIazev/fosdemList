import { v4 as uuidv4 } from 'uuid';

interface Todo {
    id: string;
    title: string;
    speaker: string;
    completed: boolean;
}

const DEFAULT_TODO: Todo = {
    id: uuidv4(),
    title: '',
    speaker: '',
    completed: false,
};

export default DEFAULT_TODO;
