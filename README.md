# EventHub Backend

EventHub è una piattaforma web che permette agli utenti di creare, gestire e partecipare ad eventi. Il backend è sviluppato in Node.js con Express e utilizza MySQL come database.

## 🚀 Funzionalità Principali

### Autenticazione e Gestione Utenti

- **Registrazione utenti** con validazione dei dati
- **Login sicuro** gestito con JWT (JSON Web Token)
- **Logout** con gestione dei cookie
- **Gestione profili utenti** con aggiornamento dati

### Gestione Eventi

- **Creazione eventi** da parte degli utenti registrati
- **Visualizzazione eventi** pubblici e privati
- **Iscrizione automatica** ad eventi pubblici
- **Sistema di richieste** per eventi privati
- **Gestione richieste** da parte degli organizzatori (accettazione/rifiuto)

### Sistema di Commenti

- **Commenti sugli eventi** da parte dei partecipanti
- **Gestione commenti** con validazione utenti

## 🛠️ Stack Tecnologico

### Backend

- **Node.js** - Runtime JavaScript
- **Express.js** - Framework web per Node.js
- **MySQL** - Database relazionale
- **JWT** - Autenticazione basata su token

### Pacchetti NPM Utilizzati

```json
{
  "bcrypt": "^6.0.0", // Hashing delle password
  "cookie-parser": "^1.4.7", // Gestione cookie HTTP
  "dotenv": "^17.2.3", // Gestione variabili d'ambiente
  "express": "^5.1.0", // Framework web
  "jsonwebtoken": "^9.0.2", // Gestione JWT
  "mysql2": "^3.15.2", // Driver MySQL per Node.js
  "zod": "^4.1.12" // Validazione schema
}
```

## 📁 Struttura del Progetto

```
eventHub back/
├── app.js                     # File principale dell'applicazione
├── controllers/               # Controller per gestire le richieste
│   ├── authController.js      # Gestione autenticazione
│   ├── eventController.js     # Gestione eventi
│   └── userController.js      # Gestione utenti
├── data/
│   └── db.js                  # Configurazione database MySQL
├── middleware/                # Middleware per validazione e autenticazione
│   ├── Validation/
│   │   └── checkPassword.js   # Validazione password
│   ├── auth/
│   │   ├── checkLogin.js      # Middleware controllo login
│   │   ├── validationDataLogin.js    # Validazione dati login
│   │   └── validationDataRegister.js # Validazione dati registrazione
│   └── user/
│       └── checkDataUpdateProfile.js # Validazione aggiornamento profilo
├── models/                    # Modelli dati
│   ├── comment.js             # Modello commenti
│   ├── event.js               # Modello eventi
│   └── user.js                # Modello utenti
├── routers/                   # Router per le API
│   ├── authRouter.js          # Route autenticazione
│   ├── eventsRouter.js        # Route eventi
│   └── usersRouter.js         # Route utenti
└── services/                  # Logica di business
    ├── authService.js         # Servizi autenticazione
    ├── eventsService.js       # Servizi eventi
    └── userService.js         # Servizi utenti
```

## 🔧 Installazione e Configurazione

### Prerequisiti

- Node.js (versione 14 o superiore)
- MySQL (versione 5.7 o superiore)
- npm o yarn

### Installazione

1. **Clona il repository**

   ```bash
   git clone <repository-url>
   cd eventHub-back
   ```

2. **Installa le dipendenze**

   ```bash
   npm install
   ```

3. **Configura le variabili d'ambiente**
   Crea un file `.env` nella root del progetto:

   ```env
   DB_HOST=localhost
   DB_USER=your_username
   DB_PASSWORD=your_password
   DB_NAME=eventhub_db
   JWT_SECRET=your_jwt_secret_key
   ```

4. **Configura il database**

   - Crea un database MySQL chiamato `eventhub_db`
   - Importa lo schema delle tabelle (se disponibile)

5. **Avvia l'applicazione**
   ```bash
   npm test
   ```
   Il server sarà disponibile su `http://localhost:3000`

## 📡 API Endpoints

### Autenticazione (`/auth`)

- `POST /auth/register` - Registrazione nuovo utente
- `POST /auth/login` - Login utente
- `POST /auth/logout` - Logout utente

### Utenti (`/users`)

- `GET /users` - Lista tutti gli utenti
- `GET /users/:id` - Dettagli utente specifico
- `PUT /users/:id` - Aggiorna profilo utente

### Eventi (`/events`)

- `GET /events` - Lista tutti gli eventi
- `POST /events` - Crea nuovo evento
- `GET /events/:id` - Dettagli evento specifico
- `PUT /events/:id` - Aggiorna evento
- `DELETE /events/:id` - Elimina evento

## 🔐 Sicurezza

- **Password hashing** con bcrypt
- **JWT tokens** per autenticazione sicura
- **Cookie HTTP-only** per gestione token
- **Validazione input** con Zod
- **Middleware di autenticazione** per protezione route

## 🗄️ Database

L'applicazione utilizza MySQL con le seguenti tabelle principali:

- `users` - Gestione utenti
- `events` - Gestione eventi
- `comments` - Sistema commenti
- Tabelle di relazione per iscrizioni e richieste

## 🚀 Avvio in Sviluppo

```bash
# Modalità watch per sviluppo
npm test

# Il server si riavvia automaticamente ad ogni modifica
```

## 👨‍💻 Autore

**Thomas Raimondi** - Sviluppatore del progetto EventHub

## 📄 Licenza

Questo progetto è rilasciato sotto licenza ISC.

---

Per supporto o domande, contatta il team di sviluppo.
