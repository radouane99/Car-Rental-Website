#!/bin/bash

docker compose down
git stash
git pull
docker compose up --build -d