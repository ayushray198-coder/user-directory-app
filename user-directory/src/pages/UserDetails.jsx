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
        return <h1> Loading User...</h1>
    }

    return (
        <>
            <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">

                <div className="bg-white w-full max-w-2xl rounded-2xl shadow-xl p-8">
                    <button onClick={() => navigate("/")}
                        className="mb-6 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition">
                        ← Back
                    </button>

                    <h1 className="text-4xl font-bold text-gray-800">
                        (user.name)
                    </h1>
                    <p className="text-gray-500 mt-1 mb-6 ">
                        @{user.username}
                    </p>
                    <div className="space-y-3">
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
                            {user.website}
                        </p><p>
                            <span className="font-semibold text-gray-700">City</span>
                            {" "}
                            {user.city}
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