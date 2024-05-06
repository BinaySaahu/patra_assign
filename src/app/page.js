import Navbar from "@/components/Navbar";
import PopularTopics from "@/components/PopularTopics";
import SignUpPage from "@/pages/SignUpPage";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-[#071829] w-full h-screen flex justify-center items-center">
      <Navbar/>
      <PopularTopics/>
    </div>
  );
}
