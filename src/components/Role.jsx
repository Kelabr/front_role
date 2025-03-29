import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import Link from "next/link"

export default function Role(){
    return(
        <Link href={`/role/praca`}>
            <div className="flex bg-white gap-4 p-4 w-full max-w-[550px] rounded-xl">
                <div className="">
                <Avatar className="h-24 w-24">
                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" className="" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>   
                </div>
                <div className="w-full">
                    <div className="flex">
                        <div>
                            <h1 className="text-xl font-medium">Nome do evento...</h1>
                            <span className="text-gray-500">Descrição do evento, uma coisa bem breve</span>
                        </div>
                        {/* <div>seta</div> */}
                    </div>
                    <div className="flex justify-end mt-4">
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
                        <span className=" left-20 ml-2 text-gray-500">19</span>    
                    </div>
                            
                </div>
            </div>        
        </Link>

    )
}