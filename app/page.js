import CollaboratorsSection from "@/components/collaborators/CollaboratorsSection"
import Hero from "@/components/Hero"
import ChampionsSection from "@/components/champions/ChampionsSection"
import Steps from "@/components/steps/StepsSection"
import Image from "next/image"
import InstagramSection from "@/components/instagramComponent/InstagramSection"
export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <Steps />
      <ChampionsSection/>
      <CollaboratorsSection/>
      <InstagramSection/>
    </div>

  )
}
