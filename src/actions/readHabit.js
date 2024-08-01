"use server"
import fs from "fs/promises";

export default async function readHabit() {
    const habits = await fs.readFile("src/data/myHabits.json", "UTF-8")
    return JSON.parse(habits)
}