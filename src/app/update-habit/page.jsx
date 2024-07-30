import readHabit from "@/actions/readHabit";
import UpdateForm from "@/components/UpdateForm";


export default async function UpdateHabit() {
  const habit = await readHabit()
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     <Title>Update Habit</Title>

      <UpdateForm habit={habit}/>
    </main>
  );
}
