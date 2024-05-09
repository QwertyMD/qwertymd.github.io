function showThemePopup() {
    var popup = document.getElementById("themePopup");
    popup.classList.add("active");
}

function hideThemePopup() {
    var popup = document.getElementById("themePopup");
    popup.classList.remove("active");
}

function setTheme(theme) {
    var body = document.body;
    var backgroundImageUrl, backgroundColor;

    if (theme === 'pink') {
        backgroundImageUrl = 'https://www.transparenttextures.com/patterns/gray-floral.png';
        backgroundColor = '#8a1962';
    } else if (theme === 'blue') {
        backgroundImageUrl = 'https://www.transparenttextures.com/patterns/rocky-wall.png';
        backgroundColor = '#0b278c';
    } else if (theme === 'black') {
        backgroundImageUrl = 'https://www.transparenttextures.com/patterns/asfalt-light.png';
        backgroundColor = '#141414';
    }

    body.style.backgroundImage = 'url("' + backgroundImageUrl + '")';
    body.style.backgroundColor = backgroundColor;

    hideThemePopup();
}