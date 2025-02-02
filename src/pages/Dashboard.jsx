import React from "react";
import { fetchData } from "../helpers";
import { useLoaderData } from "react-router-dom";

// components
import { Intro } from "../components/Intro";
import { toast } from "react-toastify";

// loader
export function dashboardLoader() {
  const userName = fetchData("userName");
  return { userName };
}

// action
export async function dashboardAction({ request }) {
  const data = await request.formData();
  const formData = Object.fromEntries(data);
  try {
    localStorage.setItem("userName", JSON.stringify(formData.userName));
    return toast.success(`Welecome, ${formData.userName}`);
  } catch (e) {
    throw new Error("There was a problem creating your account.");
  }
}

export const Dashboard = () => {
  const { userName } = useLoaderData();
  return (
    <>
      <h1> {userName ? <p> {userName}</p> : <Intro />} </h1>
    </>
  );
};
