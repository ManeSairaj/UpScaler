import { SignIn } from "@clerk/nextjs";

export default function Page() {
  console.log(1);

  return (
    <div className="bg-black h-screen w-screen">
      <SignIn />
    </div>
  );
}
