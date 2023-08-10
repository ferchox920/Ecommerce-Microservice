import { config } from "dotenv";
import httpServer from "./config/http.js";

config();

async function bootstrap() {
    try {

        httpServer.listen(process.env.PORT, () => {
            console.log(`Servidor escuchando en el puerto ${process.env.PORT}`);
        });
    } catch (error) {
        console.error('Error al iniciar el servidor:', error);
    }
}

// Llamamos a la función bootstrap para iniciar el servidor
bootstrap();


