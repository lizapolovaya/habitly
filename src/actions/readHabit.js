"use server"

import readMyHabits from "./readMyHabits";

export default async function readHabit(id) {
    const habits = await readMyHabits()
    const habit = habits.find(item => item.id === id)
    return habit
}