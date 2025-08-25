# Use Node.js Alpine for smaller image size
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install production dependencies only
RUN npm ci --only=production && npm cache clean --force

# Copy source code (excluding files in .dockerignore)
COPY . .

# Build the application
RUN npm run build

# Remove development dependencies and clean up
RUN rm -rf node_modules && npm ci --only=production --silent && npm cache clean --force

# Expose port
EXPOSE 5000

# Start the application
CMD ["npm", "start"]