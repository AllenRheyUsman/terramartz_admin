import { SignUp } from "@clerk/nextjs";

export default function Page() {
  console.log("Rendering SignUp Page"); // Log when the component is rendered
  return (
    <div>
      <p>Debugging SignUp Page</p>
      <SignUp />
    </div>
  );
}
