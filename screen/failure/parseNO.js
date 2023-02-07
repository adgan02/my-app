export function parsePhoneNumber(phone, countryCode) {
    const cleaned = ('' + phone).replace(/\D/g, '')
    const match = cleaned.match(/^(\d+)$/)
    if (match) {
      const intlCode = countryCode ? `+${countryCode}` : '';
      return `${intlCode}${match[1]}`
    }
    return null
  }