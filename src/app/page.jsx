import readDailyHabits from "@/actions/readDailyHabits";

export default async function Home() {
  const list = await readDailyHabits()
  return (
    <main className="flex min-h-screen flex-col justify-between p-24">
      <div className="max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold leading-tight tracking-tight text-gray-900">Home</h1>
      </div>

      <ul className="divide-y divide-gray-800 max-w-md">
        {list.map((item, key) => (
          <li key={key} className="flex justify-between gap-x-6 py-5">
            <div className="flex min-w-0 gap-x-4">
             <div className="ml-3 flex h-6 items-center">
              <input
                id={`item-${item.label}`}
                name={`person-${item.label}`}
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
              />
            </div>
              <div className="min-w-0 flex-auto">
                <p className="text-sm font-semibold leading-6 text-black">{item.label}</p>
                <p className="mt-1 truncate text-sm leading-5 text-gray-600">{item.priority}</p>
              </div>
            </div>
          </li>
        ))}
    </ul>
    </main>
  );
}
