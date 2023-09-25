import React from 'react';

function SinglePage() {
  const handleClick = (sectionId: string) => () => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <nav className="flex flex-col gap-2 m-auto fixed w-1/6">
          <img src="src/assets/metal-geometric.png" className="self-center rounded-full w-1/2 h-1/2 m-2"></img>
          <button onClick={handleClick('section1')}>
            Section 1
          </button>
          <button onClick={handleClick('section2')}>
            Section 2
          </button>
          <button onClick={handleClick('section3')}>
            Section 3
          </button>
      </nav>
      <div className="flex flex-col box-border text-center m-auto">
        <div id="section1" className="h-screen">
          <h1>Section 1</h1>
          <p>Content for Section 1</p>
        </div>
        <div id="section2" className="h-screen">
          <h1>Section 2</h1>
          <p>Content for Section 2</p>
        </div>
        <div id="section3" className="h-screen">
          <h1>Section 3</h1>
          <p>Content for Section 3</p>
        </div>
      </div>
    </div>
  );
}

export default SinglePage;





