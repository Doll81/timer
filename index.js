function startTimer() {
  // Установка времени окончания (27 августа 2023 года)
  var countDownDate = new Date("August 27, 2023 23:59:59").getTime();

  // Обновление таймера каждую секунду
  var x = setInterval(function() {
    // Получение текущей даты и времени
    var now = new Date().getTime();

    // Вычисление времени, оставшегося до окончания
    var distance = countDownDate - now;

    // Расчет значений дней, часов, минут и секунд
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Отображение оставшегося времени
    console.log("Осталось: " + days + " дн. " + hours + " ч. " + minutes + " мин. " + seconds + " сек.");

    // Если время истекло, остановить таймер
    if (distance < 0) {
      clearInterval(x);
      console.log("Время истекло");
    }
  }, 1000);
}

// Вызов функции для запуска таймера
startTimer();
