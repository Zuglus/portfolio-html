import fs from 'fs/promises';
import { glob } from 'glob';

async function patchHTML() {
    console.log('🔧 Обновляем HTML для оптимизированных изображений...');
    
    try {
        let html = await fs.readFile('index.html', 'utf8');
        
        // Получаем список оптимизированных изображений
        const optimizedImages = await glob('assets/images/optimized/*-medium.webp');
        
        // Создаем мапинг старых путей к новым
        const imageMap = {};
        
        for (const webpPath of optimizedImages) {
            const baseName = webpPath.match(/([^\/]+)-medium\.webp$/)?.[1];
            if (baseName) {
                // Ищем соответствующий оригинальный путь в HTML
                const oldPaths = [
                    `/assets/images/${baseName}.png`,
                    `/assets/images/${baseName}.jpg`,
                    `/assets/images/${baseName}.jpeg`
                ];
                
                for (const oldPath of oldPaths) {
                    if (html.includes(oldPath)) {
                        imageMap[oldPath] = baseName;
                        break;
                    }
                }
            }
        }
        
        console.log(`📝 Найдено изображений для замены: ${Object.keys(imageMap).length}`);
        
        // Заменяем простые img теги на picture элементы
        for (const [oldPath, baseName] of Object.entries(imageMap)) {
            const imgRegex = new RegExp(`<img[^>]*src="${oldPath.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}"[^>]*>`, 'g');
            
            html = html.replace(imgRegex, (match) => {
                // Извлекаем атрибуты из оригинального тега
                const altMatch = match.match(/alt="([^"]*)"/);
                const classMatch = match.match(/class="([^"]*)"/);
                const loadingMatch = match.match(/loading="([^"]*)"/);
                
                const alt = altMatch ? altMatch[1] : '';
                const className = classMatch ? classMatch[1] : '';
                const loading = loadingMatch ? loadingMatch[1] : 'lazy';
                
                return `<picture>
  <source media="(max-width: 768px)" 
          srcset="/assets/images/optimized/${baseName}-thumbnail.webp" 
          type="image/webp">
  <source media="(max-width: 768px)" 
          srcset="/assets/images/optimized/${baseName}-thumbnail.jpg" 
          type="image/jpeg">
  <source srcset="/assets/images/optimized/${baseName}-medium.webp" 
          type="image/webp">
  <img src="/assets/images/optimized/${baseName}-medium.jpg" 
       alt="${alt}"
       ${className ? `class="${className}"` : ''}
       loading="${loading}"
       width="800"
       height="600">
</picture>`;
            });
        }
        
        // Добавляем CSS для blur placeholder если еще не добавлен
        if (!html.includes('blur-placeholder')) {
            const blurCSS = `
/* Blur placeholder для изображений */
.project-image {
    position: relative;
    overflow: hidden;
    background-color: var(--color-primary);
}

.project-image img {
    transition: opacity 0.3s ease-in-out;
}

.project-image.loading img {
    opacity: 0;
}

.project-image.loaded img {
    opacity: 1;
}

.blur-placeholder {
    position: absolute;
    inset: 0;
    background-size: cover;
    background-position: center;
    filter: blur(20px);
    transform: scale(1.1);
    opacity: 0.3;
}`;
            
            html = html.replace('</style>', blurCSS + '\n</style>');
        }
        
        await fs.writeFile('index.html', html);
        
        console.log('✅ HTML обновлен для оптимизированных изображений');
        
    } catch (error) {
        console.error('❌ Ошибка обновления HTML:', error.message);
    }
}

patchHTML().catch(console.error);
