FROM registry.ng.bluemix.net/ibmnode:latest
COPY ./src /src
RUN cd /src; npm install
EXPOSE 80
CMD ["node", "/src/app.js"]
