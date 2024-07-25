import Link from "next/link";


export default function Navigation({ homeOnly }) {
  return (
    <div>
      
      <Link href='/'>Home</Link>
      {!homeOnly && (<>
      <Link href='/my-habits'>My Habits</Link>
      <Link href='/create-habit'>Create Habit</Link>
      <Link href='/my-account'>My Account</Link>
     
      </>)
      }
      

    </div>
  );
}
