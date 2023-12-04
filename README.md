# DevOps
Utilisation du projet DevOps pour le cours de DevOps de B3

## Installation
Pour installer le projet, il suffit de cloner le projet sur votre machine.
```bash
git clone https://github.com/Fireginger/DevOps.git
```

## Utilisation
Pour lancer le projet il suffit d'entrée dans un terminal la command suivante:
```bash
npm run start
```
Pour changer le port d'écoute du serveur, il suffit de changer la variable d'environnement PORT dans le fichier serveur.js et le fichier serveur.ts

Pour obtenir les données de l'API, il suffit d'entrée dans un navigateur l'adresse suivante:
```bash
http://localhost:3000/ping
```

## Note

Pour changer l'image utilisée, il suffit juste de remplacer la ligne "Dockerfile1" par l'image que l'on ne souhaite pas utiliser dans le fichier .dockerignore .

Ce projet à pour but de permettre à un utilisateur de récupérer les Headers de la requête HTTP GET sur l'adresse /ping.
Si l'utilisateur envoie une requête HTTP GET sur une autre adresse, il recevra une erreur 404.


## Kubernetes

Pour la partie kubernetes voici la capture d'écran de la page internet :

![Image Kubernetes](/kubernetes.png)
