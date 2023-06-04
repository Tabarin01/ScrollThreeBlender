Follow this steps in order

npm create vite@latest  //choose a name for the directory, then select REACT and JAVASCRIPT

change directory with this:

cd vite-project
npm install 
npm run dev


it will display the localhost  CTRL left click
Local:   http://localhost:5173/

open new terminal (remember to change directory to your project)
then add threeJS:

npm add three @react-three/drei @react-three/fiber

Clean some of the new file auto-generated
Change title in index.html
delete in App.css
delete in index.css
clean in App.jsx the return

! Watch out if you don't have the automatic import add it

To create a model with react
npx gltfjsx public/models/WawaOffice.glb

To have control of animation install gsap library

npm add gsap

Install tailwindCSS library with Vite