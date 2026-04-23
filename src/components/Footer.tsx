import { Container } from "lucide-react"



const Footer = () => {
    return (
        <footer className="footer footer-center  p-10">
            <aside>

                <Container className="w-10 h-10" />
                <p className="font-bold">
                    Fatma Cherat
                </p>
                <p>Copyright © {new Date().getFullYear()} -  Tous droits réservés</p>
            </aside>
        </footer>
    )
}

export default Footer