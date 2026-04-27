import { useRef } from "react";
import emailjs from "emailjs-com";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export default function ContactModal({ isOpen, onClose }: Props) {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs.sendForm(
      "service_0wgg3pq",   
      "template_fcnhyx8",  
      form.current,
      "3qilx5lO2-_xq0HlL"    
    )
    .then(() => {
      alert("Merci ! Votre message a bien été reçu. Je vous répondrai dans les plus brefs délais.");
      form.current?.reset();
      onClose(); // ferme la popup
    })
    .catch(() => {
      alert("Erreur, veuillez réessayer");
    });
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>

        <button className="close-btn" onClick={onClose}>✖</button>

        <h2>Contactez-moi</h2>

        <form ref={form} onSubmit={sendEmail} className="contact-form">
          
          <input
            type="text"
            name="user_name"
            placeholder="Votre nom et prénom"
            required
          />

          <input
            type="email"
            name="user_email"
            placeholder="Votre email"
            required
          />

          <textarea
            name="message"
            placeholder="Votre message"
            required
          />

          <button type="submit">Envoyer</button>

        </form>
      </div>
    </div>
  );
}