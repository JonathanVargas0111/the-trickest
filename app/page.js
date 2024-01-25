import CollaboratorsSection from "@/components/collaborators/CollaboratorsSection"
import Hero from "@/components/Hero"
import ChampionsSection from "@/components/champions/ChampionsSection"
import Steps from "@/components/steps/StepsSection"
import Image from "next/image"
import InstagramSection from "@/components/instagramComponent/InstagramSection"
import GradientBackground from "@/components/common/GradientBackground"


export const metadata= {
  title: 'Concurso de Skate - Resultados y Detalles',
  description: 'Descubre a los ganadores, fechas del evento, información sobre cómo participar, nuestros colaboradores y mantente conectado a través de nuestras redes sociales para las últimas actualizaciones del emocionante concurso de skate.',
  keywords: ['Concurso de Skate', 'Ganadores', 'Fechas del Evento', 'Cómo Participar', 'Colaboradores', 'Redes Sociales']
};



export default function Home() {
  
  return (
    <div className="w-full">
      <Hero />
      <GradientBackground>
        <div className="p-20 flex justify-center items-center flex-col gap-6 ">
          <h3 className="text-5xl">¡Evento Épico en Curso!</h3>
          <p className="text-lg">
            <span className="font-semibold">Fecha de Apertura:</span> 8 de Octubre
            <span className="mx-2">-</span>
            <span className="font-semibold">Fecha de Cierre:</span> 1 de Noviembre
          </p>
        </div>

      </GradientBackground>
      <ChampionsSection />
      <Steps />
      <CollaboratorsSection />
      <InstagramSection />
    </div>

  )
}
