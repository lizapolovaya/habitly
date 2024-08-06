"use server"
import readMyHabits from "./readMyHabits"
import fs from "fs/promises";

export default async function updateHabit({id, name, frequency, priority, user}) {
    const habits = await readMyHabits()
    const index = habits.findIndex(item => item.id === id)
    console.log(index)

    habits[index].name = name
    habits[index].frequency = frequency
    habits[index].priority = priority
    habits[index].user = user

    await fs.writeFile("src/data/myHabits.json", JSON.stringify(habits))
}