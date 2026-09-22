# Проектная документация

## Анализ конкурентов
Ozon: широкий функционал и ассортимент; для учебного MVP избыточен.
Wildberries: развитый маркетплейс; сложная бизнес-логика.
Lamoda: сильная fashion-подача; хороший ориентир для визуального каталога.

**Вывод:** UrbanLine — минималистичный fashion e-commerce MVP.

## Backlog 1 семестра
- [x] Авторизация и права доступа
- [x] Новости
- [x] Пользователи
- [x] Бренды / производители
- [x] Размеры
- [x] Товары
- [x] Каталог
- [x] Клиентский Next.js frontend
- [x] Админский React/Vite frontend
- [x] PostgreSQL
- [x] Redis
- [x] Docker
- [ ] k3s/k8s deployment — следующий этап
- [ ] 80% тестового покрытия — следующий этап

## Спецификация продукта
Покупатель просматривает и ищет товары, видит цену/остаток и добавляет товары в корзину. Администратор управляет товарами, категориями, брендами, новостями и пользователями.

## Задачи дизайна
Компоненты: Button, Input, Card, Table, Header, Sidebar. Экраны: авторизация, новости, пользователи, бренды, товары, дерево каталога.

## Update 1.1
Admin panel now reads and writes real backend data. Protected mutations require an ADMIN JWT. Sizes are stored in PostgreSQL. Basket endpoints are implemented. PostgreSQL and Redis have Compose health checks. The admin frontend includes a web app manifest and service worker.
