import { useState } from 'react';
import emailjs from 'emailjs-com';

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
            setFormStatus('Por favor, complete todos los campos.');
            return;
        }

        const templateParams = {
            to_email: "danteyepez1980@gmail.com, info@hispanocurso.com",
            from_name: name,
            from_email: email,
            from_phone: phone,
            message: message
        };

        try {
            await emailjs.send(
                'service_u1l78g9',
                'template_i0u6nc4',
                templateParams,
                'O85jCDtgfXL3cqPPy'
            );

            setFormStatus('¡Gracias! Su mensaje ha sido enviado con éxito.');
            setFormData({ name: '', email: '', phone: '', message: '', policy: false });
        } catch (error) {
            setFormStatus('¡Error! Por favor, inténtelo más tarde.');
        }
    };


    return (
        <div className="relative w-full mx-auto pb-12 max-w-full">
            <div className="relative max-w-7xl mx-auto grid grid-cols-1 gap-6 lg:grid-cols-2 justify-center items-center align-middle px-4 ">
                <div className="bg-brownDark/20 dark:bg-white/20 rounded-md">
                    <div className="py-6 px-4 mx-auto max-w-screen-sm lg:py-16 lg:px-8">
                        <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-center text-brownDark dark:text-white">
                            Contactez-nous
                        </h2>
                        <form onSubmit={handleSubmit} className="grid grid-cols-12 gap-4">
                            <div className="col-span-12 md:col-span-6">
                                <label htmlFor="name" className="block mb-2 text-sm font-medium text-grayDark dark:text-white">
                                    Votre nom
                                </label>
                                <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} required
                                    className="shadow-sm bg-gray-50 border text-grayDark text-sm rounded-lg focus:ring-yellowPrimary focus:border-yellowPrimary block w-full p-2.5" />
                            </div>
                            <div className="col-span-12 md:col-span-6">
                                <label htmlFor="phone" className="block mb-2 text-sm font-medium text-grayDark dark:text-white">
                                    Votre téléphone
                                </label>
                                <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleInputChange} required
                                    className="shadow-sm bg-gray-50 border text-grayDark text-sm rounded-lg focus:ring-yellowPrimary focus:border-yellowPrimary block w-full p-2.5" />
                            </div>
                            <div className="col-span-12">
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-grayDark dark:text-white">
                                    Votre email
                                </label>
                                <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} required
                                    className="shadow-sm bg-gray-50 border text-grayDark text-sm rounded-lg focus:ring-yellowPrimary focus:border-yellowPrimary block w-full p-2.5" />
                            </div>
                            <div className="col-span-12">
                                <label htmlFor="message" className="block mb-2 text-sm font-medium text-grayDark dark:text-white">
                                    Votre message
                                </label>
                                <textarea id="message" name="message" rows="6" value={formData.message} onChange={handleInputChange} required
                                    className="block p-2.5 w-full text-sm text-grayDark bg-gray-50 rounded-lg shadow-sm border focus:ring-yellowPrimary focus:border-yellowPrimary"></textarea>
                            </div>
                            <div className="col-span-12 flex items-center">
                                <input type="checkbox" id="policy" name="policy" checked={formData.policy} onChange={handleInputChange} required
                                    className="w-4 h-4 text-yellowPrimary focus:ring-yellowPrimary border-gray-300 rounded" />
                                <label htmlFor="policy" className="ml-2 text-sm font-medium text-grayDark dark:text-white">
                                    J'accepte la politique de confidentialité
                                </label>
                            </div>
                            <div className="col-span-12 flex justify-start">
                                <button type="submit" className="py-3 px-5 text-sm font-medium text-black border hover:text-white transition duration-300 ease-in-out rounded-lg bg-yellowPrimary hover:bg-yellowSecondary focus:ring-4 focus:outline-none">
                                    Envoyer le message
                                </button>
                            </div>
                            {formStatus && <p className="col-span-12 text-center text-sm text-red-500">{formStatus}</p>}
                        </form>
                    </div>
                </div>
                <div className="flex justify-center items-center w-full">
                    <img src="/images/banner_01_curvas.png" alt="" className='w-full object-cover' />
                </div>
            </div>
        </div>
    );
}
