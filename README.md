# 📚 Application Bibliothèque – Express.js + PostgreSQL + EJS

## 📖 Description
Cette application est une application web CRUD développée avec Express.js, PostgreSQL et EJS.  
Elle permet de gérer des auteurs et des livres dans une bibliothèque.

L’application implémente :
- Gestion des auteurs
- Gestion des livres
- Recherche de livres
- Ajout / modification / suppression
- Relation entre auteurs et livres
- Interface web avec EJS

---

# 🛠️ Technologies utilisées

- Node.js
- Express.js
- PostgreSQL
- EJS
- CSS
- JavaScript
- Nodemon
- Dotenv

---

# 📂 Structure du projet

```bash
bibliotheque-app/
├── config/
│   └── db.js
├── controllers/
│   ├── auteurController.js
│   └── livreController.js
├── models/
│   ├── auteurModel.js
│   └── livreModel.js
├── public/
│   ├── css/
│   │   └── style.css
│   └── js/
│       └── main.js
├── routes/
│   ├── auteurRoutes.js
│   └── livreRoutes.js
├── views/
│   ├── partials/
│   │   ├── header.ejs
│   │   ├── navigation.ejs
│   │   └── footer.ejs
│   └── pages/
│       ├── accueil.ejs
│       ├── 404.ejs
│       ├── error.ejs
│       ├── auteurs/
│       └── livres/
├── .env
├── app.js
└── package.json
```

---

# ⚙️ Installation du projet

## 1️⃣ Cloner le projet

```bash
git clone https://github.com/USERNAME/bibliotheque-app.git
```

## 2️⃣ Accéder au dossier

```bash
cd bibliotheque-app
```

## 3️⃣ Installer les dépendances

```bash
npm install
```

---

# 🐘 Configuration PostgreSQL

Créer une base de données :

```sql
CREATE DATABASE bibliotheque_db;
```

---

# 📄 Configuration du fichier .env

Créer un fichier `.env` :

```env
DB_USER=postgres
DB_PASSWORD=1234
DB_HOST=localhost
DB_PORT=5432
DB_DATABASE=bibliotheque_db
PORT=5000
```

---

# 🗄️ Création des tables

```sql
CREATE TABLE auteurs (
  id SERIAL PRIMARY KEY,
  nom VARCHAR(100) NOT NULL,
  prenom VARCHAR(100) NOT NULL,
  date_naissance DATE,
  nationalite VARCHAR(50),
  biographie TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE livres (
  id SERIAL PRIMARY KEY,
  titre VARCHAR(200) NOT NULL,
  auteur_id INTEGER REFERENCES auteurs(id) ON DELETE CASCADE,
  annee_publication INTEGER,
  genre VARCHAR(50),
  isbn VARCHAR(20) UNIQUE,
  resume TEXT,
  disponible BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

---

# 🧪 Insertion des données de test

```sql
INSERT INTO auteurs (nom, prenom, date_naissance, nationalite, biographie)
VALUES 
('Hugo','Victor','1802-02-26','Française','Poète et romancier.'),
('Camus','Albert','1913-11-07','Française','Philosophe et écrivain.'),
('Rowling','J.K.','1965-07-31','Britannique','Auteure de Harry Potter.');

INSERT INTO livres (titre, auteur_id, annee_publication, genre, isbn, resume, disponible)
VALUES
('Les Misérables',1,1862,'Historique','9782253096344','Jean Valjean...',true),
('L''Étranger',2,1942,'Philosophique','9782070360024','Meursault...',true),
('Harry Potter à l''école des sorciers',3,1997,'Fantasy','9782070643028','Aventure...',true);
```

---

# ▶️ Lancement du projet

## Mode développement

```bash
npm run dev
```

## Mode production

```bash
npm start
```

---

# 🌐 Accès à l’application

```bash
http://localhost:5000
```

---

# ✅ Fonctionnalités

- 📚 Gestion des livres
- 👨‍🏫 Gestion des auteurs
- ➕ Ajouter
- ✏️ Modifier
- ❌ Supprimer
- 🔍 Rechercher
- 📄 Voir détails
- 🐘 PostgreSQL avec pg.Pool
- 🎨 Interface EJS responsive

---


https://github.com/user-attachments/assets/8a88fec2-b24e-44f5-9a47-eefe6bdcfb4e


