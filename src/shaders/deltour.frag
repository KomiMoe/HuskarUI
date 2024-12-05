#version 450

layout(location = 0) in vec2 qt_TexCoord0;
layout(location = 0) out vec4 fragColor;

layout(std140, binding = 0) uniform buf {
    mat4 qt_Matrix;
    float qt_Opacity;
    float xMin;
    float xMax;
    float yMin;
    float yMax;
};
layout(binding = 1) uniform sampler2D source;

void main() {
    vec4 tex = texture(source, qt_TexCoord0);
    if (qt_TexCoord0.x > xMin && qt_TexCoord0.x < xMax
        && qt_TexCoord0.y > yMin && qt_TexCoord0.y < yMax)
        fragColor = vec4(0);
    else
        fragColor = tex * qt_Opacity;
}
