"use client"

export default function LoginForm(){

    async function handleSubmit(event){
        event.preventDefault()

        const formData = new FormData(event.target)

        const email = formData.get("email")
        const password = formData.get("password")


        try{
            const response = await fetch("http://localhost:3333/api/login", {
                method:"POST",
                headers:{
                     "Content-Type": "application/json"
                },
                body: JSON.stringify({email, password}),
                credentials:"include"
            })

            if(!response.ok){
                throw new Error("Erro ao fazer login")
            }
        }catch(error){
            console.error("Erro ao logar", error)
        }

        console.log("Logado")

    }


    return(
        <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-1">
                <label className="font-semibold text-lg">Email</label>
                <input type="email" className="border-2 p-2 rounded-xl" name="email" />
            </div>
            <div className="flex flex-col gap-1">
                <label className="font-semibold text-lg">Senha</label>
                <input type="password" className="border-2 p-2 rounded-xl" name="password" />
            </div>
            <button className="bg-black text-white font-medium p-3 text-lg rounded-2xl" type="submit">Entrar</button>
        </form>
    )
}