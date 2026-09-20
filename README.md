# TermLink website

The product website for [TermLink](https://github.com/anbv29/termlink), a fully offline terminal chat tool built in Rust. TermLink uses Bluetooth Low Energy, temporary end-to-end encryption, RAM-only session state, and bounded multi-PC relays. It needs no internet, Wi-Fi, account, server, or database.

## Stack

- Next.js 16 App Router
- React 19 and TypeScript
- Plain CSS with responsive glass surfaces
- Canvas-based peer mesh and cursor trail
- Static export for simple hosting

## Local development

You need a current Node.js installation with npm.

```powershell
npm install
npm run dev
```

Open `http://localhost:3000`.

## Checks and production build

```powershell
npm run check
npm run build
```

The production-ready static site is written to `out/`. Serve that folder with any static web server. No Node.js server is required in production.

## Updating the download

The public download button serves:

```text
public/downloads/TermLink-Windows.zip
```

When replacing the package, also update its version, file size, and SHA-256 checksum in `components/DownloadPanel.tsx`.

Generate a checksum in PowerShell with:

```powershell
Get-FileHash -Algorithm SHA256 .\public\downloads\TermLink-Windows.zip
```

## Project structure

```text
app/                 Next.js routes, metadata, and global styles
components/          Reusable server and client UI components
public/              Favicon and portable TermLink download
next.config.ts       Static-export configuration
```

## Accessibility and performance

- Keyboard-visible focus styles and a working skip link
- Reduced-motion and forced-colors support
- Normal system cursor on touch devices
- IntersectionObserver reveals instead of an animation library
- Device-pixel-ratio caps and bounded cursor-trail work
- Responsive layouts tested down to 375px

## License

MIT © TermLink contributors.
