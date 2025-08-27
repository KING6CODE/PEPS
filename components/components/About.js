```js
export default function About() {
return (
<section id="about" className="container py-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
<div>
<h2 className="text-3xl font-bold mb-4">À propos</h2>
<p className="text-gray-600 max-w-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
<div className="mt-6 flex gap-6 items-center text-gray-600">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">🐦</div>
<div>Qualité</div>
</div>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">⚡</div>
<div>Réactivité</div>
</div>
</div>
</div>
<div className="h-48 bg-gray-100 rounded-xl flex items-center justify-center">
<span className="text-gray-400">Image (à remplacer)</span>
</div>
</section>
)
}
```
