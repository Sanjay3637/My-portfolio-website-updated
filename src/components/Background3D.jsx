import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Stars } from '@react-three/drei';

function ParticleField(props) {
    const ref = useRef();

    // Generate random positions for particles
    const [positions] = useMemo(() => {
        const count = 2000;
        const positions = new Float32Array(count * 3);
        for (let i = 0; i < count; i++) {
            // eslint-disable-next-line react-hooks/purity
            positions[i * 3] = (Math.random() - 0.5) * 10; // x
            positions[i * 3 + 1] = (Math.random() - 0.5) * 10; // y
            positions[i * 3 + 2] = (Math.random() - 0.5) * 10; // z
        }
        return [positions];
    }, []);

    useFrame((state, delta) => {
        if (ref.current) {
            ref.current.rotation.x -= delta / 10;
            ref.current.rotation.y -= delta / 15;
        }
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={positions} stride={3} frustumCulled={false} {...props}>
                <PointMaterial
                    transparent
                    color="#3b82f6" // Primary-500 blueish
                    size={0.02}
                    sizeAttenuation={true}
                    depthWrite={false}
                    opacity={0.6}
                />
            </Points>
        </group>
    );
}

const Background3D = () => {
    return (
        <div className="fixed inset-0 -z-10 bg-dark-900 pointer-events-none">
            {/* Gradient Overlay for depth */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark-900/50 to-dark-900 z-10" />

            <Canvas camera={{ position: [0, 0, 1] }}>
                <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
                <ParticleField />
            </Canvas>
        </div>
    );
};

export default Background3D;
