
import * as THREE from "three"
import { CylinderCollider,  RigidBody } from "@react-three/rapier"
import { useSetRecoilState } from "recoil"
import { Ballfollowing, Ballrigid } from "../store/BallController"


function Ground() {
        const setFollow = useSetRecoilState(Ballfollowing)
        const setRigid = useSetRecoilState(Ballrigid)

    return (
        <>  
            {/* Ground */}
            <RigidBody type='fixed' restitution={[0]} colliders={"hull"}>
                <mesh receiveShadow position={[0, -2, 0]} scale={12} rotation-x={Math.PI / 2} >

                    <circleGeometry />
                    <meshStandardMaterial side={THREE.DoubleSide} color="brown" />
                </mesh>
            </RigidBody>

            {/* Boundary */}

            <RigidBody type="fixed" colliders={false} >
                <CylinderCollider
                    args={[12, 12, 12]}
                    sensor
                    onIntersectionExit={() => {
                        console.log("Four") 
                        setRigid(false)
                            }}
                      
                />
            </RigidBody>
        </>
    )
}

export default Ground
