Configurar `AI_API_KEY` para hosting
=====================================

Resumen rápido
--------------

No subas claves al repositorio. Usa las variables de entorno del host o los secretos de GitHub Actions.

Vercel (UI)
-----------

1. Ve a tu proyecto en Vercel → Settings → Environment Variables.
2. Añade `AI_API_KEY` como variable (valor: tu clave). Asigna a `Production` y `Preview` según necesites.
3. Redeploy.

Vercel (CLI)
-------------

Requiere `vercel` y un `VERCEL_TOKEN`:

```bash
# export VERCEL_TOKEN=...
vercel env add AI_API_KEY production
# pega la clave cuando te lo pida
```

Netlify (UI / CLI)
------------------

UI: Site → Site settings → Build & deploy → Environment → New variable.
CLI:

```bash
netlify env:set AI_API_KEY "your_key_here"
```

Railway
-------

```bash
railway variables set AI_API_KEY your_key_here
```

Heroku
------

```bash
heroku config:set AI_API_KEY=your_key_here --app your-app-name
```

GitHub Actions (recommended for CI builds)
-----------------------------------------

1. Repo → Settings → Secrets and variables → Actions → New repository secret.
2. Nombre: `AI_API_KEY` → Valor: tu clave.
3. El workflow `/.github/workflows/build-and-deploy.yml` usa `secrets.AI_API_KEY`.

Probar la API en el host
------------------------

Una vez la variable esté en el entorno de producción, prueba la ruta:

```bash
curl -X POST https://<tu-dominio>/api/ai/analyze \
  -H 'Content-Type: application/json' \
  -d '{"responses":{"q1":"prueba"}}'
```

Notas para Gemini (Google)
--------------------------

- Si usas Gemini/Google Gen APIs, pon `AI_API_URL` con la URL de `generateMessage` del modelo o deja la librería detectar el proveedor. Nuestro helper ya intenta detectar Gemini por `AI_API_URL` o `AI_PROVIDER=gemini`.
- No incluyas tu clave en archivos comiteados.
