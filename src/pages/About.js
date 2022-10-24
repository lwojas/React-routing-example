const AboutPage = () => {
  return (
    <div className="about-block">
      <div>
        <h1>What is this?</h1>
        <div className="flex-row">
          <div>
            <p>An interactive Pokemon poster / pokedex.</p>
            <p>
              If you want to get technical it's a react app showcasing my use of
              react hooks, routing and state management.
            </p>
          </div>
          <p>
            This app uses data provided by the kind folks at{" "}
            <a href="https://pokeapi.co/">pokeapi.com</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
