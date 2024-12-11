export function enlarge(target, imgRef) {
  const { innerWidth, innerHeight } = window;
  const { x, y, width, height } = target.getBoundingClientRect();
  var fitToScreen = 0;
  var targetX = innerWidth / 2 - x - width / 2;
  var targetY = innerHeight / 2 - y - height / 2;

  imgRef.current = target;

  if (innerWidth <= 768) {
    if (width > height) {
      fitToScreen =
        (Math.min(innerWidth, innerHeight) * 0.8) / Math.min(width, height);

      imgRef.current.style.transform = `translate(${targetX}px, ${targetY}px) scale(${fitToScreen}) rotate(-90deg)`;
    }
  } else {
    fitToScreen = Math.min(innerWidth, innerHeight) / Math.max(width, height);

    imgRef.current.style.transform = `translate(${targetX}px, ${targetY}px) scale(${fitToScreen})`;
  }

  imgRef.current.parentElement.classList.add("activeImg");
  imgRef.current.style.cursor = "zoom-out";
  imgRef.current.style.zIndex = "100";
}

export function revert(imgRef) {
  imgRef.current.parentElement.classList.remove("activeImg");
  imgRef.current.style.removeProperty("cursor");
  imgRef.current.style.removeProperty("transform");
  imgRef.current.style.removeProperty("z-index");
  imgRef.current = null;
}
