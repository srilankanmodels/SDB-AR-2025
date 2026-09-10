import { useEffect, useRef, useState } from "react";

interface NavbarShaderProps {
  height?: number;
  className?: string;
}

const VERTEX_SHADER_SRC = `
  attribute vec2 a_position;
  varying vec2 v_uv;
  void main() {
    v_uv = (a_position + 1.0) * 0.5;
    gl_Position = vec4(a_position, 0.0, 1.0);
  }
`;

const FRAGMENT_SHADER_SRC = `
  precision highp float;
  varying vec2 v_uv;
  uniform float u_time;
  uniform vec2 u_resolution;
  uniform vec2 u_mouse;

  void main() {
    vec2 uv = gl_FragCoord.xy / u_resolution.xy;
    float t = u_time * 0.65;
    
    // Wave frequencies representing handcrafted multi-stranded threads
    float w1 = sin(uv.x * 5.0 + t + sin(uv.x * 3.0 + t * 0.4));
    float w2 = cos(uv.x * 8.5 - t * 0.85 + sin(uv.x * 4.2));
    float w3 = sin(uv.x * 13.0 + t * 1.3);
    
    // Interactive mouse distortion
    float mouseNormX = u_mouse.x / max(u_resolution.x, 1.0);
    float mouseDist = abs(uv.x - mouseNormX);
    float mouseWave = exp(-mouseDist * 9.0) * sin(t * 3.5) * 0.28;
    
    // Composite wave intensity
    float wave = 0.5 + 0.5 * sin(uv.x * 4.5 + t * 0.7 + (w1 + w2 + w3) * 0.22 + mouseWave);
    
    // SDB Brand Color Palette:
    // Purple: #2F1B68 (0.184, 0.106, 0.408)
    // Coral:  #E8456C (0.910, 0.271, 0.424)
    // Amber:  #E59F3C (0.898, 0.624, 0.235)
    // Indigo: #4338CA (0.263, 0.220, 0.792)
    vec3 cPurple = vec3(0.184, 0.106, 0.408);
    vec3 cCoral  = vec3(0.910, 0.271, 0.424);
    vec3 cAmber  = vec3(0.898, 0.624, 0.235);
    vec3 cIndigo = vec3(0.263, 0.220, 0.792);
    
    vec3 col;
    if (wave < 0.33) {
      col = mix(cPurple, cCoral, wave / 0.33);
    } else if (wave < 0.66) {
      col = mix(cCoral, cAmber, (wave - 0.33) / 0.33);
    } else {
      col = mix(cAmber, cIndigo, (wave - 0.66) / 0.34);
    }
    
    // Specular iridescent highlight shimmer
    float shimmer = pow(max(0.0, sin(uv.x * 16.0 - t * 2.2)), 7.0) * 0.45;
    col += vec3(shimmer * 1.0, shimmer * 0.85, shimmer * 0.7);
    
    gl_FragColor = vec4(col, 1.0);
  }
`;

export default function NavbarShader({ height = 3, className = "" }: NavbarShaderProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [hasWebGL, setHasWebGL] = useState<boolean>(true);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext("webgl", { antialias: true, alpha: false }) ||
               (canvas.getContext("experimental-webgl") as WebGLRenderingContext | null);

    if (!gl) {
      setHasWebGL(false);
      return;
    }

    // Shader compilation helper
    function createShader(glCtx: WebGLRenderingContext, type: number, source: string) {
      const shader = glCtx.createShader(type);
      if (!shader) return null;
      glCtx.shaderSource(shader, source);
      glCtx.compileShader(shader);
      if (!glCtx.getShaderParameter(shader, glCtx.COMPILE_STATUS)) {
        console.warn("Shader compile failure:", glCtx.getShaderInfoLog(shader));
        glCtx.deleteShader(shader);
        return null;
      }
      return shader;
    }

    const vs = createShader(gl, gl.VERTEX_SHADER, VERTEX_SHADER_SRC);
    const fs = createShader(gl, gl.FRAGMENT_SHADER, FRAGMENT_SHADER_SRC);
    if (!vs || !fs) {
      setHasWebGL(false);
      return;
    }

    const program = gl.createProgram();
    if (!program) {
      setHasWebGL(false);
      return;
    }

    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.warn("Program link failure:", gl.getProgramInfoLog(program));
      setHasWebGL(false);
      return;
    }

    gl.useProgram(program);

    // Full-screen quad geometry
    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([
        -1, -1,
         1, -1,
        -1,  1,
        -1,  1,
         1, -1,
         1,  1,
      ]),
      gl.STATIC_DRAW
    );

    const aPositionLoc = gl.getAttribLocation(program, "a_position");
    gl.enableVertexAttribArray(aPositionLoc);
    gl.vertexAttribPointer(aPositionLoc, 2, gl.FLOAT, false, 0, 0);

    const uTimeLoc = gl.getUniformLocation(program, "u_time");
    const uResolutionLoc = gl.getUniformLocation(program, "u_resolution");
    const uMouseLoc = gl.getUniformLocation(program, "u_mouse");

    let mouseX = window.innerWidth / 2;
    let mouseY = height / 2;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    let animationFrameId: number;
    let startTime = performance.now();

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const width = canvas.clientWidth || window.innerWidth;
      const h = height;
      const targetW = Math.floor(width * dpr);
      const targetH = Math.floor(h * dpr);

      if (canvas.width !== targetW || canvas.height !== targetH) {
        canvas.width = targetW;
        canvas.height = targetH;
        gl.viewport(0, 0, targetW, targetH);
      }
    };

    resize();
    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(canvas);

    const render = (now: number) => {
      const elapsed = (now - startTime) * 0.001;
      gl.uniform1f(uTimeLoc, elapsed);
      gl.uniform2f(uResolutionLoc, canvas.width, canvas.height);
      gl.uniform2f(uMouseLoc, mouseX * (canvas.width / (canvas.clientWidth || 1)), mouseY);

      gl.drawArrays(gl.TRIANGLES, 0, 6);
      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      resizeObserver.disconnect();
      if (positionBuffer) gl.deleteBuffer(positionBuffer);
      if (program) gl.deleteProgram(program);
      if (vs) gl.deleteShader(vs);
      if (fs) gl.deleteShader(fs);
    };
  }, [height]);

  if (!hasWebGL) {
    // Graceful fallback to CSS gradient if browser blocks or lacks WebGL
    return (
      <div
        className={`w-full bg-gradient-to-r from-sdb-purple via-sdb-coral to-sdb-amber shadow-xs ${className}`}
        style={{ height: `${height}px` }}
      />
    );
  }

  return (
    <div className={`w-full relative overflow-hidden ${className}`} style={{ height: `${height}px` }}>
      <canvas
        ref={canvasRef}
        className="w-full block"
        style={{ height: `${height}px` }}
        aria-hidden="true"
      />
    </div>
  );
}
