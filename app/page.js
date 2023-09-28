import Hero from "@/components/Hero"
import PreviousChampions from "@/components/PreviousChampions"
import Steps from "@/components/Steps"
import Image from "next/image"
export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <Steps />
      <PreviousChampions/>
    </div>

  )
}
