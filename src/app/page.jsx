import Link from "next/link";
import Navigation from "@/components/Navigation";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Home</h1>

      <div class="multiselect">
    <label><input type="checkbox" name="" value="1" /> Hydration - 1.5L of water a day </label> <br />
    <label><input type="checkbox" name="" value="2" /> Going to bed before 12 AM</label> <br />
    <label><input type="checkbox" name="" value="3" /> Meditation - 10 mins </label> <br />
    <label><input type="checkbox" name="" value="4" /> Training session </label> <br />
    <label><input type="checkbox" name="" value="5" /> 30 mins walk </label> <br />
    <label><input type="checkbox" name="" value="6" /> Limit Instagram to 30 mins a day </label> <br />
    <label><input type="checkbox" name="" value="7" /> No screen 1 hour before the bed </label> <br />
    <label><input type="checkbox" name="" value="8" /> Eating min of 400g of veggies a day </label> <br />
    <label><input type="checkbox" name="" value="9" /> 1h of reading </label> <br />
    <label><input type="checkbox" name="" value="10" /> Quality time with a loved one </label> <br />
</div>

    <Navigation/>

    </main>
  );
}
