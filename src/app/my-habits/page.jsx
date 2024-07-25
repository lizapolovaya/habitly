import Navigation from "@/components/Navigation";


export default function MyHabits() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>My Habits</h1>

      <h2>The list of habits</h2>

      <ul>
          <li> Hydration - 1.5L of water a day </li>
          <li> Going to bed before 12 AM </li>
          <li> Meditation - 10 mins </li>
          <li> Training session </li>
          <li> 30 mins walk </li>
          <li> Limit Instagram to 30 mins a day </li>
          <li> No screen 1 hour before the bed </li>
          <li> Eating min of 400g of veggies a day </li>
          <li> 1h of reading </li>
          <li> Quality time with a loved one </li>
    </ul> 

    <button type="button">Add a new habit</button>

    <Navigation/>


    </main>
  );
}
