"use client"

import HabitForm from "@/components/HabitForm";
import Title from "@/components/Title";

export default function CreateMyHabit({params}) {

    return (
      <main className="min-h-screen max-w-xl flex-col items-start justify-start p-5 pl-4">
        
        <Title>Create Habit</Title>
  
        <h2 className="text-md font-semibold">Fillout the form below to create a new habit:</h2>
        <div className="overflow-hidden rounded-lg bg-white shadow ">
        <div className="px-6 py-8 sm:p-8">
        <HabitForm single={params.type === "my"}>
  
        </HabitForm>
  
        </div>
        </div>
  
      </main>
    );
  }