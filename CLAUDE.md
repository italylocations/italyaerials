@AGENTS.md

# italyaerials.com

Sito commerciale di riprese aeree con drone in Italia. Obiettivo: visibilità organica su Google e richieste di preventivo.

## Stack

- Next.js 16 (App Router, Turbopack), TypeScript, Tailwind v4
- Deploy su Vercel (piano Hobby); il branch `main` è la produzione
- Media e asset su Cloudflare R2
- GA4 per analytics, Google Search Console per l'indicizzazione

## Comandi

- `npm run dev` per il server di sviluppo
- `npm run build` per la build di produzione: deve passare prima di ogni commit
- Il dev server va tenuto chiuso mentre lavori, perché dev e build condividono la cartella `.next` e si ostacolano
- Se la build fallisce su un file dentro `.next` è un artefatto, non un bug: cancella `.next/dev` e rilancia

## Divieti

- Non leggere, modificare o creare file `.env` o `.env.*`: contengono credenziali. Un hook di progetto blocca sia la modifica diretta sia i comandi shell.
- Non aggiungere né modificare variabili d'ambiente. Le gestisce Nicolas dal pannello Vercel. Se ne serve una nuova, chiedila per nome e spiega a cosa serve, senza mai chiedere il valore.
- Non fare deploy, merge su `main` o push in produzione senza richiesta esplicita.
- Non installare dipendenze nuove senza chiedere prima.

## Decisioni permanenti

- Le pagine SEO di località sono volutamente fuori dalla navigazione: si raggiungono solo da sitemap e URL diretto. Vale anche per le pagine future e per la hub page.
- GA4 è attivo solo in ambiente Production su Vercel. `NEXT_PUBLIC_GA4_ID` non va mai aggiunto a Preview: è già stato causa di una misconfigurazione.
- Il Footer resta un server component. I link che richiedono interattività si aggiungono come named export da `CookieBanner.tsx`, per non spostare il Footer nel bundle client.
- Dopo un merge va sempre verificato che il deploy in produzione sia realmente avvenuto: il codice su `main` non è automaticamente live.
- Su Google Search Console gli errori di redirect legati a un redeploy possono persistere per giorni: aspettare prima di richiedere di nuovo l'indicizzazione.

## Workflow

1. Branch dedicato, con prefisso coerente al lavoro (`feat/`, `fix/`, `seo/`)
2. Test in locale
3. Preview su Vercel
4. Merge su `main` solo dopo conferma di Nicolas
5. Verifica che la produzione sia aggiornata

Prefissi dei commit: `feat:` `fix:` `style:` `content:` `seo:` `chore:`

## Come lavorare con Nicolas

- Non è uno sviluppatore. Spiega in italiano cosa fai e perché, senza dare per scontato il gergo tecnico.
- Una istruzione per volta, una azione per volta. Niente sequenze lunghe da eseguire tutte insieme.
- Se un comando è rischioso o irreversibile, dillo chiaramente prima.
- Per i task non banali usa il plan mode e fatti approvare il piano prima di toccare i file.

## Stato dei task

`italyaerials-project-documentation.md` è la fonte di verità su cosa è fatto e cosa manca. Leggilo a inizio sessione o quando serve conoscere lo stato, non a ogni turno. Tienilo aggiornato quando completi qualcosa.
