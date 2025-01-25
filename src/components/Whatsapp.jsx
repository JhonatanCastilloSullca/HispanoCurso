import { FloatingWhatsApp } from "react-floating-whatsapp"

function WhatsappFloating() {
    return (
        <FloatingWhatsApp
            phoneNumber="+41 79 298 93 56"
            accountName="Dante Yepez"
            avatar="https://www.w3schools.com/howto/img_avatar.png"
            chatMessage="Bonjour, avez-vous besoin d'informations ?"
            darkMode={false}
            allowClickAway={true}
            allowEsc={true}
            size="56px"
            backgroundColor="#25D366"
            iconColor="#FFFFFF"
        />
    )
}

export default WhatsappFloating