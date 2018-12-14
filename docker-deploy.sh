#!/usr/bin/env bash

echo "starting build"
docker build -t $DOCKER_USER_ID/graphql-chat-server .
echo "build ended"
echo "logging in. Please enter password"
docker login -u $DOCKER_USER_ID -P $DOCKER_PASSWORD
echo "logged in. Pushing to docker"
docker push $DOCKER_USER_ID/graphql-chat-server
echo "successfully pushed the image to docker"