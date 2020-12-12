import {HttpRequest} from "@http4t/core/contract";
import {handler} from "@http4t/core/handlers";
import {responseOf} from "@http4t/core/responses";
import {Uri} from "@http4t/core/uri";
import {NodeServer} from "@http4t/node/server"

const h = handler(async (request: HttpRequest) =>
    responseOf(200, "hello", ["Access-Control-Allow-Origin", "*"]));

NodeServer.start(h, {port: 5001})
    .then(async server => {
        console.log(`${Uri.of(await server.url()).toString()}`)
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });
