import React from 'react'

export default function SkillsPage() {
  const tecnologies = [
    {
      name: "HTML",
      icon: "https://media.canva.com/v2/image-resize/format:PNG/height:200/quality:100/uri:ifs%3A%2F%2FM%2F1563ef9f-4be2-42d4-a1d6-8dc2cd6ea9f4/watermark:F/width:200?csig=AAAAAAAAAAAAAAAAAAAAAMKSzlkPgDtjT5R2OM7s7s83uE2RMAyxWXz_COn_XKw3&exp=1747389037&osig=AAAAAAAAAAAAAAAAAAAAALGB8s6Nd8zQrVDvVHb5M8xFj1FvwmXGAviiYtJPWRjh&signer=media-rpc&x-canva-quality=thumbnail"
    },
    {
      name: "CSS",
      icon: "https://media.canva.com/v2/image-resize/format:PNG/height:200/quality:100/uri:ifs%3A%2F%2FM%2F1528c945-6546-4231-894e-35f15e11683d/watermark:F/width:200?csig=AAAAAAAAAAAAAAAAAAAAAI0UKLfQFTcROzXVPaq7elsdzSkkdrr2PF_5_4jmZtue&exp=1747388575&osig=AAAAAAAAAAAAAAAAAAAAALEg6mxAPTw5VeINdBQSZkow3RqyJjumZO_cWtLWe3JQ&signer=media-rpc&x-canva-quality=thumbnail"
    },
    {
      name: "Tailwind",
      icon: "https://media.canva.com/v2/image-resize/format:JPG/height:200/quality:75/uri:ifs%3A%2F%2FM%2Fb9e3f9f1-a825-4d65-96d7-58fdb31ea764/watermark:F/width:200?csig=AAAAAAAAAAAAAAAAAAAAAPd05_77mbvks5gK21i5EgM2Mx90zY9resO1APvZ9RF8&exp=1747388504&osig=AAAAAAAAAAAAAAAAAAAAABpNkA6PJ6zPmIBk2J-IROPIE94MwAxDNi5VmLrGG2xr&signer=media-rpc&x-canva-quality=thumbnail"
    },
    {
      name: "JavaScript",
      icon: "https://media.canva.com/v2/image-resize/format:PNG/height:200/quality:100/uri:ifs%3A%2F%2FM%2F17f38bdf-de28-4f53-beac-44ec880e500d/watermark:F/width:200?csig=AAAAAAAAAAAAAAAAAAAAAC326CfkZqq5jPmE0VhfweV8hfmNy0PYzAIB5na0tif_&exp=1747389041&osig=AAAAAAAAAAAAAAAAAAAAAGar1dMvymrb8USvJTcvB-FToZPkqd9pBbS4T5v9-bPb&signer=media-rpc&x-canva-quality=thumbnail"
    },
    {
      name: "TypeScript",
      icon: "https://media.canva.com/v2/image-resize/format:PNG/height:200/quality:100/uri:ifs%3A%2F%2FM%2F3e243f5a-7d50-4cc2-bb52-38beb7801c94/watermark:F/width:187?csig=AAAAAAAAAAAAAAAAAAAAAHZRj7RUqY1lOap0fPmVxCX4vB0TRPvUlGEi_Hs-oU_E&exp=1747388596&osig=AAAAAAAAAAAAAAAAAAAAAGZCubTnJqufYBfguE_b-t6bz8f-KJXKxsgGcqn9Aae9&signer=media-rpc&x-canva-quality=thumbnail"
    },
    {
      name: "Node.js",
      icon: "https://media.canva.com/v2/image-resize/format:PNG/height:200/quality:100/uri:ifs%3A%2F%2FM%2F4e4460b9-5de7-451a-bf06-504348dd3d67/watermark:F/width:200?csig=AAAAAAAAAAAAAAAAAAAAAJMmhb6WcW5hx2VNzuZmkBgUAVHlFx2abvhpftl9jrra&exp=1747389123&osig=AAAAAAAAAAAAAAAAAAAAAPgIWieg-mgEeRcBu87BY9lfnzjXpjkrNcK-alX7-RZM&signer=media-rpc&x-canva-quality=thumbnail"
    },
    {
      name: "MongoDB",
      icon: "https://media.canva.com/v2/image-resize/format:PNG/height:200/quality:100/uri:ifs%3A%2F%2FM%2Fdad87d02-12d6-4ab6-b102-1c27e9068467/watermark:F/width:200?csig=AAAAAAAAAAAAAAAAAAAAAOm7zDxt5yQcad0RUvhptDyYu7HagUIpQbPqaDhRaXV0&exp=1747388057&osig=AAAAAAAAAAAAAAAAAAAAAER4khOfTVwUVvPknCWHfcCnp0NIvg4u7eSv8JjVd4Nc&signer=media-rpc&x-canva-quality=thumbnail"
    },
    {
      name: "React.js",
      icon: "https://media.canva.com/v2/image-resize/format:PNG/height:200/quality:100/uri:ifs%3A%2F%2FM%2F5f33e729-6748-4fa2-b5ff-e2986e00d0cb/watermark:F/width:200?csig=AAAAAAAAAAAAAAAAAAAAAKdPstDIsiqe3Or5ccLS0LImaAxK_e0pvVphKhC5A7VX&exp=1747389320&osig=AAAAAAAAAAAAAAAAAAAAAOObno47DKYdTVFgEl9ImGTvksVpASWRWbcG9XKlisDV&signer=media-rpc&x-canva-quality=thumbnail"
    },
    {
      name: "Next.js",
      icon: "https://img.icons8.com/?size=100&id=yUdJlcKanVbh&format=png&color=000000"
    },
    {
      name: "Express.js",
      icon: "https://media.canva.com/v2/image-resize/format:PNG/height:108/quality:100/uri:ifs%3A%2F%2FM%2Fbb2ae215-b697-48c7-99f1-88548808d543/watermark:F/width:200?csig=AAAAAAAAAAAAAAAAAAAAAIS_MPsPtRS6omwGZRXpeBiWVI4ajICRjG2EfpINJPWa&exp=1747388642&osig=AAAAAAAAAAAAAAAAAAAAAFwWqLgXzmMZYG0tR3gLOSofUM8qqli_6qgNjbErOcBh&signer=media-rpc&x-canva-quality=thumbnail"
    },
    {
      name: "MySQL",
      icon: "https://media.canva.com/v2/image-resize/format:PNG/height:200/quality:100/uri:ifs%3A%2F%2FM%2Fdf670f15-9437-4513-9444-40b26d77e864/watermark:F/width:200?csig=AAAAAAAAAAAAAAAAAAAAAPiWmRnZVbZmY4Jeh0h0_1_JJD6mqKQ6IKChOvV4nKkh&exp=1747389068&osig=AAAAAAAAAAAAAAAAAAAAAItRGkU2il4bdQwbTBkA5mwx2iz_DEaTiliMLVmUXwIW&signer=media-rpc&x-canva-quality=thumbnail"
    },
    {
      name: "Python",
      icon: "https://media.canva.com/v2/image-resize/format:PNG/height:200/quality:100/uri:ifs%3A%2F%2FM%2F6854c04a-cb4f-43dc-a46e-2be0c809744a/watermark:F/width:200?csig=AAAAAAAAAAAAAAAAAAAAAOb1Y33qXq9wfuTi6hiheW5WRrl1hxyHcixieYg8teKN&exp=1747388588&osig=AAAAAAAAAAAAAAAAAAAAAKVnCCZEA2iJunssWYNwev4Kl_bwhZ-yQ0VloZ6PZ2Wz&signer=media-rpc&x-canva-quality=thumbnail"
    }
  ]
  return (
    <div className='w-full h-full flex flex-col items-center justify-center gap-14'>
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
