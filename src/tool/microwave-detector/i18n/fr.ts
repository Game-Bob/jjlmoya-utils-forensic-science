const description = 'Analysez si votre micro-ondes perd des radiations en mesurant l\'interférence en temps réel sur votre réseau WiFi. Outil de sécurité scientifique.';
const title = 'Détecteur de Fuites Micro ondes: Visualiseur d\'Interférences WiFi';
const slug = 'detecteur-fuites-micro-ondes';
const howTo = [
    {
      name: 'Se connecter au réseau WiFi 2,4 GHz',
      text: 'Assurez-vous que votre mobile ou portable n\'est PAS connecté à la bande 5 GHz pour que l\'interférence soit mesurable.',
    },
    {
      name: 'Lancer le test de latence de base',
      text: 'Appuyez sur le bouton de démarrage avec le micro-ondes éteint pour établir une ligne de base de connexion stable.',
    },
    {
      name: 'Allumer le micro-ondes',
      text: 'Faites chauffer un verre d\'eau pendant 30 à 60 secondes et placez-vous près de l\'appareil avec votre smartphone.',
    },
    {
      name: 'Analyser le graphique en temps réel',
      text: 'Observez si la latence monte au-dessus de 100-200 ms ou si des pertes de paquets se produisent pendant que l\'appareil fonctionne.',
    },
  ];
const faq = [
    {
      question: 'Comment un site web peut-il détecter mon micro-ondes ?',
      answer: 'Nous n\'utilisons pas de capteurs magiques, mais la latence du réseau. Le WiFi 2,4 GHz et les fours à micro-ondes fonctionnent sur la même fréquence (env. 2450 MHz). Si le blindage du micro-ondes échoue, il génère du "bruit" qui entre en collision avec le WiFi, augmentant considérablement la latence (ping).',
    },
    {
      question: 'Est-il dangereux que mon micro-ondes ait des fuites ?',
      answer: 'Une petite interférence sur le WiFi est normale et n\'implique pas de risque immédiat pour la santé, car la puissance décroît rapidement avec la distance. Cependant, une fuite massive indique une mauvaise étanchéité de la porte ou de la grille, ce qui devrait être vérifié pour des raisons de sécurité technique.',
    },
    {
      question: 'Pourquoi le test ne fonctionne-t-il pas avec le WiFi 5 GHz ?',
      answer: 'Parce que le WiFi 5 GHz fonctionne sur une bande de fréquence beaucoup plus élevée qu\'un micro-ondes. Pour que le test soit efficace, votre appareil doit être connecté au réseau 2,4 GHz du routeur.',
    },
    {
      question: 'Que signifient les pics de latence sur le graphique ?',
      answer: 'Des pics constants pendant le fonctionnement du micro-ondes suggèrent que le signal électromagnétique "s\'échappe" et sature l\'air, empêchant les paquets de données WiFi d\'arriver à temps.',
    },
  ];
