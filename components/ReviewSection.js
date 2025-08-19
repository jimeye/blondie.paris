const reviews = [
  {
    id: 1,
    name: "Marie Dupont",
    rating: 5,
    text: "Les meilleures pizzas que j'ai jamais mangées ! La pâte est parfaite et les ingrédients sont d'une fraîcheur exceptionnelle.",
  },
  {
    id: 2,
    name: "Thomas Martin",
    rating: 5,
    text: "Une ambiance chaleureuse et un service impeccable. Je recommande vivement la pizza aux truffes !",
  },
  {
    id: 3,
    name: "Sophie Bernard",
    rating: 4,
    text: "Excellent rapport qualité-prix. Les portions sont généreuses et le goût est au rendez-vous.",
  },
]

export default function ReviewSection() {
  return (
    <section id="references" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-custom-grey">
          REVUE DE <span className="text-black">PRESSE</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-gray-50 p-6 rounded-lg transform transition-transform duration-300 hover:scale-105 shadow-sm"
            >
              <div className="flex items-center mb-4">
                <div className="flex-1">
                  <h3 className="font-bold text-lg text-custom-grey">{review.name}</h3>
                  <div className="flex text-accent-yellow">
                    {[...Array(review.rating)].map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-custom-grey/80 border-l-4 border-accent-red pl-4">
                {review.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 