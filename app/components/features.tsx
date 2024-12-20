import Man from '/assets/man.png'
import Image from 'next/image'


export default function Features() {
    return (
        <section id="features" className="bg-white dark:bg-gray-900">
            <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">

                <div className="gsap-4 mt-8">
                    <Image className="mr-2 w-full rounded-lg"
                        src={Man}
                        width={500}
                        height={500}
                        alt="Logo"
                    />
                    {/* <img className="w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png" alt="office content 1" />
                    <img className="mt-4 w-full lg:mt-10 rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png" alt="office content 2" /> */}
                </div>
                <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Dlaczego Warto Zagrać?</h2>
                    <p className="mb-4">Zanurz się w emocjonującym świecie polityki i wyborów prezydenckich. Gra oferuje wyjątkową okazję, by stać się liderem kraju, podejmować strategiczne decyzje i kształtować przyszłość narodu. Przeżyj ekscytującą kampanię wyborczą, zmagając się z rywalami, negocjując z mediami i zdobywając serca wyborców. Każda decyzja ma znaczenie – od kształtowania wizerunku po wybór kluczowych sojuszników. Czeka na Ciebie intensywna rozgrywka, która pozwoli poczuć się jak prawdziwy lider!</p>
                </div>
            </div>
        </section>
    );
};

