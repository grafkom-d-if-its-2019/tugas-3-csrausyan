(function() {

  glUtils.SL.init({ callback: function() { main(); }});
  function main() {
    var canvas = document.getElementById("glcanvas");
    var gl = glUtils.checkWebGL(canvas);
    var vertexShader = glUtils.getShader(gl, gl.VERTEX_SHADER, glUtils.SL.Shaders.v1.vertex);
    var fragmentShader = glUtils.getShader(gl, gl.FRAGMENT_SHADER, glUtils.SL.Shaders.v1.fragment);
    var program = glUtils.createProgram(gl, vertexShader, fragmentShader);
    gl.useProgram(program);
    
    

    // Mendefinisikan verteks-verteks
    
    var vertices = [
      // x, y       r, g, b
      //0.0, 0.5,     1.0, 1.0, 0.0,  // kuning
      //0.5, -0.5,    0.0, 1.0, 1.0,  // cyan
      //-0.5, -0.5,   1.0, 0.0, 1.0   // magenta

      //asal  di 0.0
    // -0.2, +0.6,           0.88, 0.09, 0.57,
    // +0.3, +0.9,           0.88, 0.09, 0.57,
    // +0.25, +0.65,         0.88, 0.09, 0.57,
    // +0.15, +0.58,         0.88, 0.09, 0.57,
    // +0.02, -0.5,          0.88, 0.09, 0.57,
    // -0.02, -0.59,         0.88, 0.09, 0.57,
    // -0.43, -0.9,          0.88, 0.09, 0.57,
    // -0.3, -0.05,          0.88, 0.09, 0.57,
    // -0.05, +0.1,          0.88, 0.09, 0.57,
    // -0.075, -0.07,        0.88, 0.09, 0.57,
    // -0.03, -0.05,         0.88, 0.09, 0.57,
    // -0.016, -0.01,        0.88, 0.09, 0.57,
    // +0.05, +0.53,         0.88, 0.09, 0.57,
    // -0.25, +0.35,         0.88, 0.09, 0.57,


      //digeser sejauh  -0.5
    -0.7, +0.6,           0.88, 0.09, 0.57,
    -0.2, +0.9,           0.88, 0.09, 0.57,
    -0.25, +0.65,         0.88, 0.09, 0.57,
    -0.35, +0.58,         0.88, 0.09, 0.57,
    -0.48, -0.5,          0.88, 0.09, 0.57,
    -0.52, -0.59,         0.88, 0.09, 0.57,
    -0.93, -0.9,          0.88, 0.09, 0.57,
    -0.8, -0.05,          0.88, 0.09, 0.57,
    -0.55, +0.1,          0.88, 0.09, 0.57,
    -0.575, -0.07,        0.88, 0.09, 0.57,
    -0.53, -0.05,         0.88, 0.09, 0.57,
    -0.516, -0.01,        0.88, 0.09, 0.57,
    -0.45, +0.53,         0.88, 0.09, 0.57,
    -0.75, +0.35,         0.88, 0.09, 0.57,


    //  triangle_strip
    
    // -0.3, 0.7,            0.88, 0.09, 0.57,
    // -0.3, 0.5,            0.88, 0.09, 0.57,
    // 0.0, +0.7,            0.88, 0.09, 0.57,
    // -0.1, 0.5,            0.88, 0.09, 0.57,
    // 0.0,  0.0,            0.88, 0.09, 0.57,
    // -0.1, -0.3,           0.88, 0.09, 0.57,
    // 0.0,  -0.4,           0.88, 0.09, 0.57,
    // -0.2,  -0.5,          0.88, 0.09, 0.57,
    // -0.2,  -0.75,         0.88, 0.09, 0.57,
    // -0.35,  -0.4,         0.88, 0.09, 0.57,
    // -0.3,  -0.3,          0.88, 0.09, 0.57

      // digeser sejaauh 0.5

    +0.2, 0.7,            0.88, 0.09, 0.57,
    +0.2, 0.5,            0.88, 0.09, 0.57,
    0.5, +0.7,            0.88, 0.09, 0.57,
    +0.4, 0.5,            0.88, 0.09, 0.57,
    0.5,  0.0,            0.88, 0.09, 0.57,
    +0.4, -0.3,           0.88, 0.09, 0.57,
    0.5,  -0.4,           0.88, 0.09, 0.57,
    +0.3,  -0.5,          0.88, 0.09, 0.57,
    +0.3,  -0.75,         0.88, 0.09, 0.57,
    +0.15,  -0.4,         0.88, 0.09, 0.57,
    +0.2,  -0.3,          0.88, 0.09, 0.57



      //x   //y
      ];

    // Membuat vertex buffer object (CPU Memory <==> GPU Memory)
    var vertexBufferObject = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vertexBufferObject);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);

    // Membuat sambungan untuk attribute
    var vPosition = gl.getAttribLocation(program, 'vPosition');
    var vColor = gl.getAttribLocation(program, 'vColor');
    gl.vertexAttribPointer(
      vPosition,    // variabel yang memegang posisi attribute di shader
      2,            // jumlah elemen per atribut
      gl.FLOAT,     // tipe data atribut
      gl.FALSE, 
      5 * Float32Array.BYTES_PER_ELEMENT, // ukuran byte tiap verteks (overall) 
      0                                   // offset dari posisi elemen di array
    );
    gl.vertexAttribPointer(vColor, 3, gl.FLOAT, gl.FALSE,
      5 * Float32Array.BYTES_PER_ELEMENT, 2 * Float32Array.BYTES_PER_ELEMENT);
    gl.enableVertexAttribArray(vPosition);
    gl.enableVertexAttribArray(vColor);

    //membuat sambungan untuk uniform
    var thetaUniformLocation = gl.getUniformLocation(program, 'theta');
    var theta = 0; 
    var scaleXUniformLocation = gl.getUniformLocation(program, 'scaleX');
    var scaleX = 1.0; 
    var scaleYUniformLocation = gl.getUniformLocation(program, 'scaleY');
  
    var translationLoc = gl.getUniformLocation(program, 'translasi');   
    var flag=1.0;

    function render()
    {
      
      if(scaleX >= 1.0) flag = -1.0;
      else if(scaleX <= -1.0) flag = 1.0;
      scaleX += 0.0196 * flag;
      theta += 0.0196;
      
      // biar ga gerak
      // scaleX += 0 * melebar;
      // theta += 0;
      
      gl.uniform1f(translationLoc,0.0);
      gl.uniform1f(thetaUniformLocation,0.0);
      gl.uniform1f(scaleXUniformLocation,scaleX);
      gl.uniform1f(scaleYUniformLocation,1.0);
      
      gl.clearColor(0.0, 0.0, 0.0, 1.0);
      gl.clear(gl.COLOR_BUFFER_BIT);
      //gl.drawArrays(gl.TRIANGLES, 16, 15);
      gl.uniform1f(translationLoc,-0.5);
      gl.drawArrays(gl.TRIANGLE_STRIP, 14, 11);
      
      gl.uniform1f(thetaUniformLocation,theta);
      gl.uniform1f(scaleXUniformLocation,1.0);
      gl.uniform1f(scaleYUniformLocation,1.0);
      gl.uniform1f(translationLoc,0.5);
      gl.drawArrays(gl.LINE_LOOP, 0, 14);

      requestAnimationFrame(render);
    }
    render();
  }
})();