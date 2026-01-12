"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import GradientButton from "../GradientButton"
import { ArrowRight } from "lucide-react";

export default function MessageScreen({ onNext }) {
    const [flipped, setFlipped] = useState(false);

    return (
        <div className="px-4 md:px-6 py-10 text-center">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-3xl md:text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-fuchsia-400 to-purple-400 drop-shadow mb-6 leading-tight"
            >
                A Special Message to my speacial girl mariya
            </motion.h2>

            <div className="mx-auto relative w-full max-w-3xl flex justify-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className=" h-auto max-w-xl bg-gradient-to-br from-pink-200 via-pink-100 to-pink-50 rounded-2xl shadow-lg p-4 md:p-6 text-center"
                >
                    <p className="text-[#301733] text-base md:text-lg leading-relaxed overflow-y-auto max-h-[400px] pr-2">
                        Happy Birthday, mari jaan! mri gol matol hawe mature thai gai che, jawan thai gai che official ready for nikah thai gai che, babes hwe responsibility avano time che, life changing time che, but dont worry goluu mai chu ne n mane toh emj jove tme shota baccha na jem raho enjoy kro life ne amj hr waras birthday ave mai hr vr new new surprise apu tme khush thvo and mne ghnu pyar kro, you are the bestes jaan je mne life ma malu and u kno sbsbi wdhre thanks toh jaan tmra ammi abba ne agar ye rate (21 waras phela) ye logo nu mood na bnte toh tme ka hote aaje, and mai koi biji kai kehvi dikri sthe hote, hahahaahah kidding haa, apne bhi mne bhi tmra jevi dikri jove sweetheart aam cute , beautiful caring, and business minded, and thank you for your support jaan...bas jaan hwe inshallah mili ne ghnu kai kehvu che and be ready for the surprise. I love you soo much jaan and a very very happy birthday mri jaan mari mariya maula tmri hr ummeed puri kare and tmra nikah mara sthe kri ape jldi and next year mai apna ghre tmru birthday banav. Love you soo much cuteeeee aliii pyar kri lav goluuuuu umahhhhh....
                    </p>
                </motion.div>
            </div>
        </div>
    )
}