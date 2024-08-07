import readOurHabits from "@/actions/readOurHabits";
import ListItem from "@/components/ListItem";
import Title from "@/components/Title";
import List from "@/components/List";
import CreateButton from "@/components/CreateButton";


export default async function OurHabits() {
  const list = await readOurHabits()
  return (
    <main className="min-h-screen max-w-xl p-5 pl-4">   
      <Title>
        Our Habits
        <CreateButton href="/create-habit/our"></CreateButton>
      </Title>
      <h2 className="text-md font-semibold">The list of our habits</h2>
      <List>
        {list.map((item, key) => (
          <ListItem item={item} key={key} type="our">
            {/* <item.icon className="h-6 w-6 "/> */}
          </ListItem>
        ))}
      </List>
    </main>
  );
}
