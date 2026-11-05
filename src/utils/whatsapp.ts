import { companyInfo } from '../data/websiteData';

/**
 * Open a formatted WhatsApp inquiry link in a new window/tab.
 * @param subject - Short subject of inquiry (e.g. crop name or service)
 * @param details - Additional details or context
 */
export const openWhatsAppInquiry = (subject: string, details: string): void => {
  const message = `Hello Sukhibhava Agro Team, I am interested in your Managed Farmland in Kanigiri, AP:
🌱 Subject: ${subject}
📋 Details: ${details}

Please share available plot units, master layout, and weekend site tour schedule.`;

  window.open(
    `https://wa.me/${companyInfo.whatsappNumber}?text=${encodeURIComponent(message)}`,
    '_blank'
  );
};

