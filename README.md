# UrbanLine — интернет-магазин, 1 семестр WEB

**Студенты:**
- Альхалид Ракан — РИ-240910
- Абу Матер Хуссейн Джамиль Хуссейн — РИ-240943

## Реализовано
- Backend: Node.js + Koa + TypeScript + Prisma
- PostgreSQL + Redis
- Client: Next.js + TypeScript
- Admin: React + Vite + TypeScript + Redux Toolkit + PWA manifest/service worker
- Docker Compose с healthcheck PostgreSQL/Redis
- JWT authorization (учебный email/code flow), роли USER/ADMIN
- CRUD: товары, категории, бренды, размеры, новости; управление пользователями
- Basket REST API
- Swagger/OpenAPI JSON: `/api/v1/swagger.json`
- Changelog и проектная документация

## Запуск
1. Запустите Docker Desktop и дождитесь `Engine running`.
2. В PowerShell откройте папку `urbanline_shop`.
3. Выполните:

```powershell
docker compose down
docker compose build --no-cache
docker compose up
```

Откройте:
- Магазин: http://localhost:3000
- Админка: http://localhost:3001
- API health: http://localhost:4000/api/v1/health
- OpenAPI JSON: http://localhost:4000/api/v1/swagger.json

### Вход в админку
- Email: `admin@shop.local`
- Код: `123456`

> Код `123456` используется только как демонстрационный механизм учебного проекта.

## Важно перед итоговой сдачей
Требование университета по автоматическим тестам/coverage необходимо подтвердить отдельным запуском тестов и отчётом покрытия. Эта версия не заявляет неподтверждённые 80% coverage.

## Fixed client interactions
The storefront now supports clickable product cards with details, working catalog/news/about navigation, cart opening, quantity controls, and add-to-cart buttons.
