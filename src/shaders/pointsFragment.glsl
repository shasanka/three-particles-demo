uniform sampler2D u_texture;
uniform float u_noColumns;
uniform float u_noRows;
varying vec2 v_TexCoords;

float circle(vec2 uv, float border) {
    float radius = 0.5;
    float dist = radius - distance(uv, vec2(0.5));
    return smoothstep(0.0, border, dist);
}
void main() {
    vec2 uv = gl_PointCoord;

    uv.y *= -1.0;
    uv /= vec2(u_noRows, u_noColumns);

    float texOffsetU = v_TexCoords.x / u_noColumns;
    float texOffsetV = v_TexCoords.y / u_noRows;
    uv += vec2(texOffsetU, texOffsetV);
    uv += vec2(0.5);

    vec4 texture = texture2D(u_texture, uv);
    gl_FragColor = texture;
    if(gl_FragColor.r < 0.1) {
        discard;
    }
    // gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
    gl_FragColor.a *= circle(gl_PointCoord, 0.2);

    // gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
}