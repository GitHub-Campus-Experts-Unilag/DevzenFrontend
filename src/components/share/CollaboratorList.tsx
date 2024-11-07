export interface CollaboratorProps {
    name: string,
    imageUrl: string,
    role: string
}

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

import CollaboratorItem from "@/components/share/CollaboratorItem";

import avatar1 from "../../assets/images/avatar-1.png";
import avatar2 from "../../assets/images/avatar-2.png";
import avatar3 from "../../assets/images/avatar-3.png";

const collaborators: CollaboratorProps[] = [
    {
        name: "Dylan Ray (You) and 3 others",
        imageUrl: avatar1,
        role: "editor"
    },
    {
        name: "Sean Linh",
        imageUrl: avatar2,
        role: "viewer"
    },
    {
        name: "Angela Jay",
        imageUrl: avatar3,
        role: "viewer"
    },
    {
        name: "Mia Tina",
        imageUrl: "", // falls backs to default; intentional
        role: "viewer"
    }
];

const ShareList = () => {

    return (
        <ul className="space-y-2">
            <li
                key="general"
                className="mb-8"
            >
                <p className="font-medium text-black-50 text-base mb-2">Who has access ({collaborators.length})</p>

                <div className="flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-center">
                    <RadioGroup
                        defaultValue="anyone"
                        className="flex flex-col gap-y-4 gap-x-12 md:flex-row"
                    >
                        <div className="flex flex-row items-center gap-x-3 gap-y-0 md:flex-row-reverse">
                            <RadioGroupItem
                                value="anyone"
                                id="anyone"
                                className="peer border-2 border-black-30 data-[state='checked']:text-black-20 data-[state='checked']:font-semibold data-[state='checked']:border-green-40 data-[state='checked']:bg-green-70 data-[state='checked']:shadow-[0_0_0_2px_#06596540]"
                            />
                            <Label
                                htmlFor="anyone"
                                className="font-medium text-black-30 text-[1.0625rem] peer-data-[state='checked']:font-semibold peer-data-[state='checked']:text-black-20"
                            >
                                Anyone with the link
                            </Label>
                        </div>
                        <div className="flex flex-row items-center gap-x-3 gap-y-0 md:flex-row-reverse">
                            <RadioGroupItem
                                value="invite"
                                id="invite"
                                className="peer border-2 border-black-30 data-[state='checked']:text-black-20 data-[state='checked']:font-semibold data-[state='checked']:border-green-40 data-[state='checked']:bg-green-70 data-[state='checked']:shadow-[0_0_0_2px_#06596540]"
                            />
                            <Label
                                htmlFor="invite"
                                className="font-medium text-black-30 text-[1.0625rem] peer-data-[state='checked']:font-semibold peer-data-[state='checked']:text-black-20"
                            >
                                Only those you invite
                            </Label>
                        </div>
                    </RadioGroup>
                    <Select defaultValue="editor">
                        <SelectTrigger
                            className="w-24 text-[0.8125rem] bg-black-60 text-black-20 border-none font-medium"
                        >
                            <SelectValue placeholder="Select a role" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="editor">Can edit</SelectItem>
                            <SelectItem value="viewer">Can view</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </li>

            {collaborators.map((collaborator: CollaboratorProps) => <CollaboratorItem key={collaborator.name} {...collaborator} />)}
        </ul>
    )
}

export default ShareList;