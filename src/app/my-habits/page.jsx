import readMyHabits from "@/actions/readMyHabits";

export default async function MyHabits() {
  const list = await readMyHabits()
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-xl font-bold">My Habits</h1>

      <h2 className="text-md font-bold">The list of habits</h2>

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


    <button type="button">Add a new habit</button>

    </main>
  );
}
