import Navigation from "@/components/Navigation";
import readDailyHabits from "@/actions/readDailyHabits";

export default async function Home() {
  const list = await readDailyHabits()
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Home</h1>

      <div className="multiselect">
        {list.map((item, index) => <div><label><input type="checkbox" name="" value={item.id} /> {item.label} </label> <br /></div>)}
     </div>

    <Navigation/>


    </main>
  );
}
