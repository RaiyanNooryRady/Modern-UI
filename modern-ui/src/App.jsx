import ButtonGradient from "./assets/svg/ButtonGradient";
import Button from "./components/Button";
const App = () => {
  return (
    <>
      <h1 className="text-light text-3xl">Hello world</h1>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Button className="mt-10" href="#login">
          Submit
        </Button>
        ok
      </div>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt fugit
      voluptatum nam aliquam quam consequuntur ipsum assumenda saepe quasi
      cupiditate omnis, distinctio neque in sapiente! Itaque, eum veniam?
      Laboriosam, mollitia?
      <ButtonGradient />
    </>
  );
};

export default App;
