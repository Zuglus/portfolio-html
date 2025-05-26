#!/bin/bash

echo "🔍 Проверка PWA готовности..."

# Проверяем наличие файлов
files=("manifest.json" "sw.js" "index.html")
for file in "${files[@]}"; do
    if [ -f "$file" ]; then
        echo "✅ $file существует"
    else
        echo "❌ $file отсутствует"
        exit 1
    fi
done

# Проверяем иконки
icon_sizes=(192 512)
for size in "${icon_sizes[@]}"; do
    if [ -f "assets/icons/icon-${size}.png" ]; then
        echo "✅ Иконка ${size}x${size} существует"
    else
        echo "❌ Иконка ${size}x${size} отсутствует"
    fi
done

# Проверяем содержимое manifest.json
if grep -q '"display": "standalone"' manifest.json; then
    echo "✅ Manifest корректный"
else
    echo "❌ Manifest некорректный"
fi

echo ""
echo "📋 Следующие шаги:"
echo "1. Запустите локальный сервер: npm run dev"
echo "2. Откройте DevTools > Application > Manifest"
echo "3. Проверьте Service Worker в Application > Service Workers"
echo "4. Протестируйте в Lighthouse > PWA аудит"
echo ""
echo "🎯 Для production обязательно:"
echo "- HTTPS хостинг (PWA работает только по HTTPS)"
echo "- Проверьте все пути к ресурсам"
echo "- Запустите Lighthouse PWA аудит"
