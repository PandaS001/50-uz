// Конфигурация
const CONFIG = {
    musicEnabled: true
};

// 50 слов для Поля Чудес
const words = [
    // Животные
    { word: "КРОКОДИЛ", hint: "Зеленый хищник, который плачет", category: "Животные", sector: 100 },
    { word: "БЕГЕМОТ", hint: "Толстокожее животное, которое любит воду", category: "Животные", sector: 150 },
    { word: "ЖИРАФ", hint: "Самое высокое животное на планете", category: "Животные", sector: 200 },
    { word: "НОСОРОГ", hint: "У него один рог на носу", category: "Животные", sector: 250 },
    { word: "ЛЕОПАРД", hint: "Пятнистая большая кошка", category: "Животные", sector: 300 },
    { word: "ДИКОБРАЗ", hint: "Весь в иголках, но не еж", category: "Животные", sector: 350 },
    { word: "БРОНЕНОСЕЦ", hint: "Носит броню, но не танк", category: "Животные", sector: 400 },
    { word: "МУРАВЬЕД", hint: "Ест муравьев своим длинным носом", category: "Животные", sector: 450 },
    { word: "ПАНДА", hint: "Черно-белый медведь из Китая", category: "Животные", sector: 500 },
    { word: "КЕНГУРУ", hint: "Прыгает с сумкой на животе", category: "Животные", sector: 550 },

    // Города
    { word: "СТАМБУЛ", hint: "Город, расположенный в двух частях света", category: "Города", sector: 200 },
    { word: "ВЕНЕЦИЯ", hint: "Город на воде, где ездят на гондолах", category: "Города", sector: 250 },
    { word: "САНКТПЕТЕРБУРГ", hint: "Северная столица России", category: "Города", sector: 1000 },
    { word: "ИЕРУСАЛИМ", hint: "Святой город трех религий", category: "Города", sector: 800 },
    { word: "ВАЛААМ", hint: "Остров с монастырем на Ладоге", category: "Города", sector: 300 },
    { word: "САМАРКАНД", hint: "Древний город на Шелковом пути", category: "Города", sector: 600 },
    { word: "КАЗАНЬ", hint: "Третья столица России", category: "Города", sector: 150 },
    { word: "ВЛАДИВОСТОК", hint: "Город у Тихого океана", category: "Города", sector: 700 },
    { word: "АСТРАХАНЬ", hint: "Город в дельте Волги", category: "Города", sector: 400 },
    { word: "КАЛИНИНГРАД", hint: "Самый западный город России", category: "Города", sector: 500 },

    // Предметы
    { word: "ТЕРМОС", hint: "Сохраняет тепло, но не греет", category: "Предметы", sector: 150 },
    { word: "КАЛЕНДАРЬ", hint: "Показывает дни, но не часы", category: "Предметы", sector: 200 },
    { word: "БУДИЛЬНИК", hint: "Без него трудно проснуться", category: "Предметы", sector: 250 },
    { word: "ФОНАРИК", hint: "Дает свет, но не лампочка", category: "Предметы", sector: 180 },
    { word: "ЗЕРКАЛО", hint: "Показывает тебя, но не фотография", category: "Предметы", sector: 220 },
    { word: "КОМПАС", hint: "Всегда показывает на север", category: "Предметы", sector: 300 },
    { word: "БИНОКЛЬ", hint: "Приближает далекое", category: "Предметы", sector: 350 },
    { word: "ПЫЛЕСОС", hint: "Глотает пыль", category: "Предметы", sector: 400 },
    { word: "ХОЛОДИЛЬНИК", hint: "Дом для мороженого", category: "Предметы", sector: 500 },
    { word: "МИКРОВОЛНОВКА", hint: "Греет быстро, но не плита", category: "Предметы", sector: 550 },

    // Растения
    { word: "ОДУВАНЧИК", hint: "Желтый, а потом белый и пушистый", category: "Растения", sector: 300 },
    { word: "ПОДСОЛНУХ", hint: "Всегда смотрит на солнце", category: "Растения", sector: 250 },
    { word: "КАКТУС", hint: "Колючий и любит пустыню", category: "Растения", sector: 150 },
    { word: "БАОБАБ", hint: "Толстое дерево Африки", category: "Растения", sector: 500 },
    { word: "ЭВКАЛИПТ", hint: "Любимое дерево коал", category: "Растения", sector: 400 },
    { word: "ПАПОРОТНИК", hint: "Не цветет, но древний", category: "Растения", sector: 350 },
    { word: "ЛАНДЫШ", hint: "Маленькие белые колокольчики", category: "Растения", sector: 200 },
    { word: "НЕЗАБУДКА", hint: "Голубой цветок с красивым названием", category: "Растения", sector: 300 },
    { word: "ПОДОРОЖНИК", hint: "Растет у дороги, лечит раны", category: "Растения", sector: 150 },
    { word: "МАТЬИМАЧЕХА", hint: "Цветок с двумя названиями", category: "Растения", sector: 600 },

    // Явления
    { word: "РАДУГА", hint: "Разноцветная дуга после дождя", category: "Явления", sector: 200 },
    { word: "ЗЕМЛЕТРЯСЕНИЕ", hint: "Когда земля дрожит", category: "Явления", sector: 1000 },
    { word: "СЕВЕРНОЕСИЯНИЕ", hint: "Разноцветное небо на севере", category: "Явления", sector: 1500 },
    { word: "ЦУНАМИ", hint: "Огромная волна", category: "Явления", sector: 500 },
    { word: "ИЗВЕРЖЕНИЕ", hint: "Когда вулкан просыпается", category: "Явления", sector: 700 },
    { word: "МОЛНИЯ", hint: "Сверкает в небе перед громом", category: "Явления", sector: 300 },
    { word: "СМЕРЧ", hint: "Ветер в форме воронки", category: "Явления", sector: 400 },
    { word: "ЛАВИНА", hint: "Снежная река с горы", category: "Явления", sector: 450 },
    { word: "НАВОДНЕНИЕ", hint: "Когда вода выходит из берегов", category: "Явления", sector: 350 },
    { word: "МЕТЕОРИТ", hint: "Падает с неба", category: "Явления", sector: 600 }
];

