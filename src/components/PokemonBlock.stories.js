import PokemonBlock from "./PokemonBlock";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Pokekmon poster card",
  component: PokemonBlock,
};

const Template = (args) => <PokemonBlock {...args} />;

export const FirstStory = {
  args: {
    key: "01",
    name: "Pikachu",
    url: "",
    //👇 The args you need here will depend on your component
  },
};
