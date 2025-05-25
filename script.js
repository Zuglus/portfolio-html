// Прелоадер
window.addEventListener('load', () => {
    setTimeout(() => {
        document.getElementById('preloader').classList.add('hidden');
    }, 500);
});

// Данные портфолио
const portfolioData = [
  {
    "id": "project1",
    "image": "/assets/images/threads.png",
    "alt": "НИТИ"
  },
  {
    "id": "project2",
    "image": "/assets/images/code.png",
    "alt": "КОДИИМ"
  },
  {
    "id": "project3",
    "image": "/assets/images/day.png",
    "alt": "День физики"
  },
  {
    "id": "project4",
    "image": "/assets/images/presentation.png",
    "alt": "Дизайн презентаций"
  }
];

const projectsData = [
  {
    "id": "project1",
    "title": "НИТИ",
    "description": "Кластер проектов по управлению современным образованием",
    "audience": "менеджеры образования, управленцы, преимущественно женщины старше 40",
    "slides": [
      {
        "image": "/assets/images/niti/niti1.png",
        "task": "ребрендинг образовательного продукта, создание айдентики, гармонично сочетающей эстетику с глубоким смысловым содержанием. Основной акцент на женственность, лидерство и стремление к профессиональному росту",
        "solution": "цветовая палитра создает ощущение серьезного подхода к вызовам современного образования. Возраст целевой аудитории определяет использование цветов с более короткой длиной волны (выбран синий, использовался и ранее, но изменены оттенки и градиенты). Новые элементы айдентики подчеркивают глубину образовательного материала"
      }
    ]
  }
];

// Инициализация
document.addEventListener('DOMContentLoaded', () => {
    renderPortfolio();
    setupEventListeners();
});

// Рендер карточек портфолио
function renderPortfolio() {
    const grid = document.getElementById('portfolio-grid');
    
    portfolioData.forEach(item => {
        const card = document.createElement('button');
        card.className = 'project-card';
        card.onclick = () => openProject(item.id);
        
        card.innerHTML = `
            <img src="${item.image}" alt="${item.alt}" loading="lazy">
        `;
        
        grid.appendChild(card);
    });
}

// Открытие проекта (пока просто лог)
function openProject(projectId) {
    console.log('Открытие проекта:', projectId);
    const project = projectsData.find(p => p.id === projectId);
    if (project) {
        console.log('Данные проекта:', project);
        showModal(project);
    }
}

// Обработчики событий
function setupEventListeners() {
    // Клавиатурная навигация
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeModal();
        }
    });
}

console.log('✓ Этап 5: JavaScript подключен');

// Модальное окно
let currentProject = null;
let currentSlide = 0;

function showModal(project) {
    currentProject = project;
    currentSlide = 0;
    
    // Заполняем данные
    document.getElementById('modal-title').textContent = project.title;
    document.getElementById('modal-description').textContent = project.description;
    document.getElementById('modal-audience').innerHTML = project.audience ? 
        `<span>Целевая аудитория:</span> ${project.audience}` : '';
    
    // Создаем слайды
    const container = document.getElementById('slider-container');
    container.innerHTML = project.slides.map((slide, index) => `
        <div class="slide ${index === 0 ? 'active' : ''}" data-index="${index}">
            <img src="${slide.image}" alt="${project.title} - Слайд ${index + 1}">
        </div>
    `).join('');
    
    // Показываем модалку
    document.getElementById('project-modal').classList.add('active');
    document.body.style.overflow = 'hidden';
    
    updateSlide();
}

function closeModal() {
    document.getElementById('project-modal').classList.remove('active');
    document.body.style.overflow = '';
    currentProject = null;
}

function nextSlide() {
    if (!currentProject) return;
    currentSlide = (currentSlide + 1) % currentProject.slides.length;
    updateSlide();
}

function prevSlide() {
    if (!currentProject) return;
    currentSlide = (currentSlide - 1 + currentProject.slides.length) % currentProject.slides.length;
    updateSlide();
}

function updateSlide() {
    if (!currentProject) return;
    
    // Обновляем активный слайд
    const slides = document.querySelectorAll('.slide');
    slides.forEach((slide, index) => {
        slide.classList.toggle('active', index === currentSlide);
    });
    
    // Обновляем информацию о слайде
    const slideData = currentProject.slides[currentSlide];
    const infoContainer = document.getElementById('slide-info');
    
    let info = '';
    if (slideData.task) {
        info += `<p><strong>Задача:</strong> ${slideData.task}</p>`;
    }
    if (slideData.solution) {
        info += `<p><strong>Решение:</strong> ${slideData.solution}</p>`;
    }
    
    infoContainer.innerHTML = info;
}

// Закрытие по клику на фон
document.querySelector('.modal-backdrop')?.addEventListener('click', closeModal);

// Навигация стрелками
document.addEventListener('keydown', (e) => {
    if (currentProject) {
        if (e.key === 'ArrowLeft') prevSlide();
        if (e.key === 'ArrowRight') nextSlide();
    }
});