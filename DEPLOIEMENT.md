# 🚀 Guide de Déploiement - Maître des Multiples

Ce guide vous explique comment déployer votre application sur **Netlify** ou **Vercel**.

---

## 📋 Prérequis

Avant de commencer, assurez-vous d'avoir :
- ✅ Un compte GitHub (gratuit)
- ✅ Votre code poussé sur un dépôt GitHub
- ✅ Un compte Netlify OU Vercel (gratuits)

---

## 🔧 Étape 1 : Préparer votre dépôt GitHub

### 1.1 Initialiser Git (si ce n'est pas déjà fait)

```bash
git init
git add .
git commit -m "Initial commit - Application E-Learning"
```

### 1.2 Créer un dépôt sur GitHub

1. Allez sur [github.com](https://github.com)
2. Cliquez sur le bouton **"New"** (nouveau dépôt)
3. Nommez votre dépôt (ex: `elearning-app`)
4. Cliquez sur **"Create repository"**

### 1.3 Pousser votre code sur GitHub

```bash
git remote add origin https://github.com/VOTRE-USERNAME/VOTRE-REPO.git
git branch -M main
git push -u origin main
```

---

## 🌐 Option A : Déployer sur NETLIFY

### Étape 1 : Créer un compte Netlify

1. Allez sur [netlify.com](https://www.netlify.com)
2. Cliquez sur **"Sign up"**
3. Connectez-vous avec votre compte GitHub

### Étape 2 : Importer votre projet

1. Sur le tableau de bord Netlify, cliquez sur **"Add new site"** → **"Import an existing project"**
2. Choisissez **"Deploy with GitHub"**
3. Autorisez Netlify à accéder à vos dépôts GitHub
4. Sélectionnez votre dépôt `elearning-app`

### Étape 3 : Configurer le build

Les paramètres suivants devraient être détectés automatiquement grâce au fichier `netlify.toml` :

- **Build command:** `npm run build`
- **Publish directory:** `dist`

Si ce n'est pas le cas, entrez-les manuellement.

### Étape 4 : Variables d'environnement (OPTIONNEL - seulement si vous utilisez l'API Gemini)

Si vous voulez activer le module mathématiques avec l'IA :

1. Allez dans **"Site settings"** → **"Environment variables"**
2. Cliquez sur **"Add a variable"**
3. Ajoutez :
   - **Key:** `GEMINI_API_KEY`
   - **Value:** Votre clé API Gemini (obtenez-la sur [ai.google.dev](https://ai.google.dev))

### Étape 5 : Déployer

1. Cliquez sur **"Deploy site"**
2. Attendez quelques minutes (2-5 min)
3. Votre site sera disponible sur une URL comme : `https://votre-site.netlify.app`

### 🎉 C'est fait ! Votre application est en ligne sur Netlify !

---

## ⚡ Option B : Déployer sur VERCEL

### Étape 1 : Créer un compte Vercel

1. Allez sur [vercel.com](https://vercel.com)
2. Cliquez sur **"Sign up"**
3. Connectez-vous avec votre compte GitHub

### Étape 2 : Importer votre projet

1. Sur le tableau de bord Vercel, cliquez sur **"Add New..."** → **"Project"**
2. Sélectionnez votre dépôt GitHub `elearning-app`
3. Cliquez sur **"Import"**

### Étape 3 : Configurer le build

Les paramètres suivants devraient être détectés automatiquement grâce au fichier `vercel.json` :

- **Framework Preset:** Vite
- **Build Command:** `npm run build`
- **Output Directory:** `dist`

Si ce n'est pas le cas, entrez-les manuellement.

### Étape 4 : Variables d'environnement (OPTIONNEL - seulement si vous utilisez l'API Gemini)

Si vous voulez activer le module mathématiques avec l'IA :

1. Dépliez la section **"Environment Variables"**
2. Ajoutez :
   - **Name:** `GEMINI_API_KEY`
   - **Value:** Votre clé API Gemini (obtenez-la sur [ai.google.dev](https://ai.google.dev))
   - **Environment:** Sélectionnez "Production", "Preview", et "Development"

### Étape 5 : Déployer

1. Cliquez sur **"Deploy"**
2. Attendez quelques minutes (2-5 min)
3. Votre site sera disponible sur une URL comme : `https://votre-site.vercel.app`

### 🎉 C'est fait ! Votre application est en ligne sur Vercel !

---

## 🔑 Obtenir une clé API Gemini (OPTIONNEL)

**Note :** Le module Géographie/Histoire fonctionne SANS API. Vous n'avez besoin de l'API que pour le module Mathématiques.

### Étapes pour obtenir une clé API Gemini :

1. Allez sur [ai.google.dev](https://ai.google.dev)
2. Cliquez sur **"Get API key"**
3. Connectez-vous avec votre compte Google
4. Cliquez sur **"Create API key"**
5. Copiez votre clé API
6. Ajoutez-la dans les variables d'environnement de Netlify ou Vercel (voir ci-dessus)

**Limites gratuites :**
- 15 requêtes par minute
- 1500 requêtes par jour
- Largement suffisant pour un usage personnel ou éducatif

---

## 🔄 Mises à jour automatiques

Une fois déployé, chaque fois que vous poussez du code sur GitHub :

```bash
git add .
git commit -m "Ajout de nouvelles fonctionnalités"
git push
```

Netlify ou Vercel détectera automatiquement les changements et redéploiera votre application ! 🎉

---

## 🆘 Dépannage

### Problème : Le build échoue

**Solution :**
- Vérifiez que `package.json` contient bien toutes les dépendances
- Assurez-vous que la commande `npm run build` fonctionne localement

### Problème : Page blanche après déploiement

**Solution :**
- Vérifiez que le dossier de sortie est bien `dist`
- Vérifiez les redirections dans `netlify.toml` ou `vercel.json`

### Problème : Le module mathématiques ne fonctionne pas

**Solution :**
- Vérifiez que vous avez ajouté la variable d'environnement `GEMINI_API_KEY`
- Vérifiez que votre clé API est valide
- Le module géographie fonctionne sans API !

---

## 📊 Comparaison Netlify vs Vercel

| Critère | Netlify | Vercel |
|---------|---------|--------|
| **Facilité** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| **Vitesse** | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| **Gratuit** | ✅ Oui | ✅ Oui |
| **Domaine personnalisé** | ✅ Oui | ✅ Oui |
| **SSL/HTTPS** | ✅ Automatique | ✅ Automatique |
| **Déploiement auto** | ✅ Oui | ✅ Oui |

**Recommandation :** Les deux sont excellents ! Choisissez celui que vous préférez. 😊

---

## 🎓 Ressources supplémentaires

- [Documentation Netlify](https://docs.netlify.com/)
- [Documentation Vercel](https://vercel.com/docs)
- [Documentation Vite](https://vitejs.dev/guide/)
- [API Gemini](https://ai.google.dev/docs)

---

## ✅ Checklist finale

Avant de déployer, vérifiez :

- [ ] Code poussé sur GitHub
- [ ] Fichiers `netlify.toml` et `vercel.json` présents
- [ ] `npm run build` fonctionne localement
- [ ] Compte créé sur Netlify ou Vercel
- [ ] (Optionnel) Clé API Gemini obtenue si vous voulez le module maths

---

**Bon déploiement ! 🚀**

Si vous avez des questions, n'hésitez pas à demander de l'aide !

