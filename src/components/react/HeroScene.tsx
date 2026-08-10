import { useRef, useState, useEffect, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Float,
  MeshTransmissionMaterial,
  Sparkles,
  Environment,
  Lightformer,
  PerformanceMonitor,
  AdaptiveDpr,
} from "@react-three/drei";
import type { Mesh } from "three";

/**
 * One coherent WebGL scene — a single faceted glass core, not a scatter of
 * unrelated shapes. Sits as a background accent behind/beside the portrait
 * rather than a centerpiece: the portrait is the visual focus, this is
 * ambient depth. React Three Fiber + Drei per the brief; the only Astro
 * island on the site that ships React — every other page never loads
 * React at all (Astro islands are per-component code-split).
 *
 * Deliberately no photographic Environment preset (tried "city" first —
 * it reflected a literal skyline in the glass, reading as a generic
 * three.js demo rather than a bespoke brand element). The synthetic
 * Lightformer rig below bakes an abstract environment map out of colored
 * panels in the site's own palette instead, so reflections stay on-brand.
 */

const PALETTE = ["#8b5cf6", "#4f46e5", "#06b6d4"];

function GlassCore({ reduced, mobile, rtl }: { reduced: boolean; mobile: boolean; rtl: boolean }) {
  const meshRef = useRef<Mesh>(null);
  const rotationSpeed = 0.05;

  useFrame((state, delta) => {
    if (!meshRef.current) return;

    if (!reduced) {
      meshRef.current.rotation.y += rotationSpeed * delta;
      meshRef.current.rotation.x += rotationSpeed * 0.3 * delta;
    }

    // Mouse parallax on the camera, damped — R3F tracks the pointer for
    // us via state.pointer, normalized to [-1, 1] already.
    if (!reduced) {
      const { pointer, camera } = state;
      camera.position.x += (pointer.x * 0.6 - camera.position.x) * 0.04;
      camera.position.y += (pointer.y * -0.4 - camera.position.y) * 0.04;
      camera.lookAt(0, 0, 0);
    }
  });

  // The hero's CSS grid mirrors the portrait/text columns under dir="rtl",
  // but this mesh's position is a fixed Three.js coordinate that knows
  // nothing about document direction — without negating x here it stays
  // stuck on the physical right and lands on top of the (now-mirrored)
  // heading text instead of sitting behind the portrait.
  const sign = rtl ? -1 : 1;

  return (
    <Float speed={reduced ? 0 : 1.2} rotationIntensity={reduced ? 0 : 0.25} floatIntensity={reduced ? 0 : 0.6}>
      <mesh
        ref={meshRef}
        position={mobile ? [0, -0.4, -1] : [2.6 * sign, -0.3, -1.5]}
        scale={mobile ? 1.1 : 1.5}
      >
        <icosahedronGeometry args={[1, 6]} />
        <MeshTransmissionMaterial
          color={PALETTE[0]}
          thickness={1.2}
          roughness={0.08}
          transmission={1}
          ior={1.3}
          chromaticAberration={0.03}
          anisotropy={0.25}
          distortion={0.1}
          distortionScale={0.3}
          temporalDistortion={reduced ? 0 : 0.06}
          clearcoat={1}
          envMapIntensity={0.9}
        />
      </mesh>
    </Float>
  );
}

/** Abstract colored-panel lighting rig — no photographic HDRI. */
function BrandEnvironment() {
  return (
    <Environment resolution={128} background={false}>
      <Lightformer form="rect" color={PALETTE[0]} intensity={4} position={[-4, 3, 2]} scale={[4, 3, 1]} />
      <Lightformer form="rect" color={PALETTE[1]} intensity={3} position={[4, -2, 2]} scale={[3, 4, 1]} />
      <Lightformer form="ring" color={PALETTE[2]} intensity={2.5} position={[0, 0, -5]} scale={6} />
    </Environment>
  );
}

function Lights() {
  return (
    <>
      <ambientLight intensity={0.2} />
      <pointLight position={[-6, 4, 6]} intensity={40} color={PALETTE[0]} distance={30} />
      <pointLight position={[6, -3, 4]} intensity={30} color={PALETTE[1]} distance={30} />
    </>
  );
}

function Scene({ reduced, mobile, rtl }: { reduced: boolean; mobile: boolean; rtl: boolean }) {
  const sign = rtl ? -1 : 1;
  return (
    <>
      <Lights />
      <BrandEnvironment />
      <GlassCore reduced={reduced} mobile={mobile} rtl={rtl} />
      {!mobile && !reduced && (
        <Sparkles count={30} scale={6} size={1.2} speed={0.2} color={PALETTE[2]} opacity={0.4} position={[2.6 * sign, -0.3, -1.5]} />
      )}
    </>
  );
}

const CANVAS_GL = {
  antialias: true,
  alpha: true,
  powerPreference: "high-performance" as const,
};

export default function HeroScene() {
  const [reduced, setReduced] = useState(false);
  const [mobile, setMobile] = useState(false);
  const [rtl, setRtl] = useState(false);
  const [dpr, setDpr] = useState(1.5);

  useEffect(() => {
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const widthQuery = window.matchMedia("(max-width: 767px)");
    const updateMotion = () => setReduced(motionQuery.matches);
    const updateWidth = () => setMobile(widthQuery.matches);
    updateMotion();
    updateWidth();
    setRtl(document.documentElement.dir === "rtl");
    motionQuery.addEventListener("change", updateMotion);
    widthQuery.addEventListener("change", updateWidth);
    return () => {
      motionQuery.removeEventListener("change", updateMotion);
      widthQuery.removeEventListener("change", updateWidth);
    };
  }, []);

  const dprRange = useMemo<[number, number]>(() => (mobile ? [1, 1.5] : [1, 2]), [mobile]);

  return (
    <Canvas
      dpr={dpr}
      gl={CANVAS_GL}
      camera={{ position: [0, 0, 7], fov: 42 }}
      style={{ width: "100%", height: "100%" }}
    >
      <PerformanceMonitor
        onIncline={() => setDpr(Math.min(dprRange[1], dpr + 0.5))}
        onDecline={() => setDpr(Math.max(dprRange[0], dpr - 0.5))}
      >
        <AdaptiveDpr pixelated />
        <Scene reduced={reduced} mobile={mobile} rtl={rtl} />
      </PerformanceMonitor>
    </Canvas>
  );
}
