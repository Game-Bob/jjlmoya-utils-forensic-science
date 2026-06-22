const slug = 'wykrywacz-nieszczelnosci-mikrofalowki';
const description = 'Przeanalizuj czy Twoja mikrofalówka emituje promieniowanie, mierząc w czasie rzeczywistym zakłócenia w sieci WiFi. Naukowe narzędzie bezpieczeństwa.';
const title = 'Wykrywacz Nieszczelności Mikrofalówki: Wizualizacja Zakłóceń WiFi';
const howTo = [
    {
      name: 'Połącz się z siecią WiFi 2,4 GHz',
      text: 'Upewnij się, że Twój telefon lub laptop NIE jest połączony z pasmem 5 GHz, aby zakłócenia były mierzalne.',
    },
    {
      name: 'Uruchom test opóźnienia bazowego',
      text: 'Naciśnij przycisk start przy wyłączonej mikrofalówce, aby ustalić stabilny punkt odniesienia dla połączenia.',
    },
    {
      name: 'Włącz mikrofalówkę',
      text: 'Podgrzewaj szklankę wody przez 30-60 sekund i stań z urządzeniem w pobliżu kuchenki.',
    },
    {
      name: 'Analizuj wykres w czasie rzeczywistym',
      text: 'Obserwuj, czy opóźnienie wzrasta powyżej 100-200 ms lub czy następuje utrata pakietów podczas pracy kuchenki.',
    },
  ];
const faq = [
    {
      question: 'Jak strona internetowa może wykryć moją mikrofalówkę?',
      answer: 'Nie używamy magicznych czujników, lecz analizujemy opóźnienia sieciowe. Zarówno WiFi 2,4 GHz, jak i kuchenki mikrofalowe pracują na tej samej częstotliwości (ok. 2450 MHz). Jeśli uszczelnienie mikrofalówki zawodzi, generuje ona "szum", który zakłóca WiFi, drastycznie zwiększając ping.',
    },
    {
      question: 'Czy wyciek z mikrofalówki jest niebezpieczny?',
      answer: 'Małe zakłócenia WiFi są normalne i nie oznaczają bezpośredniego zagrożenia dla zdrowia, ponieważ moc promieniowania szybko maleje wraz z odległością. Jednak silny wyciek wskazuje na nieszczelność drzwiczek lub siatki, co powinno zostać sprawdzone ze względów bezpieczeństwa technicznego.',
    },
    {
      question: 'Dlaczego test nie działa z WiFi 5 GHz?',
      answer: 'Ponieważ WiFi 5 GHz pracuje na znacznie wyższym paśmie częstotliwości niż mikrofalówka. Aby test był skuteczny, Twoje urządzenie musi być połączone z siecią 2,4 GHz routera.',
    },
    {
      question: 'Co oznaczają nagłe skoki opóźnienia na wykresie?',
      answer: 'Ciągłe skoki podczas pracy mikrofalówki sugerują, że sygnał elektromagnetyczny "ucieka" i nasyca pasmo, uniemożliwiając pakietom danych WiFi dotarcie na czas.',
    },
  ];
