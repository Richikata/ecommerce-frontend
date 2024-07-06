import { Button } from "@/components/ui/button"

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 bg-gray-100">
      <div className="text-xl font-bold">Your Logo</div>
      <div>
        <Button variant="ghost" className="mr-2">Home</Button>
        <Button variant="ghost" className="mr-2">About</Button>
        <Button variant="ghost">Contact</Button>
      </div>
    </nav>
  );
}