import { redirect } from "react-router-dom";

// helpers
import { deleteItem } from "../helpers";

// library
import { toast } from "react-toastify";

export async function logoutAction() {
  deleteItem({ key: "userName" });
  toast.success("You've deleted your account!");
  return redirect("/");
}
