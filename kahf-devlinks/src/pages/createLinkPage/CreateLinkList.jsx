import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { LinkContext } from '@/context/CreateLinkProvider';
import { Equal } from 'lucide-react';
import { useContext } from 'react';




const CreateLinkList = () => {

   const {state} = useContext(LinkContext)

    // console.log(state);
   
    return (
        <div>
            {state.map((link, index) => (
                <div key={link.id} className="mb-4 p-3 bg-white rounded"> 
                    <div className='flex justify-between'>
                        <p className='flex gap-1 font-semibold text-sm items-center justify-center'>
                            <Equal className='size-5' />Link #{index + 1}
                        </p>
                        <button className="text-slate-400 text-sm">Remove</button>
                    </div>
                    <div className="grid sm:grid-cols-12 py-2">
                        <div className="sm:col-span-12 items-center gap-4">
                        <Label htmlFor={`platform-${link.id}`} className="text-right text-xs">
                        Platform
                        </Label>
                        <Input
                            id={`platform-${link.id}`}
                            name={`platform-${link.id}`}
                            className="w-full"
                            value={link.platform}
                            readOnly
                        />
                        </div>
                        <div className="sm:col-span-12 items-center gap-4">
                            <Label htmlFor={`link-${link.id}`} className="text-right text-xs">
                                Link
                            </Label>
                            <div className="sm:max-w-full">
                                <Input
                                    id={`link-${link.id}`}
                                    name={`link-${link.id}`}
                                    className="w-full"
                                    defaultValue={link.link} 
                                />
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CreateLinkList;