"use server"

import list from "@/data/myHabits.json";

export default async function readMyHabits() {
    return list
}