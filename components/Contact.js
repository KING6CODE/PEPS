```js
export default function Contact() {
return (
<section id="contact" className="container py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="md:col-span-2">
<h2 className="text-3xl font-bold mb-4">Contact</h2>
<form className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<input placeholder="Nom" className="border rounded-lg p-3" />
<input placeholder="Email" className="border rounded-lg p-3" />
<textarea placeholder="Message" className="border rounded-lg p-3 sm:col-span-2 h-28"></textarea>
<button className="bg-brand text-white px-5 py-3 rounded-lg sm:col-span-2">Envoyer</button>
</form>
</div>


<div className="space-y-4 text-gray-700">
<div className="flex items-start gap-3">
<div className="mt-1">✉️</div>
<div>
<div className="font-semibold">email@example.com</div>
</div>
</div>
<div className="flex items-start gap-3">
<div className="mt-1">📞</div>
<div>
<div className="font-semibold">01.23 45 67 89</div>
</div>
</div>
<div className="flex items-start gap-3">
<div className="mt-1">📍</div>
<div>
<div className="font-semibold">123 rue exemple</div>
<div className="text-sm text-gray-600">75001 Paris</div>
</div>
</div>
</div>
</section>
)
}
```
