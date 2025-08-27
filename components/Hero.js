export default function Hero() {
return (
<section className="container grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-12">
<div>
<h1 className="text-4xl md:text-5xl font-extrabold leading-tight">Votre partenaire<br/>énergie</h1>
<p className="mt-6 text-gray-600 max-w-xl">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
<div className="mt-8">
<a href="#about" className="inline-block bg-gray-300 text-gray-900 px-5 py-3 rounded-lg font-medium">En savoir plus</a>
</div>
</div>


<div className="h-64 md:h-72 bg-gray-100 rounded-xl shadow-inner flex items-center justify-center">
<span className="text-gray-400">Image / Vidéo (à remplacer)</span>
</div>
</section>
)
}
