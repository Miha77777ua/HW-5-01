import "./App.css";

function App() {
  const ownName = "Міша";
  const src = "https://www.svgviewer.dev/static-svgs/480770/react.svg";
  const alt = "Реакт";
  const favWebSite = {
    title: "GitHub",
    url: "https://github.com/",
  };

  let colors = [["Червоний", "red"], ["Синій", "blue"], ["Зелений", "green"]];
  colors = colors.map((el, id) => <li key={id} style={{ color: el[1] }}>{el[0]}</li>)

  const a = 5;
  const b = 10;

  return (
    <>
      <div className="content">
        <h1 className="title">{ownName}</h1>
        <p class="welcome">Ласкаво просимо до нашого сайту!</p>
        <img className="logo" src={src} alt={alt} width="150" height="150" />
      </div>
      <div className="other">
        <h2 className="other-title">Інші таски</h2>
        <a href={favWebSite.url} target="_blank">{favWebSite.title}</a>
        <p className="sum">{a + b}</p>
        <ul className="colors">
          {colors}
        </ul>
      </div>
    </>
  )
}

export default App
