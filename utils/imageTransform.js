export function enlarge(target, imgRef){
    const { innerWidth, innerHeight } = window;
    const { x, y, width, height } = target.getBoundingClientRect();
    const targetX = innerWidth / 2 - x - width / 2;
    const targetY = innerHeight / 2 - y - height / 2;
    const fitToScreen = (Math.min(innerWidth, innerHeight)) / Math.max(width, height);
  
    imgRef.current = target;
    imgRef.current.parentElement.classList.add("activeImg");
    imgRef.current.style.cursor = "zoom-out";
    imgRef.current.style.transform = `translate(${targetX}px, ${targetY}px) scale(${fitToScreen})`;
    imgRef.current.style.zIndex = "100";
};  
  
export function revert(imgRef) {
    imgRef.current.parentElement.classList.remove("activeImg");
    imgRef.current.style.removeProperty("cursor");
    imgRef.current.style.removeProperty("transform");
    imgRef.current.style.removeProperty("z-index");
    imgRef.current = null;
};