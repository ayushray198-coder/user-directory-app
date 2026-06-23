import { useEffect, useState } from "react"
import { getUser } from "../services/userApi"

import { UserCard } from "../components/UserCard"

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

                {filterSearch.length === 0 && (
                    <h1 className="text-center text-2xl font-semibold text-gray-500 mt-10">
                        No User Found
                    </h1>
                )}


                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {

                        filterSearch.map((user) => (
                           <UserCard key={user.id}
                            user={user} />
                        ))
                    }
                </div>
            </div>
        </>
    )
}