# Node.JS: CLI

> Our first CLI tool, with node.js

* * *

## Node.JS - c'est quoi ?

À l'origine, et vous le savez déjà, **javascript** est un language qui s'exécute dans un *navigateur web*, qui a à sa disposition un *moteur d'exécution* pour javascript.
**Node.JS** est une plateforme logicielle (un *runtime*) qui permet à javascript d'être exécuté hors d'un navigateur, nous permettant d'utiliser ce language un peu partout.

Node.JS fournit à javascript la possibilité de dialoguer avec le système (manipuler des fichiers, par exemple, ou exécuter des sous-programmes), ainsi qu'une structure *modulaire*, qui repose sur le gestionnaire de paquets `npm`, riche de centaines de milliers de modules (>850.000 en janvier 2019).

### Un peu partout ?

Bien que son usage principal est le back-end, où il concurrence PHP, Java ou encore Ruby, Node.JS ne se limite pas à ça, et permet également de construire des programmes pour la ligne de commande, le mobile (*via* ReactNative, par exemple), le desktop (*via* Electron), la robotique ou l'IOT (*via* Johnny-Five), et quelques autres.

## Notre premier programme avec Node.JS

Pour découvrir Node.JS, nous allons commencer par développer un petit outil en ligne de commande, en solo.

Cet outil sera relativement simple, et vous permettra de découvrir Node.JS, npm et ses modules.

Une fois n'est pas coutume, je vais vous guider (mais pas trop, faut pas déconner).

> **NOTE:** nous n'aurons pas besoin de docker pour ce premier (et rapide) projet - nous travaillerons entièrement en local.

### 1. Installer Node.JS et `npm`

Rendez-vous sur le [site officiel de Node.JS](https://nodejs.org/en/) et suivez les instructions ; npm s'installera conjointement à node.
Installez la version `11.6+`.

### 2. Créer votre environnement de travail

Créez un repo GitHub pour le projet, et utilisez la commande `npm init` pour initialiser le tout.

> **NOTE:** à la question à propos du **entry point**, laissez la réponse par défaut, "index.js"

### 3. Votre premier script

Créez un fichier `index.js` à la racine de votre repo, et entrez-y la ligne de code suivante :

```javascript
console.log("Hello, Node.JS!");
```

Ensuite, tapez la commande suivante dans votre terminal :

	$ node .

Et voilà, vous avez créé votre premier script Node.JS !

### 4. Entrer dans le vif du sujet

Maintenant, je vous lache un peu la bride, et je vais vous laisser avec un énoncé plus complet.

Vous allez coder un outil qui recevra une *adresse email* en paramètre, comme ceci :

	$ myNodeCLITool leny@test.com

Le programme vérifiera que le paramètre est bien une adresse email correctement formattée, puis fera une requête HTTP vers l'API du service [**Have I been pwned?**](https://haveibeenpwned.com), comme [expliqué ici](https://haveibeenpwned.com/API/v2#BreachesForAccount).
Vous afficherez ensuite les résultats de la requête de manière lisible dans le terminal.

> ⚠️ **ATTENTION :** votre script va être exécuté dans un contexte un peu spécifique. Il est conseillé, pour les outils en ligne de commande, de préfixer **le point d'entrée** (ici, votre fichier `index.js`) avec la ligne suivante :

	#!/usr/bin/env node

> Cette ligne un peu spéciale, au début d'un fichier exécutable, est ce qu'on appelle un [**shebang**](https://fr.wikipedia.org/wiki/Shebang).

Vous aurez ainsi créé un outil pour vérifier si les comptes web liés à une adresse mail ont été compromis par des brêches de sécurité. Toujours utile.

#### Les packages npm à utiliser

Il existe *énormément* de packages sur npm, y compris des packages qui font déjà *exactement* ce que je vous demande.
Ça n'est bien sûr pas le but de la manœuvre.

Histoire d'éviter de vous perdre dans cette masse de possibilités, je vous conseille les packages suivants :

- [`email-validator`](https://www.npmjs.com/package/email-validator), pour vérifier une adresse mail
- [`axios`](https://www.npmjs.com/package/axios), pour effectuer des requêtes HTTP

#### Aller plus loin

Ceux d'entre vous qui voudraient rendre la chose un peu plus jolie (et s'ajouter un peu de challenge), peuvent creuser les packages suivants :

- [`ora`](https://www.npmjs.com/package/ora), pour afficher un *spinner* (animation de chargement) pendant la requête vers l'API
- [`chalk`](https://www.npmjs.com/package/chalk), pour ajouter un peu de couleurs dans les sorties de votre terminal
- [`figlet`](https://www.npmjs.com/package/figlet), pour ajouter un peu de peps dans les sorties de votre terminal

### 5. Préparer la publication et tester

Vous avez pu tester votre programme tout au long de son développement, mais l'idéal, ce serait de lui donner un nom, par exemple `pwned`, pour pouvoir l'exécuter comme suit dans un terminal :

	$ pwned leny@test.com

Pour cela, il faudra vous documenter sur la propriété `bin` de votre fichier `package.json`.
Vous pourrez également utiliser la commande `npm link` pour tester votre outil en local avant de le publier.

### 6. Publier sur npm

Publier sur npm est gratuit, mais vous devrez d'abord [vous créer un compte sur npm](https://www.npmjs.com/signup).

Ensuite, avant de publier votre package, trois petites étapes importantes :

#### Compléter votre README.md

Le contenu du fichier README est affiché sur la page de présentation de votre package sur npm.
Expliquez-y à quoi sert le package, son fonctionnement, tout ce qui est utile. Inspirez-vous d'autres packages.

> **IMPORTANT:** faites le en **anglais** !

#### Choisir un nom pour le package

Vous êtes libre de choisir le nom de votre choix pour votre package. Il est possible que ce nom soit déjà utilisé sur npm, mais pas de panique, nous allons "*scoper*" votre package : dans la propriété `name` de votre fichier `package.json`, préfixez le nom de votre package par `@votreloginnpm`, par exemple :

```json
{
  "name": "@leny/pwned"
}
```

Vous pourrez ainsi publier votre package sans problème, même si le nom est déjà pris.

#### Choisir son numéro de version

La première version de votre programme peut être `1.0.0`, `0.1.0`, ou encore `0.0.1`. À vous de choisir.

Mais si vous décidez de changer ou modifier votre package et publier un nouvelle version, assurez-vous de bien mettre à jour le numéro de version en respectant le principe du [semantic versionning, ou semver](https://semver.org), la norme sur npm.

#### Publier

Enfin, pour publier, il vous suffira d'utiliser la commande suivante :

	$ npm publish --access public

* * *

## Deadline & modalités

Ce premier projet est plus simple qu'il en a l'air, aussi, il sera relativement court.
À dater de la remise de cet énoncé, vous aurez **quatre jours** pour coder votre programme et le **publier** sur npm.

Communiquez-nous l'adresse de votre package sur npm et nous nous ferons un plaisir de le tester.

Bon travail.
