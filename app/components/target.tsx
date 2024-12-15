import Advisor from '/assets/advisor.png'
import Image from 'next/image'

export default function Target() {
    return (
        <section id="target" className="bg-white dark:bg-gray-900">
            <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
                <div className="gap-4 mt-8">
                <Image className="mr-2 rounded-lg"
                            src={Advisor}
                            width={500}
                            height={500}
                            alt="Logo"
                        />
                </div>
                <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Dla Kogo Jest Ta Gra?</h2>
                    <p className="mb-4">&quot;Czas Wyborów: Droga do Prezydentury&quot; to gra, która łączy elementy strategii, symulacji i polityki, a więc jest idealna dla szerokiego kręgu graczy. Jeśli kiedykolwiek marzyłeś o prowadzeniu kampanii wyborczej, podejmowaniu kluczowych decyzji politycznych i walce o fotel prezydenta, to ta gra jest właśnie dla Ciebie!</p>
                </div>
            </div>
        </section>
    );
};