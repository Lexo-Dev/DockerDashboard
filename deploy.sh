dockerfile="Dockerfile.prod"

image_name="docker-dashboard"
container_name="docker-dashboard"

dashboard_port=3230

# Build the image
docker build --file $dockerfile --tag $image_name "."

# Stop & remvove existing container with the same name
docker stop --time 0 $container_name
docker container rm $container_name

# Run the container
docker run \
    --detach \
    --publish $dashboard_port:$dashboard_port \
    --name $container_name \
    --volume /var/run/docker.sock:/var/run/docker.sock \
    $image_name

docker logs --follow $container_name
