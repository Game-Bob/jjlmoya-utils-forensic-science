import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'symulator-sir-epidemii';
const title = 'Symulator SIR epidemii';
const description = 'Badaj rozprzestrzenianie sie patogenow za pomoca interaktywnego modelu SIR, ktory w czasie rzeczywistym dostosowuje R0, smiertelnosc, szczepienia, okres zakaznosci, szczytowe obciazenie i krzywe transmisji.';

const howTo = [
  {
    name: 'Ustal liczbe reprodukcji',
    text: 'Przesun suwak R0, aby okreslic, ile wtornych zakazen jedna osoba zakazna wywolaloby w calkowicie podatnej populacji.',
  },
  {
    name: 'Dodaj szczepienia i skutecznosc szczepionki',
    text: 'Zwieksz pokrycie szczepieniami lub skutecznosc szczepionki, aby usunac chronione osoby z puli podatnych i obnizyc efektywna liczbe reprodukcji.',
  },
  {
    name: 'Dostosuj smiertelnosc i czas zakaznosci',
    text: 'Zmien odsetek smiertelnych przypadkow oraz liczbe dni zakaznych, aby zobaczyc, jak reaguja powazne wyniki i czas krzywych.',
  },
  {
    name: 'Odczytaj krzywe SIR',
    text: 'Uzyj wykresu i inspektora dni, aby porownac krzywe podatnych, zakazonych, ozdrowiencow i szacunkowych zgonow w symulowanym wybuchu epidemii.',
  },
];

