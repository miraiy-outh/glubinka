# Указываем Node.js образ
FROM node:20-alpine

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем package.json и package-lock.json (если есть)
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем весь проект
COPY . .

# Экспортируем порты
EXPOSE 5173 3000

# Запускаем проект (Vite + json-server)
CMD ["npm", "start"]