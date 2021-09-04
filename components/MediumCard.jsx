import Image from "next/image"

function MediumCard({img,title}) {
    return (
        <div className="cursor-pointer hover:scale-105 transform duration-300 ease-out transition">
            <div className="relative h-96 w-96">
            <Image className="rounded-xl" src={img} layout="fill"/>

            </div>
            <h3 className="text-2xl mt-3">{title}</h3>
        </div>
    )
}

export default MediumCard
