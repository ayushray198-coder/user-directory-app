import { useEffect, useState } from "react"
import { getUser } from "../services/userApi"
import { Link } from "react-router-dom"

export const Home = () => {

    const [users, setUsers] = useState([])
    const [search, setSearch] = useState("")
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")

    useEffect(() => {
        const fetchUsers = async () => {
            try {

                setLoading(true)
                const res = await getUser()

                setUsers(res)

            } catch (error) {
                setError(error.message)

            } finally {
                setLoading(false)

            }
        }

        fetchUsers()
    }, [])

    const filterSearch = users.filter((user) => user.name.toLowerCase().includes(search.toLowerCase()))

    return (
        <>
            <div className="min-h-screen bg-gray-100 p-6">

                <h1 className="text-4xl font-bold text-center mb-8">User Directory</h1>

                {loading && (
                    <p className="text-center mb-2 text-gray-700 text-xl">Loading...</p>
                )}

                {error && (
                    <p className="text-xl text-center text-red-400 mb-2">{error}</p>
                )}

                <input type="text"
                    placeholder="search here"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full max-w-md mx-auto block mb-8 p-3 rounded-lg border border-gray-300 
                    focus:outline-none focus:ring-2 focus:ring-blue-500 " />

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {

                        filterSearch.map((user) => (
                            <div
                                className="bg-white p-5 m-2 rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 border border-gray-100"
                                key={user.id}>

                                <h2 className=" text-xl font-bold text-gray-800 mb-3">Name: {user.name}</h2>

                                <p className="text-gray-600">
                                    <span className="font-semibold text-gray-800">
                                        Email:
                                    </span> {" "}
                                    {user.email}
                                </p>

                                <p className="text-gray-600">
                                    <span className="font-semibold text-gray-800">
                                        Phone:
                                    </span> {" "}
                                    {user.phone}
                                </p>

                                <div className="mt-4 pt-3 border-t">
                                    <p className="text-sm text-gray-500">
                                        Company
                                    </p>

                                    <p className="font-semibold">
                                        {user.company.name}
                                    </p>
                                </div>

                                <Link
                                    to={`/user/${user.id}`}
                                    className="inline-block mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                                    View Details

                                </Link>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}