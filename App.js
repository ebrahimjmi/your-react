{/* <div id="parent">
  <div id="child">
    <h1>I am a child</h1>
    <h2>zasddf</h2>
  </div>
</div> */}


const heading = React.createElement('div', {id: 'parent'}, React.createElement('div', {id: 'child'}, [React.createElement('h1', {}, 'I am h1 tag'), React.createElement('h2', {}, 'I am h1 tag')]));


console.log(heading);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);