// Состояние игры
let currentWord = null;
let currentIndex = 0;
let guessedLetters = [];
let currentPrize = 0;

// Инициализация
document.addEventListener('DOMContentLoaded', () => {
    const splashScreen = document.querySelector('.splash-screen');
    const mainPage = document.querySelector('.main-page');
    const musicControl = document.querySelector('.music-control');
    const bgMusic = document.getElementById('bgMusic');
    const resetBtn = document.getElementById('reset-progress');
    
    const completedLevels = JSON.parse(localStorage.getItem('completedWords')) || [];
    
    createConstellations();
    
    // Музыка
    if (CONFIG.musicEnabled) {
        bgMusic.volume = 0.3;
        musicControl.addEventListener('click', () => toggleMusic(bgMusic, musicControl));
    }
    
    updateStats(completedLevels.length);
    
    // Заставка
    setTimeout(() => {
        splashScreen.style.display = 'none';
        mainPage.style.display = 'block';
        generateLevelButtons(completedLevels);
        
        if (CONFIG.musicEnabled) {
            bgMusic.play().catch(() => {
                musicControl.textContent = '🎵';
            });
        }
    }, 2000);
    
    // Закрытие модального окна
    document.querySelectorAll('.close-btn').forEach(btn => {
        btn.addEventListener('click', closeModal);
    });
    
    document.querySelector('.modal-overlay').addEventListener('click', (e) => {
        if (e.target === document.querySelector('.modal-overlay')) {
            closeModal();
        }
    });
    
    // Клавиатура
    document.querySelectorAll('.key-btn').forEach(btn => {
        btn.addEventListener('click', handleKeyClick);
    });
    
    // Сброс прогресса
    resetBtn.addEventListener('click', showResetConfirmation);
});

// Создание созвездий
function createConstellations() {
    const container = document.querySelector('.constellations');
    const symbols = ['✨', '⭐', '🌟', '💫', '⚡', '🌠'];
    
    for (let i = 0; i < 15; i++) {
        const star = document.createElement('div');
        star.className = 'constellation';
        star.innerHTML = symbols[Math.floor(Math.random() * symbols.length)];
        star.style.left = Math.random() * 100 + 'vw';
        star.style.animationDuration = (8 + Math.random() * 15) + 's';
        star.style.animationDelay = Math.random() * 5 + 's';
        star.style.fontSize = (15 + Math.random() * 30) + 'px';
        container.appendChild(star);
    }
}

