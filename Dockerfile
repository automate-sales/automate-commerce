FROM cypress/browsers:node-20.18.0-chrome-129.0.6668.89-1-ff-131.0.2-edge-129.0.2792.65-1
COPY package*.json ./
RUN npm install --production=false
COPY . .