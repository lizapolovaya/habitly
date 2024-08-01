"use server"
import fs from "fs/promises";
import list from "@/data/home.json";

export default async function readDailyHabits() {
    const habits = await fs.readFile("src/data/myHabits.json", "UTF-8")
    return JSON.parse(habits)
}