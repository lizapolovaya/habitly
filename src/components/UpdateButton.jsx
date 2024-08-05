import { EllipsisVerticalIcon } from "@heroicons/react/24/outline"
import clsx from "clsx"
import Link from "next/link"

export default function UpdateButton({ className, item }) {
    return (
        <Link  
            href={`/update-my-habit/${item.id}`}
            className={clsx(
                "rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mr-3",
                className
            )}
        > 
            <EllipsisVerticalIcon className="h-4 w-4"/>
        </Link>  
    )
}
