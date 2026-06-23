export const SCROLL_CONTAINER_SELECTOR = '[data-scroll-container="true"]';

export function getScrollContainer() {
  return document.querySelector<HTMLElement>(SCROLL_CONTAINER_SELECTOR);
}