// Управление музыкой
function toggleMusic(bgMusic, control) {
    if (bgMusic.paused) {
        bgMusic.play();
        control.textContent = '🔊';
    } else {
        bgMusic.pause();
        control.textContent = '🎵';
    }
}

// Обновление статистики
function updateStats(completedCount) {
    document.getElementById('completed-count').textContent = completedCount;
    
    let status = '🌱 Новичок';
    if (completedCount >= 40) status = '💎 Магистр';
    else if (completedCount >= 30) status = '🎯 Знаток';
    else if (completedCount >= 20) status = '📚 Эрудит';
    else if (completedCount >= 10) status = '🎓 Ученик';
    
    document.getElementById('sector-indicator').textContent = status;
}

// Генерация кнопок
function generateLevelButtons(completedLevels) {
    const grid = document.querySelector('.levels-grid');
    grid.innerHTML = '';
    
    words.forEach((word, index) => {
        const btn = document.createElement('button');
        btn.className = 'level-btn';
        btn.id = `level-${index + 1}`;
        
        const number = document.createElement('span');
        number.textContent = index + 1;
        btn.appendChild(number);
        
        const icon = document.createElement('span');
        icon.className = 'difficulty-dot';
        
        // Иконки категорий
        const icons = {
            'Животные': '🐾',
            'Города': '🏛️',
            'Предметы': '📦',
            'Растения': '🌿',
            'Явления': '🌪️'
        };
        icon.textContent = icons[word.category] || '📌';
        btn.appendChild(icon);
        
        if (completedLevels.includes(index)) {
            btn.classList.add('completed');
            btn.onclick = () => showWord(index);
        } else {
            btn.onclick = () => openWord(index);
        }
        
        grid.appendChild(btn);
    });
}

// Открытие слова
function openWord(index) {
    currentWord = words[index];
    currentIndex = index;
    guessedLetters = [];
    currentPrize = 0;
    
    document.getElementById('current-level').textContent = index + 1;
    document.getElementById('category-badge').innerHTML = `📌 ${currentWord.category}`;
    document.getElementById('hint-text').textContent = currentWord.hint;
    document.getElementById('prize-value').textContent = '0';
    
    // Создаем ячейки для букв
    const container = document.getElementById('word-input-container');
    container.innerHTML = '';
    
    for (let i = 0; i < currentWord.word.length; i++) {
        const cell = document.createElement('div');
        cell.className = 'letter-cell';
        cell.id = `letter-${i}`;
        container.appendChild(cell);
    }
    
    // Сбрасываем клавиатуру
    document.querySelectorAll('.key-btn').forEach(btn => {
        btn.disabled = false;
        btn.style.opacity = '1';
    });
    
    document.getElementById('game-feedback').innerHTML = '<span class="feedback-info">Выберите букву</span>';
    
    // Анимация барабана
    spinWheel();
    
    document.querySelector('.modal-overlay').style.display = 'flex';
}

// Показ отгаданного слова
function showWord(index) {
    const word = words[index];
    
    document.getElementById('current-level').textContent = index + 1;
    document.getElementById('category-badge').innerHTML = `📌 ${word.category} ✓`;
    document.getElementById('hint-text').textContent = word.hint;
    document.getElementById('prize-value').textContent = word.sector;
    
    const container = document.getElementById('word-input-container');
    container.innerHTML = '';
    
    for (let i = 0; i < word.word.length; i++) {
        const cell = document.createElement('div');
        cell.className = 'letter-cell correct';
        cell.textContent = word.word[i];
        container.appendChild(cell);
    }
    
    document.querySelectorAll('.key-btn').forEach(btn => {
        btn.disabled = true;
    });
    
    document.getElementById('game-feedback').innerHTML = '<span class="feedback-success">✓ Слово отгадано!</span>';
    
    document.querySelector('.modal-overlay').style.display = 'flex';
}

// Обработка клавиш
function handleKeyClick(e) {
    const btn = e.target;
    if (btn.disabled) return;
    
    if (btn.id === 'delete-letter') {
        deleteLastLetter();
        return;
    }
    
    if (btn.id === 'check-word') {
        checkWholeWord();
        return;
    }
    
    const letter = btn.dataset.letter;
    if (!letter) return;
    
    btn.disabled = true;
    btn.style.opacity = '0.3';
    
    guessedLetters.push(letter);
    updateWordDisplay(letter);
    spinWheel();
}

