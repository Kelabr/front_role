export default function LoginForm(){
    return(
        <form className="flex flex-col gap-6">
            <div className="flex flex-col gap-1">
                <label className="font-semibold text-lg">Email</label>
                <input type="email" className="border-2 p-2 rounded-xl" />
            </div>
            <div className="flex flex-col gap-1">
                <label className="font-semibold text-lg">Senha</label>
                <input type="password" className="border-2 p-2 rounded-xl" />
            </div>
            <button className="bg-black text-white font-medium p-3 text-lg rounded-2xl">Entrar</button>
        </form>
    )
}