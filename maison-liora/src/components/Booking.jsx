import { useState } from "react";

function Booking() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="booking" className="booking-section">
      <div className="container booking-grid">
        <div className="booking-copy">
          <div className="section-title">
            <span>Réservation</span>
            <h2>Réservez votre moment beauté en quelques instants.</h2>
            <p>
              Choisissez votre soin, indiquez vos préférences et nous vous
              recontactons rapidement pour confirmer votre rendez-vous.
            </p>
          </div>

          <ul className="booking-points">
            <li>Confirmation rapide du rendez-vous.</li>
            <li>Horaires flexibles selon disponibilité.</li>
            <li>Accueil personnalisé et conseils adaptés.</li>
          </ul>
        </div>

        <form className="booking-form" onSubmit={handleSubmit}>
          <input type="text" placeholder="Nom complet" required />
          <input type="tel" placeholder="Téléphone" required />
          <select defaultValue="" required>
            <option value="" disabled>Choisir un service</option>
            <option>Coiffure signature</option>
            <option>Soin visage éclat</option>
            <option>Manucure premium</option>
          </select>
          <input type="date" required />
          <textarea rows="5" placeholder="Message ou préférence"></textarea>
          <button type="submit" className="btn btn-primary">Envoyer la demande</button>

          {submitted && (
            <p className="form-success">
              Merci, votre demande a bien été envoyée. Nous vous recontactons très bientôt.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

export default Booking;