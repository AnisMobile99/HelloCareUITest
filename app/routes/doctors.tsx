import React from "react";
import { Outlet } from "@remix-run/react";

export default function DoctorsLayout() {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-2xl font-bold">Section Médecins</h1>
      <Outlet />
    </div>
  );
}
