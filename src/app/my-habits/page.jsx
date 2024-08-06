import readMyHabits from "@/actions/readMyHabits";
import Title from "@/components/Title";
import ListItem from "@/components/ListItem";
import List from "@/components/List";
import CreateButton from "@/components/CreateButton";

export default async function MyHabits() {
  const list = await readMyHabits()
  return (
    <main className="min-h-screen max-w-xl p-5 pl-4">
      <Title>My Habits
        <CreateButton href="/create-habit/my"></CreateButton>
      </Title>     
      <h2 className="text-md font-semibold">The list of my habits</h2>

      <List>
        {list.map((item, key) => (
          <ListItem item={item} key={key}>
            {/* <item.icon className="h-6 w-6 "/> */}
          </ListItem>
        ))}
      </List>
    </main>
  );
}
