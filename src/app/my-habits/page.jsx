import readMyHabits from "@/actions/readMyHabits";
import Navigation from "@/components/Navigation";



export default async function MyHabits() {
  const list = await readMyHabits()
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>My Habits</h1>

      <h2>The list of habits</h2>

      <ul>
        {list.map((item, index) => <div><li> {item.label} </li></div>)}
    </ul> 

    <button type="button">Add a new habit</button>

    <Navigation/>


    </main>
  );
}
