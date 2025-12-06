# 🚀 Guide de Lancement - Projects Management App

## 📋 Prérequis

- **Node.js 14+** - [Télécharger](https://nodejs.org/)
- **npm 6+** - Installé avec Node.js
- **Java JDK 11+** - [Télécharger](https://www.oracle.com/java/technologies/javase-jdk11-downloads.html)
- **WildFly** - [Télécharger](https://wildfly.org/downloads/)
- **MySQL** - [Télécharger](https://dev.mysql.com/downloads/installer/)

---

## 🎯 Démarrage Rapide

### Étape 1: Frontend React

```bash
# Aller au dossier frontend
cd frontoffice-projects-managment

# Installer les dépendances (déjà fait si npm install a été exécuté)
npm install

# Démarrer le serveur de développement
npm start
```

**Le frontend s'ouvrira automatiquement sur**: `http://localhost:3000`

---

### Étape 2: Backend JEE

#### 2.1 Configuration de la Base de Données MySQL

```bash
# Ouvrir MySQL et exécuter:
CREATE DATABASE projects_management;
USE projects_management;

# Créer les tables (à adapter selon votre schéma)
-- Sera généré par JPA automatiquement
```

#### 2.2 Configurer WildFly

1. **Télécharger et extraire WildFly**
2. **Configurer la source de données dans `standalone.xml`**:
   - Chemin: `wildfly/standalone/configuration/standalone.xml`
   - Ajouter la source de données MySQL

#### 2.3 Compiler et Déployer le Backend

```bash
# Aller au dossier backend
cd backOfficeProjectsMangement

# Compiler le projet Maven
mvn clean package

# Copier le WAR généré vers WildFly
# Copier le fichier .war du dossier target vers:
# wildfly/standalone/deployments/

# Démarrer WildFly
# Windows:
./bin/standalone.bat

# Linux/Mac:
./bin/standalone.sh
```

**Le backend sera accessible sur**: `http://localhost:8080/projects-api`

---

## 📱 Accès à l'Application

- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:8080
- **WildFly Admin Console**: http://localhost:9990

---

## 🆕 Améliorations Modernes Apportées

### ✨ Frontend Modernisé

1. **Tailwind CSS** - Framework CSS utilitaire moderne
2. **Lucide Icons** - Bibliothèque d'icônes moderne
3. **React Hot Toast** - Notifications élégantes
4. **Design Responsive** - Mobile-first approach
5. **Gradients et Animations** - Interface plus attrayante

### 📊 Composants Refactorisés

- **ProjectsList.jsx** - Tableau moderne avec actions
- **App.jsx** - Navigation améliorée avec icônes
- **CSS** - Utilise Tailwind CSS au lieu de Bootstrap

---

## 🔧 Commandes Utiles

### Frontend
```bash
cd frontoffice-projects-managment

npm start          # Démarrer en développement
npm build          # Créer un build production
npm test           # Exécuter les tests
npm eject          # Éjecter la configuration (⚠️ Irréversible)
```

### Backend
```bash
cd backOfficeProjectsMangement

mvn clean          # Nettoyer les builds antérieurs
mvn compile        # Compiler le code
mvn package        # Créer un WAR
mvn test           # Exécuter les tests
```

---

## 🐛 Troubleshooting

### Port 3000 déjà utilisé?
```bash
# Windows - Trouver le PID
netstat -ano | findstr :3000

# Tuer le processus
taskkill /PID [PID] /F
```

### Erreur de connexion au backend?
1. Vérifier que WildFly est en cours d'exécution
2. Vérifier l'URL API dans `operationsProjects.js`
3. Vérifier les logs de WildFly

### Erreur MySQL?
1. Vérifier que MySQL est en cours d'exécution
2. Vérifier les identifiants de connexion
3. Créer la base de données si elle n'existe pas

---

## 📦 Structure du Projet

```
├── frontoffice-projects-managment/    # Frontend React
│   ├── src/
│   │   ├── components/                 # Composants React
│   │   ├── App.js                      # App principal
│   │   └── index.js                    # Point d'entrée
│   └── package.json                    # Dépendances
│
└── backOfficeProjectsMangement/        # Backend JEE
    ├── src/
    │   ├── entities/                   # Modèles JPA
    │   ├── metier/                     # Logique métier
    │   └── webservices/                # Services REST
    └── pom.xml                         # Dépendances Maven
```

---

## 💡 Conseils de Développement

1. **Ouvrir deux terminaux** - Un pour le frontend, un pour le backend
2. **Utiliser VS Code** - Avec les extensions ES7+ et Thunder Client pour les tests API
3. **Lire les logs** - Vérifiez les logs de la console et de WildFly
4. **Commit régulièrement** - `git commit` après chaque fonctionnalité

---

## 📝 Prochaines Étapes

1. ✅ Configurer la base de données
2. ✅ Démarrer le backend WildFly
3. ✅ Démarrer le frontend React
4. 🔄 Commencer à développer vos features!

---

**Besoin d'aide?** Consultez la documentation:
- [React Documentation](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [JEE Documentation](https://jakarta.ee/)
- [WildFly Guide](https://docs.wildfly.org/)

Happy Coding! 🎉
