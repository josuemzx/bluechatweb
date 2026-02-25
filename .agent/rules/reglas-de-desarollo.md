---
trigger: always_on
---

La web debe estar en Sanity para el backend y Next.js + TailwindCSS para el frontend


Debes construir la web oficial de Bluechat (bluechat.lat).
Bluechat es una versión rebrandeada de Chatwoot y su aplicación está operativa en app.bluechat.lat. La nueva web será la página de marketing, separada de la app, similar a cómo Chatwoot tiene su app en app.chatwoot.com y su web corporativa en chatwoot.com.

Debes ir constantemente a la web de https://antigravity.google para replicar el diseño, quiero replicar el diseño de antigravity para bluechat

Objetivo del proyecto: Desarrollar una web profesional, limpia, moderna y de alto nivel para presentar Bluechat como producto SaaS. El diseño debe ser minimalista, claro, orientado a conversión y con excelente experiencia de usuario.

Yo agregaré las imágenes necesarias.

La web será desplegada en mi VPS Contabo con Ubuntu.


Stack obligatorio:

- Backend CMS: Sanity

- Frontend: Next.js

- Estilos: TailwindCSS

- Fuente principal: Inter

- Color primario de marca: #0166FF


Requisitos funcionales:

La web debe incluir como mínimo:

- Página principal (Home)

- Presentación clara de qué es Bluechat

- Propuesta de valor

- Sección de funcionalidades

- Planes y precios

- Llamados a la acción

- Página de funcionalidades (detallada)

- Página de planes

- Blog

- Gestión completa desde Sanity

- SEO optimizado

- Slugs dinámicos

- Categorías y etiquetas



Estructura preparada para agregar nuevas páginas fácilmente


Requisito crítico de administración:

- La web debe ser fácilmente administrable por una persona no técnica.

- No debe requerir escribir código para crear nuevas páginas.


Debe permitir:

- Crear nuevas páginas desde Sanity

- Editar textos

- Agregar secciones

- Gestionar el blog

- Cambiar contenido sin tocar el código


La arquitectura debe estar pensada como un sistema modular de bloques reutilizables (por ejemplo: Hero, Features, Pricing, CTA, Testimonials, etc.) que puedan activarse desde el CMS.


Estilo y referencia:

El diseño debe ser visualmente equivalente en nivel profesional a la web de Antigravity:

- Diseño limpio

- Mucho espacio en blanco

- Jerarquía tipográfica clara

- Secciones bien definidas

- Animaciones sutiles

- Responsive perfecto

- No debe verse como una plantilla genérica.


Plan recomendado para abordar el proyecto

1. Definir arquitectura de contenido primero

Antes de programar:

- Definir estructura de páginas

- Definir bloques reutilizables
- Diseñar modelo de contenido en Sanity

Esto evita rehacer trabajo después.


2. Crear sistema de bloques en Sanity

En lugar de páginas rígidas, crear:

- Page Builder basado en bloques

- Cada bloque como schema independiente

- Orden dinámico configurable

- Activación/desactivación desde CMS

Esto permite que cualquier trabajador cree nuevas páginas sin tocar código.


3. Construir frontend desacoplado y escalable

- Next.js con App Router

- Renderizado híbrido (SSG + ISR)

- SEO optimizado

- Componentes reutilizables

- Tailwind con design system propio


4. Implementar sistema de blog profesional

- Slugs automáticos

- SEO fields personalizados

- OpenGraph

- Imagen destacada

- Lectura optimizada


5. Preparar despliegue en VPS Contabo


- Docker

- Node en producción

- PM2

- Reverse proxy con Caddy o Nginx


Debe quedar listo para:

- SSL

- Dominio bluechat.lat

- Subdominios futuros


Recomendaciones clave

- No hacer la web rígida.

- Pensarla como producto SaaS, no como landing simple.

- Diseñar sistema, no solo páginas.

- Priorizar facilidad de administración.

- Separar completamente la web marketing de la app.

- Construir con visión de escalabilidad futura.