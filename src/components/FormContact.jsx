import { useEffect, useState } from 'react';

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

        // Validación básica
        if (!name || !email || !phone || !message || !policy) {
            setFormStatus('Veuillez remplir tous les champs.');
            return;
        }

        // Simular el envío del formulario (Aquí deberías hacer la lógica real)
        try {
            // Simulación de respuesta exitosa
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
        // Selecciona una imagen aleatoria al cargar el componente
        const randomIndex = Math.floor(Math.random() * images.length);
        setRandomImage(images[randomIndex]);
    }, []);

    return (
        <div className="grid grid-cols-2 gap-4 justify-center items-center align-middle">
            <div className="bg-brownDark/40 dark:bg-white/40 rounded-md">
                <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-brownDark dark:text-white">
                        Contactez-nous
                    </h2>
                    <form action="#" className="space-y-8">
                        <div>
                            <label
                                htmlFor="name"
                                className="block mb-2 text-sm font-medium text-grayDark dark:text-grayMedium"
                            >
                                Votre nom
                            </label>
                            <input
                                type="text"
                                id="name"
                                className="shadow-sm bg-gray-50 border border-gray-300 text-grayDark text-sm rounded-lg focus:ring-yellowPrimary focus:border-yellowPrimary block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-grayDark dark:text-white dark:focus:ring-yellowPrimary dark:focus:border-yellowPrimary dark:shadow-sm-light"
                                placeholder="Votre nom complet"
                                required
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="email"
                                className="block mb-2 text-sm font-medium text-grayDark dark:text-grayMedium"
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
                        <div>
                            <label
                                htmlFor="phone"
                                className="block mb-2 text-sm font-medium text-grayDark dark:text-grayMedium"
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
                        <div>
                            <label
                                htmlFor="message"
                                className="block mb-2 text-sm font-medium text-grayDark dark:text-grayMedium"
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
                        <div className="flex items-center">
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
                        <button
                            type="submit"
                            className="py-3 px-5 text-sm font-medium text-center text-black border  hover:text-white transition duration-300 ease-in-out rounded-lg bg-yellowPrimary sm:w-fit hover:bg-yellowSecondary focus:ring-4 focus:outline-none focus:ring-yellowPrimary dark:bg-yellowPrimary dark:hover:bg-yellowSecondary dark:focus:ring-yellowPrimary"
                        >
                            Envoyer le message
                        </button>
                    </form>
                </div>
            </div>


            <div>
                <img
                    src={randomImage}
                    alt="Perfil"
                    className=" img-instructor  mx-12 rounded-xl"
                />
            </div>
        </div>
    );
}
