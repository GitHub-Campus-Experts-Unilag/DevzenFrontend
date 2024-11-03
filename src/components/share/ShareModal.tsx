import { useState } from "react";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";

import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

import InviteForm from "@/components/share/InviteForm";
import CollaboratorList from "@/components/share/CollaboratorList";

import { Link, Check } from "lucide-react";

const ShareModal = () => {

    const [isCopied, setIsCopied] = useState(false);

    const copyTextToClipboard = async (text: string) => {

        if ("clipboard" in navigator) {
            return await navigator.clipboard.writeText(text);
        }
    }


    const handleCopyBtnClick = () => {

        copyTextToClipboard("sample text").then(() => {
            setIsCopied(true);
            setTimeout(() => {
                setIsCopied(false);
            }, 1500);
        }).catch(error => {
            console.log(error);
        })
    }


    return (
        <Dialog>
            <DialogTrigger className="bg-gradient-primary text-gray-10 rounded-lg py-2 px-6 text-base font-semibold border border-green-60 shadow-[0_2px_4px_0_#04414940]">Share</DialogTrigger>
            <DialogContent className="max-h-[85vh] max-w-[min(90%,920px)] flex flex-col items-center bg-black-80 rounded-3xl border-2 border-black-70 p-0 pb-8 shadow-[0_0_32px_8px_#14141440]">
                <DialogHeader className="py-5 px-7 max-w-[872px] w-full">
                    <div className="flex flex-col items-start mb-4 sm:mb-0 sm:flex-row">
                        <DialogTitle className="text-black-10 font-semibold text-xl mb-4">Share</DialogTitle>
                        <Button
                            onClick={handleCopyBtnClick}
                            className="sm:ml-auto mr-12 bg-gradient-primary border border-green-60 shadow-[0_2px_4px_0_#04414940]"
                        >
                            {isCopied ? (
                                <>
                                    Copied! <Check />
                                </>
                            ) : (
                                <>
                                    Copy link <Link />
                                </>

                            )}
                        </Button>
                    </div>
                    <DialogDescription className="text-black-20 font-medium text-xs text-left">
                        Copy this link or invite others to collaborate with you.
                    </DialogDescription>
                </DialogHeader>

                <Separator className="bg-black-70 h-0.5" />

                <ScrollArea className="max-h-[80%] overflow-auto max-w-[872px] w-full pt-5 px-7">
                    <InviteForm />
                    <CollaboratorList />
                </ScrollArea>
            </DialogContent>
        </Dialog >

    )
}

export default ShareModal;