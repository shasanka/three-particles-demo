uniform float u_time;

uniform float size;
uniform float u_Progress;

varying vec2 v_TexCoords;

attribute vec3 initPosition;

void main() {

	#include <begin_vertex>
    transformed = initPosition + ((position - initPosition) * u_Progress);

	#include <project_vertex>

    gl_PointSize = size;
    v_TexCoords = position.xy;
}
// void main() {
// 	// #include <begin_vertex>
// 	// #include <project_vertex>
//     gl_PointSize = size;

//     mat4 projection = projectionMatrix * modelViewMatrix;

//     float angle = u_time * 0.1; // You can adjust the scaling factor as needed

//     // Define the rotation matrix around the X-axis
//     // mat4 rotationMatrix = mat4(1.0, 0.0, 0.0, 0.0, 0.0, cos(angle), -sin(angle), 0.0, 0.0, sin(angle), cos(angle), 0.0, 0.0, 0.0, 0.0, 1.0);

//     // Define the rotation matrix around the Y-axis
//     mat4 rotationMatrix = mat4(cos(angle), 0.0, sin(angle), 0.0, 0.0, 1.0, 0.0, 0.0, -sin(angle), 0.0, cos(angle), 0.0, 0.0, 0.0, 0.0, 1.0);
//     // Apply the rotation to the position
//     vec4 rotatedPosition = rotationMatrix * vec4(position.x, position.y, position.z, 1.0);

//     // gl_Position = projection * vec4(position.x, position.y, position.z, 1.0);
//     gl_Position = projection * rotatedPosition;
// }