const faqs = [
  {
    question: "Comment réserver un rendez-vous ?",
    answer: "Vous pouvez envoyer une demande via le formulaire de réservation ou nous contacter directement par téléphone.",
  },
  {
    question: "Dois-je confirmer mon rendez-vous ?",
    answer: "Oui, chaque demande est confirmée rapidement selon les disponibilités du salon.",
  },
  {
    question: "Puis-je choisir plusieurs prestations ?",
    answer: "Oui, vous pouvez préciser dans le message les soins souhaités afin que nous organisions votre créneau.",
  },
  {
    question: "Le salon accueille-t-il sur rendez-vous uniquement ?",
    answer: "La réservation est recommandée pour garantir un accueil confortable et un temps dédié à chaque cliente.",
  },
  {
    question: "Quels moyens de paiement acceptez-vous ?",
    answer: "Nous acceptons les paiements en espèces et par carte bancaire.",
  },
  {
    question: "Proposez-vous des soins pour peaux sensibles ?",
    answer: "Oui, nous avons des protocoles doux et des produits adaptés aux peaux sensibles.",
  },
  {
    question: "Y a-t-il un parking à proximité ?",
    answer: "Il y a des places publiques et des stationnements à proximité du salon.",
  },
  {
    question: "Puis-je acheter des produits en boutique ?",
    answer: "Oui, nous proposons une sélection de produits professionnels à la vente.",
  },
];

function Faq() {
  return (
    <section id="faq" className="faq-section">
      <div className="container">
        <div className="section-title">
          <span>FAQ</span>
          <h2>Quelques réponses avant votre visite.</h2>
          <p>
            Les informations essentielles pour réserver sereinement et préparer
            votre moment beauté.
          </p>
        </div>

        <div className="faq-list">
          {faqs.map((item) => (
            <details className="faq-item" key={item.question}>
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Faq;