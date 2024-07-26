"use client"

export default function UpdateForm({habit}) {
    console.log(habit)
    return (
        <form method="POST" onSubmit={async function (event){
            event.preventDefault()
            const name = event.target.querySelector("#habname").value
            const frequency = event.target.querySelector("#frequency").value
            const priority = event.target.querySelector("#priority").value
            console.log(priority)
            await updateHabit(name, frequency, priority)
         }}>
  
          <label htmlFor="habname">Habit name:</label>
          <input type="text" id="habname" name="habname" value={habit.name} required/><br></br>
          
  
          <label htmlFor="frequency">Select how often you want to do it:</label>
          <select name="frequency" id="frequency" value={habit.frequency} multiple required>
            <option value="monday">1</option>
            <option value="tuesday">2</option>
            <option value="wednesday">3</option>
            <option value="thursday">4</option>
            <option value="friday">5</option>
            <option value="saturday">6</option>
            <option value="sunday">7</option>
          </select>
  
          <label htmlFor="priority">Select how important this habit is:</label>
          <select name="priority" id="priority" value={habit.priority} required>
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>
  
          <label htmlFor="emoji">Select an emoji for your habit:</label>
          
  
          <input type="submit" value="Create"/>
  
         </form>
  
    );
  }