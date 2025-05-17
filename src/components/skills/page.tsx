import React from 'react'

export default function SkillsPage() {
  const tecnologies = [
    {
      name: "HTML",
      icon: "/html.png"
    },
    {
      name: "CSS",
      icon: "/css.png"
    },
    {
      name: "Tailwind",
      icon: "/tailwind.png"
    },
    {
      name: "JavaScript",
      icon: "/js.png"
    },
    {
      name: "TypeScript",
      icon: "/TS.png"
    },
    {
      name: "Node.js",
      icon: "/node.png"
    },
    {
      name: "MongoDB",
      icon: "/mongodb.png"
    },
    {
      name: "React.js",
      icon: "/react.png"
    },
    {
      name: "Next.js",
      icon: "https://img.icons8.com/?size=100&id=yUdJlcKanVbh&format=png&color=000000"
    },
    {
      name: "Express.js",
      icon: "/express.png"
    },
    {
      name: "MySQL",
      icon: "/mySQL.png"
    },
    {
      name: "Python",
      icon: "/python.png"
    }
  ]
  return (
    <div className='w-full h-full flex flex-col items-center justify-center gap-14 px-2'>
      <div>
        <p className='text-xl text-primary font-bold text-center'>Skills &amp; Tecnologies</p>
        <p className='mt-1 text-sm'>Showcasing My Expertise And Technical Proficiencies</p>
      </div>
      <div className='w-full h flex items-center justify-center'>
        <div className='w-full h-auto max-w-4xl flex items-center justify-center gap-5 flex-wrap'>
          {tecnologies.map((item, id) => (
            <div key={id} className='min-w-[10rem] h-[3.5rem] border rounded-lg flex shadow-sm py-2 px-3 items-center flex-1 justify-center gap-3 cursor-pointer hover:scale-105 transition-all duration-200 ease-in-out hover:bg-primary/10'>
              <div className='w-[2.3rem] rounded-lg overflow-hidden'>
                <img src={item.icon} alt={item.name} className='w-full h-full object-fill' />
              </div>
              <p className='font-semibold'>{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
