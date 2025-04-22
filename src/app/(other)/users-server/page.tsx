import { revalidatePath } from "next/cache";

type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
};

export default async function UsersServer() {
  await new Promise((resolve) => setTimeout(resolve, 2000)); // wait two seconds
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();

  async function addUser(formData: FormData) { // from a different tutorial page
    "use server";
    const name = formData.get("name"); // name attribute
    const res = await fetch("api end point", {
      method: "POST",
      headers: { "Content-Type": "application/json",
        Authorization: 'Bearer YOUR_PRIVATE_KEY'
       },
      body: JSON.stringify({ name }),
    });
    const newUser = await res.json()
    revalidatePath('/users-server')
    console.log(newUser)
  }

  return (
    <ul className="space-y-4 p-4">
      {users.map((user: User) => (
        <li
          key={user.id}
          className="p-4 bg-white shadow-md rounded-lg text-gray-700"
        >
          {user.name} ({user.email})
        </li>
      ))}
    </ul>
  );
}
