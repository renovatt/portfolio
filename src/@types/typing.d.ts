/* eslint-disable @typescript-eslint/no-unused-vars */
type GLTFResult = GLTF & {
  nodes: { robot: THREE.Mesh; rocket: THREE.Mesh }
  materials: {
    metal: THREE.MeshStandardMaterial
    wood: THREE.MeshStandardMaterial
  }
}

export default function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF<GLTFResult>('/models/mech_bust.glb')
}
