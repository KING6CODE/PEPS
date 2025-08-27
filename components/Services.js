const services = [
{ title: 'Installation', desc: 'Lorem ipsum dolor sit amet, consectetur' },
{ title: 'Maintenance', desc: 'Lorem ipsum dolor sit amet, consectetur' },
{ title: 'Conseil & expertise', desc: 'Lorem ipsum dolor sit amet, consectetur.' },
]


export default function Services() {
return (
<section id="services" className="container py-12">
<h2 className="text-3xl font-bold mb-6">Services</h2>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
{services.map((s) => (
<div key={s.title} className="card p-4">
<div className="h-32 bg-gray-100 rounded-md mb-3 flex items-center justify-center">Image</div>
<h3 className="font-semibold text-lg">{s.title}</h3>
<p className="mt-2 text-gray-600 text-sm">{s.desc}</p>
</div>
))}
</div>
</section>
)
}
