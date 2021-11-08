# exemples-state-ts

Pour installer:

    npm install

Note: 
- il est peut-être nécessaire d'installer `ts-node et typescript` avec `npm install -g ts-node typescript`
- Si vous avez une erreur de `npm ERR! Cannot read property 'match' of undefined` pendant l'installation, juste supprimer le fichier `package-lock.json`, puis relancer l'installation.

# Pour exécuter les test 
npm run test    

# jest Expect

https://jestjs.io/docs/en/expect

Pour interagir avec l'application, il est recommandé d'utiliser [Postman](https://www.postman.com/). Pour vous aider à démarrer, la documentation du logiciel offre un [tutoriel complet](https://learning.postman.com/docs/sending-requests/requests/).

## Débogage dans VSCode

- Cliquer le bouton à gauche pour déboguer (ou <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>D</kbd>) **>** **JavaScript Debug Terminal**
- Activer les points d'arrêt (*breakpoints*) dans le code source au besoin.
- Dans le terminal du débogueur, lancer le code TypeScript comme avant avec la commande `ts-node`

Voir [comment déboguer (page de VSCode)](https://code.visualstudio.com/docs/editor/debugging).
