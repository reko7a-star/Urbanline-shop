# Changelog
## 1.0.0
- React + Vite + TypeScript + Redux Toolkit
- Разделы CRUD: товары, категории, бренды, новости, пользователи

## 1.1.0 - 2026-09-21
- Статическая таблица заменена на данные REST API.
- Добавлен вход администратора и хранение JWT.
- Добавлены CRUD-формы товаров, категорий, брендов, размеров и новостей.
- Добавлено управление пользователями.
- Добавлены PWA manifest и service worker.

## 1.2.0 - 2026-09-21
- Fixed Admin CRUD controls (Add/Edit/Delete) and modal editor wiring.
- Added no-cache Nginx configuration so rebuilt Admin UI is not hidden by stale browser assets.
- Added visible `v1.2 CRUD` marker to verify the corrected build is loaded.
