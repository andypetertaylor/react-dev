import { dbQuery } from '../data/dbQuery';

export const Main = () => {
    const tasks = dbQuery('get', 'task');
    console.log(tasks);
    return (
        <>
            Tasks: {tasks.length}
        </>
    );
}