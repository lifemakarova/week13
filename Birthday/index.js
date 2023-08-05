function calculateDays() {
    const birthdayInput = document.getElementById('birthday');
    const resultElement = document.getElementById('result');
    const errorMessage = document.getElementById('error-message');

    if (birthdayInput.value === '') {
        errorMessage.style.display = 'block';
        resultElement.textContent = '';
    } else {
        errorMessage.style.display = 'none';

        const today = new Date();
        const birthday = new Date(birthdayInput.value);
        birthday.setFullYear(today.getFullYear()); // Устанавливаем год дня рождения текущего года

        if (birthday < today) {
            birthday.setFullYear(today.getFullYear() + 1); // Если день рождения уже прошел в этом году, устанавливаем его на следующий год
        }

        const oneDay = 24 * 60 * 60 * 1000; // Количество миллисекунд в одном дне

        const daysLeft = Math.ceil((birthday - today) / oneDay); // Используем Math.ceil для округления вверх

        let daysText = '';
        if (daysLeft === 0) {
            daysText = 'Сегодня день рождения!';
        } else if (daysLeft === 1) {
            daysText = 'Остался 1 день';
        } else if (daysLeft > 1 && daysLeft < 5) {
            daysText = `Осталось ${daysLeft} дня`;
        } else {
            daysText = `Осталось ${daysLeft} дней`;
        }

        resultElement.textContent = daysText;
    }
}
