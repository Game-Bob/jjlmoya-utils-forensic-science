import type { CategoryLocaleContent } from '../../types';

export const content: CategoryLocaleContent = {
  slug: "kryminalistyka",
  title: "Narzędzia kryminalistyczne",
  description: "Narzędzia kryminalistyczne do strukturyzowanego triażu spraw, transparentnych obliczeń i raportowania uwzględniającego stopień pewności dowodów.",
  seo: [
    {
      type: 'title',
      text: "Narzędzia kryminalistyczne do analizy dowodów i triażu spraw",
      level: 2,
    },
    {
      type: 'paragraph',
      html: "Ta biblioteka dostarcza specjalistyczne narzędzia i obliczenia dla analityków kryminalistycznych, prawników, badaczy i śledczych. Narzędzia kryminalistyczne pomagają w ocenie dowodów rzeczowych zabezpieczonych na miejscach zdarzeń. Korzystając ze strukturyzowanych modeli do wyznaczania trajektorii plam krwi, szacowania wieku, współczynnika załamania światła szkła oraz analizy narkotyków, zespoły mogą przeprowadzić wstępną selekcję spraw. Każde narzędzie kładzie nacisk na przejrzystość, prezentując przyjęte założenia i pomagając użytkownikom jasno zrozumieć granice każdej metody.",
    },
    {
      type: 'paragraph',
      html: "Wstępna analiza sprawy wymaga oceny dostępności dowodów, założeń leżących u podstaw wzorów naukowych oraz zakresu niepewności. Kalkulatory te zostały zaprojektowane w celu wsparcia edukacji i wstępnej selekcji. Pomagają one określić, które kroki analityczne są niezbędne przed podjęciem decyzji o wykonaniu pełnych badań laboratoryjnych. Korzystanie z tych narzędzi ułatwia wczesne wykrywanie braków w materiale dowodowym w toku śledztwa.",
    },
    {
      type: 'title',
      text: "Kluczowe obszary obliczeń kryminalistycznych",
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Szacowanie wieku:</strong> obliczenia na podstawie układu kostnego, uzębienia i wskaźników dojrzałości z określoną niepewnością.',
        '<strong>Interpretacja dowodów:</strong> strukturyzowane kalkulatory prezentujące wzory, przedziały ufności i ograniczenia.',
        '<strong>Triaż spraw:</strong> szybkie narzędzia wskazujące brakujące dowody i identyfikujące parametry wymagane do badań formalnych.',
        '<strong>Wsparcie w raportowaniu:</strong> narzędzia zachęcające do jasnego raportowania opartego na przedziałach wartości zamiast pozornej dokładności.',
      ],
    },
    {
      type: 'title',
      text: "Zasady odpowiedzialnego korzystania z oprogramowania kryminalistycznego",
      level: 3,
    },
    {
      type: 'paragraph',
      html: "Każde obliczenie kryminalistyczne wiąże się z marginesem błędu i granicami ufności. Kalkulator nigdy nie powinien zastępować wykwalifikowanego biegłego ani walidowanej procedury laboratoryjnej. Zamiast tego narzędzia te najlepiej wykorzystywać do analizowania scenariuszy, wyjaśniania pojęć osobom bez specjalistycznej wiedzy oraz sprawdzania wrażliwości pomiarów przed sporządzeniem końcowych raportów. Pomaga to zapobiegać nieporozumieniom na sali sądowej w kwestii precyzji naukowej.",
    },
    {
      type: 'table',
      headers: ['Właściwe zastosowanie', 'Niewłaściwe zastosowanie', 'Znaczenie'],
      rows: [
        ["Wstępna weryfikacja akt sprawy przed formalną ekspertyzą biegłego.", "Zastępowanie opinii biegłego wynikiem z kalkulatora.", "Dowody kryminalistyczne muszą spełniać rygorystyczne standardy naukowej walidacji."],
        ["Wyjaśnianie śledczym niepewności pomiarowej i przedziałów wartości.", "Podawanie jednej dokładnej liczby bez wyjaśnienia ograniczeń.", "Pozorna dokładność może prowadzić do błędnych decyzji w wymiarze sprawiedliwości."],
        ["Badanie wpływu przyjętych założeń na szacowany wynik końcowy.", "Ukrywanie założeń początkowych lub obliczeń w dokumentacji sprawy.", "Przejrzystość umożliwia audyt wyników i ich odtworzenie przez inne osoby."],
        ["Określanie, czy jakość danych jest wystarczająca do wykonania obliczeń.", "Stosowanie wzorów przy słabych lub niekompletnych pomiarach skali.", "Słabe parametry wejściowe czynią każdą matematyczną rekonstrukcję niewiarygodną."],
      ],
    },
  ],
};
