# Gerald Misa Denis — Portfolio

Portfolio personal construido con Next.js 15, Tailwind CSS v4 y TypeScript.

## Stack

- **Framework:** Next.js 15 (App Router)
- **Estilos:** Tailwind CSS v4
- **Lenguaje:** TypeScript
- **Email:** Resend
- **Despliegue:** Vercel

## Características

- Diseño oscuro con tema índigo/violeta
- Texto rotativo animado en el hero
- Terminal interactiva oculta (presiona `/`)
- Modo código — ver el perfil como TypeScript
- Stack técnico interactivo con relaciones entre tecnologías
- Formulario de contacto con validación y envío real de email
- SEO técnico: metadata, Open Graph, JSON-LD, sitemap, robots.txt
- Hora en vivo en La Habana en el footer
- API Route de contacto con Node.js

## Instalación
```bash
# Clonar el repositorio
git clone https://github.com/GeraldMisa27/gerald-portfolio.git

# Entrar al proyecto
cd gerald-portfolio

# Instalar dependencias
npm install

# Crear el archivo de variables de entorno
cp .env.local.example .env.local
# Añade tu RESEND_API_KEY y CONTACT_EMAIL

# Correr en desarrollo
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## Estructura
portfolio/
├── app/
│   ├── api/contact/route.ts  ← API Route Node.js
│   ├── globals.css
│   ├── layout.tsx            ← SEO metadata + JSON-LD
│   ├── page.tsx
│   ├── sitemap.ts
│   └── robots.ts
├── components/
│   ├── Nav.tsx
│   ├── Hero.tsx
│   ├── CodeMode.tsx
│   ├── Stats.tsx
│   ├── About.tsx
│   ├── Experience.tsx
│   ├── Projects.tsx
│   ├── Stack.tsx
│   ├── Learning.tsx
│   ├── Education.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   └── Terminal.tsx
└── lib/
└── data.ts               ← Todos los datos del portafolio

## Variables de entorno
```bash
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxx
CONTACT_EMAIL=tu-correo@gmail.com
```

## Contacto

- **Email:** geraldmisa0@email.com
- **GitHub:** [GeraldMisa27](https://github.com/GeraldMisa27)
- **LinkedIn:** [gerald](https://linkedin.com/in/gerald)

