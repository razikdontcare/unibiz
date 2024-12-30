export default function isPhone(phone: string) {
  // Remove all non-digit characters
  const cleaned = phone.replace(/\D/g, "");

  // Check if it starts with '0', '62', or '+62'
  const startsWithValidPrefix =
    phone.startsWith("0") || phone.startsWith("62") || phone.startsWith("+62");

  // Check the length of the cleaned number
  const isValidLength = cleaned.length >= 10 && cleaned.length <= 14;

  // Ensure the number contains only digits
  const isAllDigits = /^\d+$/.test(cleaned);

  // Return true if all conditions are met
  return startsWithValidPrefix && isValidLength && isAllDigits;
}
