import { redirect } from "next/navigation";

export default function AccountPage() {
  return redirect("/settings/account/profile");
}
