#!/bin/bash

docker compose down
git stash
git pull

echo <<EOF > /Frontend/.env
BACKEND_URL = "http://172.20.177.219:8000";
EOF

docker compose up --build -d