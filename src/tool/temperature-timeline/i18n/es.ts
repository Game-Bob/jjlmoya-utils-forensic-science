import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'cronologia-temperatura-planeta';
const description = 'Explora la historia de la temperatura media de la Tierra a lo largo de las eras geologicas.';
const title = 'Cronologia de la Temperatura Media del Planeta';

const howTo = [
  {
    name: 'Seleccionar era',
    text: 'Haz clic en una muesca de la regla de escala.',
  },
  {
    name: 'Comprobar temperatura',
    text: 'Lee la temperatura media global.',
  },
  {
    name: 'Observar el planeta',
    text: 'Observa como reacciona el lienzo al estado termico.',
  },
];

const faq = [
  {
    question: '¿Ha estado la Tierra mas caliente en el pasado que en la actualidad?',
    answer: 'Si, la Tierra ha experimentado climas considerablemente mas calidos que el actual. Durante el Mesozoico (la era de los dinosaurios) y el Eoceno temprano, el planeta se encontraba en un estado de invernadero (greenhouse) sin casquetes polares, y las temperaturas medias globales superaban los 22 grados, unos 7 a 8 grados mas calientes que el promedio actual. No obstante, las transiciones hacia esos periodos ocurrieron en escalas de millones de anos, permitiendo la adaptacion evolutiva.',
  },
  {
    question: '¿Qué causo el fenomeno de la Tierra Bola de Nieve?',
    answer: 'La Tierra Bola de Nieve (glaciacion global) ocurrio principalmente durante el Neoproterozoico (hace unos 700 millones de anos). Fue desencadenada por una reduccion extrema de los gases de efecto invernadero debido al intemperismo quimico acelerado de rocas de silicato tras la fractura del supercontinente Rodinia. El hielo se extendio desde los polos hasta el ecuador, reflejando la radiacion solar (efecto albedo) y atrapando al planeta en un bucle de congelacion global que solo se rompio tras millones de anos de acumulacion de CO2 volcanico.',
  },
  {
    question: '¿Cómo regula la Tierra su temperatura a largo plazo?',
    answer: 'La Tierra posee un termostato natural controlado por el ciclo del carbono a escala geologica, regulado principalmente por la tectonica de placas y la meteorizacion de los silicatos. Cuando el planeta se calienta, la lluvia acida reacciona mas rapidamente con las rocas de silicato, absorbiendo CO2 de la atmosfera y depositandolo en el fondo oceanico en forma de carbonatos, lo que reduce el efecto invernadero. Si el planeta se enfria, la meteorizacion disminuye pero la actividad volcanica continua liberando CO2, calentando gradualmente el planeta de nuevo.',
  },
  {
    question: '¿En que se diferencia el cambio climatico del Antropoceno del pasado geologico?',
    answer: 'La diferencia fundamental radica en la velocidad del cambio. Mientras que las transiciones climaticas naturales del pasado geologico solian ocurrir a lo largo de decenas de miles o millones de anos (dando margen a la migracion y evolucion biologica), el calentamiento del Antropoceno esta sucediendo en cuestion de decadas. Esta tasa de variacion termica es exponencialmente mas rapida que casi cualquier evento previo documentado, superando la capacidad de adaptacion de la biosfera actual y provocando una extincion masiva acelerada.',
  },
  {
    question: '¿Qué fue el Maximo Termico del Paleoceno-Eoceno (PETM)?',
    answer: 'El PETM fue un evento de calentamiento global extremo ocurrido hace aproximadamente 56 millones de anos. Se debio a una inyeccion masiva y rapida de carbono en la atmosfera (posiblemente por la liberacion de hidratos de metano oceanicos o volcanismo en el Atlantico Norte), elevando la temperatura global de 5 a 8 grados en unos pocos miles de anos. Se considera el mejor analogo geologico del cambio climatico moderno, y resulto en acidificacion oceanica severa y extinciones masivas de foraminiferos bentonicos.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    title: 'Cronologia de la Temperatura Terrestre',
    sub: 'Explora las eras climaticas geologicas de la Tierra',
    ageLabel: 'Edad:',
    tempLabel: 'Temperatura Media:',
    selectPrompt: 'Selecciona un periodo geologico.',
    epoch_archean_name: 'Eon Arcaico',
    epoch_archean_age: '4.0 a 2.5 mil millones de anos atras',
    epoch_archean_desc: 'Tierra extremadamente caliente con atmosfera de metano y CO2.',
    epoch_proterozoic_name: 'Eon Proterozoico',
    epoch_proterozoic_age: '2.5 mil millones a 541 millones de anos atras',
    epoch_proterozoic_desc: 'El oxigeno causa la glaciacion huroniana.',
    epoch_paleozoic_name: 'Era Paleozoica',
    epoch_paleozoic_age: '541 a 252 millones de anos atras',
    epoch_paleozoic_desc: 'Explosion de vida en oceanos y migracion a la tierra.',
    epoch_mesozoic_name: 'Era Mesozoica',
    epoch_mesozoic_age: '252 a 66 millones de anos atras',
    epoch_mesozoic_desc: 'La era de los dinosaurios con condiciones de invernadero.',
    epoch_cenozoic_name: 'Era Cenozoica',
    epoch_cenozoic_age: '66 millones de anos atras al Presente',
    epoch_cenozoic_desc: 'Enfriamiento gradual hasta glaciaciones cuaternarias.',
    epoch_anthropocene_name: 'Epoca del Antropoceno',
    epoch_anthropocene_age: 'Dia Presente y Futuro',
    epoch_anthropocene_desc: 'Calentamiento rapido por gases de efecto invernadero.',
  },
  seo: [
    {
      type: 'title',
      text: 'CLIMATOLOGIA HISTORICA: La evolucion termica de la Tierra a traves de las eras geologicas',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'El clima de la Tierra nunca ha sido estatico. A lo largo de sus 4.500 millones de anos de existencia, nuestro planeta ha oscilado entre dos estados fundamentales: el estado de invernadero (greenhouse) y el estado de glaciacion (icehouse). Comprender estas fluctuaciones a gran escala no es solo un ejercicio de curiosidad geologica, sino una herramienta indispensable para contextualizar la velocidad y gravedad del calentamiento global antropogenico. Mediante el estudio de isotopos de oxigeno en fosiles marinos y burbujas de aire atrapadas en nucleos de hielo, los paleoclimatologos han podido reconstruir un registro preciso de la temperatura terrestre del pasado.',
    },
    {
      type: 'title',
      text: 'Registro de temperaturas por eon y era geologica',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'La historia planetaria se divide en grandes intervalos temporales definidos por cambios biologicos y geologicos. A continuacion, se presenta la relacion de temperaturas medias estimadas para cada epoca disponible en esta cronologia:',
    },
    {
      type: 'table',
      headers: ['Epoca Geologica', 'Edad Aprox.', 'Temperatura Media', 'Hito y Caracteristicas Climatologicas'],
      rows: [
        ['<strong>Eon Arcaico</strong>', '4.0 a 2.5 Ga', '30 °C', 'Tierra primitiva muy caliente. Sol joven debil compensado por un efecto invernadero extremo rico en metano.'],
        ['<strong>Eon Proterozoico</strong>', '2.5 Ga a 541 Ma', '12 °C', 'Aumento de oxigeno libre; provoca el colapso del metano y desencadena glaciaciones globales ("Tierra Bola de Nieve").'],
        ['<strong>Era Paleozoica</strong>', '541 a 252 Ma', '20 °C', 'Gran biodiversidad marina y colonizacion terrestre. Termina con un evento volcanico y calentamiento extremo.'],
        ['<strong>Era Mesozoica</strong>', '252 a 66 Ma', '22 °C', 'El periodo calido por excelencia (superinvernadero sin hielo polar). Florecimiento de los dinosaurios.'],
        ['<strong>Era Cenozoica</strong>', '66 Ma a hoy', '14 °C', 'Enfriamiento progresivo impulsado por corrientes oceanicas continentales hasta los ciclos de glaciaciones cuaternarias.'],
        ['<strong>Antropoceno</strong>', 'Presente y futuro', '15.2 °C', 'Calentamiento anomalo y vertiginoso debido a las emisiones antropogenicas de gases de efecto invernadero.'],
      ],
    },
    {
      type: 'title',
      text: 'Los extremos termicos del pasado: De la glaciacion global al calor del Mesozoico',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'La historia planetaria incluye hitos climaticos extremos. En el Eon Proterozoico, la fotosintesis primitiva libero oxigeno masivamente, oxidando el metano atmosferico y sumiendo al planeta en la glaciacion Huroni, uno de los periodos de "Tierra Bola de Nieve" donde los glaciares alcanzaron latitudes ecuatoriales. En el extremo opuesto, durante la Era Mesozoica y el Paleoceno, la intensa actividad volcanica tectonica saturo la atmosfera de CO2, elevando la temperatura global promedio hasta 10 grados por encima de los niveles actuales. Estos periodos carecian por completo de hielo polar, albergando bosques templados en latitudes árticas y permitiendo la hegemonia de reptiles de sangre fria como los dinosaurios.',
    },
    {
      type: 'title',
      text: 'Factores que dirigen el clima planetario a escala geologica',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'El clima de la Tierra a largo plazo es el resultado de un delicado equilibrio termodinamico gobernado por varios mecanismos naturales interconectados:',
    },
    {
      type: 'list',
      items: [
        '<strong>Ciclos de Milankovitch:</strong> Pequeñas variaciones periodicas en la excentricidad, inclinacion y precesion orbital del planeta cambian la radiacion solar recibida.',
        '<strong>Ciclo del Carbono Silicato-Carbonato:</strong> El termostato geoquimico a largo plazo. La lluvia remueve CO2 convirtiendolo en silicatos depositados en los oceanos.',
        '<strong>Tectonica de Placas:</strong> La deriva continental altera las corrientes marinas globales y crea cadenas montañosas que aceleran la meteorizacion quimica del CO2.',
        '<strong>Efecto Albedo de Retroalimentacion:</strong> La presencia de nieve y hielo refleja la luz solar, enfriando aun mas el planeta en circulos de retroalimentacion.',
      ],
    },
    {
      type: 'title',
      text: 'El Antropoceno: Una aceleracion termica sin precedentes en la biosfera',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'La transicion del periodo estable del Holoceno al Antropoceno marca la era de impacto directo de la humanidad sobre los sistemas planetarios. A diferencia de los eventos termicos del pasado, cuyas causas orbitales o volcanicas operaban a escalas de decenas de miles de anos, el calentamiento actual esta impulsado por la combustion masiva de reservas de carbono fosil acumuladas durante millones de anos. La tasa actual de acumulacion de gases de efecto invernadero y el incremento de la temperatura global promedio estan ocurriendo a una velocidad significativamente superior que la de la extincion del Permico-Triasico o el PETM, planteando un desafio adaptativo sin precedentes para la biodiversidad planetaria.',
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
