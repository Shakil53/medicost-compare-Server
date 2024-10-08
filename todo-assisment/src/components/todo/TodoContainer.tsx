import TodoCard from "./TodoCard";
import AddTodoModal from "./AddTodoModal";
import TodoFilter from "./TodoFilter";
import { useGetTodosQuery } from "@/redux/api/api";
import { useState } from "react";



const TodoContainer = () => {


    const [priority, setProiority] = useState('')

    // console.log(priority);

    // From local storage
    // const {todos} = useAppSelector((state) => state.todos)

    //From remote
    const { data: todos, error, isLoading } = useGetTodosQuery(priority)

    // console.log(todos);
    if (isLoading) {
            return <p>Loading...</p>
        }
    return (
        <div>
            <div className="flex justify-between">
               <AddTodoModal></AddTodoModal>
               <TodoFilter priority={priority} setProiority={setProiority}></TodoFilter>
            </div>
            <div className="bg-primary-gradient w-full rounded-xl p-[5px]">
                <div className="bg-white p-4 w-full h-full space-y-3 rounded-lg">
                    {
                        todos?.data?.map(item => <TodoCard key={item.todos} {...item}></TodoCard>)
                   }
                </div>
            {/* <div className="bg-white flex justify-center items-center p-5">
                <p className="text-2xl font-semibold">There is no task pending</p>
              </div> */}
           
                
            </div>
        </div>
    );
};

export default TodoContainer;