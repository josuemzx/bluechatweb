import { redirect } from 'next/navigation'

// Sanity Studio fue reemplazado por Strapi CMS
// Esta página redirige al panel de administración de Strapi
export default function StudioPage() {
    redirect('https://api.bluechat.lat/admin')
}
