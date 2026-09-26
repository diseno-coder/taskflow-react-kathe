import NewTaskForm from "./components/NewTaskForm";
import TaskList from "./components/TaskList";
import TaskCounter from "./components/TaskCounter";
import { useTasks } from "./hooks/useTasks";

export default function App() {
  const { tasks, addTask, toggleTask } = useTasks();

  return (
    <>
      <header>
        <h1>Icesi task</h1>
        <p className="subtitle">Aprende hoy, lidera mañana</p>
        <p className="header-phrase">Lo que tengo es que sacar esta semana</p>
      </header>

      <main>
        <NewTaskForm onAdd={addTask} />

        {/* controles de la lista */}

        <TaskList tasks={tasks} onToggle={toggleTask} />
        <TaskCounter tasks={tasks} />
      </main>

      <footer>
        <p id="credits">Hecho por Katherine Vélez</p>
      </footer>
    </>
  );
}
