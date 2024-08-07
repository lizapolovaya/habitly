import clsx from "clsx";
import UpdateButton from "./UpdateButton";

export default function ListItem({item, children, type}) {
    return (
        <li className="flex justify-between gap-x-6 py-5">
            <div className="flex min-w-0 gap-x-4">
                <div className="ml-3 flex h-6 items-center">
                    {children}
                </div>
                <div className="min-w-0 flex-auto">
                    <p className="text-sm font-semibold leading-6 text-black">{item.name}</p>
                    {item.priority && (   
                        <span className={clsx(
                            "inline-flex items-center rounded-md px-1.5 py-0.5 text-xs font-medium",
                            item.priority === "High" && "bg-red-100 text-red-700",
                            item.priority === "Medium" && "bg-orange-100 text-orange-700",
                            item.priority === "Low" && "bg-yellow-100 text-yellow-700"
                        )}>
                            {item.priority}
                        </span>
                    )}
                    {item.user && (
                        <span className={clsx(
                            "inline-flex items-center rounded-md px-1.5 py-0.5 text-xs font-medium",
                            item.user === "Dan" && "bg-green-100 text-green-800",
                            item.user === "Liza" && "bg-indigo-100 text-indigo-800"
                        )}>
                            {item.user}
                        </span>
                    )}
                </div>
            </div>
            <UpdateButton className="self-center" item={item} type={type}/>
        </li>
    )
}