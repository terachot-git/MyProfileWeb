import { useRef, useEffect } from "react";
import { animate } from "animejs";


export  function CatSlideTransition({
  isExiting = true,
  duration = 1200,
  src = "https://res.cloudinary.com/denaxvdnw/image/upload/v1755591642/nyan-cat-nyan_ckxk5y.gif",
  children,
}) {
  const catRef = useRef(null);
  const overlayRef = useRef(null);

  useEffect(() => {
    if (!isExiting) {
      animate(overlayRef.current, {
        opacity: [1, 0],
        duration,
        ease: "inOut",
      });
    } else {
      animate(overlayRef.current, {
        opacity: [0, 1],
        duration,
        ease: "inOut",
      });

      const cat = catRef.current;
      cat.style.opacity = 1;
      if (!cat) return;
      // cat.style.transition = "none";
      // const vw = window.innerWidth;
      const catWidth = 350;
      animate(cat, {
        translateX: [`-${catWidth}px`, `100vw`],
        duration: duration * 3,
        ease: "inOut",
        onComplete: () => {
          // ซ่อน cat หลัง animation เสร็จ
          cat.style.opacity = 0;
          //   cat.style.transform = `translateX(-${catWidth}px)`;
        },
      });
    }
  }, [isExiting, duration]);

  return (
    <div className="relative">
      <div
        ref={overlayRef}
        className="fixed inset-0 z-[9998] pointer-events-none bg-white opacity-0"
      ></div>

      <img
        ref={catRef}
        src={src}
        alt="cat"
        className="fixed top-1/2 left-0 -translate-y-1/2 z-[9999] pointer-events-none opacity-0"
        style={{ width: 350, height: "auto" }}
      />

      <div>{children}</div>
    </div>
  );
}
