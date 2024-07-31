import Link from "next/link"
import { PlusIcon } from "@heroicons/react/24/outline"

export default function CreateButton() {

    return (
        <Link
          href="/create-habit"
          className="rounded-full bg-indigo-600 px-2.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          <PlusIcon className="h-5 w-5"/>
        </Link>
    )
}