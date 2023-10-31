export default function program(params){
    return(
        <div className="h-32 w-full bg-white p-2 pl-4 border rounded-md hover:shadow-md flex justify-between flex-col">
            <div>
                <h1 className="text-black font-bold text-lg">{params.name}</h1>
                <p className="text-slate-500 font-semibold">{params.description}</p>
            </div>
            

            <p className="text-slate-500 font-semibold">{params.author}</p>

        </div>
    )
}

//  currently params has name, description and author