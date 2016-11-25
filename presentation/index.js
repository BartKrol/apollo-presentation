// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Import custom component
import Interactive from "../assets/interactive";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  superhero: require("../assets/superhero.png"),
  microservices: require("../assets/microservices.svg"),
  apollo: require("../assets/apollo.png")
};

preloader(images);

const theme = createTheme({
  primary: "#673AB7",
  secondary: "white"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["zoom", "slide"]} transitionDuration={500}>
          <Slide transition={["zoom"]} bgColor="primary">
            <Image src={ images.apollo } />
            <Heading size={1} fit lineHeight={1}>
              GraphQL with Apollo
            </Heading>
            <Heading size={2} style={{ marginTop: 40 }} fit caps>
              jak łatwo dodać GraphQL do projektu
            </Heading>
          </Slide>

          <Slide transition={["zoom", "slide"]} bgColor="primary">
            <Layout>
              <Image width="120px" height="120px" src={ images.superhero }/>
            </Layout>
            <Layout>
              <Heading size={4} textSize="90" textColor="secondary">
                Bartosz Król
              </Heading>
            </Layout>
            <Layout>
              <Heading size={4} textSize="30" textColor="secondary">
                Full Stack Engineer at X-Team
              </Heading>
            </Layout>
            <Layout>
              <Heading size={4} textSize="30" textColor="secondary">
                Digital Nomad
              </Heading>
            </Layout>
            <Layout>
              <Image src={images.xTeam}/>
            </Layout>
          </Slide>

          <Slide transition={["zoom", "slide"]} bgColor="primary">
            <Layout>
              <Heading size={1} textColor="secondary">
                { 'Dlaczego GraphQL?' }
              </Heading>
            </Layout>
          </Slide>

          <Slide transition={["zoom", "slide"]} bgColor="primary">
            <Layout>
              <Heading size={2} textSize="30" textColor="secondary" fit>
                Microserwisy!
              </Heading>
            </Layout>
            <Layout style={ {marginTop: 20} } >
              <Image width="60%" height="60%" src={ images.microservices }/>
            </Layout>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
