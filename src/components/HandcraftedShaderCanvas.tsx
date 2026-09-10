import { useEffect, useRef, useState } from "react";

interface HandcraftedShaderCanvasProps {
  mode?: "dna" | "silk" | "aurora";
  intensity?: number;
  className?: string;
  opacity?: number;
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
  uniform int u_mode; // 0 = DNA / Woven Strands, 1 = Silk Ribbon, 2 = Aurora
  uniform float u_intensity;

  // 2D Rotation matrix
  mat2 rot(float a) {
    float s = sin(a), c = cos(a);
    return mat2(c, -s, s, c);
  }

  // Hash & Noise for organic handcrafted texture
  float hash(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
  }

  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(
      mix(hash(i + vec2(0.0, 0.0)), hash(i + vec2(1.0, 0.0)), u.x),
      mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x),
      u.y
    );
  }

  // Fractional Brownian Motion for procedural weaving threads
  float fbm(vec2 p) {
    float v = 0.0;
    float a = 0.5;
    mat2 r = rot(0.5);
    for (int i = 0; i < 4; i++) {
      v += a * noise(p);
      p = r * p * 2.05 + vec2(u_time * 0.03);
      a *= 0.5;
    }
    return v;
  }

  void main() {
    vec2 st = (gl_FragCoord.xy - 0.5 * u_resolution.xy) / min(u_resolution.x, u_resolution.y);
    vec2 mouse = (u_mouse - 0.5 * u_resolution.xy) / min(u_resolution.x, u_resolution.y);
    
    // Interactive cursor gravitational ripple
    float distMouse = length(st - mouse);
    vec2 mouseWarp = (st - mouse) * exp(-distMouse * 2.8) * 0.18;
    vec2 p = st + mouseWarp;

    float t = u_time * 0.22;

    // SDB Bank Palette Definitions:
    // Purple: #2F1B68
    vec3 cPurple = vec3(0.184, 0.106, 0.408);
    // Coral:  #E8456C
    vec3 cCoral  = vec3(0.910, 0.271, 0.424);
    // Amber:  #E59F3C
    vec3 cAmber  = vec3(0.898, 0.624, 0.235);
    // Crimson: #8B1D2C
    vec3 cCrimson= vec3(0.545, 0.114, 0.173);
    // Ivory:   #FAF7F2
    vec3 cIvory  = vec3(0.980, 0.969, 0.949);
    // Soft Blue: #3B82F6
    vec3 cBlue   = vec3(0.231, 0.510, 0.965);

    vec3 finalColor = cIvory;

    if (u_mode == 0) {
      // MODE 0: "A FUTURE HANDCRAFTED" - Intertwined DNA Helix & Woven Strands
      float waveA = sin(p.x * 2.8 + t * 1.2 + sin(p.y * 3.5 + t * 0.6));
      float waveB = cos(p.x * 3.4 - t * 0.9 + cos(p.y * 2.8 + t * 0.5));
      float waveC = sin(p.x * 4.2 + t * 1.5 - p.y * 2.0);

      // Domain warping for organic woven fiber cloth
      vec2 q = vec2(fbm(p + vec2(0.0, 0.0)), fbm(p + vec2(4.3, 2.1)));
      vec2 r = vec2(fbm(p + 3.0 * q + vec2(1.7, 8.2) + 0.12 * t),
                    fbm(p + 3.0 * q + vec2(7.3, 3.8) + 0.09 * t));
      float f = fbm(p + 2.5 * r);

      // Multi-strand DNA helix paths
      float strand1 = smoothstep(0.12, 0.005, abs(p.y - waveA * 0.26 - f * 0.12));
      float strand2 = smoothstep(0.10, 0.005, abs(p.y - waveB * 0.28 + f * 0.14));
      float strand3 = smoothstep(0.08, 0.005, abs(p.y + waveC * 0.22 - q.y * 0.18));
      float strand4 = smoothstep(0.09, 0.005, abs(p.y - (waveA + waveB) * 0.16 + r.x * 0.15));

      // Base woven field
      finalColor = mix(cIvory, cPurple, clamp(f * f * 1.2, 0.0, 1.0));
      finalColor = mix(finalColor, cCoral, clamp(length(q) * 0.6, 0.0, 1.0));
      finalColor = mix(finalColor, cAmber, clamp(r.x * 0.5, 0.0, 1.0));

      // Luminous handcrafted strands
      finalColor += strand1 * cCoral * 1.35 * u_intensity;
      finalColor += strand2 * cAmber * 1.25 * u_intensity;
      finalColor += strand3 * cBlue * 1.15 * u_intensity;
      finalColor += strand4 * cCrimson * 1.2 * u_intensity;

    } else if (u_mode == 1) {
      // MODE 1: Liquid Silk Ribbon Flow
      vec2 q = vec2(fbm(p * 1.5 + vec2(t * 0.2, 0.0)), fbm(p * 1.5 + vec2(0.0, t * 0.15)));
      float ribbon = sin(p.x * 3.0 + q.x * 4.0 + t);
      float ribbon2 = cos(p.y * 3.5 - q.y * 3.5 - t * 0.8);
      
      float intensity = smoothstep(0.35, 0.0, abs(p.y - ribbon * 0.3));
      float intensity2 = smoothstep(0.25, 0.0, abs(p.y + ribbon2 * 0.25));

      finalColor = mix(cIvory, cPurple, clamp(q.x * 1.1, 0.0, 1.0));
      finalColor += intensity * cCoral * 1.4 * u_intensity;
      finalColor += intensity2 * cAmber * 1.3 * u_intensity;

    } else {
      // MODE 2: Aurora Macro Rebound
      float aurora = sin(p.x * 2.0 + t) * cos(p.y * 3.0 - t * 0.5);
      float noiseVal = fbm(p * 2.0 + vec2(t * 0.1));
      float glow = smoothstep(0.4, -0.2, p.y + aurora * 0.3 + noiseVal * 0.2);

      finalColor = mix(cIvory, cPurple, glow * 0.8);
      finalColor = mix(finalColor, cCoral, clamp(glow * noiseVal * 1.8, 0.0, 1.0) * u_intensity);
      finalColor = mix(finalColor, cAmber, clamp(pow(glow, 2.5) * 1.5, 0.0, 1.0) * u_intensity);
    }

    // Soft organic vignette toward edges for seamless blend into light UI
    float vignette = smoothstep(1.4, 0.3, length(st));
    vec3 result = mix(cIvory, finalColor, vignette * 0.88);

    gl_FragColor = vec4(result, 1.0);
  }
