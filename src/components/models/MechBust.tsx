/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import React, { useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { GLTFResult } from '../../@types/typing'

export function MechBust(props: any) {
  const group = useRef()
  const { nodes, materials, animations }: GLTFResult = useGLTF(
    '/models/mech_bust.glb',
  )
  const { actions, names } = useAnimations(animations, group)

  useEffect(() => {
    const firstAnimationName = names?.[0]
    const firstAnimationAction = actions?.[firstAnimationName]

    if (firstAnimationAction) {
      firstAnimationAction.reset().fadeIn(0.5).play()
      return () => {
        firstAnimationAction.fadeOut(0.5)
      }
    }
  }, [actions, names])

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group
            name="8dd78eb85443406aa78f29212d0a524bfbx"
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.01}
          >
            <group name="Object_2">
              <group name="RootNode">
                <group name="Object_4">
                  <group name="sketchfab_plane" position={[0, 3.251, 0]}>
                    <mesh
                      name="sketchfab_plane_sketchfab_particles_mat_0"
                      geometry={
                        nodes.sketchfab_plane_sketchfab_particles_mat_0.geometry
                      }
                      material={materials.sketchfab_particles_mat}
                    />
                  </group>
                  <primitive object={nodes._rootJoint} />
                  <group name="Object_6" position={[0, -1.688, 0]} />
                  <group name="mech" position={[0, -1.688, 0]} />
                  <group name="control_root">
                    <group
                      name="control_base"
                      position={[0, 1.325, -0.795]}
                      rotation={[0.005, 0.009, -0.007]}
                    >
                      <group
                        name="control_neck_1"
                        position={[0, 0.824, 0.004]}
                        rotation={[0.001, 0.001, 0.001]}
                      >
                        <group
                          name="control_neck_2_1"
                          position={[0, 0.619, 0.058]}
                          rotation={[-0.016, 0, 0.021]}
                        >
                          <group
                            name="control_neck_2"
                            position={[0, 0.583, 0.134]}
                            rotation={[-0.004, 0, 0.005]}
                          >
                            <group
                              name="control_head"
                              position={[0, 0.715, 0.263]}
                              rotation={[0, 0.001, 0.013]}
                            >
                              <group
                                name="control_eye_1_L"
                                position={[0.649, 0.179, 1.345]}
                                rotation={[0.083, 0.002, 0.002]}
                              />
                              <group
                                name="control_eye_2_L"
                                position={[0.847, -0.031, 0.841]}
                                rotation={[0.083, 0.002, 0.002]}
                              />
                              <group
                                name="control_eye_3_L"
                                position={[0.633, -0.362, 1.281]}
                                rotation={[0.083, 0.002, 0.002]}
                              />
                              <group
                                name="control_eye_1_R"
                                position={[-0.649, 0.179, 1.345]}
                                rotation={[0.083, 0.002, 0.002]}
                              />
                              <group
                                name="control_eye_2_R"
                                position={[-0.847, -0.031, 0.841]}
                                rotation={[0.083, 0.002, 0.002]}
                              />
                              <group
                                name="control_eye_3_R"
                                position={[-0.633, -0.362, 1.281]}
                                rotation={[0.083, 0.002, 0.002]}
                              />
                              <group
                                name="control_jaw"
                                position={[0.918, -1.012, 0.601]}
                              >
                                <group
                                  name="control_bottom_teeth"
                                  position={[-0.918, -0.467, 0.264]}
                                />
                              </group>
                              <group
                                name="control_top_teeth"
                                position={[0, -0.704, 1.164]}
                              />
                              <group
                                name="control_halo_joint"
                                position={[1.467, 0.396, 0.426]}
                                rotation={[-0.006, 0, 0]}
                              >
                                <group
                                  name="control_halo"
                                  position={[-1.467, 0.01, -0.833]}
                                  rotation={[0.029, 0, 0]}
                                />
                              </group>
                              <group
                                name="control_radiator_joint_L"
                                position={[1.242, -0.267, 0.112]}
                                rotation={[-0.01, 0, 0]}
                              >
                                <group
                                  name="control_radiator_L"
                                  position={[-0.199, 0, -0.516]}
                                  rotation={[0.001, 0, 0]}
                                >
                                  <group
                                    name="control_radiator_shield_L"
                                    position={[0.315, -0.079, -0.111]}
                                    rotation={[-0.075, 0, 0]}
                                  />
                                </group>
                              </group>
                              <group
                                name="control_radiator_joint_R"
                                position={[-1.242, -0.267, 0.112]}
                                rotation={[-0.01, 0, 0]}
                              >
                                <group
                                  name="control_radiator_R"
                                  position={[0.199, 0, -0.516]}
                                  rotation={[0.001, 0, 0]}
                                >
                                  <group
                                    name="control_radiator_shield_R"
                                    position={[-0.315, -0.079, -0.111]}
                                    rotation={[-0.075, 0, 0]}
                                  />
                                </group>
                              </group>
                            </group>
                            <group
                              name="control_neck_cover_3"
                              position={[0, 0.243, -0.735]}
                              rotation={[0.154, 0, 0]}
                            />
                          </group>
                          <group
                            name="control_neck_cover_2"
                            position={[0, 0.098, -0.768]}
                            rotation={[0.154, 0, 0]}
                          />
                        </group>
                      </group>
                      <group
                        name="control_shoulder_bottom_L"
                        position={[1.942, -0.015, 0.592]}
                        rotation={[-0.001, 0, 0]}
                      />
                      <group
                        name="control_shoulder_top_L"
                        position={[2.094, 0.547, 0.038]}
                        rotation={[-0.001, 0.001, 0]}
                      />
                      <group
                        name="control_shoulder_top_R"
                        position={[-2.094, 0.547, 0.038]}
                        rotation={[0.004, 0.003, 0.007]}
                      />
                      <group
                        name="control_shoulder_bottom_R"
                        position={[-1.921, -0.033, 0.567]}
                        rotation={[0.001, 0.002, 0.006]}
                      />
                      <group
                        name="control_neck_cover_1"
                        position={[0, 0.876, -0.813]}
                        rotation={[0.154, 0, 0]}
                      />
                    </group>
                  </group>
                  <skinnedMesh
                    name="Object_7"
                    geometry={nodes.Object_7.geometry}
                    material={materials.mech_body_mat}
                    skeleton={nodes.Object_7.skeleton}
                  />
                  <skinnedMesh
                    name="Object_8"
                    geometry={nodes.Object_8.geometry}
                    material={materials.mech_body_mat}
                    skeleton={nodes.Object_8.skeleton}
                  />
                  <skinnedMesh
                    name="Object_9"
                    geometry={nodes.Object_9.geometry}
                    material={materials.mech_head_mat}
                    skeleton={nodes.Object_9.skeleton}
                  />
                  <skinnedMesh
                    name="Object_10"
                    geometry={nodes.Object_10.geometry}
                    material={materials.mech_head_mat}
                    skeleton={nodes.Object_10.skeleton}
                  />
                  <skinnedMesh
                    name="Object_11"
                    geometry={nodes.Object_11.geometry}
                    material={materials.mech_glow_mat}
                    skeleton={nodes.Object_11.skeleton}
                  />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/mech_bust.glb')
