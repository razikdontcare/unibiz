import React from "react";

export interface User {
  name?: string;
  email?: string;
  password?: string;
  role?: "admin" | "customer" | "seller";
}

export interface SubcategoryType {
  name: string;
  icon: React.JSX.Element;
}
