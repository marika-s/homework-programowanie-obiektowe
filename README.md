# homework-programowanie-obiektowe
Praca domowa po bloku Programowanie Obiektowe

Cwiczenie
Stworz aplikacje, ktora bedzie pobierala dane uzytkownika z API, a nastepnie zapisze je w stanie aplikacji

Stan aplikacji - obiekt stworzony na bazie klasy, posiada metody: setData, addUser, clearData i pola currentUserId = 1, listOfUsers = []

Kazdy pobrany user bedzie instancja klasy User, mozemy wykorzystac geter i seter do zarzadzania imieniem i nazwiskiem, a do adresu sam geter
W dokumencie HTML stworz button, ktory po kliku pobierze dane usera (event)
Po kazdym kliku zwiekszamy ID aktualnego usera, pobieramy dane z API, na podstawie zwrotki tworzymy nowa instancje klasy User a nastepnie dodajemy ja do stanu aplikacji
Po dodaniu encji do stanu aplikacji - aktualizujemy dokument HTML, aby pobrany uzytkownik pojawil sie na liscie

Rozbuduj zadanie w taki sposób, aby:
 * - po kliknięciu na wiersz z danymi - obiekt został usunięty ze stanu aplikacji, a DOM został zaktualizowany
 * - dodaj możliwość edycji danych
 * - dodaj CSS

1. usuwanie
- dodanie identyfikatora do elementu P
- dodanie eventu na kontener (liste elementow)
- nasluchiwanie na kontenerze ktory element zostal klikniety (event.target)
- wywolanie odpiednich funkcji po kliku na element
- bardziej zaawansowana forma: po kliku na element pytamy czy na pewno go usunac

2. edycja
- rozszerzenie konstruktora klasy User (isEdited (boolean))
- dodanie przycisku "edit" obok kazdego elementu na liscie
- klik przycisku - zmiana stanu w obiekcie
- na podstawie zmiany stanu renderujemy tekst lub inputy do edycji z buttonem do zapisu
- jezeli cancel - wracamy do poprzedniego stanu
- jezeli save - zapisujemy zmiany i odswiezamy DOM
