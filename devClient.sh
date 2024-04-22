dockerfile="Dockerfile.dev"

image_name="docker-dashboard-client"
container_name="docker-dashboard-client"

front_port=3000

# Build the image
docker build --file $dockerfile --tag $image_name "."

# Stop & remvove existing container with the same name
docker stop --time 0 $container_name
docker container rm $container_name

# Run the container
docker run \
    --detach \
    --publish $front_port:$front_port \
    --name $container_name \
    --volume ${PWD}/Client:/src/Client \
    $image_name

docker logs --follow $container_name
