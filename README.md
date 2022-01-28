# Magazyn - Zaliczenie

> Jest to api magazynu, które obsługuje przedmioty, pracowników, użytkowników oraz zamównienia





## Funkcje:

  - Wyświetlanie/edytowanie/dodawanie/usuwanie przedmiotów
  - Wyświetlanie/edytowanie/dodawanie/usuwanie pracowników
  - Wyświetlanie/edytowanie/dodawanie/usuwanie zamówień
  - Wyświetlanie/logowanie/rejestracja/usuwanie użytkowników
 
Hasła użytkowników są szyfrowane, wraz z przedmiotem można przesłać obrazek



## Sposób użycia:

- moja baza danych jest już podpięta w .env
- npm start

1. Przedmioty
- Poprzez postmana albo thunder client:
- Wyświetlanie wszystkich: GET localhost:3000/items
- Wyświetlanie konkretnego: GET localhost:3000/items/id
- Dodawanie POST localhost:3000/items
forma:
![Example screenshot](./screen1.png)
- Edytowanie PATCH localhost:3000/items/id - forma taka sama jak dodawanie
- Usuwanie DELETE localhost:3000/items/id
2. Pracownicy
- Wyświetlanie wszystkich: GET localhost:3000/workers
- Wyświetlanie konkretnego: GET localhost:3000/workers/id
- Dodawanie POST localhost:3000/workers
forma:
```json
{
    "name": "John",
    "surname": "Doe",
    "shiftStart": "16:00",
    "job": "Magazynier"
}
```
- Edytowanie PATCH localhost:3000/workers/id - forma taka sama jak dodawanie
- Usuwanie DELETE localhost:3000/workers/id
3. Zamówienia
- Wyświetlanie wszystkich: GET localhost:3000/orders
- Wyświetlanie konkretnego: GET localhost:3000/orders/id
- Dodawanie POST localhost:3000/orders
forma:
```json
{
    "itemsIds": "61d07169a93bd20c90b51ac1, 61d07169a93bd20c90b51ac1",
    "description": "Uwaga szkło",
    "ownerId": "61f2c85eed26b27ad3569648"
}
```
- Edytowanie PATCH localhost:3000/orders/id - forma taka sama jak dodawanie
- Usuwanie DELETE localhost:3000/orders/id
4. Użytkownicy
- Wyświetlanie wszystkich: GET localhost:3000/users
- Rejestracja: POST localhost:3000/users/register
forma:
```json
{
    "email": "adam@wp.pl",
    "password": "haslo1234"
}
```
- Login: POST localhost:3000/users/login - forma taka sama jak rejestracja
- Usuwanie DELETE localhost:3000/users/id






## RZeczy dodatkowe

Asynchronicznie wykonywane funkcje.






