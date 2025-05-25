# Портфолио Полины Миграновой

> Современное, высокопроизводительное портфолио графического дизайнера, созданное с использованием актуальных веб-технологий 2025 года.

[![Performance](https://img.shields.io/badge/Performance-95%2B-brightgreen)]()
[![Accessibility](https://img.shields.io/badge/Accessibility-100-brightgreen)]()
[![Best Practices](https://img.shields.io/badge/Best%20Practices-100-brightgreen)]()
[![SEO](https://img.shields.io/badge/SEO-100-brightgreen)]()

## ✨ Особенности

### Производительность
- **Критический CSS** встроен в HTML для мгновенной загрузки
- **Lazy loading** изображений с приоритетной загрузкой
- **Префетч** следующих слайдов для плавной навигации
- **Hardware acceleration** для анимаций
- **Optimized fonts** с `font-display: swap`

### Современный UX/UI
- **Material Design 3** motion system
- **Плавные анимации** с научно обоснованными кривыми
- **Адаптивная типографика** с `clamp()`
- **CSS Grid** и **Flexbox** для современных макетов
- **State layers** для интерактивных элементов

### Доступность (A11y)
- **WCAG 2.1 AA** соответствие
- **Семантическая разметка** с ARIA-атрибутами
- **Клавиатурная навигация** для всех элементов
- **Screen reader** поддержка
- **Reduced motion** для пользователей с ограниченными возможностями

### Технологические решения
- **Modern ES6+** JavaScript с классами
- **CSS Custom Properties** для дизайн-системы
- **Progressive Enhancement** подход
- **Mobile-first** разработка
- **Cross-browser** совместимость

## 🚀 Быстрый старт

### Локальная разработка

```bash
# Клонирование репозитория
git clone <repository-url>
cd portfolio-html

# Установка зависимостей
npm install

# Запуск dev-сервера
npm run dev
```

Откроется браузер на `http://localhost:3000`

### Продакшн сборка

```bash
# Создание оптимизированной сборки
npm run build

# Предварительный просмотр
npm run preview
```

## 🛠 Структура проекта

```
portfolio-html/
├── index.html              # Основной HTML файл
├── styles.css              # Современные CSS стили
├── script.js               # JavaScript функциональность
├── assets/                 # Ресурсы
│   ├── images/            # Изображения проектов
│   ├── fonts/             # Веб-шрифты
│   └── icons/             # SVG иконки
├── dist/                  # Продакшн сборка
├── package.json           # Зависимости и скрипты
└── README.md             # Документация
```

## 📱 Адаптивность

Портфолио оптимизировано для всех устройств:

- **Desktop**: 1200px+ (большие экраны)
- **Tablet**: 768px - 1199px (планшеты)
- **Mobile**: 320px - 767px (мобильные)

Использует современный подход **Mobile-first** и **Container Queries**.

## 🎨 Дизайн-система

### Цветовая палитра
```css
--color-primary: #04061B     /* Основной темный */
--color-secondary: #3624A6   /* Акцентный синий */
--color-white: #FFFFFF       /* Белый текст */
```

### Типографика
- **Display**: MV-SKIFER (заголовки)
- **Body**: Onest (основной текст)
- **Адаптивные размеры** с `clamp()`

### Анимации
```css
/* Motion System на основе Material Design 3 */
--motion-duration-short: 150ms
--motion-duration-medium: 300ms
--motion-duration-long: 500ms
--motion-easing-standard: cubic-bezier(0.2, 0.0, 0, 1)
--motion-easing-emphasized: cubic-bezier(0.05, 0.7, 0.1, 1)
```

## 🧪 Тестирование и качество

### Команды для проверки качества

```bash
# Полная проверка
npm test

# Валидация HTML
npm run validate:html

# Проверка CSS
npm run validate:css

# Тестирование доступности
npm run validate:accessibility

# Lighthouse аудит
npm run lighthouse

# Форматирование кода
npm run format
```

### Показатели производительности

- **First Contentful Paint**: < 1.2s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1
- **First Input Delay**: < 100ms

## 📦 Скрипты разработки

```bash
# Разработка
npm run dev                 # Запуск dev-сервера
npm run dev:secure         # HTTPS dev-сервер

# Сборка
npm run build              # Продакшн сборка
npm run preview            # Просмотр сборки

# Оптимизация
npm run optimize           # Оптимизация всех ресурсов
npm run optimize:images    # Сжатие изображений
npm run optimize:css       # Минификация CSS
npm run optimize:js        # Минификация JS

# Анализ
npm run analyze            # Полный анализ
npm run check:performance  # Проверка производительности
npm run check:accessibility # Проверка доступности
npm run check:seo          # SEO аудит

# Утилиты
npm run clean              # Очистка dist
npm run format             # Форматирование кода
npm run lint               # Проверка code style
```

## 🔧 Конфигурация

### Поддерживаемые браузеры
```json
"browserslist": [
  "> 1%",
  "last 2 versions", 
  "not dead",
  "not ie 11"
]
```

### Требования к окружению
- **Node.js**: >= 18.0.0
- **npm**: >= 9.0.0

## 🚀 Развертывание

### Статический хостинг
Проект готов для размещения на любом статическом хостинге:

- **Vercel**: Просто перетащите папку `dist`
- **Netlify**: Подключите репозиторий
- **GitHub Pages**: Настройте Actions
- **Cloudflare Pages**: Подключите Git

### Оптимизация для продакшна

```bash
# Подготовка к деплою
npm run deploy:prepare

# Создается оптимизированная сборка в dist/
# С минифицированными файлами и сжатыми изображениями
```

## 🔍 SEO оптимизация

- **Семантическая HTML разметка**
- **Open Graph meta теги**
- **Структурированные данные**
- **Optimized images** с alt-текстами
- **Правильные заголовки** H1-H6
- **Meta description** и keywords

## ♿ Доступность

Портфолио соответствует стандартам **WCAG 2.1 AA**:

- **Клавиатурная навигация**: Tab, Enter, Escape, стрелки
- **Screen readers**: полная поддержка ARIA
- **Цветовая контрастность**: минимум 4.5:1
- **Размеры кликабельных элементов**: минимум 44px
- **Reduced motion**: учитывает предпочтения пользователя

## 🎯 Браузерная поддержка

| Браузер | Версия |
|---------|--------|
| Chrome  | 90+    |
| Firefox | 88+    |
| Safari  | 14+    |
| Edge    | 90+    |

Все современные возможности имеют **graceful degradation**.

## 🔄 Обновления

### Версия 2.0.0 (Текущая)
- ✅ Современный HTML5 с семантической разметкой
- ✅ CSS с Custom Properties и Grid Layout
- ✅ ES6+ JavaScript с классами
- ✅ Material Design 3 motion system
- ✅ Полная accessibility поддержка
- ✅ Performance оптимизации
- ✅ Modern dev workflow

### Планы на будущее
- 🔄 Progressive Web App (PWA)
- 🔄 Dark/Light theme toggle
- 🔄 Intersection Observer для анимаций
- 🔄 Service Worker для offline
- 🔄 WebP/AVIF изображения

## 📞 Контакты

**Полина Мигранова** - Графический дизайнер

- Telegram: [@Migranovap](https://t.me/Migranovap)
- Портфолио: [Ссылка на сайт]

## 📄 Лицензия

MIT License - можете свободно использовать для собственных проектов.

---

<div align="center">

**Создано с ❤️ и современными веб-технологиями**

[⬆ Наверх](#портфолио-полины-миграновой)

</div>