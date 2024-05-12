import data from './db.json';

export const dbQuery = ({action, type, id}) => {
    const { task } = data;

    if (action === 'get' && type === 'task') {
        return task;
    }
}
