import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { gsap } from 'gsap';

interface ThreeSceneProps {
  className?: string;
  particleCount?: number;
  interactive?: boolean;
}

export const ThreeScene: React.FC<ThreeSceneProps> = ({ 
  className = '', 
  particleCount = 200,
  interactive = true 
}) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<{
    scene: THREE.Scene;
    camera: THREE.PerspectiveCamera;
    renderer: THREE.WebGLRenderer;
    particles: THREE.Points;
    mouse: THREE.Vector2;
    originalPositions: Float32Array;
    animationId: number;
  } | null>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true, 
      antialias: true,
      powerPreference: "high-performance"
    });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mountRef.current.appendChild(renderer.domElement);

    // Particle system
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const sizes = new Float32Array(particleCount);

    // Create particles in a sphere distribution
    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      
      // Spherical distribution
      const radius = Math.random() * 50 + 10;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      
      positions[i3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i3 + 2] = radius * Math.cos(phi);

      // Gaming color palette
      const colorChoice = Math.random();
      if (colorChoice < 0.3) {
        // Cyan
        colors[i3] = 0.2;
        colors[i3 + 1] = 0.8;
        colors[i3 + 2] = 1.0;
      } else if (colorChoice < 0.6) {
        // Purple
        colors[i3] = 0.6;
        colors[i3 + 1] = 0.2;
        colors[i3 + 2] = 1.0;
      } else {
        // Pink
        colors[i3] = 1.0;
        colors[i3 + 1] = 0.2;
        colors[i3 + 2] = 0.8;
      }

      sizes[i] = Math.random() * 3 + 1;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

    // Custom shader material for glowing particles
    const material = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        mouse: { value: new THREE.Vector2() }
      },
      vertexShader: `
        attribute float size;
        attribute vec3 color;
        varying vec3 vColor;
        varying float vSize;
        uniform float time;
        uniform vec2 mouse;
        
        void main() {
          vColor = color;
          vSize = size;
          
          vec3 pos = position;
          
          // Floating animation
          pos.y += sin(time * 0.001 + position.x * 0.01) * 2.0;
          pos.x += cos(time * 0.0015 + position.z * 0.01) * 1.5;
          
          // Mouse interaction
          vec2 mouseInfluence = mouse * 0.1;
          pos.xy += mouseInfluence * (1.0 / (length(pos.xy - mouseInfluence) + 1.0));
          
          vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
          gl_PointSize = size * (300.0 / -mvPosition.z);
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
        varying vec3 vColor;
        varying float vSize;
        
        void main() {
          vec2 center = gl_PointCoord - 0.5;
          float dist = length(center);
          
          if (dist > 0.5) discard;
          
          float alpha = 1.0 - (dist * 2.0);
          alpha = pow(alpha, 2.0);
          
          // Glow effect
          vec3 glow = vColor * (1.0 + alpha * 2.0);
          
          gl_FragColor = vec4(glow, alpha * 0.8);
        }
      `,
      transparent: true,
      blending: THREE.AdditiveBlending,
      vertexColors: true
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    camera.position.z = 30;

    // Mouse tracking
    const mouse = new THREE.Vector2();
    const handleMouseMove = (event: MouseEvent) => {
      if (!interactive) return;
      
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
      
      material.uniforms.mouse.value.copy(mouse);
    };

    // Store original positions for reset
    const originalPositions = new Float32Array(positions);

    // Animation loop
    const animate = () => {
      const animationId = requestAnimationFrame(animate);
      
      material.uniforms.time.value = Date.now();
      
      // Gentle rotation
      particles.rotation.y += 0.001;
      particles.rotation.x += 0.0005;
      
      renderer.render(scene, camera);
      
      if (sceneRef.current) {
        sceneRef.current.animationId = animationId;
      }
    };

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    // Event listeners
    if (interactive) {
      window.addEventListener('mousemove', handleMouseMove);
    }
    window.addEventListener('resize', handleResize);

    // Store scene reference
    sceneRef.current = {
      scene,
      camera,
      renderer,
      particles,
      mouse,
      originalPositions,
      animationId: 0
    };

    animate();

    // Cleanup
    return () => {
      if (sceneRef.current) {
        cancelAnimationFrame(sceneRef.current.animationId);
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('resize', handleResize);
        
        if (mountRef.current && renderer.domElement) {
          mountRef.current.removeChild(renderer.domElement);
        }
        
        geometry.dispose();
        material.dispose();
        renderer.dispose();
      }
    };
  }, [particleCount, interactive]);

  return <div ref={mountRef} className={`fixed inset-0 ${className}`} />;
};