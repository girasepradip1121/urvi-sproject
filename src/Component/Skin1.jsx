import React, { useState } from 'react';
import { ChevronDown } from "lucide-react"


const Skin1 = () => {
    const [activeTab, setActiveTab] = useState('Overview');
    const [faqOpen, setFaqOpen] = useState([false, false, false]);

    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [date, setDate] = useState("")
    const [message, setMessage] = useState("")
    const [countryCode, setCountryCode] = useState("IND")

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    const toggleFaq = (index) => {
        const newFaqOpen = [...faqOpen];
        newFaqOpen[index] = !newFaqOpen[index];
        setFaqOpen(newFaqOpen);
    };

    const handleSubmit = e => {
        e.preventDefault()
        // Handle form submission logic here
        console.log({ name, phone, date, message, countryCode })
    };

    return (
        <div className="container mx-auto  px-4 grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-start">
            <div>
                {/* <div className="border border-[#9d4d79] mb-4">
                    <div className="flex flex-wrap md:flex-nowrap w-full">
                        {['Overview', 'Causes', 'Symptoms', 'Homeopathic Tratment', 'Faqs'].map((tab, index, arr) => (
                            <button
                                key={tab}
                                className={`flex-1 px-4 py-2 md:px-6 lg:px-3 lg:py-2 md:py-3 font-semibold text-sm md:text-base border-[#9d4d79]
                ${index !== arr.length - 1 ? 'border-r border-b md:border-b-0  md:border-r' : ''} 
                ${activeTab === tab ? 'text-white bg-[#9d4d79]' : 'text-gray-500 hover:text-gray-700'}`}
                                onClick={() => handleTabClick(tab)}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                </div> */}

                {/* {activeTab === 'Overview' && ( */}
                <div>
                   
                    <div className="text-gray-600">
                        

                        {/* Benefits of Homoeopathy for Skin Health */}
                        <div className="">
                            <h3 className="text-2xl font-semibold mb-2 text-gray-700">
                                Benefits of Homoeopathy for Skin Health
                            </h3>
                            <ul className="list-disc pl-5 space-y-3">
                                <li>
                                    <span className="font-semibold">Natural and gentle:</span>{" "}
                                    Remedies are made from natural substances, making them suitable and safe for all skin types, especially for those who wish to avoid harsh chemicals[1].
                                </li>
                                <li>
                                    <span className="font-semibold">Addresses underlying causes:</span>{" "}
                                    Homoeopathy focuses on treating the root causes of skin issues, supporting long-term relief and reducing recurrence[1].
                                </li>
                                <li>
                                    <span className="font-semibold">Minimal side effects:</span>{" "}
                                    When prescribed by a qualified practitioner, homoeopathic remedies are generally well-tolerated and have minimal side effects, making them a safer alternative for sensitive individuals[1].
                                </li>
                                <li>
                                    <span className="font-semibold">Holistic approach:</span>{" "}
                                    Homoeopathy considers the physical, emotional, and mental aspects of health, promoting overall well-being and comprehensive skin care[1][7].
                                </li>
                                <li>
                                    <span className="font-semibold">Customized treatment:</span>{" "}
                                    Each remedy is tailored to the individual's unique symptoms and characteristics, ensuring personalized care[1].
                                </li>
                            </ul>
                        </div>

                        {/* Advantages Over Conventional Treatments */}
                        <div className="mb-6">
                            <h3 className="text-xl font-semibold mb-2 text-gray-700">
                                Advantages Over Conventional Treatments
                            </h3>
                            <ul className="list-disc pl-5 space-y-3">
                                <li>
                                    <span className="font-semibold">Less risk of side effects:</span>{" "}
                                    Homoeopathic remedies are generally safer and less likely to cause adverse reactions compared to many conventional treatments[1].
                                </li>
                                <li>
                                    <span className="font-semibold">Long-term relief:</span>{" "}
                                    By addressing the underlying causes, homoeopathy aims for sustained improvement and reduced risk of recurrence[1][7].
                                </li>
                                <li>
                                    <span className="font-semibold">Holistic and integrative:</span>{" "}
                                    Homoeopathy can complement conventional skincare, offering a more comprehensive approach to skin health[1][7].
                                </li>
                            </ul>
                        </div>

                        {/* Principles of Homoeopathic Treatment */}
                        <div className="mb-6">
                            <h3 className="text-xl font-semibold mb-2 text-gray-700">
                                Principles of Homoeopathic Treatment
                            </h3>
                            <ul className="list-disc pl-5 space-y-3">
                                <li>
                                    <span className="font-semibold">Individualized treatment:</span>{" "}
                                    Remedies are selected based on the individual's unique symptoms, personality, and overall constitution[1].
                                </li>
                                <li>
                                    <span className="font-semibold">Holistic care:</span>{" "}
                                    Homoeopathy treats the whole person, not just the skin condition, considering both physical and emotional factors[1][7].
                                </li>
                                <li>
                                    <span className="font-semibold">Stimulating natural healing:</span>{" "}
                                    Remedies are designed to stimulate the body's own healing processes, supporting recovery from within[1].
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

               
            </div>

            <div className="max-w-md mx-auto p-6">
                <div className="border border-pink-300 rounded-lg p-6">
                    <h2 className="text-2xl font-bold text-center mb-6">Get In Touch</h2>

                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-gray-700 mb-2">
                                Full name
                            </label>
                            <input
                                type="text"
                                id="name"
                                placeholder="First name"
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-1 focus:ring-pink-400"
                                value={name}
                                onChange={e => setName(e.target.value)}
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="phone" className="block text-gray-700 mb-2">
                                Phone number
                            </label>
                            <div className="flex">
                                <div className="relative">
                                    <button
                                        type="button"
                                        className="flex items-center justify-between px-3 py-3 border border-gray-300 rounded-l-lg bg-white text-gray-700 focus:outline-none"
                                    >
                                        <span>{countryCode}</span>
                                        <ChevronDown className="ml-1 h-4 w-4" />
                                    </button>
                                    <div className="hidden absolute top-full left-0 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg z-10">
                                        <div
                                            className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
                                            onClick={() => setCountryCode("IND")}
                                        >
                                            IND
                                        </div>
                                        <div
                                            className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
                                            onClick={() => setCountryCode("USA")}
                                        >
                                            USA
                                        </div>
                                        <div
                                            className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
                                            onClick={() => setCountryCode("UK")}
                                        >
                                            UK
                                        </div>
                                    </div>
                                </div>
                                <input
                                    type="tel"
                                    id="phone"
                                    placeholder="+91 9999 999 999"
                                    // className="px-4 py-3 border border-gray-300 rounded-r-lg focus:outline-none focus:ring-pink-400"
                                    className="w-full px-3 py-2 sm:px-4 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-r-lg focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent"
                                    value={phone}
                                    onChange={e => setPhone(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="mb-4">
                            <label htmlFor="date" className="block text-gray-700 mb-2">
                                Select date
                            </label>
                            <div className="relative">
                                <input
                                    id="date"
                                    type="date"
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-1 focus:ring-pink-400 bg-white"
                                    value={date}
                                    onChange={e => setDate(e.target.value)}
                                >

                                </input>
                                {/* <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <ChevronDown className="h-5 w-5 text-gray-500" />
              </div> */}
                            </div>
                        </div>
                        {/* <div>
           <label className="block text-gray-700 mb-2 font-medium">
              Select date
            </label>
           <input
              type="date"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-1 focus:ring-pink-400"
              value={formData.date}
              onChange={(e) => setFormData({...formData, date: e.target.value})}
            />
          </div> */}

                        <div className="mb-6">
                            <label htmlFor="message" className="block text-gray-700 mb-2">
                                Message
                            </label>
                            <textarea
                                id="message"
                                rows={4}
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-1 focus:ring-pink-400"
                                value={message}
                                onChange={e => setMessage(e.target.value)}
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-[#b05888] text-white py-3 px-4 rounded-lg hover:bg-[#9d4d79] transition-colors"
                        >
                            Book an appointment
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Skin1;





