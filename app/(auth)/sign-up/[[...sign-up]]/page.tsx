"use client"

import { SignUp } from "@clerk/nextjs";
import { usePathname } from "next/navigation";

export default function Page() {
  console.log("sign-up");

  const pathname = usePathname();
  console.log(pathname);
  

  return (
    <div className="">
      <SignUp />
    </div>
  );
}
