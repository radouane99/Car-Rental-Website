#!/bin/bash

docker compose down
git 
git pull
docker compose up --build -d