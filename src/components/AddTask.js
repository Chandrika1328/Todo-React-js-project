

export const AddTask = ({ tasklist, setTasklist, task, setTask }) => {


    const handlesubmit = (e) => {
        e.preventDefault();

        if (task.id) {
            const date = new Date();
            const updateTask = tasklist.map((todo) => todo.id === task.id ?
                {
                    id: task.id, name: task.name,
                    time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`
                } : todo);
                setTasklist(updateTask);
                setTask({});
        
        }
    
        else {
    const date = new Date();
    const newTask = {
        id: date.getTime(),
        name: e.target.task.value,
        time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`
    }
    setTasklist([...tasklist, newTask]);
   
   setTask({});
}

        
    }
return (
    <section className="addTask">
        <form onSubmit={handlesubmit}>
            <input type="text" name="task" value={task.name || ''} 
                autoComplete="off" placeholder="add task"
                maxLength="25" 
                onChange={e => setTask({...task,name: e.target.value})}
                >
            </input>
            <button type="submit">
              {task.id ? "Update": "Add"}
            </button>
        </form>
    </section>
)
}