const faq = [
  {
    question: 'Co pokazuje model SIR?',
    answer: 'Model SIR dzieli populacje na grupy podatnych, zakazonych i ozdrowiencow. Szacuje, jak ludzie przemieszczaja sie miedzy tymi grupami w czasie wraz z postepem transmisji i zdrowienia.',
  },
  {
    question: 'Jak szczepienia zmieniaja krzywa?',
    answer: 'Szczepienia zmniejszaja populacje podatnych, gdy zapobiegaja zakazeniu. W tym symulatorze skuteczne szczepienia obnizaja efektywna liczbe reprodukcji i moga zmniejszyc lub opoznic szczyt zakazen.',
  },
  {
    question: 'Czy R0 to to samo co Re?',
    answer: 'Nie. R0 opisuje rozprzestrzenianie sie w calkowicie podatnej populacji. Re to efektywna liczba reprodukcji po tym, jak odpornosc, szczepienia lub zmiany zachowania zmniejsza liczbe osob, ktore moga zostac zakazone.',
  },
  {
    question: 'Dlaczego krzywa zakazonych osiaga szczyt, a potem spada?',
    answer: 'Krzywa zakazonych spada, gdy kazda zakazna osoba generuje mniej nowych zakazen niz liczba osob opuszczajacych grupe zakazonych przez wyzdrowienie lub smierc. Wyczerpanie podatnosci jest glownym czynnikiem w podstawowym modelu SIR.',
  },
  {
    question: 'Czy ten symulator moze przewidziec prawdziwa epidemie?',
    answer: 'Jest to narzedzie dydaktyczne i scenariuszowe, a nie prognoza. Rzeczywiste epidemie wymagaja struktury wiekowej, sieci kontaktow, geografii, opoznien w raportowaniu, zmieniajacego sie zachowania, wariantow, zanikajacej odpornosci i skalibrowanych danych.',
  },
  {
    question: 'Jaka jest roznica miedzy atakiem a szczytem zakazonych?',
    answer: 'Atak mierzy calkowity odsetek populacji kiedykolwiek zakazonej do konca epidemii. Szczyt zakazonych mierzy maksymalna liczbe osob jednoczesnie zakaznych w danym momencie. Niski szczyt nie gwarantuje niskiego ataku i odwrotnie.',
  },
  {
    question: 'Co wizualnie oznacza Re ponizej 1?',
    answer: 'Gdy Re spada ponizej 1, kazda zakazna osoba generuje srednio mniej niz jedno nowe zakazenie. Na wykresie krzywa zakazonych nigdy nie wznosi sie stromo i moze natychmiast spadac od poczatkowego zarodka, co oznacza, ze epidemia nie moze sie utrzymac.',
  },
  {
    question: 'Jak okres zakaznosci wplywa na epidemie?',
    answer: 'Dluzszy okres zakaznosci wydluza czas, w ktorym kazda zakazona osoba moze przenosic patogen. Rozciaga to os czasu epidemii, opoznia szczyt i, przy tym samym R0, moze wyprodukowac szersza krzywa z nizszym szczytem.',
  },
  {
    question: 'Dlaczego smiertelnosc nie zmienia krzywej zakazonych?',
    answer: 'W tym modelu SIR smiertelnosc wplywa tylko na liczbe zgonow odgaleziona od grupy ozdrowiencow. Nie wplywa zwrotnie na transmisje, poniewaz zgony i wyzdrowienia usuwaja ludzi z puli zakaznych w tym samym tempie.',
  },
  {
    question: 'Co to jest prog odpornosci stadnej?',
    answer: 'Prog odpornosci stadnej to odsetek populacji, ktory musi byc odporny, aby Re spadlo ponizej 1. Szacuje sie go jako 1 - 1/R0. Dla odry z R0 okolo 12 prog wynosi ponad 91%. Dla grypy sezonowej z R0 okolo 1,3 prog wynosi okolo 23%.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    liveScenario: 'Zyjacy scenariusz epidemii',
    curveChart: 'Krzywe transmisji SIR',
    inspectDay: 'Inspekcja dnia symulacji',
    legend: 'Legenda krzywych',
    susceptible: 'Podatni',
    infected: 'Zakazeni',
    recovered: 'Ozdrowiency lub odporni',
    deaths: 'Zgony',
    controls: 'Parametry epidemii',
    modelName: 'Model przedzialowy',
    peakInfected: 'Szczyt zakazonych',
    peakDay: 'Dzien szczytu',
    attackRate: 'Atak',
    estimatedDeaths: 'Szacunkowe zgony',
    r0: 'Podstawowa liczba reprodukcji R0',
    lethality: 'Smiertelnosc',
    vaccination: 'Pokrycie szczepieniami',
    vaccineEffectiveness: 'Skutecznosc szczepionki',
    infectiousDays: 'Okres zakaznosci',
    initialInfected: 'Poczatkowo zakazeni',
    dayLabel: 'Dzien',
    daysUnit: 'dni',
    infectiousLabel: 'zakazny',
    reLabel: 'Re',
  },
  seo: [
    {
      type: 'title',
      text: 'Symulator SIR epidemii dla R0, szczepien, smiertelnosci i krzywych transmisji',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Ten symulator SIR epidemii pozwala zbadac, jak patogen rozprzestrzenia sie w populacji, gdy podatne osoby ulegaja zakazeniu, a nastepnie opuszczaja grupe zakaznych przez wyzdrowienie lub smierc. Jest przeznaczony dla studentow, popularyzatorow nauki, sluchaczy zdrowia publicznego i kazdego, kto szuka szybkiego wizualnego wyjasnienia, dlaczego male zmiany w transmisji lub odpornosci moga przeksztalcic przebieg epidemii.',
    },
    {
      type: 'paragraph',
      html: 'Interaktywne elementy sterujace koncentruja sie na zmiennych, ktore ludzie najczesciej chca testowac: <strong>R0</strong>, smiertelnosc, pokrycie szczepieniami, skutecznosc szczepionki, czas zakaznosci i poczatkowy odsetek zakazonych. Wykres aktualizuje sie natychmiast, dzieki czemu krzywe podatnych, zakazonych, ozdrowiencow, odpornych i zgonow mozna porownywac jako jeden polaczony system epidemiczny.',
    },
    {
      type: 'title',
      text: 'Jak dziala model SIR',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Podstawowy model SIR dzieli populacje na trzy glowne przedzialy. <strong>S</strong> to osoby podatne, ktore wciaz moga zostac zakazone. <strong>I</strong> to osoby obecnie zakazne, ktore moga przenosic patogen. <strong>R</strong> to osoby, ktore nie sa juz zakazne, poniewaz wyzdrowialy, uzyskaly odpornosc lub w inny sposob opuscily lancuch transmisji. Ten symulator sledzi rowniez szacunkowe zgony jako galezie powaznych wynikow z grupy opuszczajacej zakazenie.',
    },
    {
      type: 'paragraph',
      html: 'Tempo transmisji jest powiazane z R0 i okresem zakaznosci. Jesli R0 jest wysokie lub ludzie pozostaja zakazni dluzej, powstaje wiecej nowych zakazen, zanim grupa zakazonych sie zmniejszy. Jesli szczepienia usuna wystarczajaco duzo osob z puli podatnych, efektywna liczba reprodukcji spada, a szczyt epidemii moze stac sie znacznie mniejszy.',
    },
    {
      type: 'table',
      headers: ['Parametr', 'Co zmienia', 'Typowy efekt na krzywej'],
      rows: [
        ['R0', 'Potencjal transmisji przed uwzglednieniem odpornosci', 'Wyzsze R0 sprawia, ze krzywa zakazonych rosnie szybciej i osiaga wyzszy szczyt.'],
        ['Pokrycie szczepieniami', 'Odsetek osob usunietych z puli podatnych po zaszczepieniu', 'Wyzsze pokrycie obniza Re i moze splaszczyc przebieg epidemii.'],
        ['Skutecznosc szczepionki', 'Jak bardzo szczepionka zapobiega zakazeniu w tym uproszczonym modelu', 'Wyzsza skutecznosc sprawia, ze to samo pokrycie jest bardziej ochronne.'],
        ['Okres zakaznosci', 'Sredni czas, przez ktory ludzie pozostaja zakazni', 'Dluzsze zakazenie zmienia czas i moze wydluzyc przebieg epidemii.'],
        ['Smiertelnosc', 'Odsetek osob opuszczajacych zakazenie liczonych jako zgony', 'Wyzsza smiertelnosc podnosi krzywa zgonow bez bezposredniego zwiekszania transmisji.'],
      ],
    },
    {
      type: 'title',
      text: 'Intuicja dotyczaca R0, Re i odpornosci stadnej',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'R0 to srednia liczba wtornych przypadkow wywolanych przez jedna zakazna osobe w calkowicie podatnej populacji. Re, efektywna liczba reprodukcji, jest nizsza, gdy niektorzy ludzie sa juz odporni, zaszczepieni, odizolowani lub w inny sposob niedostepni dla zakazenia. W tym symulatorze skuteczne szczepienia bezposrednio zmniejszaja podatnosc, wiec wyswietlane Re spada wraz ze wzrostem pokrycia ochrona.',
    },
    {
      type: 'paragraph',
      html: 'Popularne przyblizenie odpornosci stadnej to <strong>1 - 1 / R0</strong>. Dla R0 rownego 3 prog wynosi okolo 66,7% skutecznej odpornosci. Symulator pomaga uczynic ten prog namacalnym: gdy skuteczne szczepienia sa ponizej progu, epidemie moga wciaz rosnac; gdy sa powyzej, transmisja ma trudnosci z utrzymaniem sie.',
    },
    {
      type: 'title',
      text: 'Co oznacza liczba szczytowych zakazonych',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Szczyt zakazonych to maksymalna liczba osob jednoczesnie zakaznych w symulowanej populacji. Czesciej ma to znaczenie operacyjne niz calkowita liczba zakazen, poniewaz szpitale, laboratoria, programy izolacji i zespoly sledzenia kontaktow odczuwaja presje ze strony jednoczesnych aktywnych przypadkow. Obnizenie szczytu moze byc wazne, nawet gdy koncowy atak nie zostanie zredukowany do zera.',
    },
    {
      type: 'paragraph',
      html: 'Atak szacuje odsetek calej populacji zakazonej do konca symulacji. Wysoki atak oznacza, ze patogen dotarl do wielu osob, zanim podatnosc zostala wyczerpana lub kontrolowana. Niski atak oznacza, ze odpornosc, szczepienia lub slaba transmisja zapobiegly szerokiemu rozprzestrzenieniu.',
    },
    {
      type: 'title',
      text: 'Rzeczywiste wartosci R0 i co oznaczaja dla odpornosci stadnej',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Podstawowa liczba reprodukcji R0 nie jest stala biologiczna patogenu. Zalezy od wzorcow kontaktow, gestosci zaludnienia, nawykow kulturowych i czynnikow srodowiskowych. Ten sam wirus moze miec rozne wartosci R0 w gesciej zaludnionym miescie w porownaniu z obszarem wiejskim lub w sezonie z wiekszym przebywaniem w pomieszczeniach. Ponizsze wartosci to przykladowe zakresy referencyjne z opublikowanych badan.',
    },
    {
      type: 'table',
      headers: ['Patogen', 'Typowy zakres R0', 'Prog odpornosci stadnej (1 - 1/R0)', 'Glowna cecha transmisji'],
      rows: [
        ['Grypa sezonowa', '1,2 - 1,4', '17% - 29%', 'Krotki okres zakaznosci, zmiennosc sezonowa'],
        ['SARS-CoV-2 (pierwotny)', '2,0 - 3,0', '50% - 67%', 'Transmisja przedobjawowa, droga aerozolowa'],
        ['SARS-CoV-2 (Delta)', '5,0 - 8,0', '80% - 87%', 'Zwiekszona wiremia, szybsze rozprzestrzenianie'],
        ['SARS-CoV-2 (Omikron)', '8,0 - 12,0', '87% - 92%', 'Unikanie odpornosci, tropizm gornych drog oddechowych'],
        ['Polio', '5,0 - 7,0', '80% - 86%', 'Droga fekalno-oralna, dlugie bezobjawowe wydalanie'],
        ['Ospa prawdziwa', '5,0 - 7,0', '80% - 86%', 'Wyeliminowana dzieki globalnej kampanii szczepien'],
        ['Odra', '12,0 - 18,0', '92% - 94%', 'Niezwykle zarazliwa, przenoszona droga powietrzna, dlugi okres zakaznosci'],
        ['Krztusiec', '12,0 - 17,0', '92% - 94%', 'Zanikajaca odpornosc umozliwia ponowne zakazenia'],
      ],
    },
    {
      type: 'paragraph',
      html: 'Wysoki prog odpornosci stadnej nie oznacza automatycznie, ze szczepienia sa bezcelowe, gdy pokrycie jest ponizej progu. Nawet czesciowa odpornosc spowalnia transmisje, obniza szczyt, zmniejsza liczbe powaznych przypadkow i zyskuje czas dla systemu opieki zdrowotnej. Symulator pokazuje ten efekt, gdy przesuwasz suwak szczepien przez wartosci posrednie.',
    },
    {
      type: 'title',
      text: 'Jak zmienia sie efektywna liczba reprodukcji Re podczas epidemii',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Re to efektywna liczba reprodukcji w danym momencie epidemii. W przeciwienswie do R0, ktore zaklada calkowicie podatna populacje, Re uwzglednia odpornosc, szczepienia i wszelkie inne czynniki zmniejszajace podatnosc. W tym symulatorze Re jest obliczane jako <strong>R0 x (1 - udzial chronionych)</strong>, gdzie udzial chronionych to odsetek populacji skutecznie odpornej dzieki szczepieniom.',
    },
    {
      type: 'paragraph',
      html: 'Wartosc Re wyswietlana w naglowku symulatora aktualizuje sie podczas przesuwania elementow sterujacych. Gdy Re pozostaje powyzej 1, epidemia rosnie. Gdy spada ponizej 1, kazda zakazona osoba generuje srednio mniej niz jedno nowe zakazenie, a epidemia nie moze sie utrzymac. To kluczowy wniosek dotyczacy kontroli epidemii: doprowadzenie i utrzymanie Re ponizej 1 dzieki odpornosci, zachowaniu lub interwencjom.',
    },
    {
      type: 'title',
      text: 'Atak, szczytowe obciazenie i co mowia o ciezkości epidemii',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Atak to odsetek calkowitej populacji zakazonej w ciagu calej symulowanej epidemii. Jest to najczesciej przytaczana miara podsumowujaca po fali epidemicznej. Wysoki atak oznacza, ze patogen zakazil wiekszosc podatnych osob, zanim wyczerpanie lub kontrola zatrzymaly transmisje. Niski atak oznacza, ze odpornosc, szczepienia lub z natury slaba transmisja zapobiegly szerokiemu rozprzestrzenieniu.',
    },
    {
      type: 'paragraph',
      html: 'Szczyt zakazonych - maksymalna liczba osob jednoczesnie zakaznych - ma wieksze znaczenie dla krotkoterminowej presji na system opieki zdrowotnej. Fala z umiarkowanym atakiem, ale bardzo wysokim, ostrym szczytem moze przeciazyc szpitale, nawet jesli calkowita liczba przypadkow nie jest ekstremalna. Odwrotnie, wolna, splaszczona krzywa moze miec podobny atak rozlozony na wiele tygodni, dajac systemowi opieki zdrowotnej czas na radzenie sobie z przypadkami. Dlatego urzednicy zdrowia publicznego podkreslaja <strong>splaszczanie krzywej</strong> jako cel operacyjny odrebny od zapobiegania wszystkim zakazeniom.',
    },
    {
      type: 'title',
      text: 'Splaszczanie krzywej i wydajnosc opieki zdrowotnej w modelu SIR',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Krzywa zakazonych w modelu SIR mozna interpretowac jako liczbe osob wymagajacych jednoczesnie opieki. W prawdziwej epidemii kazda osoba potrzebujaca lozka szpitalnego, wspomagania tlenem lub intensywnej opieki korzysta z ograniczonych zasobow. Gdy krzywa zakazonych wznosi sie powyzej dostepnej wydajnosci, smiertelnosc ze wszystkich przyczyn wzrasta, poniewaz system nie moze zapewnic odpowiedniej opieki.',
    },
    {
      type: 'paragraph',
      html: 'Szczepienia w tym modelu splaszczaja krzywa, usuwajac ludzi z puli podatnych, zanim moga zostac zakazeni. Zmniejszenie R0 za pomoca innych srodkow - masek, wentylacji, dystansu, testow, izolacji - rowniez obnizyloby szczyt w bardziej kompletnym modelu. Symulacja czyni mechanizm widocznym: wraz ze wzrostem skutecznego pokrycia szczepieniami szczyt sie zmniejsza, przesuwa pozniej lub znika calkowicie.',
    },
    {
      type: 'title',
      text: 'Matematyka stojaca za modelem SIR wizualizowana',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'W modelu SIR tempo nowych zakazen na krok czasowy zalezy od trzech wielkosci: tempa transmisji <strong>beta</strong>, aktualnej liczby zakaznych osob <strong>I</strong> i odsetka efektywnej populacji, ktora jest wciaz podatna <strong>S / N</strong>. Iloczyn <strong>beta x I x S / N</strong> nazywany jest sila zakazenia. Kazdego dnia ta sila okresla, ile podatnych osob przechodzi do przedzialu zakazonych.',
    },
    {
      type: 'paragraph',
      html: 'Ludzie opuszczaja przedzial zakazonych z tempem zdrowienia <strong>gamma = 1 / okres zakaznosci</strong>. Rownowaga miedzy sila zakazenia a tempem zdrowienia okresla, czy epidemia rosnie, czy maleje. Gdy beta x S / N przekracza gamma, nowe zakazenia przewyzszaja wyzdrowienia i epidemia sie rozszerza. Gdy odsetek podatnych S / N spadnie wystarczajaco, gamma dominuje i epidemia sie wycofuje.',
    },
    {
      type: 'paragraph',
      html: 'Parametr <strong>beta</strong> nie jest bezposrednio widoczny w interfejsie. Zamiast tego jest wyliczany z R0 i okresu zakaznosci poprzez relacje <strong>beta = R0 x gamma</strong>. Dlatego zmiana R0 lub okresu zakaznosci daje podobne, ale nie identyczne kszalty krzywych. Oba parametry wplywaja na sile zakazenia, ale okres zakaznosci rozciaga rowniez os czasu epidemii.',
    },
    {
      type: 'title',
      text: 'Jak uzywac tego symulatora do nauki i nauczania',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Porownaj scenariusze z wysokim i niskim R0:</strong> ustaw R0 na 1,5 (zakres grypy sezonowej), a nastepnie na 6,0 (zakres polio przed szczepieniami). Zwroc uwage, jak zmieniaja sie wysokosc szczytu, czas szczytu i atak, nawet gdy wszystkie inne parametry sa identyczne.',
        '<strong>Zbadaj prog odpornosci stadnej:</strong> zacznij od R0 rownego 3,0 bez szczepien. Zanotuj atak. Następnie dodawaj pokrycie szczepieniami, az Re spadnie ponizej 1. Porownaj szczyt i atak przy pokryciu tuz ponizej i tuz powyzej progu.',
        '<strong>Przetestuj efekt wolnej vs. szybkiej reakcji:</strong> ustaw pokrycie szczepieniami na roznych poziomach i obserwuj, kiedy wystepuje szczyt. Wyzsze pokrycie nie tylko zmniejsza wysokosc szczytu, ale zwykle go opoznia, zyskujac czas na przygotowanie opieki zdrowotnej.',
        '<strong>Oddziel smiertelnosc od transmisji:</strong> ustaw smiertelnosc na 0% i obserwuj krzywa zakazonych. Nastepnie ustaw smiertelnosc na 10% bez zmiany innych ustawien. Krzywa zakazonych sie nie zmienia, ale liczba zgonow rosnie. To pokazuje, dlaczego wspolczynnik smiertelnosci przypadkow i tempo transmisji to odrebne wymiary epidemiologiczne.',
        '<strong>Zbadaj efekt okresu zakaznosci:</strong> porownaj 4-dniowy okres zakaznosci z 18-dniowym przy tym samym R0. Dluzszy okres rozciaga krzywa, opoznia szczyt i produkuje dluzsza, ale nizsza fale.',
        '<strong>Cwiczenie w klasie - znajdz prog:</strong> popros uczniow o znalezienie minimalnego pokrycia szczepieniami, ktore sprowadza Re ponizej 1 dla danego R0, a nastepnie porownaj wynik ze wzorem 1 - 1/R0.',
      ],
    },
    {
      type: 'title',
      text: 'Kiedy i dlaczego uzywac tego symulatora',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Studenci epidemiologii:</strong> polacz matematyczne podstawy SIR z interaktywnymi ksztaltami krzywych, zanim zaczniesz prace z rownaniami rozniczkowymi lub programowac wlasne modele.',
        '<strong>Popularyzatorzy nauki i dziennikarze:</strong> generuj wykresy, zrzuty ekranu lub zywe wyjasnienia pokazujace, dlaczego R0, szczepienia i okres zakaznosci maja znaczenie dla trajektorii epidemii.',
        '<strong>Sluchacze zdrowia publicznego:</strong> testuj, jak rozne kombinacje interwencji przesuwaja szczyt epidemii i atak, aby wyrobic sobie intuicje na temat kompromisow w reagowaniu na wybuch epidemii.',
        '<strong>Kazdy ciekawy matematyki epidemicznej:</strong> poznawaj model SIR bez potrzeby pisania kodu lub instalowania oprogramowania. Kazdy element sterujacy aktualizuje wykres w czasie rzeczywistym.',
      ],
    },
    {
      type: 'title',
      text: 'Rozszerzenia modelu: SEIR, SIRS i dalej',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Ten symulator uzywa podstawowej struktury SIR. Kilka popularnych rozszerzen dodaje realizmu. <strong>Model SEIR</strong> dodaje przedzial eksponowanych (E) dla osob, ktore sa zakazone, ale jeszcze nie zakazne, co reprezentuje okres inkubacji. Grupa eksponowanych opoznia szczyt epidemii w porownaniu z modelem SIR, poniewaz zakazenia spedzaja czas w fazie latentnej, zanim przyczynia sie do transmisji.',
    },
    {
      type: 'paragraph',
      html: '<strong>Model SIRS</strong> pozwala ozdrowiencom tracic odpornosc z czasem i powracac do przedzialu podatnych. Modeluje to patogeny takie jak krztusiec czy SARS-CoV-2 z zanikajaca odpornoscia i produkuje utrzymujace sie lub nawracajace fale epidemiczne. <strong>Model ze struktura wiekowa</strong> dzieli populacje na grupy wiekowe z roznymi macierzami kontaktow i profilami ciezkości, co jest niezbędne w przypadku chorob, w ktorych dzieci i osoby starsze maja bardzo rozne wyniki.',
    },
    {
      type: 'paragraph',
      html: 'Inne rozszerzenia dodaja rozprzestrzenianie geograficzne (modele metapopulacyjne), zmiany zachowania (adaptacyjne czestotliwosci kontaktow), szum stochastyczny (dla malych populacji, gdzie losowe wyginiecie ma znaczenie) i czas interwencji (zamkniecia szkol, lockdowny, ograniczenia podrozy, ktore wlaczaja sie i wylaczaja). Kazde rozszerzenie dodaje zlozonosc niezbedna do prognozowania, ale moze przeslonic podstawowa dynamike transmisji, ktora podstawowy model SIR klarownie ilustruje.',
    },
    {
      type: 'title',
      text: 'Ograniczenia tego symulatora epidemii',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Jest to zwarty deterministyczny model SIR. Nie obejmuje grup wiekowych, struktury gospodarstw domowych, szkol, podrozy, superrozprzestrzeniania, okresow inkubacji, transmisji bezobjawowej, sezonowosci, wariantow, zanikajacej odpornosci, zmian zachowania, opoznien w testach ani interwencji zdrowia publicznego, ktore wlaczaja sie i wylaczaja w czasie. Te szczegoly sa niezbedne do prawdziwych prognoz.',
    },
    {
      type: 'paragraph',
      html: 'Model zaklada dobrze wymieszana populacje, w ktorej kazda podatna osoba ma rowne prawdopodobienstwo kontaktu z kazda zakazna osoba. Rzeczywiste populacje maja sieci kontaktow z silnym grupowaniem, assortatywnoscia wiekowa, struktura geograficzna i indywidualna zmiennoscia zakaznosci. Te cechy moga tworzyc wolniejszy poczatkowy wzrost, zdarzenia superrozprzestrzeniania i heterogeniczne wzorce epidemii, ktorych jednorodny model nie wychwytuje.',
    },
    {
      type: 'paragraph',
      html: 'Uzywaj symulatora do zrozumienia mechanizmow i porownywania scenariuszy, a nie do podejmowania decyzji medycznych, politycznych lub awaryjnych. Rzeczywista ocena epidemii wymaga danych nadzorczych, kontekstu lokalnego, analizy niepewnosci i specjalistycznego modelowania epidemiologicznego.',
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
      description,
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
