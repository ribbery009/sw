import React, { useEffect, useRef } from "react";

type Cordinates = {
  x: number;
  y: number;
  z: number;
};

const StarBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }

    const context = canvas.getContext("2d");
    if (!context) {
      return;
    }
    
    let w : number;
    let h : number;
    let stars : Cordinates[] = [];
    let animationFrameId : number;

    const setCanvasExtents = () => {
      w = document.body.clientWidth;
      h = document.body.clientHeight;
      canvas.width = Math.min(1600, w);
      canvas.height = Math.min(900, h);
    };

    const makeStars = (count : number) => {
      const out = [];
      for (let i = 0; i < count; i++) {
        const s = {
          x: Math.random() * 1600 - 800,
          y: Math.random() * 900 - 450,
          z: Math.random() * 1000,
        };
        out.push(s);
      }
      stars = out;
    };
    
    const moveStars = (distance:number) => {
      const count = stars.length;
      for (var i = 0; i < count; i++) {
        const s = stars[i];
        s.z -= distance;
        if (s.z <= 1) {
          s.z += 999;
        }
      }
    };

    const clear = () => {
      context.fillStyle = "black";
      context.fillRect(0, 0, canvas.width, canvas.height);
    };

    const putPixel = (x:number, y:number, brightness:number) => {
      const intensity = brightness * 255;
      const rgb = "rgb(" + intensity + "," + intensity + "," + intensity + ")";
      context.fillStyle = rgb;
      context.fillRect(x, y, 1, 1);
    };
    
    const paintStars = () => {
      const cx = canvas.width / 2;
      const cy = canvas.height / 2;
    
      const count = stars.length;
      for (var i = 0; i < count; i++) {
        const star = stars[i];
    
        const x = cx + star.x / (star.z * 0.001);
        const y = cy + star.y / (star.z * 0.001);
    
        if (x < 0 || x >= w || y < 0 || y >= h) {
          continue;
        }
    
        const d = star.z / 1000.0;
        const b = 1 - d * d;
    
        putPixel(x, y, b);
      }
    };

    const init = (time : number) => {
      setCanvasExtents();
      makeStars(2000);
      prevTime = time;
      animationFrameId = requestAnimationFrame(tick);
    };

    let prevTime : number;
    const tick = (time : number) => {
      let elapsed = time - prevTime;
      prevTime = time;

      moveStars(elapsed * 0.02);
      clear();
      paintStars();
      
      animationFrameId = requestAnimationFrame(tick);
    };

    requestAnimationFrame(init);
    
    // Cleanup function
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed w-full h-full top-0 left-0 -z-10 bg-black" />;
};

export default StarBackground;