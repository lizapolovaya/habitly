import Navigation from "@/components/Navigation";


export default function MyAccount() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      My Account

      <button type="button">LogOut</button>
      <button type="button">Export data</button>
      <button type="button">Restore data</button>

      <Navigation homeOnly={true}/>

    </main>
  );
}
