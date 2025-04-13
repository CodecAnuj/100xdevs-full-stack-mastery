FROM node:21-alpine

WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy relevant config files only
COPY next.config.ts .
COPY tsconfig.json .
COPY postcss.config.mjs .

# Add specific environment variables for development
ENV NODE_ENV=development
ENV WATCHPACK_POLLING=true 
ENV CHOKIDAR_USEPOLLING=true

# Start development server with host that binds to all interfaces
CMD ["npm", "run", "dev", "--", "-H", "0.0.0.0"]