document.addEventListener("DOMContentLoaded", function() {
    const currentTheme = localStorage.getItem("theme");

    if (currentTheme) {
        document.documentElement.setAttribute("data-theme", currentTheme);
    }

    const toggleButton = document.getElementById("toggle-theme");
    const resetButton = document.getElementById("reset-theme");

    toggleButton.addEventListener("click", function() {
        const currentTheme = document.documentElement.getAttribute("data-theme");
        let newTheme;

        if (currentTheme === "light") {
            newTheme = "dark";
        } else if (currentTheme === "dark") {
            newTheme = "yellow"; // Переключение на желтую тему
        } else if (currentTheme === "yellow") {
            newTheme = "horny"; // Переключение на розовую тему
        }
        else {
            newTheme = "light"; // Возврат к светлой теме
        }

        document.documentElement.setAttribute("data-theme", newTheme);
        localStorage.setItem("theme", newTheme);//внесение темы в память браузера
    });

    resetButton.addEventListener("click", function() {//кнопка сброса темы
        localStorage.removeItem("theme");
        document.documentElement.setAttribute("data-theme", "light");
    });
});