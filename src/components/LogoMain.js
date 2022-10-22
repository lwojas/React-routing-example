import logo from "../assets/pokemon_logo.png";

const LogoMain = () => {
  return (
    <>
      <img className="logo-main" src={logo} alt="logo" />
      <h1 className="subtitle">Gotta catch 'em all!</h1>
    </>
  );
};

export default LogoMain;
