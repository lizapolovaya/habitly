import readMyHabits from "@/actions/readMyHabits";

export default async function MyHabits() {
  const list = await readMyHabits()
  return (
    <main className="flex min-h-screen flex-col items-start justify-start p-5 pl-4">
      <h1 className="text-2xl/8 font-semibold text-zinc-950 sm:text-xl/8 dark:text-white mb-10">My Habits</h1>

      
      <h2 className="text-md font-semibold">The list of habits</h2>
      
      {/* <ul>
        {list.map((item, index) => <div><li> {item.label} </li></div>)}
    </ul>  */}


      <ul role="list" className="divide-y divide-gray-100">
          {list.map((item, key) => (
            <li key={key} className="flex gap-x-4 py-5">
              <item.icon className="h-6 w-6 "/>
              <div className="min-w-0">
                <p className="text-sm font-semibold leading-6 text-gray-900">{item.label}</p>
                <p className="mt-1 truncate text-xs leading-5 text-gray-500">{item.priority}</p>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-10 flex items-center gap-x-6 lg:mt-0 lg:flex-shrink-0">
          <a
            href="#"
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Add a new habit
          </a>
      </div>
    {/* <button type="button">Add a new habit</button> */}

    </main>
  );
}
