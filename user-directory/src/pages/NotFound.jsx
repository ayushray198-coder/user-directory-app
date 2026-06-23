import { useNavigate } from "react-router-dom"


export const NotFound = () => {
 
    const navigate = useNavigate()
    return (
        <div className="h-screen w-screen bg-gray-200 flex flex-col justify-center items-center  ">
            <h1 className="text-5xl text-red-500 font-bold  mb-4"> 404  </h1>
            <p className="text-xl text-gray-600 mb-6">Page Not Found</p>

            <button onClick={() => navigate("/")}
                        className="px-5 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition">
                        Go Home
                    </button>
        </div>
    )
}