`;

export default function HandcraftedShaderCanvas({
  mode = "dna",
  intensity = 1.0,
  opacity = 0.85,
  className = ""
}: HandcraftedShaderCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [hasWebGL, setHasWebGL] = useState<boolean>(true);

  const modeInt = mode === "dna" ? 0 : mode === "silk" ? 1 : 2;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext("webgl", { antialias: true, alpha: true }) ||
               (canvas.getContext("experimental-webgl") as WebGLRenderingContext | null);

    if (!gl) {
      setHasWebGL(false);
      return;
    }

    function createShader(glCtx: WebGLRenderingContext, type: number, source: string) {
      const shader = glCtx.createShader(type);
      if (!shader) return null;
      glCtx.shaderSource(shader, source);
      glCtx.compileShader(shader);
      if (!glCtx.getShaderParameter(shader, glCtx.COMPILE_STATUS)) {
        console.warn("Hero shader compile failure:", glCtx.getShaderInfoLog(shader));
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
      console.warn("Hero program link failure:", gl.getProgramInfoLog(program));
      setHasWebGL(false);
      return;
    }

    gl.useProgram(program);

    // Full-screen quad
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
    const uModeLoc = gl.getUniformLocation(program, "u_mode");
    const uIntensityLoc = gl.getUniformLocation(program, "u_intensity");

    let mouseX = window.innerWidth * 0.65;
    let mouseY = window.innerHeight * 0.45;
    let targetMouseX = mouseX;
    let targetMouseY = mouseY;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      targetMouseX = e.clientX - rect.left;
      targetMouseY = canvas.height - (e.clientY - rect.top);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    let animationFrameId: number;
    const startTime = performance.now();

    const resize = () => {
      const container = containerRef.current;
      if (!container) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 1.75); // Cap DPR at 1.75 for fluid 60fps
      const w = container.clientWidth || window.innerWidth;
      const h = container.clientHeight || window.innerHeight;
      const targetW = Math.floor(w * dpr);
      const targetH = Math.floor(h * dpr);

      if (canvas.width !== targetW || canvas.height !== targetH) {
        canvas.width = targetW;
        canvas.height = targetH;
        gl.viewport(0, 0, targetW, targetH);
      }
    };

    resize();
    const resizeObserver = new ResizeObserver(resize);
    if (containerRef.current) resizeObserver.observe(containerRef.current);

    const render = (now: number) => {
      // Smooth lerp mouse movement for organic fluid inertia
      mouseX += (targetMouseX - mouseX) * 0.06;
      mouseY += (targetMouseY - mouseY) * 0.06;

      const elapsed = (now - startTime) * 0.001;
      gl.uniform1f(uTimeLoc, elapsed);
      gl.uniform2f(uResolutionLoc, canvas.width, canvas.height);
      gl.uniform2f(uMouseLoc, mouseX * (canvas.width / (canvas.clientWidth || 1)), mouseY * (canvas.height / (canvas.clientHeight || 1)));
      gl.uniform1i(uModeLoc, modeInt);
      gl.uniform1f(uIntensityLoc, intensity);

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
  }, [modeInt, intensity]);

  if (!hasWebGL) {
    return null;
  }

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 pointer-events-none select-none overflow-hidden ${className}`}
      style={{ opacity }}
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full block"
        aria-hidden="true"
      />
    </div>
  );
}
