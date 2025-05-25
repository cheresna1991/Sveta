document.addEventListener("DOMContentLoaded", function() {
    const currentTheme = localStorage.getItem("theme");
    const docEl = document.documentElement;

    if (currentTheme) {
        docEl.setAttribute("data-theme", currentTheme);
    }

    const toggleButton = document.getElementById("toggle-theme");
    const resetButton = document.getElementById("reset-theme");

    function applyThemeWithTransition(newTheme) {
        // Временно добавляем transition ко всем элементам
        const style = document.createElement('style');
        style.id = 'theme-transition-style';
        style.textContent = `
            body, .head, .book, .book-info, .foot, 
            .book-info h3, .book-info p {
                transition: all 0.5s ease !important;
            }
        `;
        document.head.appendChild(style);

        docEl.setAttribute("data-theme", newTheme);
        
        // Удаляем transition после завершения анимации
        setTimeout(() => {
            const styleEl = document.getElementById('theme-transition-style');
            if (styleEl) styleEl.remove();
        }, 500);
    }

    toggleButton.addEventListener("click", function() {
        const currentTheme = docEl.getAttribute("data-theme");
        let newTheme;

        if (currentTheme === "light") {
            newTheme = "dark";
        } else if (currentTheme === "dark") {
            newTheme = "yellow";
        } else if (currentTheme === "yellow") {
            newTheme = "horny";
        } else {
            newTheme = "light";
        }

        applyThemeWithTransition(newTheme);
        localStorage.setItem("theme", newTheme);
    });

    resetButton.addEventListener("click", function() {
        applyThemeWithTransition("light");
        localStorage.removeItem("theme");
    });
});