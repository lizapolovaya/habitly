"use server"
import fs from "fs/promises";
import list from "@/data/myHabits";

export default async function readMyHabits() {
    const habits = await fs.readFile("src/data/myHabits.json", "UTF-8")
    return JSON.parse(habits)
}