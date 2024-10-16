import Container from "@/components/ui/Container";
import { Button } from "@/components/ui/button";
import { Plus } from 'lucide-react';
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
import CreateLinkList from "./CreateLinkList";
import { useContext, useState } from "react";
import { LinkContext } from "@/context/CreateLinkProvider";
import LeftSideContainer from "./LeftSideContainer";



const CreateLinkPage = () => {

    const [platform, setPlatform] = useState('');
    const [link, setLink] = useState('');
   
    const { state,dispatch } = useContext(LinkContext)
    // console.log(state);

   


    const id = Math.random().toString(36).substring(2, 7)
    // console.log(id); 
    

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const createdLink = {
            id: id,
            platform: platform,
            link: link,
        }

        dispatch({type: 'createLink', payload: createdLink})
      
        
    }
    return (
        <Container>
            <div className="flex mt-5 mx-auto gap-4">
                {/* left side container */}
                <div className="flex-[2]">
                    <LeftSideContainer state={state}></LeftSideContainer>
                </div>
                {/* right side container */}
                <div className="bg-white mt-5 flex-[3] p-4">
                    <p className="text-3xl font-bold">Customize your links</p>
                    <p>Your can add/edit/remove links below and then share all your profiles with the world</p>
                    <div>
                        
                        <Dialog className="mt-4 w-full bg-red-500">
                            <DialogTrigger asChild>
                            <Button className='mt-4 col-span-3 w-full bg-white text-black border border-blue-500 hover:bg-gray-50'><Plus className="size-3"></Plus>Add new link</Button>
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-96">
                            <form onSubmit={handleSubmit}>
                                <DialogHeader>
                                <DialogTitle>Add link</DialogTitle>
                                <DialogDescription>
                                Your can add/edit/remove links below 
                                </DialogDescription>
                                </DialogHeader>
                                <div className="grid gap-4 py-4">
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <Label htmlFor="platform" className="text-right">
                                    Platform
                                    </Label>
                                    <Input
                                    onBlur={(e)=> setPlatform(e.target.value)}    
                                    id="paltform"
                                    name='platform'
                                    className="col-span-3"
                                    />
                                </div>
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <Label htmlFor="link" className="text-right">
                                    Link
                                    </Label>
                                    <Input
                                    onBlur={(e) => setLink(e.target.value)}
                                    id="link"
                                    name="link"
                                    className="col-span-3"
                                    />
                                </div>
                                </div>
                                <div className="flex justify-end items-end">
                                    <DialogClose>
                                        <Button className="" type="submit">Save changes</Button>
                                    </DialogClose>
                                </div>
                                </form>
                                </DialogContent>
                            </Dialog>
                    </div>
                    <div className="mt-10 bg-gray-100 rounded">
                        <CreateLinkList></CreateLinkList>
                    </div>
                </div>

            </div>
               
                
        </Container>
    );
};

export default CreateLinkPage;