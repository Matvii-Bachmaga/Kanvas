<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Подтверждение</title>
</head>
<body>
    <h1>
        <?php
        if ($_POST ['status'] === 'success') {
            echo "Ваше сообщение было успешно отправлено!";
        } else {
            echo "Произошла ошибка при отправке сообщения.";
        }
        ?>
    </h1>
    <button onclick="window.history.back()">Вернуться назад</button>
</body>
</html>