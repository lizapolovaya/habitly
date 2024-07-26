"use client"

import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import addHabit from "@/actions/addHabit";
import updateHabit from "@/actions/updateHabit";


export default function CreateHabit() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Create Habit

      <h2>Fillout the form below to create a new habit:</h2>

      <button onClick={(event) => {
        console.log(event.target)
      }} onMouseLeave={(event) => {
        console.log(event.target)
      }}>Liza</button>

      <input type="button" value="Dan" onMouseEnter={(event) => {
        console.log(event.target)
      }} onClick={(event) => {
        console.log(event.target)
      }} />

       <form method="POST" onSubmit={async function (event){
          event.preventDefault()
          console.log(event.target)
          const name = event.target.querySelector("#habname").value
          const frequency = event.target.querySelector("#frequency").value
          const priority = event.target.querySelector("#priority").value
          await addHabit(name, frequency, priority)
       }}>

        <label htmlFor="habname">Habit name:</label>
        <input type="text" id="habname" name="habname" required/><br></br>
        

        <label htmlFor="frequency">Select how often you want to do it:</label>
        <select name="frequency" id="frequency" multiple required>
          <option value="monday">1</option>
          <option value="tuesday">2</option>
          <option value="wednesday">3</option>
          <option value="thursday">4</option>
          <option value="friday">5</option>
          <option value="saturday">6</option>
          <option value="sunday">7</option>
        </select>

        <label htmlFor="priority">Select how important this habit is:</label>
        <select name="priority" id="priority" required>
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>

        <label htmlFor="emoji">Select an emoji for your habit:</label>
        

        <input type="submit" value="Create"/>

       </form>


       <form method="POST" onSubmit={async function (event){
          event.preventDefault()
          console.log(event.target)
          const name = event.target.querySelector("#habname").value
          const frequency = event.target.querySelector("#frequency").value
          const priority = event.target.querySelector("#priority").value
          await addHabit(name, frequency, priority)
       }}>

        <label htmlFor="habname">Habit name:</label>
        <input type="text" id="habname" name="habname" required/><br></br>
        

        <label htmlFor="frequency">Select how often you want to do it:</label>
        <select name="frequency" id="frequency" multiple required>
          <option value="monday">1</option>
          <option value="tuesday">2</option>
          <option value="wednesday">3</option>
          <option value="thursday">4</option>
          <option value="friday">5</option>
          <option value="saturday">6</option>
          <option value="sunday">7</option>
        </select>

        <label htmlFor="priority">Select how important this habit is:</label>
        <select name="priority" id="priority" required>
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>

        <label htmlFor="emoji">Select an emoji for your habit:</label>
        

        <input type="submit" value="Create"/>

       </form>

      <Navigation/>


    </main>
  );
}
