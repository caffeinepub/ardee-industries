import { MessageType } from '../../backend';

interface InquiryFormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  inquiryType: 'Buy' | 'Sell' | 'Partnership';
  location: string;
  quantity: string;
  message: string;
}

export function formatInquiryForBackend(data: InquiryFormData) {
  const subject = `${data.inquiryType} Inquiry - ${data.name}${data.company ? ` (${data.company})` : ''}`;

  const bodyParts = [
    `Name: ${data.name}`,
    data.company ? `Company: ${data.company}` : null,
    `Email: ${data.email}`,
    data.phone ? `Phone: ${data.phone}` : null,
    `Inquiry Type: ${data.inquiryType}`,
    data.location ? `Location: ${data.location}` : null,
    data.quantity ? `Estimated Quantity: ${data.quantity}` : null,
    '',
    'Message:',
    data.message,
  ];

  const body = bodyParts.filter((part) => part !== null).join('\n');

  return {
    subject,
    body,
    messageType: MessageType.inquiry,
  };
}
