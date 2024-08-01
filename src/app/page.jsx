import readDailyHabits from "@/actions/readDailyHabits";
import List from "@/components/List";
import ListItem from "@/components/ListItem";
import Title from "@/components/Title";

export default async function Home() {
  const list = await readDailyHabits()
  return (
    <main className="flex min-h-screen max-w-xl flex-col items-start justify-start p-5 pl-4">
        <Title>Home
          <span className="text-red-300">red</span>
        </Title>


      <List>
      {list.map((item, key) => (
          <ListItem item={item} key={key}>
            <input
                id={`item-${item.name}`}
                name={`person-${item.name}`}
                type="checkbox"
                className="h-5 w-5 rounded-full hover:rounded-full border-gray-400 text-indigo-500 hover:border-indigo-600 focus:ring-indigo-600"
              />
          </ListItem>
        ))}
      </List>        
    </main>
  );
}
