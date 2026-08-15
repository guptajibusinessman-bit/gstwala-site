export const GA_MEASUREMENT_ID = "G-CCLM6DPTSH";

export type WhatsAppOffer = "gst_registration" | "nil_filing" | "other";

type GtagFn = (...args: unknown[]) => void;

function gtag(): GtagFn | undefined {
  if (typeof window === "undefined") return undefined;
  return (window as Window & { gtag?: GtagFn }).gtag;
}

export function track(name: string, params?: Record<string, string>) {
  const send = gtag();
  if (!send) return;
  send("event", name, params);
}

export function trackPageView(pagePath: string) {
  const send = gtag();
  if (!send) return;
  send("event", "page_view", { page_path: pagePath });
}

export function classifyWhatsAppOffer(message: string): WhatsAppOffer {
  const m = message.toLowerCase();
  if (m.includes("nil gst") || m.includes("₹300") || m.includes("300/month")) {
    return "nil_filing";
  }
  if (m.includes("gst registration") || m.includes("₹999") || m.includes("999")) {
    return "gst_registration";
  }
  return "other";
}
