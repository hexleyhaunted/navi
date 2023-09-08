export function triggerAnimation(elementId: string) {
    const el = document.getElementById(elementId);
    el.classList.remove("animating");
    void el.offsetWidth;
    el.classList.add("animating");
}