import readMyHabits from "@/actions/readMyHabits";
import Title from "@/components/Title";
import ListItem from "@/components/ListItem";
import List from "@/components/List";

export default async function MyHabits() {
  const list = await readMyHabits()
  return (
    <main className="flex min-h-screen max-w-xl  flex-col items-start justify-start p-5 pl-4">
       <Title>My Habits</Title>

      
      <h2 className="text-md font-semibold">The list of habits</h2>
      
      {/* <ul>
        {list.map((item, index) => <div><li> {item.label} </li></div>)}
    </ul>  */}

      <List>
      {list.map((item, key) => (
            <ListItem item={item} key={key}>
                <item.icon className="h-6 w-6 "/>
            </ListItem>
          ))}
      </List>

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
