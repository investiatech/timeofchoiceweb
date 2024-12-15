import { Button } from "@/components/ui/button";
import Image from 'next/image'
import Logo from '/assets/mockup.png'
import Link from "next/link";

export default function Hero() {
    return (
        <section className="bg-gray-50">
            <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-32 lg:grid-cols-12">
                <div className="mr-auto place-self-center lg:col-span-7">
                    <div className="font-light text-gray-500 py-4">Najnowsza Gra Mobilna, Dostępnej na iOS i Androida</div>
                    <h1 className="max-w-2xl mb-4 text-5xl font-black tracking-tight leading-none md:text-6xl xl:text-6xl dark:text-white">Czas Wyborów Droga do Prezydentury.</h1>
                    <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Stwórz swoją kampanię, zbuduj poparcie wśród obywateli i przeprowadź grę polityczną na najwyższym szczeblu, by zdobyć najwyższy urząd w państwie! Wykorzystaj swoje umiejętności negocjacji, zaufanie mediów i strategię wyborczą, aby pokonać rywali i zdobyć serca wyborców.</p>
                    <Link href="#price"><Button className="inline-flex items-center justify-center px-5 py-3 mr-3">
                        Zamów w Przedsprzedaży
                        <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </Button></Link>
                    <Link href="https://github.com"><Button variant="ghost" className="inline-flex items-center justify-center px-5 py-3">
                        GitHub
                        <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </Button></Link>
                </div>
                <div className="mt-12 lg:mt-0 lg:col-span-5 lg:flex">
                    <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px]">
                        <div className="h-[32px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[17px] top-[72px] rounded-s-lg"></div>
                        <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
                        <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
                        <div className="h-[64px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg"></div>
                        <div className="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800">
                            <Image className="mr-2 w-[272px] h-[572px]"
                                src={Logo}
                                width={500}
                                height={550}
                                alt="People"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};