"use server"
import fs from "fs/promises";

export default async function readHabit() {
    const habit = await fs.readFile("habit.txt", "UTF-8")
    return JSON.parse(habit)
}