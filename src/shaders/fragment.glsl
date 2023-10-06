uniform float u_time;
varying vec3 v_position;
uniform vec2 u_mouse;
float minOutput = -2.0; // Min output range value
float maxOutput = 2.0;  // Max output range value

void main() {
    vec3 offset = vec3(mix(minOutput, maxOutput, (u_mouse.x + 1.0) * 0.5), mix(minOutput, maxOutput, (u_mouse.y + 1.0) * 0.5), 0.0);
    // gl_FragColor = vec4(sin(u_time + gl_FragCoord.z), sin(u_time + v_position.y), u_time, 1.0);
    gl_FragColor = vec4(offset.xyz, 1.0);
}