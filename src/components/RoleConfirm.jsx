import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import Link from "next/link"

export default function RoleConfirm(){
    return(
        <>
        <div className="flex justify-between items-center">
            <Avatar className="h-24 w-24">
                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" className="" />
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>   
            <button className="bg-black text-white w-2/6 h-1/2 p-2 font-medium rounded-2xl">Eu vou</button>          
        </div>
        <div className="mt-4">
            <h1 className="text-4xl font-medium">Nome do Evento...</h1>
            <span className="text-lg text-gray-500">Descriçaõ do evento, algo breve</span>
        </div>
        <div className="flex mt-4">
            <Avatar className="h-7 w-7">
                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" className="" />
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>     
            <Avatar className="h-7 w-7 ">
                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" className="" />
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>  
            <Avatar className="h-7 w-7 ">
                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" className="" />
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>  
            <Link href="praca/quem-vai" className=" left-20 ml-2 text-gray-500 underline">Quem vai</Link>    
        </div>
        </>

    )
}