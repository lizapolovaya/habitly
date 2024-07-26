"use server"
import fs from "fs/promises";

export default async function addHabit(name, frequency, priority) {
    const habit = {name, frequency, priority}
    await fs.writeFile("habit.txt", JSON.stringify(habit))
    return true
}