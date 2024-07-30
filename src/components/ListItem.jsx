export default function ListItem({item, children}) {
    return(
        <li className="flex justify-between gap-x-6 py-5">
            <div className="flex min-w-0 gap-x-4">
             <div className="ml-3 flex h-6 items-center">
                {children}
            </div>
              <div className="min-w-0 flex-auto">
                <p className="text-sm font-semibold leading-6 text-black">{item.label}</p>
                <p className="mt-1 truncate text-sm leading-5 text-gray-600">{item.priority}</p>
              </div>
            </div>
          </li>
    )
}