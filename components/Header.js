export default function Header() {
return (
<header className="py-8">
<div className="container flex items-center justify-between">
<div className="flex items-center gap-6">
<div className="text-3xl font-extrabold tracking-wide">PEPS</div>
<nav className="hidden md:flex gap-6 text-gray-700">
<a href="#" className="hover:underline">Accueil</a>
<a href="#about" className="hover:underline">À propos</a>
<a href="#services" className="hover:underline">Services</a>
<a href="#contact" className="hover:underline">Contact</a>
</nav>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:inline-block bg-gray-200 text-gray-800 px-4 py-2 rounded-lg">Demander un devis</a>
<button className="md:hidden p-2">☰</button>
</div>
</div>
</header>
)
}
