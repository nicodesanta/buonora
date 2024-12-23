# Use Nginx image to serve static files
FROM nginx:alpine

# Copy the built app files to the Nginx HTML directory
COPY . /usr/share/nginx/html

# Expose port 80 for Nginx
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]