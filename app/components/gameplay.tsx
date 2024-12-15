import Woman from '/assets/woman.png'
import Image from 'next/image'

export default function Gameplay() {
    return (
        <section id="gameplay" className="bg-white dark:bg-gray-900">
            <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
                <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Jak Grać? (Gameplay)</h2>
                    <p className="mb-4">„Czas Wyborów: Droga do Prezydentury” to gra, która łączy elementy strategii, symulacji i interaktywnej narracji, gdzie Twoje decyzje mają ogromny wpływ na wynik kampanii. Oto, jak rozpocząć swoją polityczną przygodę i zdobyć najwyższy urząd w państwie.</p>
                </div>
                <div className="gap-4 mt-8">
                    {/* <Image className="w-full rounded-lg" src={Woman} alt="office content 1"></Image> */}
                    {/* <Image className="mr-2 w-full rounded-lg"
                        src={Man}
                        width={500}
                        height={500}
                        alt="Logo"
                    /> */}
                    <Image className="mr-2"
                        src={Woman}
                        width={500}
                        height={500}
                        alt="Logo"
                    />

                    {/* <img className="mt-4 w-full lg:mt-10 rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png" alt="office content 2" /> */}
                </div>
            </div>
        </section>
    );
};