// Обновление отображения слова
function updateWordDisplay(letter) {
    const word = currentWord.word;
    let found = false;
    
    for (let i = 0; i < word.length; i++) {
        if (word[i] === letter) {
            const cell = document.getElementById(`letter-${i}`);
            cell.textContent = letter;
            cell.classList.add('filled');
            found = true;
        }
    }
    
    const feedback = document.getElementById('game-feedback');
    
    if (found) {
        currentPrize += currentWord.sector;
        document.getElementById('prize-value').textContent = currentPrize;
        feedback.innerHTML = `<span class="feedback-success">✓ Есть буква! +${currentWord.sector} очков</span>`;
        checkWordComplete();
    } else {
        feedback.innerHTML = '<span class="feedback-error">✗ Нет такой буквы</span>';
    }
}

// Проверка завершения слова
function checkWordComplete() {
    const word = currentWord.word;
    let completed = true;
    
    for (let i = 0; i < word.length; i++) {
        const cell = document.getElementById(`letter-${i}`);
        if (!cell.textContent) {
            completed = false;
            break;
        }
    }
    
    if (completed) {
        document.querySelectorAll('.letter-cell').forEach(cell => {
            cell.classList.add('correct');
        });
        
        document.querySelectorAll('.key-btn').forEach(btn => {
            btn.disabled = true;
        });
        
        document.getElementById('game-feedback').innerHTML = '<span class="feedback-success">🎉 ПОБЕДА! Слово отгадано!</span>';
        
        const completedLevels = JSON.parse(localStorage.getItem('completedWords')) || [];
        if (!completedLevels.includes(currentIndex)) {
            completedLevels.push(currentIndex);
            localStorage.setItem('completedWords', JSON.stringify(completedLevels));
        }
        
        updateStats(completedLevels.length);
        
        const levelBtn = document.getElementById(`level-${currentIndex + 1}`);
        levelBtn.classList.add('completed');
        levelBtn.onclick = () => showWord(currentIndex);
        
        currentPrize += currentWord.sector * 2;
        document.getElementById('prize-value').textContent = currentPrize;
        
        if (completedLevels.length === 50) {
            setTimeout(() => {
                showVictoryMessage();
            }, 500);
        }
    }
}

// Проверка целого слова
function checkWholeWord() {
    const word = currentWord.word;
    let userWord = '';
    
    for (let i = 0; i < word.length; i++) {
        const cell = document.getElementById(`letter-${i}`);
        userWord += cell.textContent || '';
    }
    
    if (userWord === word) {
        checkWordComplete();
    } else {
        document.getElementById('game-feedback').innerHTML = '<span class="feedback-error">✗ Это неверное слово</span>';
    }
}

// Удаление последней буквы
function deleteLastLetter() {
    if (guessedLetters.length === 0) return;
    
    const lastLetter = guessedLetters.pop();
    
    document.querySelectorAll('.key-btn').forEach(btn => {
        if (btn.dataset.letter === lastLetter) {
            btn.disabled = false;
            btn.style.opacity = '1';
        }
    });
    
    for (let i = 0; i < currentWord.word.length; i++) {
        const cell = document.getElementById(`letter-${i}`);
        if (cell.textContent === lastLetter) {
            cell.textContent = '';
            cell.classList.remove('filled');
        }
    }
    
    document.getElementById('game-feedback').innerHTML = '<span class="feedback-info">Буква удалена</span>';
}

// Анимация барабана
function spinWheel() {
    const wheel = document.getElementById('wheel-segment');
    wheel.style.animation = 'none';
    wheel.offsetHeight;
    wheel.style.animation = 'spinWheel 0.5s ease-out';
    
    const symbols = ['🎯', '⭐', '💎', '🎲', '💰', '🎪'];
    wheel.textContent = symbols[Math.floor(Math.random() * symbols.length)];
}

// Закрытие модального окна
function closeModal() {
    document.querySelector('.modal-overlay').style.display = 'none';
    currentWord = null;
    guessedLetters = [];
    currentPrize = 0;
}