import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    copied: 'Copié',
    noHistory: 'Pas d\'historique',
    load: 'Charger',
    delete: 'Supprimer',
    microwaveDetection: 'Détection de micro-ondes',
    shieldingAnalysis: 'Analyse du blindage',
    startTest: 'Démarrer le test',
    stopTest: 'Arrêter le test',
    waitingForStart: 'En attente du démarrage...',
    detectingInterference: 'Détection des interférences...',
    baseLevel: 'Niveau de base',
    activeLevel: 'Niveau actif',
    leakProbability: 'Probabilité de fuite',
    lowLeak: 'Basse',
    mediumLeak: 'Moyenne',
    highLeak: 'Haute',
    pingLabel: 'Latence (ms)',
    packetLossLabel: 'Perte de paquets (%)',
    rfInterferenceMonitor: 'Moniteur d\'Interférences RF',
    mwLeakDetector: 'DÉTECTEUR DE FUITES MW v2.0',
    jitterUnit: 'ms / gigue',
    systemReady: 'Système Prêt',
    physicalRequirement: 'Exigence Physique',
    physicalDesc: 'Ce détecteur utilise l\'interférence dans la bande 2.4GHz (la fréquence des micro-ondes). Pour fonctionner correctement, assurez-vous que vous êtes connecté à un réseau WiFi 2.4GHz (pas 5GHz/6GHz) ou utilisez votre téléphone près de l\'appareil.',
    understandStart: 'D\'accord, Démarrer l\'Analyse',
    rfInterferenceTitle: 'Moniteur d\'Interférences',
    connectToAnalyze: 'Connectez-vous pour démarrer l\'analyse thermique des interférences.',
    audioFeedback: 'Retour Audio',
    muteUnmute: 'ACTIVER / DÉSACTIVER',
    static: 'Statique',
  },
  seo: [
    {
      type: 'title',
      text: 'PHYSIQUE DES ONDES: Votre micro-ondes fuit-il réellement des radiations ?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Le micro-ondes est l\'appareil ménager le plus incompris de la cuisine moderne. Détesté par les puristes et adoré par les pragmatiques, il cache une bataille constante entre l\'énergie contenue et le monde extérieur.',
    },
    {
      type: 'paragraph',
      html: 'D\'un point de vue purement physique, un four à micro-ondes est un <strong>résonateur à cavité</strong> conçu pour bombarder les molécules d\'eau de radiations électromagnétiques à une fréquence très spécifique: <strong>2,45 GHz</strong>. Cette fréquence n\'est pas arbitraire ; elle est nécessaire pour provoquer l\'oscillation dipolaire des particules d\'eau, générant de la chaleur par friction. Le problème est que c\'est exactement la même fréquence que celle utilisée par la norme WiFi 802.11b/g/n.',
    },
    {
      type: 'title',
      text: 'Interférence électromagnétique (EMI)',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Tout dispositif WiFi fonctionnant dans la bande des 2,4 GHz entre en compétition pour le même "air" que votre micro-ondes. Dans un four parfait, la <strong>Cage de Faraday</strong> (le grillage métallique que vous voyez sur la porte et les parois internes) devrait contenir 100 % de l\'énergie.',
    },
    {
      type: 'paragraph',
      html: 'Cependant, aucune cage n\'est parfaite à long terme. Les joints de la porte, les fermoirs magnétiques et l\'usure du métal peuvent permettre à de petites quantités d\'énergie de s\'échapper. Bien que ces niveaux soient généralement bien en dessous des limites de sécurité pour les humains, ils sont <strong>gigantesques</strong> pour une carte réseau WiFi, provoquant de la latence, des pertes de paquets et le "jitter" caractéristique que mesure notre outil.',
    },
    {
      type: 'title',
      text: 'Le test de la cage de Faraday maison',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Il existe un moyen analogique très simple de vérifier l\'état de base du blindage de votre four, bien qu\'il soit moins précis que notre mesure numérique du jitter :',
    },
    {
      type: 'list',
      items: [
        '<strong>Étape 1 - Le téléphone :</strong> Introduisez votre téléphone portable à l\'intérieur du micro-ondes (<strong>SOUS AUCUN PRÉTEXTE N\'ALLUMEZ LE FOUR !</strong> Fermez simplement la porte).',
        '<strong>Étape 2 - L\'appel :</strong> Essayez d\'appeler ce téléphone depuis un autre appareil. Si le téléphone sonne, la cage de Faraday est défectueuse ou n\'est pas accordée aux fréquences cellulaires. S\'il affiche "hors zone de couverture", le blindage fonctionne correctement.',
      ],
    },
    {
      type: 'title',
      text: 'Mythes vs Réalité Scientifique',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>"Le micro-ondes altère la structure moléculaire de l\'eau"</strong> - FAUX. Le rayonnement micro-ondes est <em>non ionisant</em>. Il n\'a pas assez d\'énergie pour rompre les liaisons chimiques ou altérer l\'ADN. Il fait simplement vibrer les molécules d\'eau, augmentant leur énergie cinétique (température).',
        '<strong>"Le rayonnement s\'accumule dans les aliments"</strong> - FAUX. Les micro-ondes sont comme la lumière: une fois que vous éteignez l\'interrupteur, elles disparaissent. Un aliment chaud n\'émet pas de rayonnement micro-ondes, seulement un rayonnement infrarouge (chaleur) tout comme un feu ou une poêle.',
        '<strong>"Regarder le plateau tourner endommage les yeux"</strong> - PARTIELLEMENT VRAI. La vitre de la porte est conçue avec une grille qui bloque les longueurs d\'onde de 2,45 GHz. Cependant, si la grille est endommagée, la vitre n\'arrêtera pas les micro-ondes. Le cristallin de l\'œil est très sensible à la chaleur et a une mauvaise circulation sanguine, donc une exposition directe prolongée (près d\'une fuite) pourrait causer des cataractes thermiques.',
      ],
    },
    {
      type: 'title',
      text: 'Comment fonctionne ce détecteur numérique ?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Notre outil ne mesure pas les radiations directement (les smartphones n\'ont pas de capteurs pour cela), mais il mesure le <strong>symptôme principal</strong>. Lorsqu\'une molécule de rayonnement de 2,45 GHz s\'échappe du four, elle "entre en collision" avec le signal WiFi de votre appareil. Cela provoque :',
    },
    {
      type: 'list',
      items: [
        '<strong>Retransmissions de paquets :</strong> Le routeur détecte que le message est arrivé corrompu et doit le renvoyer, ce qui augmente la latence.',
        '<strong>Variation du Jitter :</strong> C\'est la mesure de l\'instabilité du temps de réponse. Un jitter élevé est un signe sans équivoque d\'interférence externe massive.',
        '<strong>Perte de performance :</strong> La vitesse de transfert chute brutalement en raison de la saturation du spectre radioélectrique.',
        '<strong>Bruit de fond :</strong> Le micro-ondes injecte du bruit qui élève le "noise floor", rendant difficile pour l\'appareil de distinguer entre les données réelles et le chaos radioactif.',
      ],
    },
  ],
  faq,
  bibliography,
  howTo,
  
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: title,
      description: description,
      applicationCategory: 'ScientificApplication',
      operatingSystem: 'Any',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faq.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.answer,
        },
      })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: title,
      step: howTo.map((step) => ({
        '@type': 'HowToStep',
        name: step.name,
        text: step.text,
      })),
    },
  ],
};

