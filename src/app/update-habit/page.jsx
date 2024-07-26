import readHabit from "@/actions/readHabit";
import Navigation from "@/components/Navigation";
import UpdateForm from "@/components/UpdateForm";


export default async function UpdateHabit() {
  const habit = await readHabit()
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Update Habit
      <UpdateForm habit={habit}/>
      <Navigation/>
    </main>
  );
}
