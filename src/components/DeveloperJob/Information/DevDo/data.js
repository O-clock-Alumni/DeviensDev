/* eslint-disable max-len */

/*
 * Local Import
 */
import lego from 'src/assets/images/MetierDev/lego.png';
import screen from 'src/assets/images/MetierDev/editeur.png';
import equerre from 'src/assets/images/MetierDev/equerre.png';
import cocktail from 'src/assets/images/MetierDev/cocktail.png';
import catapulte from 'src/assets/images/MetierDev/catapulte.png';

/*
 * Export
 */
export default [
  {
    title: 'Décrypter un besoin',
    paragraphs: [
      'Avant de se lancer dans son éditeur de texte, le développeur doit définir une roadmap. À savoir une sorte de chemin sur lequel il va placer les étapes de réalisation de l’application à développer. Il va donc prendre le temps et le soin d’étudier le cahier des charges qui lui sera confié et déterminer les besoins techniques qui en découlent.',
      'Le dev va souvent devoir reprendre des éléments qui ont été conçus par d’autres membres de son équipe : graphiste, chef de projet, concepteur-rédacteur… Des intervenants non techniques qui peuvent formuler des spécifications incomplètes. Il faudra donc bien souvent écouter, échanger et être force de proposition, afin de cheminer le besoin exact. Ce fameux « savoir-être » indispensable dans ce métier, qui pèse parfois bien plus lourd dans la balance que la simple capacité à écrire une ligne de code.',
    ],
    image: equerre,
    alt: 'Logique mathématique',
  },
  {
    title: 'On passe au développement',
    paragraphs: [
      'Une fois que le plan est tracé, on peut commencer à coder. C’est pas le tout de déterminer avec ses collègues le besoin technique, il s’agit maintenant de se retrousser les manches pour matérialiser tout ça. Le travail du développeur sera alors de créer toute une architecture de code ; concrètement, des dossiers et des fichiers textes dans lequel on écrit du code informatique.',
      'Et c’est là que ça se complique : il en faut du code pour créer une application entière ! Le dev va alors utiliser toute une série d’outils ainsi que des bouts de code déjà créés par d’autres développeurs. On appelle ça l’environnement de développement, et ça nécessiterait certainement un site tout entier pour en parler !',
    ],
    image: screen,
    alt: 'Langages informatiques',
  },
  {
    title: 'Code, rinse, repeat.',
    paragraphs: [
      'Une fois que l’environnement de dev est installé et configuré sur la machine du développeur, c’est là que commence le gros du boulot. Étape après étape, fonctionnalité après fonctionnalité, le développeur code tout ce dont le projet a besoin.',
      'On distingue souvent deux parties distinctes : l’interface que l’on nomme « front-end », c’est-à-dire ce que voit l’utilisateur, et les coulisses, le « back-end », où s’effectuent le traitement, les calculs et la persistance des données. Par exemple, pour un site web : le front, c’est le code qui permet d’afficher ce que l’on voit dans le navigateur ; le back, c’est le code qui permet de traiter les requêtes sur le serveur, d’enregistrer votre commande, d’envoyer un e-mail…',
    ],
    image: lego,
    alt: 'Lego',
  },
  {
    title: 'Allez, on envoie en prod ?',
    paragraphs: [
      'Même quand tout est codé, c’est loin d’être fini !',
      'Avant d’envoyer « en production » — c’est-à-dire publier l’application pour la rendre accessible aux utilisateurs — on doit s’assurer que tout fonctionne bien. On va donc naviguer sur l’application, s’essayer à toutes les fonctionnalités et tous les chemins utilisateurs possibles pour déceler les malfaçons et les bugs. On fait alors un reporting de bugs où l’on listera toutes les corrections que l’équipe de développeurs devra apporter au projet.',
      'Mais cela ne s’arrête pas là. Le développeur va aussi rédiger des tests unitaires et fonctionnels. Ce sont des cas d’utilisation des fonctions qu’il a codé ainsi que des scénarios utilisateurs qui peuvent arriver, afin d’être certain que l’ajout d’une fonctionnalité n’a pas cassé la fonctionnalité précédente. Une bonne pratique de développement consiste même à créer ces tests en même temps que l’on code, voire avant même d’avoir codé. Cela permet de tester tout le code rédigé au fur et à mesure. Du code pour tester du code, c’est pas dingue ça ?',
    ],
    image: catapulte,
    alt: 'Catapulte',
  },
  {
    title: 'Quand il n’y en a plus…',
    paragraphs: [
      'On a testé, on a débuggé, on a mis en production avec l’administrateur système ou à l’aide des outils de déploiement automatique, on peut partir en vacances siroter des Maï Taï ? Ahah, bien sûr… que non. Une fois l’application publiée, c’est le début d’une nouvelle ère : le suivi, la maintenance, l’amélioration. Malgré tous les tests, il peut y avoir des bugs.',
      'Plus probable encore, il peut y avoir des modifications à effectuer, parce que les utilisateurs ne sont pas satisfaits ou que le client souhaite apporter un changement. C’est quasiment inévitable, il va souvent falloir faire évoluer le site, le jeu, le logiciel, rajouter un contenu ou mettre à jour des informations. On a rarement le temps de s’ennuyer quand on est dev, surtout qu’en général, les équipes ont souvent plusieurs projets en parallèle…',
    ],
    image: cocktail,
    alt: 'cocktail',
  },
];
