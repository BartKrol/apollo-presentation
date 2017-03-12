import React from "react";
import {
  Appear,
  CodePane,
  Deck,
  Heading,
  Image,
  Layout,
  ListItem,
  List,
  Slide,
  Spectacle,
  Fill,
  Code
} from "spectacle";
import CodeSlide from "spectacle-code-slide";
import preloader from "spectacle/lib/utils/preloader";
import createTheme from "spectacle/lib/themes/default";
import "normalize.css";
import "spectacle/lib/themes/default/index.css";


const images = {
  superhero: require("../assets/superhero.png"),
  microservices: require("../assets/honey.png"),
  apollo: require("../assets/apollo.png"),
  bender: require("../assets/bender.jpg"),
  stack: require("../assets/stack.png"),
  rest: require("../assets/rest.png"),
  apolloWebsite: require("../assets/apollo-website.png"),
  mock: require("../assets/mock.gif"),
  movieList: require("../assets/movie-list.png"),
  comments: require("../assets/comments.gif"),
  actors: require("../assets/actors.png"),
  fedup: require("../assets/fedup.png"),
  resolvers: require("../assets/resolvers.gif"),
  graph: require("../assets/graph.png"),
  optimistic: require("../assets/optimistic.gif"),
  attention: require("../assets/attention.jpg"),
  chart1: require("../assets/chart1.png"),
  chart2: require("../assets/chart2.png"),
  chart3: require("../assets/chart3.png"),
  chart4: require("../assets/chart4.png"),
  wow: require("../assets/wow.gif"),
  mvp: require("../assets/mvp.svg")
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
              <Image src={ images.microservices }/>
            </Layout>
          </Slide>

          <Slide transition={["zoom", "slide"]} bgColor="primary">
            <Image style={ { maxHeight: 700, maxWidth: 1400 } } src={ images.graph }/>
          </Slide>

          <Slide transition={["zoom", "slide"]} bgColor="primary">
            <Image style={ { maxHeight: 700, maxWidth: 1400 } } src={ images.rest }/>
          </Slide>

          <Slide transition={["zoom", "slide"]} bgColor="primary">
            <Layout>
              <Heading size={2} textSize="30" textColor="secondary" fit>
                Napiszmy swój własny Filmweb!
              </Heading>
            </Layout>
            <Layout style={ {marginTop: 20} } >
              <Image src={ images.bender }/>
            </Layout>
          </Slide>

          <Slide transition={["zoom", "slide"]} bgColor="primary">
            <Layout>
              <Image src={ images.mvp } />
            </Layout>
          </Slide>

          <Slide transition={["zoom", "slide"]} bgImage={images.apolloWebsite} style={{ backgroundRepeat: "no-repeat", backgroundPosition: "left top", backgroundSize: "cover"}} />

          <Slide transition={["zoom", "slide"]} bgColor="primary">
            <Layout style={{justifyContent: "center"}}>
              <Heading size={2}>Serwer</Heading>
            </Layout>
            <Layout style={{marginTop: 20}}>
              <Fill>
                <Appear><Code textSize="60" textColor="secondary">
                  $ npm i --save express graphql
                </Code></Appear>
              </Fill>
            </Layout>
            <Layout style={{marginTop: 30}}>
              <Fill>
                <Appear><Code textSize="60" textColor="secondary">
                  $ npm i --save graphql-server-express graphql-tools
                </Code></Appear>
              </Fill>
            </Layout>
          </Slide>

          <Slide transition={["zoom", "slide"]} bgColor="primary">
            <Layout style={{justifyContent: "center"}}>
              <Heading size={2}>Model & Query</Heading>
            </Layout>
            <Layout style={ {marginTop: 30} } >
              <Fill>
                <CodePane
                  lang="graphql"
                  source={require("raw!../code/Movie.gql")}
                  style={ { height: 420 } }
                  textSize={ 30 }
                />
              </Fill>
              <Fill>
                <CodePane
                  lang="graphql"
                  source={require("raw!../code/Query.gql")}
                  style={ { height: 420 } }
                  textSize={ 30 }
                />
              </Fill>
            </Layout>
          </Slide>

          <Slide transition={["zoom", "slide"]} bgColor="primary">
            <Layout style={{justifyContent: "center", marginTop: -50}}>
              <Heading size={2}>Resolvers</Heading>
            </Layout>
            <Layout style={ {marginTop: 30} } >
              <Fill>
                <CodePane
                  lang="jsx"
                  source={require("raw!../code/resolvers.example")}
                  textSize={ 20 }
                />
              </Fill>
            </Layout>
          </Slide>

          <CodeSlide transition={["zoom", "slide"]}
            lang="jsx"
            code={require("raw!../code/component.example")}
            ranges={[
              { loc: [0, 33], title: "Apollo i React" },
              { loc: [1, 3] },
              { loc: [4, 13] },
              { loc: [14, 15]},
              { loc: [16, 20]},
              { loc: [21, 27]},
              { loc: [28, 32]},
              { loc: [33, 34]}
            ]}
          />

        <Slide transition={["zoom", "slide"]} bgImage={images.movieList} style={{ backgroundRepeat: "no-repeat", backgroundPosition: "left top", backgroundSize: "cover"}} />

          <Slide transition={["zoom", "slide"]} bgColor="primary">
            <Layout style={{justifyContent: "center", marginTop: -50}}>
              <Heading size={2}>Dodajmy Aktorów</Heading>
            </Layout>
            <Layout style={ {marginTop: 30} } >
              <Fill>
                <CodePane
                  lang="git"
                  source={require("raw!../code/ActorQuery.gql")}
                  textSize={ 20 }
                />
              </Fill>
            </Layout>
          </Slide>

          <Slide transition={["zoom", "slide"]} bgImage={images.actors} style={{ backgroundRepeat: "no-repeat", backgroundPosition: "left top", backgroundSize: "cover"}} />

          <Slide transition={["zoom", "slide"]} bgColor="primary">
            <Layout style={{justifyContent: "center", marginTop: -50}}>
              <Heading size={2}>{ "Może inaczej..." }</Heading>
            </Layout>
            <Layout style={ {marginTop: 30} } >
              <Fill>
                <CodePane
                  lang="graphql"
                  source={require("raw!../code/MovieModel.gql")}
                  textSize={ 20 }
                />
              </Fill>
            </Layout>
          </Slide>

          <Slide transition={["zoom", "slide"]} bgColor="primary">
            <Layout style={{justifyContent: "center", marginTop: -50}}>
              <Heading size={2}>Fragmenty</Heading>
            </Layout>
            <Layout style={ {marginTop: 30} } >
              <Fill>
                <CodePane
                  lang="graphql"
                  source={require("raw!../code/ActorQueryFragment.gql")}
                  textSize={ 20 }
                />
              </Fill>
            </Layout>
          </Slide>

          <Slide transition={["zoom", "slide"]} bgColor="primary">
            <Layout style={{justifyContent: "center", marginTop: -50}}>
              <Heading size={2}>Deklaratywne UI</Heading>
            </Layout>
            <Layout style={ {marginTop: 30} }>
              <Fill>
              <CodePane
                lang="jsx"
                source={require("raw!../code/ActorFragments.gql")}
                textSize={ 20 }
              />
              <CodePane
                lang="jsx"
                source={require("raw!../code/architecture.example")}
                textSize={ 20 }
              />
          </Fill>
            </Layout>
          </Slide>

          <Slide transition={["zoom", "slide"]} bgColor="primary">
            <Layout>
              <Heading size={1} textSize={ 60 } fit>{ "Jak wygląda zapisywanie?" }</Heading>
            </Layout>
          </Slide>


          <CodeSlide transition={["zoom", "slide"]}
            lang="jsx"
            code={require("raw!../code/mutation.gql")}
            textSize={ 28 }
            ranges={[
              { loc: [0, 21], title: "Mutacje" },
              { loc: [0, 1] },
              { loc: [1, 4] },
              { loc: [6, 15]},
              { loc: [16, 20]}
            ]}
          />

        <Slide transition={["zoom", "slide"]} bgImage={ images.comments } style={{ backgroundRepeat: "no-repeat", backgroundPosition: "left top", backgroundSize: "cover"}} />

          <Slide transition={["zoom", "slide"]} bgColor="primary">
            <Layout style={{justifyContent: "center", marginTop: -50}}>
              <Heading size={2} fit>Optymistyczny Update</Heading>
            </Layout>
            <Layout style={ {marginTop: 30} } >
              <Fill>
                <CodePane
                  lang="jsx"
                  source={require("raw!../code/mutationDeclaration.example")}
                  textSize={ 20 }
                />
              </Fill>
            </Layout>
          </Slide>

          <Slide transition={["zoom", "slide"]} bgImage={ images.optimistic } style={{ backgroundRepeat: "no-repeat", backgroundPosition: "left top", backgroundSize: "cover"}} />

          <Slide transition={["zoom", "slide"]} bgColor="primary">
            <Layout>
              <Heading size={1} textSize={ 60 } fit>A gdyby tak wszystko w czasie rzeczywistym...</Heading>
            </Layout>
          </Slide>

          <Slide transition={["zoom", "slide"]} bgColor="primary">
            <Layout>
              <Image src={ images.attention } />
            </Layout>
          </Slide>

          <Slide transition={["zoom", "slide"]} bgColor="primary">
            <Layout style={ {marginTop: 10} } >
              <Fill>
                <CodePane
                  lang="graphql"
                  source={require("raw!../code/subscription.gql")}
                  textSize={ 20 }
                />
              </Fill>
            </Layout>
          </Slide>

          <Slide transition={["zoom", "slide"]} bgColor="primary">
            <Layout>
              <Image src={ images.wow } />
            </Layout>
          </Slide>

          <Slide transition={["zoom", "slide"]} bgColor="primary">
            <Layout>
              <Heading size={2} textSize={ 70 }>Wszystko pięknie, ale...</Heading>
            </Layout>
            <Layout>
              <List>
                <Appear><ListItem>Apollo jest dopiero w wersji 0.5 - dużo ciągłych zmian w api</ListItem></Appear>
                <Appear><ListItem>Niepełna dokumentacja - wysoki prog wejścia</ListItem></Appear>
                <Appear><ListItem>Brakujące funkcjonalnosći - okropna obsługa błędow</ListItem></Appear>
                <Appear><ListItem>Całość wygląda na nieco przekombinowaną...</ListItem></Appear>
              </List>
            </Layout>
          </Slide>

          <Slide transition={["zoom", "slide"]} bgColor="primary">
            <Layout>
              <Heading size={2} textSize={ 65 }>{ "To może inny klient?" }</Heading>
            </Layout>
            <Layout>
              <List>
                <Appear><ListItem>Plany przepisania <strong>Relay</strong> do wersji 2.0</ListItem></Appear>
                <Appear><ListItem>Alternatywą jest <strong>Lokka</strong> - bardzo prosty client GraphQL</ListItem></Appear>
                <Appear><ListItem><strong>Falcor</strong> - o wiele gorszy support niż GraphQL</ListItem></Appear>
                <Appear><ListItem>Zawsze jest jeszce <strong>OData</strong>...</ListItem></Appear>
              </List>
            </Layout>
          </Slide>

          <Slide transition={["zoom", "slide"]} bgColor="primary">
            <Layout>
              <Image style={{ maxWidth: "1000", maxHeight: "600" }} src={ images.chart1 } />
            </Layout>
          </Slide>

          <Slide transition={["zoom", "slide"]} bgColor="primary">
            <Layout>
              <Image style={{ maxWidth: "1000", maxHeight: "600" }} src={ images.chart2 } />
            </Layout>
          </Slide>

          <Slide transition={["zoom", "slide"]} bgColor="primary">
            <Layout>
              <Image style={{ maxWidth: "1000", maxHeight: "600" }} src={ images.chart3 } />
            </Layout>
          </Slide>

          <Slide transition={["zoom", "slide"]} bgColor="primary">
            <Layout>
              <Image style={{ maxWidth: "1000", maxHeight: "600" }} src={ images.chart4 } />
            </Layout>
          </Slide>

          <Slide transition={["zoom", "slide"]} bgColor="primary">
            <Layout>
              <Heading size={2} textSize={ 65 }>{ "To kiedy GraphQL?" }</Heading>
            </Layout>
            <Layout>
              <List>
                <Appear><ListItem>Dane mają wiele relacji - potrzebny graf powiązań</ListItem></Appear>
                <Appear><ListItem>Wiele mikroserwisów i źródeł danych</ListItem></Appear>
                <Appear><ListItem>Jednen serwis dla wielu projektów</ListItem></Appear>
                <Appear><ListItem>Projekt z długim supportem</ListItem></Appear>
              </List>
            </Layout>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
