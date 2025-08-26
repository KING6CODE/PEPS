# PEPS – Site vitrine (template moderne)

Un site statique prêt pour GitHub + Vercel. Le contenu est **piloté par `index.json`** (textes, images, services).

## 🚀 Déploiement rapide sur Vercel
1. Crée un repo GitHub et pousse ces fichiers.
2. Va sur [vercel.com](https://vercel.com), **New Project**, connecte le repo, framework = *Other* (site statique).
3. Build command: _(vide)_, Output directory: `/` (racine).
4. Déploie. Associe ton domaine si besoin.

## ✏️ Édition du contenu
- Modifie `index.json` pour changer les textes, images, contacts, services et témoignages.
- Place tes images dans `/assets` et référence-les dans `index.json` (ex. `/assets/hero.jpg`).

## 📨 Formulaire de contact
Le formulaire utilise **Formspree**. Dans `script.js`, remplace `YOUR_FORM_ID` par l’ID de ton formulaire (ex.: `https://formspree.io/f/xxxxx`).

## 🛠️ Développement local
Ouvre `index.html` dans un navigateur ou utilise un petit serveur local :
```bash
# Python 3
python -m http.server 5173
# puis ouvre http://localhost:5173
```

## 📁 Arborescence
```
peps-site/
├─ assets/                 # images
├─ index.html              # page principale
├─ index.json              # contenu du site
├─ style.css               # styles
├─ script.js               # interactions + chargement du JSON
├─ favicon.svg
├─ site.webmanifest
├─ robots.txt
├─ sitemap.xml
├─ vercel.json             # config Vercel (site statique)
└─ README.md
```

## ✅ À faire
- Remplacer les images placeholders par celles du dossier `assets`.
- Vérifier les textes (`index.json`).
- Mettre à jour l’email/téléphone/adresse.
