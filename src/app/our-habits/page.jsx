import readOurHabits from "@/actions/readOurHabits";
import Navigation from "@/components/Navigation";


export default async function OurHabits() {
  const list = await readOurHabits()
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Our Habits</h1>

      <h2>The list of our habits</h2>

      <ul>
        {list.map((item, index) => <div><li> {item.label} ({item.user}) </li></div>)}
    </ul> 

    <button type="button">Add a new habit</button>

    <Navigation/>


    </main>
  );
}
