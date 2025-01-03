# React Learning Path: Практические задания

## Структура репозитория

```
learn-react/
├── tasks/                    # Все задания находятся здесь
│   ├── 01-counter/          # Первое задание - Счетчик
│   │   ├── README.md        # Описание задачи
│   │   ├── package.json     # Зависимости для задачи
│   │   ├── index.html
│   │   ├── src/
│   │   │   ├── main.tsx     # Точка входа
│   │   │   ├── App.tsx      # Корневой компонент
│   │   │   └── components/  # Здесь вы будете писать решение
│   │   ├── __tests__/       # Тесты для проверки решения
│   │   └── solution/        # Папка для вашего решения
│   │
│   ├── 02-greeting/         # Второе задание - Форма приветствия
│   │   ├── README.md
│   │   ├── package.json
│   │   └── ...
│   │
│   └── 03-todo/            # Третье задание - Список задач
│       ├── README.md
│       ├── package.json
│       └── ...
│
├── package.json             # Общие скрипты для управления задачами
├── README.md               # Общее описание и инструкции
└── .github/                # GitHub Actions и шаблоны issues
```

## Начало работы

1. Клонируйте репозиторий:
```bash
git clone https://github.com/your-username/learn-react.git
cd learn-react
```

2. Выберите задачу и перейдите в её директорию:
```bash
cd tasks/01-counter
```

3. Установите зависимости и запустите проект:
```bash
npm install
npm run dev
```

4. Откройте `src/components/Counter.tsx` и начните работу над решением.

## Задача 1: Счетчик (tasks/01-counter)

### Как начать работу
1. Перейдите в директорию задачи:
```bash
cd tasks/01-counter
```

2. Изучите файлы:
- `README.md` - описание задачи и требования
- `src/components/Counter.tsx` - здесь вы будете писать решение
- `__tests__/Counter.test.tsx` - тесты, которые проверят ваше решение

3. Запустите проект в режиме разработки:
```bash
npm run dev
```

### Что нужно сделать
В файле `src/components/Counter.tsx` реализуйте компонент счетчика:

```tsx
// Counter.tsx
import { useState } from 'react';

export function Counter() {
  // Ваш код здесь
  return (
    <div>
      {/* Ваша разметка */}
    </div>
  );
}
```

### Проверка решения
1. Запустите тесты:
```bash
npm test
```

2. Убедитесь, что линтер не выдает ошибок:
```bash
npm run lint
```

### Требования к решению
- Используйте TypeScript
- Следуйте стилю кода проекта
- Все тесты должны проходить
- Компонент должен быть доступным (a11y)

## Как сдавать решения

1. Создайте новую ветку для вашего решения:
```bash
git checkout -b solution/your-name/01-counter
```

2. Реализуйте решение в соответствующей папке tasks/01-counter/src/components/

3. Убедитесь, что все тесты проходят и код отформатирован:
```bash
npm test
npm run lint
npm run format
```

4. Закоммитьте изменения:
```bash
git add .
git commit -m "Add counter solution"
git push origin solution/your-name/01-counter
```

5. Создайте Pull Request

## Общие рекомендации

1. Каждая задача независима - вы можете выполнять их в любом порядке

2. Перед началом работы:
   - Прочитайте README задачи полностью
   - Изучите тесты - они подскажут требуемое поведение
   - Просмотрите дополнительные материалы по теме

3. В процессе работы:
   - Делайте частые коммиты
   - Проверяйте тесты после каждого значимого изменения
   - Используйте консоль браузера для отладки

4. Если что-то не получается:
   - Проверьте консоль на ошибки
   - Просмотрите тесты - они часто содержат подсказки
   - Создайте issue с описанием проблемы

## Полезные команды

В каждой папке с задачей доступны команды:
```bash
# Разработка
npm run dev        # Запуск в режиме разработки
npm run build     # Сборка проекта
npm run preview   # Предпросмотр сборки

# Тестирование
npm test          # Запуск тестов
npm test:watch    # Тесты в режиме наблюдения
npm run coverage  # Отчет о покрытии тестами

# Проверка кода
npm run lint      # Проверка линтером
npm run format    # Форматирование кода
npm run validate  # Полная проверка (тесты + линтер)
```