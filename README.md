# 🖼️ Wallpaper Provider

Un **wallpaper provider moderno tipo Unsplash**, optimizado para dispositivos móviles, escritorio y tablets.
Enfocado en UI/UX, performance visual y consumo eficiente de imágenes desde CDN.

---

# 🚀 Tech Stack

### Frontend

* ⚡ Vite
* ⚛️ React + TypeScript
* 🎨 Tailwind CSS v4
* 🎞️ Embla Carousel

### Infraestructura

* ☁️ Supabase (Storage)
* 🌐 CDN de imágenes (Cloudinary / Supabase Storage)

---

# 🎯 Objetivo del proyecto

Construir un sistema de visualización y descarga de wallpapers que:

* 📱 Se adapte a múltiples dispositivos
* 🎨 Ofrezca una experiencia visual moderna
* ⚡ Consuma imágenes optimizadas desde CDN

---

# ✨ Features actuales

* 🖼️ Grid de wallpapers responsive (masonry layout)
* 🎞️ Hero con carousel fullscreen
* 🔍 Modal de preview con:

  * selección de aspect ratio
  * descarga de imagen
* 🎨 UI moderna con Tailwind

---

# 🔮 Features futuras

* ⚡ Lazy loading de imágenes
* ❤️ Favoritos (con auth)
* 🔎 Filtros por categoría
* 🎲 Wallpapers random
* 🧠 Detección automática de dispositivo
* 📦 API pública

---

# 📁 Estructura del proyecto

```txt
src/
 ├─ components/
 │   ├─ layout/
 │   ├─ carousel/
 │   ├─ wallpaper/
 │
 ├─ pages/
 │   ├─ Home.tsx
 │
 ├─ hooks/
 ├─ context/
 ├─ utils/
 ├─ types/
```

---

# ⚙️ Instalación

```bash
git clone <repo-url>
cd wallpaper-provider

pnpm install
pnpm dev
```

---

# 🌐 Variables de entorno

Crear archivo `.env`:

```env
VITE_SUPABASE_URL=
VITE_SUPABASE_ANON_KEY=
```

---

# 🖼️ Manejo de imágenes

Las imágenes se almacenan en CDN (no en base de datos).

Se utilizan transformaciones dinámicas como:

* `e_upscale` → mejora de resolución
* `q_auto` → optimización de calidad
* `f_auto` → formato automático

---

# 📦 Deploy

### Frontend

* Vercel (recomendado)
* Netlify

---

# 🧠 Decisiones técnicas

* Uso de CDN para imágenes
* Arquitectura frontend-first (sin backend por ahora)
* Enfoque en UI/UX y rendering

---

# 📈 Escalabilidad

* Integración futura con backend (Node + Prisma)
* Paginación de resultados
* Optimización de carga de imágenes

---

# 🧑‍💻 Autor

Proyecto desarrollado como práctica de frontend moderno.

# 🌐 Dominio

Proyecto desplegado en vercel:

Link: https://wallpaper-provider-p01.vercel.app/