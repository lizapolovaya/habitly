"use server"
import fs from "fs/promises";
import { v4 as uuidv4 } from 'uuid';

export default async function addHabit(name, frequency, priority, user) {
    const habit = {name, frequency, priority, user}
    habit.id = uuidv4();
    console.log(habit)
    // await fs.writeFile("habit.txt", JSON.stringify(habit))
    // return true
    //open the file
    const habits = await fs.readFile("src/data/myHabits.json", "UTF-8")
    console.log(habits)
    //convert string into list
    const habitsList = JSON.parse(habits)
    console.log(habitsList)

    //push item to the list
    habitsList.unshift(habit)
    //convert list into string
    const habitsString = JSON.stringify(habitsList)
    //write a string
    await fs.writeFile("src/data/myHabits.json", habitsString)
    //save the file
}