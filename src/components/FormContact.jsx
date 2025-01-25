import { Carousel } from 'flowbite';
import { useEffect, useState } from 'react';
import CarouselComponent from './CarouselComponent';

export default function ContactForm() {
    const [formStatus, setFormStatus] = useState('');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
        policy: false
    });

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { name, email, phone, message, policy } = formData;


        if (!name || !email || !phone || !message || !policy) {
            setFormStatus('Veuillez remplir tous les champs.');
            return;
        }


        try {

            setFormStatus('Merci! Votre message a été envoyé avec succès.');
        } catch (error) {
            setFormStatus('Erreur! Veuillez réessayer plus tard.');
        }

        setFormData({
            name: '',
            email: '',
            phone: '',
            message: '',
            policy: false
        });
    };
    const images = [
        "/images/Hispano_Curso_2.jpg",
        "/images/IMG_20210426_135106_845.jpg",
        "/images/IMG_20210426_135106_873.jpg",
        "/images/IMG_20210426_135106_904.jpg",
        "/images/IMG_20210426_135106_937.jpg",
        "/images/IMG_20210426_135337_504.jpg",
        "/images/IMG-20230426-WA0000.jpg",
        "/images/Photo_entrepise.png",

    ];
    const [randomImage, setRandomImage] = useState("/images/Hispano_Curso_2.jpg");

    useEffect(() => {

        const randomIndex = Math.floor(Math.random() * images.length);
        setRandomImage(images[randomIndex]);
    }, []);

    return (
        <>
            <div className="relative w-full mx-auto pb-12 max-w-full">

                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `url('/images/world-map-footer.webp')`,
                        backgroundSize: 'contain',
                        backgroundPosition: 'center',
                        opacity: 0.1,
                        zIndex: -1,
                    }}
                ></div>


                <div className="relative max-w-7xl mx-auto grid grid-cols-1 gap-6 lg:grid-cols-2 justify-center items-center align-middle px-4 ">
                    <div className="bg-brownDark/20 dark:bg-white/20 rounded-md">
                        <div className="py-6 px-4 mx-auto max-w-screen-sm lg:py-16 lg:px-8">
                            <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-center text-brownDark dark:text-white">
                                Contactez-nous
                            </h2>
                            <form action="#" className="grid grid-cols-12 gap-4">

                                <div className="col-span-12 md:col-span-6">
                                    <label
                                        htmlFor="name"
                                        className="block mb-2 text-sm font-medium text-grayDark dark:text-white"
                                    >
                                        Votre nom
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="shadow-sm bg-gray-50 border border-gray-300 text-grayDark dark:text-white text-sm rounded-lg focus:ring-yellowPrimary focus:border-yellowPrimary block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-grayDark dark:focus:ring-yellowPrimary dark:focus:border-yellowPrimary dark:shadow-sm-light"
                                        placeholder="Votre nom complet"
                                        required
                                    />
                                </div>


                                <div className="col-span-12 md:col-span-6">
                                    <label
                                        htmlFor="phone"
                                        className="block mb-2 text-sm font-medium text-grayDark dark:text-white"
                                    >
                                        Votre téléphone
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        className="shadow-sm bg-gray-50 border border-gray-300 text-grayDark text-sm rounded-lg focus:ring-yellowPrimary focus:border-yellowPrimary block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-grayDark dark:text-white dark:focus:ring-yellowPrimary dark:focus:border-yellowPrimary dark:shadow-sm-light"
                                        placeholder="Votre numéro de téléphone"
                                        required
                                    />
                                </div>


                                <div className="col-span-12 lg:col-span-12">
                                    <label
                                        htmlFor="email"
                                        className="block mb-2 text-sm font-medium text-grayDark dark:text-white"
                                    >
                                        Votre email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="shadow-sm bg-gray-50 border border-gray-300 text-grayDark text-sm rounded-lg focus:ring-yellowPrimary focus:border-yellowPrimary block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-grayDark dark:text-white dark:focus:ring-yellowPrimary dark:focus:border-yellowPrimary dark:shadow-sm-light"
                                        placeholder="email@example.com"
                                        required
                                    />
                                </div>


                                <div className="col-span-12">
                                    <label
                                        htmlFor="message"
                                        className="block mb-2 text-sm font-medium text-grayDark dark:text-white"
                                    >
                                        Votre message
                                    </label>
                                    <textarea
                                        id="message"
                                        rows="6"
                                        className="block p-2.5 w-full text-sm text-grayDark bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-yellowPrimary focus:border-yellowPrimary dark:bg-white dark:border-gray-600 dark:placeholder-grayDark dark:text-white dark:focus:ring-yellowPrimary dark:focus:border-yellowPrimary"
                                        placeholder="Laissez un commentaire..."
                                        required
                                    ></textarea>
                                </div>


                                <div className="col-span-12 flex items-center">
                                    <input
                                        type="checkbox"
                                        id="policy"
                                        className="w-4 h-4 text-yellowPrimary focus:ring-yellowPrimary border-gray-300 rounded dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-yellowPrimary dark:ring-offset-gray-800"
                                        required
                                    />
                                    <label
                                        htmlFor="policy"
                                        className="ml-2 text-sm font-medium text-grayDark dark:text-white"
                                    >
                                        J'accepte la politique de confidentialité
                                    </label>
                                </div>


                                <div className="col-span-12 flex justify-start">
                                    <button
                                        type="submit"
                                        className="py-3 px-5 text-sm font-medium text-left text-black border hover:text-white transition duration-300 ease-in-out rounded-lg bg-yellowPrimary sm:w-fit hover:bg-yellowSecondary focus:ring-4 focus:outline-none focus:ring-yellowPrimary dark:bg-yellowPrimary dark:hover:bg-yellowSecondary dark:focus:ring-yellowPrimary"
                                    >
                                        Envoyer le message
                                    </button>
                                </div>
                            </form>

                        </div>
                    </div>

                    <div className="flex justify-center items-center w-full h-full">

                        <div className="flex justify-center items-center w-full h-full">
                            <div className="w-full h-full object-cover">
                                <CarouselComponent images={images} />

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>


    );
}
