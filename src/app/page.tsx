import { redirect } from "next/navigation";

export default function Home() {
  redirect("/projects/upgrade-app");
  return null;
}
