"use client"

import { UserCircleIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import updateHabit from "@/actions/updateHabit";

export default function UpdateForm({habit, single}) {
  const [name, setName] = useState(habit.name)
  const [frequency,  setFrequency] = useState(habit.frequency)
  const [priority, setPriority] = useState(habit.priority)
  const [user, setUser] = useState(habit.user)
  return (
    <form method="POST" onSubmit={async function (event){
      event.preventDefault()
      await updateHabit({id: habit.id, name, frequency, priority, user})
    }}>
  
      <div>
        <label htmlFor="habname" className="block text-sm font-medium leading-6 text-gray-900">
          Habit name:
        </label>
          <div className="mt-2">
            <input
              id="habname"
              name="habname"
              type="text"
              onChange={event => setName(event.target.value)}
              value={name}
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
      </div>
          
      <div>
        <label htmlFor="frequency" className="block text-sm font-medium leading-6 text-gray-900 mt-7">
          Select how often you want to do it:
        </label>
          <div className="mt-2">
            <select
              id="frequency"
              name="frequency"
              onChange={event => setFrequency(event.target.value)}
              multiple
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
            >
                <option value="monday" selected={frequency === "monday"}>1</option>
                <option value="tuesday" selected={frequency === "tuesday"}>2</option>
                <option value="wednesday" selected={frequency === "wednesday"}>3</option>
                <option value="thursday" selected={frequency === "thursday"}>4</option>
                <option value="friday" selected={frequency === "friday"}>5</option>
                <option value="saturday" selected={frequency === "saturday"}>6</option>
                <option value="sunday" selected={frequency === "sunday"}>7</option>
            </select>
          </div>
      </div>
  

      <div>
        <label htmlFor="priority" className="block text-sm font-medium leading-6 text-gray-900 mt-7">
          Select how important this habit is:
        </label>
          <div className="mt-2">
            <select
              id="priority"
              name="priority"
              onChange={event => setPriority(event.target.value)}
              value={priority}
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
            >
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
            </select>
          </div>
      </div>

      {/* <input type="hidden" id="habowner" value="Liza"/> */}
      {single && <input type="hidden" id="habowner" value="Liza"/>}
      {!single && 
      <div>
        <label htmlFor="habowner" className="block text-sm font-medium leading-6 text-gray-900 mt-7">
          Select the habit owner:
        </label>
        <div className="mt-2">
          <select
            id="habowner"
            name="habowner"
            required
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
          >
            <option value="Liza">Liza</option>
            <option value="Dan">Dan</option>
          </select>
        </div>
      </div>
  }

      <div>
        <label htmlFor="emoji" className="block text-sm font-medium leading-6 text-gray-900 mt-7">
          Select an emoji for your habit:
        </label>
          <div className="mt-2 flex items-center gap-x-3">
            <UserCircleIcon aria-hidden="true" className="h-12 w-12 text-gray-300" />
              <button
                type="button"
                className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
              >
                Update
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
          Update
        </button>
      </div>
  
    </form>
  
    );
  }