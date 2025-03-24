let capybaraCount = 0;
let upgradeCost = 100;
let clickValue = 1;

const capybaraCountDisplay = document.getElementById('capybara-count');
const clickButton = document.getElementById('click-button');
const upgradeButton = document.getElementById('upgrade-button');

clickButton.addEventListener('click', () => {
    capybaraCount += clickValue;
    capybaraCountDisplay.textContent = `Капибар: ${capybaraCount}`;
});

upgradeButton.addEventListener('click', () => {
    if (capybaraCount >= upgradeCost) {
        capybaraCount -= upgradeCost;
        clickValue += 1; // Увеличиваем значение клика
        upgradeCost = Math.floor(upgradeCost * 1.5); // Увеличиваем стоимость улучшения
        capybaraCountDisplay.textContent = `Капибар: ${capybaraCount}`;
        upgradeButton.textContent = `Улучшить (${upgradeCost} капибар)`;
    } else {
        alert('Недостаточно капибар для улучшения!');
    }
});