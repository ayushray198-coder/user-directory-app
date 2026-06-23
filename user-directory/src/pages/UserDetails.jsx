import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { getUserById } from "../services/userApi"




export const UserDetails = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const [user, setUser] = useState(null)
    


    useEffect(() => {
        const fetchUser = async () => {
            try {
                const res = await getUserById(id)
                setUser(res)
            } catch (error) {
                console.log(error);

            }
        }
        fetchUser()
    }, [id])
    if (!user) {
        return (
            <div className="min-h-screen flex justify-center items-center">
                <h1 className="text-2xl font-bold">
                    Loading User...
                </h1>
            </div>
        );
    }

    return (
        <>
            <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">

                <div className="bg-white w-full max-w-2xl rounded-2xl shadow-xl p-8 ">
                    <button onClick={() => navigate("/")}
                        className="mb-6 px-4 py-2 bg-gray-800 text-white rounded-lg  hover:bg-gray-900 transition">
                        ← Back
                    </button>

                    <div className="borde-b pb-6 mb-6">
                        <div className="w-20 h-20 rounded-full mb-4 bg-blue-600 text-white flex items-center justify-center text-3xl font-bold">
                            {user.name.charAt(0)}
                        </div>

                        <h1 className="text-4xl font-bold text-gray-800">
                            {user.name}
                        </h1>
                        <p className="text-gray-500 mt-1 mb-6 ">
                            @{user.username}
                        </p>
                    </div>
                    <div className=" grid md:grid-cols-2 gap-4">
                        <p>
                            <span className="font-semibold text-gray-700">Email</span>
                            {" "}
                            {user.email}
                        </p><p>
                            <span className="font-semibold text-gray-700">Phone</span>
                            {" "}
                            {user.phone}
                        </p><p>
                            <span className="font-semibold text-gray-700">Website</span>
                            {" "}
                            <a href={`https://${user.website}`}
                                target="_blank"
                                rel="noreferrer"
                                className="text-blue-600 hover:underline"> {user.website}</a>
                        </p><p>
                            <span className="font-semibold text-gray-700">City</span>
                            {" "}
                            {user.address.city}
                        </p>
                    </div>
                    <div className="mt-8 border-t pt-5">
                        <h2 className="text-xl font-bold mb-2">
                            Company
                        </h2>
                        <p className="text-gray-700">
                            {user.company.name}
                        </p>

                        <p className="text-sm text-gray-500">
                            {user.company.catchPhrase}
                        </p>
                    </div>

                </div>
            </div>
        </>
    )
}