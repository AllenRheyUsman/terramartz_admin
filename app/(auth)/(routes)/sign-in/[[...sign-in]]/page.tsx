// In your sign-in page component
import { SignIn } from "@clerk/nextjs";

console.log("Rendering SignIn component");

export default function Page() {
  console.log("Inside Page component");
  return <SignIn />;
}
