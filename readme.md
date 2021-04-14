# Балтия

## Установка зависимостей

```
npm install
```

## Команды

Запуск сборки

```
gulp
```

## Полезные отдельные команды

Можно запускать при необходимости не запуская сборку.

#### Оптимизация изображений

```
gulp images
```

Обработает изображения и сгенерирует для каждого изображения формат `webp`.
Исходники берутся из `app/img` (кроме SVG) и результат складывается в `dist/img`

#### Оптимизация SVG

```
npm run svgo
```

#### Генерация SVG спрайта

```
npm run sprite
```

Возьмет SVG файлы из `app/img/icons` соберет спрайт и закинет его в `dist/img` с названием файла `icons.svg`

**Пример разметки для использования**

```
<picture>
    <source
        srcset="img/content/[__filename__].webp    1x,
                img/content/[__filename__]@2x.webp 2x"
        type="image/webp"
    />

    <img
        src="img/content/[__filename__].jpg"
        srcset="
            img/content/[__filename__].jpg    1x,
            img/content/[__filename__]@2x.jpg 2x
            "
        alt=""
    />
</picture>
```

`@2x` для ретина дисплеев
