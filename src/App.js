import React, {Fragment} from 'react';
import './App.css';
import Button from "./Button";
import Product from "./Product";
import Tile from "./Tile";
import bag1 from "./assets/bag_1.png"
import bag2 from "./assets/bag_2.png"
import bag3 from "./assets/bag_3.png"
import bag4 from "./assets/bag_4.png"
import brand from "./assets/brand.png"
import story from "./assets/our_story.png"


function App() {
  return (
      <Fragment>
      <h1>Handbags & Purses</h1>
        <nav>
          <Button title={"To the collection"}/>
          <Button title={"Shop all bags"}/>
          <Button title={"Pre-orders"}
                  disabled={true}/>
        </nav>
            <main>

                <Product    image={bag1}
                            title={"The handy bag"}
                            span={"Best seller"}
                            price={"€ 400,-"}
                />
                <Product
                            image={bag2}
                            title={"The stylisch bag"}
                            span={"Best seller"}
                            price={"€ 250,-"}
                />
                <Product
                            image={bag3}
                            title={"The simple bag"}
                            span={"Best seller"}
                            price={"€ 300,-"}
                />
                <Product
                            image={bag4}
                            title={"The trendy bag"}
                            span={"Best seller"}
                            price={"€ 150,-"}
                />
            </main>

                <footer>
                    <Tile
                        title={"Dit is echt top man"}

                    />

                    <Tile
                        image={brand}
                        story={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. A assumenda aut deleniti impedit omnis quam, quidem sequi! A asperiores aspernatur corporis culpa deleniti eius eligendi eum ex explicabo fugiat fugit in ipsum itaque libero maxime modi nam nihil nostrum recusandae ut, velit veritatis voluptatem voluptatibus! Beatae maxime minima natus nisi."}
                    />

                    <Tile
                        image={story}

                    />

                    <Tile
                        title={"Wat een topbedrijf"}
                        story={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus animi dolorem iusto magnam neque non quis sint ullam unde. Animi blanditiis distinctio eius expedita fuga inventore non numquam ratione reprehenderit ullam! A adipisci consectetur corporis culpa dolore doloremque, eius et facere fugit incidunt laborum magnam necessitatibus pariatur perspiciatis quis similique?"}
                    />

                </footer>
      </Fragment>
  );
}

export default App;



