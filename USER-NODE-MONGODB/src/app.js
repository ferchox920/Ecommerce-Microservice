import { config } from "dotenv";
import httpServer from "./config/http.js";
import { connection } from "./config/db.js";

config();

async function bootstrap() {
    try {
        await connection(); // Esperar a que se establezca la conexión a la base de datos

        httpServer.listen(process.env.PORT, () => {
            console.log(`Servidor escuchando en el puerto ${process.env.PORT}`);
        });
    } catch (error) {
        console.error('Error al iniciar el servidor:', error);
    }
}

// Llamamos a la función bootstrap para iniciar el servidor
bootstrap();