// ========== ФУНКЦИИ ДЛЯ ОКНА ПОДТВЕРЖДЕНИЯ ==========

// Показать окно подтверждения сброса
function showResetConfirmation() {
    // Создаем окно подтверждения
    const confirmHTML = `
        <div class="confirm-overlay" id="confirm-overlay">
            <div class="confirm-modal">
                <div class="confirm-icon">⚠️</div>
                <h2 class="confirm-title">Сброс прогресса</h2>
                <div class="confirm-message">
                    Вы уверены, что хотите сбросить весь прогресс?
                </div>
                <div class="confirm-warning">
                    <span>⚠️</span>
                    <span>Все отгаданные слова (${getCompletedCount()} из 50) будут безвозвратно удалены.</span>
                </div>
                <div class="confirm-buttons">
                    <button class="confirm-btn confirm-btn-yes" id="confirm-yes">Да, сбросить</button>
                    <button class="confirm-btn confirm-btn-no" id="confirm-no">Нет, оставить</button>
                </div>
            </div>
        </div>
    `;
    
    // Добавляем окно в DOM
    document.body.insertAdjacentHTML('beforeend', confirmHTML);
    
    // Показываем окно
    const overlay = document.getElementById('confirm-overlay');
    overlay.style.display = 'flex';
    
    // Обработчики кнопок
    document.getElementById('confirm-yes').addEventListener('click', () => {
        resetProgress();
        closeConfirmation(overlay);
    });
    
    document.getElementById('confirm-no').addEventListener('click', () => {
        closeConfirmation(overlay);
    });
    
    // Закрытие по клику на фон
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            closeConfirmation(overlay);
        }
    });
}

// Получить количество отгаданных слов
function getCompletedCount() {
    const completed = JSON.parse(localStorage.getItem('completedWords')) || [];
    return completed.length;
}

// Закрыть окно подтверждения
function closeConfirmation(overlay) {
    overlay.style.animation = 'fadeOut 0.3s';
    setTimeout(() => {
        if (overlay && overlay.parentNode) {
            overlay.parentNode.removeChild(overlay);
        }
    }, 300);
}

// Сброс прогресса
function resetProgress() {
    localStorage.removeItem('completedWords');
    
    // Показываем сообщение об успешном сбросе
    showResetSuccess();
}

// Показать сообщение об успешном сбросе
function showResetSuccess() {
    const successHTML = `
        <div class="confirm-overlay" id="success-overlay">
            <div class="confirm-modal">
                <div class="confirm-icon">✨</div>
                <h2 class="confirm-title" style="color: #00ff9d;">Готово!</h2>
                <div class="confirm-message">
                    Прогресс успешно сброшен.
                </div>
                <div class="confirm-buttons">
                    <button class="confirm-btn confirm-btn-no" style="border-color: #00ff9d; color: #00ff9d;" id="success-ok">OK</button>
                </div>
            </div>
        </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', successHTML);
    
    const overlay = document.getElementById('success-overlay');
    overlay.style.display = 'flex';
    
    document.getElementById('success-ok').addEventListener('click', () => {
        closeConfirmation(overlay);
        location.reload();
    });
}

// Показать сообщение о победе
function showVictoryMessage() {
    const victoryHTML = `
        <div class="confirm-overlay" id="victory-overlay">
            <div class="confirm-modal">
                <div class="confirm-icon">🏆</div>
                <h2 class="confirm-title" style="color: gold; text-shadow: 0 0 20px gold;">ВЕЛИКАЯ ПОБЕДА!</h2>
                <div class="confirm-message">
                    Вы отгадали все 50 слов!<br>
                    Вы настоящий чемпион Поля Чудес!
                </div>
                <div class="confirm-buttons">
                    <button class="confirm-btn confirm-btn-no" style="border-color: gold; color: gold;" id="victory-ok">🌟 Спасибо!</button>
                </div>
            </div>
        </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', victoryHTML);
    
    const overlay = document.getElementById('victory-overlay');
    overlay.style.display = 'flex';
    
    document.getElementById('victory-ok').addEventListener('click', () => {
        closeConfirmation(overlay);
    });
}

// Добавляем анимацию fadeOut
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeOut {
        from { opacity: 1; }
        to { opacity: 0; }
    }
`;
document.head.appendChild(style);