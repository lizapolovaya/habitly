import readDailyHabits from "@/actions/readDailyHabits";
import Title from "@/components/Title";

export default async function Home() {
  const list = await readDailyHabits()
  return (
    <main className="flex min-h-screen max-w-xl flex-col items-start justify-start p-5 pl-4">
        <Title title="Home"/>
        <Title>Home
          <span className="text-red-300">red</span>
        </Title>

      <ul className="divide-y divide-x divide-gray-200 border border-gray-200 w-full cursor-pointer rounded-md bg-white">
        {list.map((item, key) => (
          <li key={key} className="flex justify-between gap-x-6 py-5">
            <div className="flex min-w-0 gap-x-4">
             <div className="ml-3 flex h-6 items-center">
              <input
                id={`item-${item.label}`}
                name={`person-${item.label}`}
                type="checkbox"
                className="h-5 w-5 rounded-full hover:rounded-full border-gray-400 text-indigo-500 hover:border-indigo-600 focus:ring-indigo-600"
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
