# ISLA ROYALE — Battle Royale online en el navegador

Battle Royale 3D de estilo cartoon que se juega desde un enlace web, sin descargar nada. Tiene un servidor multijugador autoritativo, bots con IA que se ejecutan en el servidor, y los modos Solo, Dúos y Escuadrones (hasta 15 participantes por partida).

---

## 1. Publicarlo en internet (una sola vez, unos 10 minutos)

Hace falta subir el proyecto a **GitHub** y conectarlo a **Render**, un alojamiento con plan gratuito que admite Node.js y WebSockets.

1. **GitHub:** sube esta carpeta a un repositorio (o deja que Claude lo haga si conectas GitHub en claude.ai → Ajustes → Conectores).
2. **Render:** crea una cuenta en <https://render.com> con el botón **"Sign in with GitHub"**. No pide tarjeta para el plan gratuito.
3. En Render, pulsa **New + → Blueprint**, elige el repositorio y pulsa **Apply**. Render lee el archivo `render.yaml` y lo configura todo solo: servidor Node.js, plan gratuito, región Frankfurt, comprobación de salud y clave secreta para el progreso.
4. A los 2-4 minutos aparece la dirección pública, del tipo `https://isla-royale-xxxx.onrender.com`. Ese es el enlace del juego.

## 2. Jugar con un amigo

1. Abre el enlace en Chrome o Edge y pulsa **ENTRAR**.
2. En el panel **Equipo**, pulsa **Crear equipo** y luego **Copiar enlace de invitación**.
3. Envía ese enlace por WhatsApp o Discord. Cuando tu amigo lo abra, entrará directamente en tu equipo.
4. Elige **Dúos** y pulsa **JUGAR**:
   - **Sin marcar "Sala privada":** entráis en la cola pública con otros jugadores reales. Si en 12 segundos no hay suficientes, se completa con bots.
   - **Con "Sala privada" marcada:** la partida empieza al momento, solo vosotros contra bots.

## 3. Controles

| Tecla | Acción |
|---|---|
| W A S D | Moverse |
| Ratón | Cámara y puntería (el primer clic captura el ratón; Esc lo suelta) |
| Clic izquierdo / derecho | Disparar / Apuntar |
| R | Recargar |
| E | Recoger |
| Espacio | Saltar |
| Shift | Correr |
| 1, 2 o rueda | Cambiar de arma |
| 3 / 4 | Venda / Botiquín |
| G | Soltar el arma |
| Tab | Mapa, inventario y jugadores |
| Esc | Pausa |

Todas las teclas se pueden cambiar en **Configuración → Controles**.

## 4. Administrar y actualizar

- **Actualizar el juego:** sube los cambios al repositorio de GitHub. Render vuelve a desplegar automáticamente en 2-3 minutos (`autoDeploy: true`). Las partidas en curso en ese momento se cortan.
- **Ver qué pasa:** en Render → tu servicio → **Logs** ves las conexiones, las colas y las partidas en tiempo real. La dirección `https://TU-ENLACE/healthz` muestra cuántos jugadores hay conectados y cuántas partidas activas.
- **Ajustes del servidor** (Render → Environment):
  - `MATCH_WAIT`: segundos de espera a jugadores reales antes de rellenar con bots (por defecto 12).
  - `PROFILE_SECRET`: clave que firma el progreso. **No la cambies**: si lo haces, se pierde el progreso guardado de todos.
- **Progreso de los jugadores:** se guarda en el servidor y también, firmado, en el navegador de cada jugador. Así no se pierde cuando el plan gratuito reinicia el servidor, y nadie puede subirse el nivel editándolo a mano. Si un jugador borra los datos del navegador, empieza de cero.
- **Dominio propio** (opcional): compra uno (unos 10-15 €/año, por ejemplo `mijuego.com`) y añádelo en Render → Settings → Custom Domains. Render pone el certificado HTTPS gratis.
- **Probar en tu ordenador:** con Node.js instalado, ejecuta `npm install` y luego `npm start`, y abre `http://localhost:3000`. Con `npm test` se simula una partida completa con bots.

## 5. Costes

| Opción | Precio | Qué implica |
|---|---|---|
| **Render Free** (el configurado) | 0 € | El servidor se duerme tras 15 minutos sin nadie conectado. El primero que entre después espera unos 30-60 segundos mientras despierta (la pantalla de carga lo indica). Incluye 750 horas al mes, suficiente para un solo servidor. Basta para jugar con amigos. |
| **Render Starter** | unos 7 $/mes | No se duerme nunca y tiene más CPU estable. Recomendable si va a jugar gente a diario o desconocidos. Se cambia en Render → Settings → Instance Type. |
| Dominio propio | unos 10-15 €/año | Opcional. |

**Capacidad aproximada:** una partida usa menos de 1 ms de CPU por tick. Una instancia pequeña aguanta varias partidas simultáneas de 15 jugadores. El tráfico por jugador es de unos 10-20 KB/s durante la partida.

**Otras opciones:** el `Dockerfile` incluido permite desplegarlo en cualquier otro proveedor (Railway, Fly.io, Koyeb o un VPS).

## 6. Arquitectura

```
client/   juego 3D (Three.js): lobby, partida, HUD, sonido procedural
server/   servidor autoritativo Node.js + WebSocket (30 ticks/s)
  index.js       HTTP con gzip y caché + WebSocket + mensajes
  matchmaker.js  colas públicas, equipos, salas privadas, relleno con bots
  match.js       movimiento, disparos, daño, botín, zona, victoria
  bot.js / nav.js  IA de bots (máquina de estados + caminos A*)
  profiles.js    XP, niveles, estadísticas y copia firmada del progreso
shared/   mapa, físicas, armas y movimiento comunes a cliente y servidor
render.yaml / Dockerfile   despliegue
```

- El servidor decide todo lo importante: posiciones, impactos, daño, eliminaciones, botín y zona. El cliente solo envía las teclas y la dirección de apuntado.
- El cliente usa predicción local con reconciliación (tu personaje responde al momento) e interpolación de los demás jugadores para que se muevan con suavidad.
- Si alguien se desconecta en plena partida, un bot toma el control de su personaje.