import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    copied: 'Skopiowano',
    noHistory: 'Brak historii',
    load: 'Wczytaj',
    delete: 'Usuń',
    microwaveDetection: 'Wykrywanie Mikrofal',
    shieldingAnalysis: 'Analiza Ekranowania',
    startTest: 'Rozpocznij Test',
    stopTest: 'Zatrzymaj Test',
    waitingForStart: 'Oczekiwanie na start...',
    detectingInterference: 'Wykrywanie zakłóceń...',
    baseLevel: 'Poziom Podstawowy',
    activeLevel: 'Poziom Aktywny',
    leakProbability: 'Prawdopodobieństwo Wycieku',
    lowLeak: 'Niskie',
    mediumLeak: 'Średnie',
    highLeak: 'Wysokie',
    pingLabel: 'Opóźnienie (ms)',
    packetLossLabel: 'Utrata Pakietów (%)',
    rfInterferenceMonitor: 'Monitor Zakłóceń RF',
    mwLeakDetector: 'MW LEAK DETECTOR v2.0',
    jitterUnit: 'ms / jitter',
    systemReady: 'System Gotowy',
    physicalRequirement: 'Wymóg Fizyczny',
    physicalDesc: 'Ten detektor wykorzystuje zakłócenia w paśmie 2,4 GHz (częstotliwość mikrofal). Aby narzędzie działało poprawnie, upewnij się, że jesteś połączony z siecią WiFi 2,4 GHz (nie 5 GHz / 6 GHz) lub umieść telefon blisko urządzenia.',
    understandStart: 'Rozumiem, Rozpocznij Skanowanie',
    rfInterferenceTitle: 'Monitor Zakłóceń',
    connectToAnalyze: 'Połącz się, aby rozpocząć analizę zakłóceń termicznych.',
    audioFeedback: 'Sygnalizacja Dźwiękowa',
    muteUnmute: 'WYCISZ / WYŁĄCZ WYCISZENIE',
    static: 'Szum',
  },
  seo: [
    {
      type: 'title',
      text: 'FIZYKA FAL: Czy Twoja mikrofalówka naprawdę emituje promieniowanie?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Kuchenka mikrofalowa to najbardziej niezrozumiane urządzenie w nowoczesnej kuchni. Nienawidzona przez purystów i uwielbiana przez pragmatyków, skrywa w sobie nieustanną walkę pomiędzy uwięzioną energią a światem zewnętrznym.',
    },
    {
      type: 'paragraph',
      html: 'Z czysto fizycznego punktu widzenia kuchenka mikrofalowa to <strong>rezonator wnękowy</strong> zaprojektowany do bombardowania cząsteczek wody promieniowaniem elektromagnetycznym o bardzo specyficznej częstotliwości: <strong>2,45 GHz</strong>. Częstotliwość ta nie jest przypadkowa; jest niezbędna do wywołania oscylacji dipolowych cząsteczek wody, co generuje ciepło poprzez tarcie. Problem polega na tym, że jest to dokładnie ta sama częstotliwość, której używa standard WiFi 802.11b/g/n.',
    },
    {
      type: 'title',
      text: 'Zakłócenia Elektromagnetyczne (EMI)',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Każde urządzenie WiFi działające w paśmie 2,4 GHz konkuruje o to samo "powietrze" co Twoja mikrofalówka. W idealnej kuchence <strong>Klatka Faradaya</strong> (metalowa siatka, którą widzisz na drzwiczkach i wewnętrznych ściankach) powinna zatrzymywać 100% energii.',
    },
    {
      type: 'paragraph',
      html: 'Jednak żadna klatka nie jest idealna w dłuższej perspektywie. Uszczelki drzwi, zatrzaski magnetyczne i zużycie metalu mogą pozwalać na ucieczkę niewielkich ilości energii. Chociaż poziomy te są zazwyczaj znacznie poniżej limitów bezpieczeństwa dla ludzi, są one <strong>gigantyczne</strong> dla karty sieciowej WiFi, powodując opóźnienia, utratę pakietów i charakterystyczny "jitter", który mierzy nasze narzędzie.',
    },
    {
      type: 'title',
      text: 'Domowy Test Klatki Faradaya',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Istnieje bardzo prosty, analogowy sposób na sprawdzenie podstawowego stanu ekranowania kuchenki, choć jest on mniej dokładny niż nasz cyfrowy pomiar jittera:',
    },
    {
      type: 'list',
      items: [
        '<strong>Krok 1 - Telefon:</strong> Umieść telefon komórkowy wewnątrz mikrofalówki (<strong>POD ŻADNYM POZOREM NIE WŁĄCZAJ KUCHENKI!</strong> Po prostu zamknij drzwiczki).',
        '<strong>Krok 2 - Połączenie:</strong> Spróbuj zadzwonić na ten telefon z innego urządzenia. Jeśli telefon zadzwoni, klatka Faradaya jest uszkodzona lub nie jest dostrojona do częstotliwości komórkowych. Jeśli usłyszysz komunikat "poza zasięgiem", ekranowanie działa poprawnie.',
      ],
    },
    {
      type: 'title',
      text: 'Mity vs Naukowa Rzeczywistość',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>"Mikrofalówki zmieniają strukturę molekularną wody"</strong> - FAŁSZ. Promieniowanie mikrofalowe jest <em>niejonizujące</em>. Nie ma wystarczającej energii, aby rozerwać wiązania chemiczne lub zmienić DNA. Po prostu wprowadza cząsteczki wody w wibracje, zwiększając ich energię kinetyczną (temperaturę).',
        '<strong>"Promieniowanie kumuluje się w jedzeniu"</strong> - FAŁSZ. Mikrofale są jak światło: po wyłączeniu przełącznika znikają. Gorące jedzenie nie emituje promieniowania mikrofalowego, a jedynie promieniowanie podczerwone (ciepło), tak samo jak ognisko czy patelnia.',
        '<strong>"Patrzenie na obracający się talerz niszczy wzrok"</strong> - CZĘŚCIOWO PRAWDA. Szyba w drzwiczkach posiada siatkę blokującą fale o częstotliwości 2,45 GHz. Jeśli jednak siatka jest uszkodzona, szyba nie zatrzyma mikrofal. Soczewka oka jest bardzo wrażliwa na ciepło i słabo ukrwiona, więc długotrwała bezpośrednia ekspozycja (w pobliżu wycieku) mogłaby spowodować zaćmę cieplną.',
      ],
    },
    {
      type: 'title',
      text: 'Jak działa ten cyfrowy detektor?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Nasze narzędzie nie mierzy promieniowania bezpośrednio (smartfony nie posiadają do tego czujników), ale mierzy jego <strong>główny objaw</strong>. Gdy cząsteczka promieniowania 2,45 GHz wydostaje się z kuchenki, "zderza się" z sygnałem WiFi Twojego urządzenia. Powoduje to:',
    },
    {
      type: 'list',
      items: [
        '<strong>Retransmisję pakietów:</strong> Router wykrywa, że wiadomość dotarła uszkodzona i musi ją wysłać ponownie, co zwiększa opóźnienie.',
        '<strong>Wahania Jittera:</strong> Jest to miara niestabilności czasu odpowiedzi. Wysoki jitter jest jednoznacznym znakiem silnych zakłóceń zewnętrznych.',
        '<strong>Spadek wydajności:</strong> Prędkość transferu gwałtownie spada z powodu nasycenia pasma radiowego.',
        '<strong>Szum tła:</strong> Mikrofalówka "wstrzykuje" szum, który podnosi "poziom szumów", utrudniając urządzeniu odróżnienie rzeczywistych danych od radioaktywnego chaosu.',
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

