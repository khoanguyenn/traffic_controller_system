#!/bin/bash
pwd
npm run build
cd gateway-alpha
docker-compose build
docker-compose down
docker-compose up
exit
