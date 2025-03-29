import LoginForm from "@/components/LoginForm";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"

export default function Home() {
  return (
    <main className="h-screen bg-[#1C1C1C]">
      <div className="h-7/8 w-full  absolute bottom-0 px-6 rounded-t-4xl bg-white">
        <div className=" w-full flex justify-center">
          <div className=" h-4 w-24  mt-2 rounded-4xl  bg-[#1C1C1C] "></div>
        </div>
        <div className="mt-14 flex  gap-4">
          <Avatar className="h-24 w-24">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" className="" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="flex flex-col gap-2 justify-center mb-28">
            <h1 className="text-2xl font-bold leading-[1.1]">Encontre um <br/> role para você</h1>
            <span className="text-gray-500 font-medium">Só bora!!!</span>
          </div>
        </div>
        <LoginForm/>
      </div>
    </main>
  );
}
