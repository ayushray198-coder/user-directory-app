import { Link } from "react-router-dom"

export const UserCard = ({ user }) => {
    return (
        <div
            className="bg-white 
                        p-5 m-2
                        rounded-2xl
                         shadow-md
                        hover:shadow-2xl
                         hover:-translate-y-1.5
                         transition-all
                       duration-300 border
                       border-gray-100"
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
    )
}