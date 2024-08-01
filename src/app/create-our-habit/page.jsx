"use client"
import CreateHabit from '@/components/CreateHabit';

import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import Image from "next/image";
import Link from "next/link";
import addHabit from "@/actions/addHabit";
import Title from "@/components/Title";
import updateHabit from "@/actions/updateHabit";


export default function CreateOurHabit() {

  return (
    <main className="min-h-screen max-w-xl flex-col items-start justify-start p-5 pl-4">
      
        <Title>Create Habit</Title>

        <h2 className="text-md font-semibold">Fillout the form below to create a new habit:</h2>
        <div className="overflow-hidden rounded-lg bg-white shadow ">
        <div className="px-6 py-8 sm:p-8">
        <CreateHabit single={false}>

        </CreateHabit>
        </div>
        </div>

    </main>
  );
}
