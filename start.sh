#!/bin/bash
while true; do
  bash ascii_art.sh
  echo "Starting gun bot..."
  node index.js
  echo "Bot crashed with exit code $?. Restarting in 3 seconds..."
  sleep 3
done
