export default function List({children}) {
    return (
        <ul role="list" className="divide-y divide-x divide-gray-200 border border-gray-200 w-full cursor-pointer rounded-md bg-white">
            {children}
        </ul>
    )
}