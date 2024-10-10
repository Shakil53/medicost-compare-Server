import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Equal } from 'lucide-react';




const CreateLinkList = () => {

   

   
    return (
        <div>
            <div className='flex justify-between'>
                <p className='flex gap-1 font-semibold text-sm items-center justify-center'><Equal className='size-5'></Equal>Link #1</p>
                <button className="text-slate-400 text-sm">Remove</button>

                
            </div>
            <div className="grid sm:grid-cols-12 gap-4 py-4">
                                <div className="sm:col-span-12 items-center gap-4">
                                <Label htmlFor="platform" className="text-right text-xs">
                                    Platform
                                </Label>
                                <Select
                                  
                                    >
                                    <SelectTrigger className="sm:max-w-full">
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                        <SelectLabel>Fruits</SelectLabel>
                                        <SelectItem value="apple">Apple</SelectItem>
                                        <SelectItem value="banana">Banana</SelectItem>
                                        <SelectItem value="blueberry">Blueberry</SelectItem>
                                        <SelectItem value="grapes">Grapes</SelectItem>
                                        <SelectItem value="pineapple">Pineapple</SelectItem>
                                        </SelectGroup>
                                    </SelectContent>
                                    </Select>
                                </div>
                                <div className="sm:col-span-12 items-center gap-4">
                                <Label htmlFor="link" className="text-right text-xs">
                                    Link
                                </Label>
                                <div className="sm:max-w-full">
                                    <Input
                                    id="link"
                                    name="link"
                                    className="w-ful"
                                    // onChange={(e) => setLink(e.target.value)}
                                    />
                                </div>
                                </div>



                </div>
        </div>
    );
};

export default CreateLinkList;