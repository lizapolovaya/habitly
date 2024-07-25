import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/Navigation";


export default function CreateHabit() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Create Habit

      <h2>Fillout the form below to create a new habit:</h2>


       <label for="habname">Habit name:</label>
       <input type="text" id="habname" name="habname"/><br></br>
       

       <label for="frequency">Select how often you want to do it:</label>
         <select name="freaquency" id="freaquency" multiple>
         <option value="monday">1</option>
         <option value="tuesday">2</option>
         <option value="wednesday">3</option>
         <option value="thursday">4</option>
         <option value="friday">5</option>
         <option value="saturday">6</option>
         <option value="sunday">7</option>
       </select>

       <label for="emoji">Select an emoji for your habit:</label>
      

       <input type="submit" value="Submit"/>


      <Navigation/>


    </main>
  );
}
