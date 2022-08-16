import { enlarge, revert } from "./imageTransform";


export function clickHandler(e, imgRef){
    if (imgRef.current) {
        revert(imgRef);
    } else {
        const targetType = e.target.nodeName;
        if (targetType == "IMG") {
            enlarge(e.target, imgRef);
        }
    }
};

export function scrollhandler(e, imgRef){
    if (imgRef.current != null) {
      revert(imgRef);
    }
};
  