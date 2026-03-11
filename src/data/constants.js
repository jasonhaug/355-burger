export const ORDER_URL = "https://www.clover.com/online-ordering/355-burger-sierra-madre";
export const MAPS_URL_APPLE = "https://maps.apple.com/?q=355+Burger&address=85+W+Sierra+Madre+Blvd,+Sierra+Madre,+CA";
export const MAPS_URL_GOOGLE = "https://maps.google.com/?q=355+Burger+Sierra+Madre+CA";

export function getDirectionsUrl() {
  const isApple = /iPhone|iPad|iPod|Macintosh/.test(navigator.userAgent);
  return isApple ? MAPS_URL_APPLE : MAPS_URL_GOOGLE;
}
export const INSTAGRAM_URL = "https://www.instagram.com/355burger/";
export const FACEBOOK_URL = "https://www.facebook.com/355burger/";
