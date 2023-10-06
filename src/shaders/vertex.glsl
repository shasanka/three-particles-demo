// varying vec3 v_position;
// uniform float u_time;
// uniform vec2 u_mouse;

// // Mapping ranges
// float minInput = -1.0;   // Min input range value
// float maxInput = 1.0;    // Max input range value
// float minOutput = -10.0; // Min output range value
// float maxOutput = 10.0;  // Max output range value

// float map(float value, float minInput, float maxInput, float minOutput, float maxOutput) {
//     return minOutput + (value - minInput) * (maxOutput - minOutput) / (maxInput - minInput);
// }

// void main() {
//     v_position = position;
//     mat4 projection = projectionMatrix * modelViewMatrix;
//       // Clamp u_mouse.x and u_mouse.y to the range [-10, 10]
//     // Map u_mouse.x and u_mouse.y to the new range
//     float mappedMouseX = map(u_mouse.x, minInput, maxInput, minOutput, maxOutput);
//     float mappedMouseY = map(u_mouse.y, minInput, maxInput, minOutput, maxOutput);
//     // vec1 mouse = normalize(u_mouse);
//     // mat4 projection = projectionMatrix * modelViewMatrix;
//     // gl_Position = projection * vec4(position.x, sin(2.0 * position.x / 1.1 + u_time), position.z, 1.0);
//     // gl_Position = projection * vec4(position.x, position.x, position.z, 1.0);
//     gl_Position = projection * vec4(mappedMouseX, mappedMouseY, position.z, 1.0);
// }

varying vec3 v_position;
uniform float u_time;
uniform vec2 u_mouse;

// Mapping ranges
float minOutput = -2.0; // Min output range value
float maxOutput = 2.0;  // Max output range value

void main() {
    v_position = position;
    mat4 projection = projectionMatrix * modelViewMatrix;

    vec3 offset = vec3(mix(minOutput, maxOutput, (u_mouse.x + 1.0) * 0.5), mix(minOutput, maxOutput, (u_mouse.y + 1.0) * 0.5), 0.0);

    gl_Position = projection * vec4(position.xyz + offset, 1.0);
}
