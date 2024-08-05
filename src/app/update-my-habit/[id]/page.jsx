import readHabit from "@/actions/readHabit";
import UpdateForm from "@/components/UpdateForm";
import Title from "@/components/Title";


export default async function UpdateHabit({params}) {
  const habit = await readHabit(params.id)

  return (
      <main className="min-h-screen max-w-xl flex-col items-start justify-start p-5 pl-4">
      <Title>Update Habit</Title>
      <h2 className="text-md font-semibold">Do all the necessary changes to your habit:</h2>
      <div className="overflow-hidden rounded-lg bg-white shadow ">
        <div className="px-6 py-8 sm:p-8">

          <UpdateForm habit={habit}/>
        
        </div>
      </div>

      </main>
    );
  }
