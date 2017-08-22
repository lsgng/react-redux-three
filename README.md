## three.js - React - Redux

Simple toy app built with [three.js](https://github.com/mrdoob/three.js), [React](https://github.com/facebook/react) and [Redux](https://github.com/reactjs/redux).

This ist just a little experiment to figure out how to use Redux for mananging state and handling events in a three.js-based real-time 3D application.

All three.js objects (scene, camera, renderer) live inside the ThreeApp container. This is the only place where mutations and side effects are supposed to happen. The scene gets updated every frame by `mapStateToScene()`. Similar functions could be used for applying state to the camera or selected parts of the three.js scene.