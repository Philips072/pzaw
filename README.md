Tracker treningów fitness
Opis zadania:
Stwórz aplikację do śledzenia codziennych treningów. Każdy trening ma nazwę ćwiczenia, liczbę kalorii i status (wykonany/nie wykonany).
Wymagania:
1. Komponent WorkoutItem
Stwórz komponent, który przyjmuje propsy:

workout - obiekt z treningiem zawierający:

id - unikalny identyfikator
exercise - nazwa ćwiczenia (string)
calories - spalone kalorie (number)
completed - czy wykonany (boolean)






onToggleComplete - funkcja do zmiany statusu wykonany/nie wykonany
onDelete - funkcja do usuwania treningu
onUpdateCalories - funkcja do aktualizacji liczby kalorii

2. Funkcjonalności:
Komponent powinien wyświetlać:

Checkbox do oznaczania jako wykonane
Nazwę ćwiczenia i liczbę spalonych kalorii
Przycisk "+10" do dodawania 10 kalorii
Przycisk "-10" do odejmowania 10 kalorii (minimum 10)
Przycisk "Usuń" do usuwania treningu
Przekreślenie tekstu gdy trening jest wykonany
Badge z napisem "DONE" dla wykonanych treningów

3. Główny komponent
W głównym komponencie stwórz:

Stan z listą treningów (minimum 5 treningów)
Funkcję toggleComplete(id) - zmiana statusu wykonania
Funkcję deleteWorkout(id) - usuwanie treningu
Funkcję updateCalories(id, newCalories) - aktualizacja kalorii

Przykładowe dane:
[
  { id: 1, exercise: "Bieganie", calories: 200, completed: false },
  { id: 2, exercise: "Pompki", calories: 50, completed: true },
  { id: 3, exercise: "Przysiady", calories: 80, completed: false },
  { id: 4, exercise: "Plank", calories: 30, completed: true },
  { id: 5, exercise: "Burpees", calories: 120, completed: false },
  { id: 6, exercise: "Jazda na rowerze", calories: 150, completed: false }
]
Dodatkowe wyzwania:

Dodaj walidację - kalorie nie mogą być mniejsze niż 10
Dodaj licznik: ile treningów wykonanych / wszystkich
Dodaj sumę spalonych kalorii (tylko z wykonanych treningów)
Dodaj licznik całkowitych kalorii (ze wszystkich treningów)
Dodaj przycisk "Reset dnia" (usuń wszystkie wykonane treningi)
Dodaj kategorię treningu (Cardio/Strength/Flexibility) i filtrowanie po kategorii
Dodaj czas trwania treningu w minutach

Wskazówki:

Użyj Math.max(10, calories - 10) dla walidacji minimalnych kalorii
Do sumowania kalorii:

javascript  const totalCalories = workouts
    .filter(w => w.completed)
    .reduce((sum, w) => sum + w.calories, 0);

Badge "DONE" możesz zrobić jako: {completed && <strong> ✅ DONE</strong>}
Emoji do treningów: 🏃 💪 🚴 🏋️ 🤸

Bonusowe funkcjonalności:

Dodaj procent wykonanych treningów
Dodaj progress bar pokazujący postęp
Dodaj datę wykonania treningu
Dodaj ranking najtrudniejszych treningów (najwięcej kalorii)
