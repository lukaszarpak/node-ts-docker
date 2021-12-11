## Node | TS | Docker - starter project

A starter Node.js project with TypeScript. Run in Docker container.

### Start project in development mode

The project supports automatic compilation after saving modified files.

Build and run node-api container:

```
$ docker-compose up -d
```
See active containers and get ID of chosen container:

```
$ docker ps
```

See the logs of the chosen container:

```
$ docker logs --follow CONTAINER_ID
```
Get access to the container's shell

```
$ docker exec -it CONTAINER_ID bash
```
