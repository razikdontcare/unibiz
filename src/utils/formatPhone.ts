export default function formatPhone(phone: string) {
  // Remove all non-digit characters
  let cleaned = phone.replace(/\D/g, "");

  // If the number starts with "0", replace it with "62"
  if (cleaned.startsWith("0")) {
    cleaned = "62" + cleaned.slice(1);
  }

  // If the number starts with "+62", remove the "+"
  if (cleaned.startsWith("62")) {
    cleaned = cleaned.replace(/^62/, "62");
  } else if (cleaned.startsWith("8")) {
    // If the number starts with "8", prepend "62"
    cleaned = "62" + cleaned;
  }

  return cleaned;
}
