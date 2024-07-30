export default function MyAccount() {
  return (
    <main className="flex min-h-screen flex-col items-start justify-start p-5 pl-10">
      <h1 className="text-2xl/8 font-semibold text-zinc-950 sm:text-xl/8 dark:text-white mb-10">My Account</h1>

      <div className="mt-10 flex items-center gap-x-6 lg:mt-0 lg:flex-shrink-0 mb-8">
          <a
            href="#"
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            LogOut
          </a>
      </div>
      <div className="mt-10 flex items-center gap-x-6 lg:mt-0 lg:flex-shrink-0 mb-8">
          <a
            href="#"
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Export data
          </a>
      </div>
      <div className="mt-10 flex items-center gap-x-6 lg:mt-0 lg:flex-shrink-0 mb-8">
          <a
            href="#"
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Restore data
          </a>
      </div>
    </main>
  );
}
