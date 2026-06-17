# Use a specific, minimal base image (not 'latest') for reproducibility and smaller attack surface
FROM node:20-alpine

# Create a non-root user to run the application (security best practice)
RUN addgroup -S appgroup && adduser -S appuser -G appgroup

# Set working directory
WORKDIR /app

# Copy only package files first (better layer caching)
COPY package*.json ./

# Install only production dependencies
RUN npm ci --only=production

# Copy application source code
COPY . .

# Change ownership of app files to the non-root user
RUN chown -R appuser:appgroup /app

# Switch to non-root user before running the app
USER appuser

# Expose only the required port
EXPOSE 4000

# Use a non-root, explicit entrypoint
CMD ["node", "index.js"]
