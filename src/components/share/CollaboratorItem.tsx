import type { CollaboratorProps } from "@/components/share/CollaboratorList";

import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";


const ShareItem = ({ name, imageUrl, role }: CollaboratorProps) => {

    const [firstName, lastName = ""] = name.split(" ");

    return (
        <li
            className="flex justify-between gap-4"
        >
            <figure className="flex items-center gap-4 flex-1 min-w-0">
                <Avatar>
                    <AvatarImage
                        src={imageUrl}
                        alt={name}
                        className="w-8 h-8"
                    />
                    <AvatarFallback>{`${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase()}</AvatarFallback>
                </Avatar>
                <figcaption className="text-black-20 font-medium text-[1.0625rem] whitespace-nowrap overflow-hidden text-ellipsis">{name}</figcaption>
            </figure>
            <Select
                defaultValue={role}
            >
                <SelectTrigger
                    className="w-24 text-[0.8125rem] bg-black-60 text-black-20 border-none font-medium"
                >
                    <SelectValue placeholder="Select a role" />
                </SelectTrigger>
                <SelectContent className="">
                    <SelectItem value="editor">Can edit</SelectItem>
                    <SelectItem value="viewer">Can view</SelectItem>
                </SelectContent>
            </Select>
        </li>
    )
}

export default ShareItem;