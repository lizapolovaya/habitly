"use server"
import fs from "fs/promises";
import list from "@/data/ourHabits";

 export default async function readOurHabits() {
     const habits = await fs.readFile("src/data/myHabits.json", "UTF-8")
     return JSON.parse(habits)
}