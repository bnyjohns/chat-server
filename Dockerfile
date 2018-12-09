FROM node:8-alpine
ADD . .
ENV NODE_ENV production
RUN npm ci --only=production
EXPOSE 9000
CMD ["node", "server.js"]