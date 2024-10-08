import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { addTodo } from "@/redux/features/todoSlice";
import { useAppDispatch } from "@/redux/hook";
import { FormEvent, useState } from "react";



const AddTodoModal = () => {
  const [task, setTask] = useState('');
  const [description, setDescription] = useState('');

  const dispatch = useAppDispatch();

  const onSubmit = (e:FormEvent) => {
    e.preventDefault();

    const randomString = Math.random().toString(32).substring(2, 7);

    const taskDetails = {
      id: randomString,
      title: task,
      description: description
    }
    // console.log(taskDetails);
    dispatch(addTodo(taskDetails));
  }
    return (
        <Dialog>
        <DialogTrigger asChild>
        <Button className="bg-primary-gradient text-xl mb-5">Add Todo</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add Task</DialogTitle>
            <DialogDescription>
              Add your tasks that your want to done.
            </DialogDescription>
          </DialogHeader>
        <form onSubmit={onSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="task" className="text-right">
                Task
              </Label>
              <Input
                onBlur={(e)=> setTask(e.target.value)}
                id="task"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="description" className="text-right">
                Descriptions
              </Label>
              <Input
                 onBlur={(e)=> setDescription(e.target.value)}
                id="description"
                className="col-span-3"
              />
            </div>
          </div>
            <div className="flex justify-end">
              <DialogClose>
                <Button type="submit">Save changes</Button>
                </DialogClose>
          </div>
          </form>
          </DialogContent>
      </Dialog>
    );
};

export default AddTodoModal;