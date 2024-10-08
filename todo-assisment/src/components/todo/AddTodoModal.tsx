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
import { useAddTodosMutation } from "@/redux/api/api";
import { FormEvent, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"



const AddTodoModal = () => {
  const [task, setTask] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setProiority] = useState('');
  
  // console.log(priority);

  //! for local state management
  // const dispatch = useAppDispatch();

  // for server 
  const [addTodo, { data, isLoading, isSuccess }] = useAddTodosMutation();

  // console.log({data, isLoading, isSuccess});

  const onSubmit = (e:FormEvent) => {
    e.preventDefault();

    // only for custom id
    // const randomString = Math.random().toString(32).substring(2, 7);

    const taskDetails = {
      title: task,
      description,
      isCompleted: false,
      priority,
    }
    // console.log('inside modal',taskDetails);
    // for local state management
    // dispatch(addTodo(taskDetails));

    // server call
    addTodo(taskDetails)
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
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="description" className="text-right">
                Priority
              </Label>
              <Select onValueChange={(value) => setProiority(value)}>
                <SelectTrigger className="col-span-3">
                  <SelectValue placeholder="Priority" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="high">High</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="low">Low</SelectItem>
                </SelectContent>
              </Select>
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