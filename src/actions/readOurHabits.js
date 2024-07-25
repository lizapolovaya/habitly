"use server"

import list from "@/data/ourHabits.json";

export default async function readOurHabits() {
    return list
}