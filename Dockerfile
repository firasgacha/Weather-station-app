# Étape 1 : Construction de l'application
FROM node:alpine AS builder

# Définition du répertoire de travail dans le conteneur
WORKDIR /app

# Copie du fichier package.json dans le répertoire de travail
COPY ./package.json .

# Installation des dépendances spécifiées dans package.json
RUN npm install

# Copie de tous les fichiers de l'application dans le répertoire de travail
COPY . .

# Construction de l'application (par exemple, transpilation du code TypeScript ou bundling avec Webpack)
RUN npm run build

# Exposition du port 5173 sur lequel l'application sera accessible
EXPOSE 5173

# Commande par défaut pour démarrer l'application en mode développement
CMD ["npm", "run", "dev"]
