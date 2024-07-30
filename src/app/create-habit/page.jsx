"use client"

import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import Image from "next/image";
import Link from "next/link";
import addHabit from "@/actions/addHabit";
import updateHabit from "@/actions/updateHabit";


export default function CreateHabit() {

  return (
    <main className="flex min-h-screen flex-col items-start justify-start p-5 pl-4">
      <h1 className="text-2xl/8 font-semibold text-zinc-950 sm:text-xl/8 dark:text-white mb-10">Create Habit</h1>

      <h2 className="mb-5">Fillout the form below to create a new habit:</h2>

      <button onClick={(event) => {
        console.log(event.target)
      }} onMouseLeave={(event) => {
        console.log(event.target)
      }}>Liza</button>

      <input type="button" value="Dan" onMouseEnter={(event) => {
        console.log(event.target)
      }} onClick={(event) => {
        console.log(event.target)
      }} />

       <form method="POST" onSubmit={async function (event){
          event.preventDefault()
          console.log(event.target)
          const name = event.target.querySelector("#habname").value
          const frequency = event.target.querySelector("#frequency").value
          const priority = event.target.querySelector("#priority").value
          await addHabit(name, frequency, priority)
       }}>

        <div className="sm:col-span-4">
              <label htmlFor="habname" className="block text-sm font-medium leading-6 text-gray-900">
                Habit name:
              </label>
            <div className="mt-2">
                <input
                  id="habname"
                  name="habname"
                  type="text"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
            </div>
        </div>
        
        
        <div className="sm:col-span-3">
              <label htmlFor="frequency" className="block text-sm font-medium leading-6 text-gray-900">
              Select how often you want to do it:
              </label>
              <div className="mt-2">
                <select
                  id="frequency"
                  name="frequency"
                  multiple
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                    <option value="monday">1</option>
                    <option value="tuesday">2</option>
                    <option value="wednesday">3</option>
                    <option value="thursday">4</option>
                    <option value="friday">5</option>
                    <option value="saturday">6</option>
                    <option value="sunday">7</option>
                </select>
              </div>
        </div>


            <div className="sm:col-span-3">
               <label htmlFor="priority" className="block text-sm font-medium leading-6 text-gray-900">
                  Select how important this habit is:
                </label>
              <div className="mt-2">
                <select
                    id="priority"
                   name="priority"
                   required
                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                 >
                 <option value="high">High</option>
                 <option value="medium">Medium</option>
                 <option value="low">Low</option>
                </select>
              </div>
            </div>

            <div className="col-span-full">
              <label htmlFor="emoji" className="block text-sm font-medium leading-6 text-gray-900">
                 Select an emoji for your habit:
              </label>
              <div className="mt-2 flex items-center gap-x-3">
                <UserCircleIcon aria-hidden="true" className="h-12 w-12 text-gray-300" />
                <button
                  type="button"
                  className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                >
                  Change
                </button>
              </div>
            </div>
        
            <div className="mt-6 flex items-center justify-end gap-x-6">
               <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
                   Cancel
               </button>
               <button
                    type="submit"
                    className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
               >
                    Create
               </button>
           </div>

       </form>

    </main>
  );
}
