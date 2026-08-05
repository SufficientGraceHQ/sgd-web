export const WHATSAPP_NUMBER = '2349030742260'
export const WHATSAPP_BASE_URL = `https://wa.me/${WHATSAPP_NUMBER}`

export function buildWhatsAppLink(message?: string): string {
  if (!message) return WHATSAPP_BASE_URL
  return `${WHATSAPP_BASE_URL}?text=${encodeURIComponent(message)}`
}
