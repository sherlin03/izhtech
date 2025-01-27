import { Button } from "flowbite-react";

export default function Projects() {
    return(
        <>
        <section className="flex justify-center px-10 py-10 bg-[#F0F3FF]">
        <div className="container ">

            <p className="text-5xl font-extrabold">
                Our Projects
            </p>
            <p className="text-base mt-3">
            Leave us a little info, and we’ll be in touch.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2">

                <div className="h-auto place-self-start  lg:place-self-center mt-10 lg:mt-0">
                  
                        <p className="text-[#738FFF] text-base">
                            oasis sports academy
                        </p>
                        <p className="text-lg font-bold mt-4">
                            Oasis Sportopia
                        </p>
                        <p className="text-base mt-4 font-semibold">
                        Case Stydy,Perspectives
                        </p>
                        <p className="text-base mt-4">
                        Branding, Logo creation
                        </p>
                        <Button outline className="mt-4"> View More </Button>
                 
                </div>
                <div className="h-auto">
                    <img src="./images/Aboutpage/project1.png" alt="" className="w-full h-auto mt-10 lg:mt-0" />
                </div>




            </div>

        </div>
        </section>
        </>
    )
}