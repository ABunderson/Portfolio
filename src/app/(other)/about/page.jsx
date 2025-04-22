"use client";
import { useRouter } from "next/navigation";

export default function About() {
  const router = useRouter();
  return (
    <>
      <h1>about page</h1>
      <button onClick={() => router.push('/')}>Go home</button>
    </>
  );
}
