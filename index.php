
Копіювати код
<?php
// index.php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Обработка данных формы
    $phoneNumber = $_POST['phoneNumber'];
    // Ваш код обработки
    header("Location: confirmation.php?status=success");
    exit();
} else {
    // Если метод не POST
    echo "Метод не поддерживается";
}
?>