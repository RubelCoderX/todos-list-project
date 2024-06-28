import { useAppSelector } from "@/redux/hooks";
import AddTodoModal from "./AddTodoModal";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";

const TodoContainer = () => {
  const { todos } = useAppSelector((state) => state.todos);
  return (
    <div>
      <div className=" flex justify-between mb-5">
        <AddTodoModal></AddTodoModal>
        <TodoFilter></TodoFilter>
      </div>
      <div className="bg-primary-gradient w-full h-full rounded-xl  p-[5px]">
        <div className="bg-white p-5 w-full h-full rounded-md space-y-4">
          {todos.map((item) => (
            <TodoCard
              key={item.id}
              id={item.id}
              title={item.title}
              description={item.description}
              isCompleted={item.isCompleted}
            ></TodoCard>
          ))}
        </div>
        {/* <div className="bg-white p-4 rounded-md text-2xl font-bold flex justify-center items-center">
          <p className="">There is no task pending</p>
        </div> */}
      </div>
    </div>
  );
};

export default TodoContainer;
