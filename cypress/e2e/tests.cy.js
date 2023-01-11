//q1
describe("cheking for background color of body", () => {
    it("cheking for background color of body", () => {
        cy.visit("http://127.0.0.1:5500/");

        cy.get("body").should(
            "have.css",
            "background-color",
            "rgb(230, 230, 230)"
        );
    });
});

describe("checking for navbar styling", () => {
    it("checking for navbar styling", () => {
        cy.visit("http://127.0.0.1:5500/");
        cy.get("nav ul")
            .should("have.css", "list-style-type", "none")
            .should("have.css", "margin", "0px")
            .should("have.css", "padding", "0px")
            .should("have.css", "background-color", "rgb(1, 14, 128)")
            .should("have.css", "display", "flex")
            .should("have.css", "flex-direction", "row");
    });
});

// q2;

describe("checking for navbar sizing", () => {
    it("checking for navbar sizing", () => {
        cy.visit("http://127.0.0.1:5500/");
        cy.get("nav li").should("have.css", "flex-grow", "1");
        cy.get("nav li")
            .realHover("mouse")
            .should("have.css", "background-color", "rgba(0, 0, 0, 0)");
    });
});

describe("checking the position of h1", () => {
    it("checking the position of h1", () => {
        cy.visit("http://127.0.0.1:5500/");
        cy.get("h1").should("have.css", "text-align", "center");
    });
});

// q3

describe("checking the a tag styling", () => {
    it("checking the a tag styling", () => {
        cy.visit("http://127.0.0.1:5500/");
        cy.get("li a").each(($el) => {
            cy.wrap($el)
                .should("have.css", "display", "block")
                .should("have.css", "color", "rgb(255, 255, 255)")
                .should("have.css", "text-align", "center")
                .should("have.css", "padding", "30px")
                .should(
                    "have.css",
                    "text-decoration",
                    "none solid rgb(255, 255, 255)"
                );
        });
    });
});

// q4

// article {
//     text-align: left;
//     margin: 15px;
//     max-width: 100%;
//     font-size: 18px;
//     line-height: 32px;
//   }

describe("checking the article styling", () => {
    it("checking the article styling", () => {
        cy.visit("http://127.0.0.1:5500/");
        cy.get("article")
            .should("have.css", "text-align", "left")
            .should("have.css", "margin", "15px")
            .should("have.css", "max-width", "100%")
            .should("have.css", "font-size", "18px")
            .should("have.css", "line-height", "32px");
    });
});

// q5

// figure{
//     display: flex;
//     justify-content: center;
//     align-items: center;
//   }

//   figcaption{
//     text-align: center;
//   }
//   img {
//     width: 400px;
//     height: 300px;
//     position: relative;
//     /* right: 28px; */
//   }

describe("checking the figure tag styling", () => {
    it("checking the figure tag styling", () => {
        cy.visit("http://127.0.0.1:5500/");
        cy.get("figure")
            .should("have.css", "display", "flex")
            .should("have.css", "justify-content", "center")
            .should("have.css", "align-items", "center");
    });
});

describe("checking the figcaption tag styling", () => {
    it("checking the figcaption tag styling", () => {
        cy.visit("http://127.0.0.1:5500/");
        cy.get("figcaption").should("have.css", "text-align", "center");
    });
});

describe("checking the image styling", () => {
    it("checking the image styling", () => {
        cy.visit("http://127.0.0.1:5500/");
        cy.get("img")
            .should("have.css", "width", "400px")
            .should("have.css", "height", "300px");
        // .should("have.css", "position", "relative");
    });
});

// q6

// aside {
//     left: 10px;
//     border: 1px solid black;
//     padding: 15px;
//     max-width: 100%;
//     position: relative;
//     border-color: #010e80;
//     border-width: 5px;
//     font-size: 18px;
//   }

//   h2{
//     text-align: center;
//   }

describe("checking the aside tag styling", () => {
    it("checking the aside tag styling", () => {
        cy.visit("http://127.0.0.1:5500/");
        cy.get("aside")
            .should("have.css", "left", "10px")
            .should("have.css", "padding", "15px")
            .should("have.css", "max-width", "100%")
            // .should("have.css", "position", "relative")
            .should("have.css", "border", "5px solid rgb(1, 14, 128)")
            // .should("have.css", "border-width", "5px")
            .should("have.css", "font-size", "18px");
    });
});

describe("checking h2 tag styling", () => {
    it("checking h2 tag styling", () => {
        cy.visit("http://127.0.0.1:5500/");
        cy.get("h2").should("have.css", "text-align", "center");
    });
});

// q7

// video {
//     display: block;
//     width: 420px;
//     height: 250px;
//     padding: 15px;
//   }

//   audio {
//     padding: 15px;
//     width: 98%;
//     /* box-sizing: border-box; */
//   }

//   embed {
//     width: 400px;
//     height: 458px;
//     padding: 15px;
//   }

describe("checking the media styling", () => {
    it("checking the media styling", () => {
        cy.visit("http://127.0.0.1:5500/");
        cy.get("video")
            .should("have.css", "display", "block")
            .should("have.css", "width", "420px")
            .should("have.css", "height", "250px")
            .should("have.css", "padding", "15px");

        cy.get("audio")
            .should("have.css", "padding", "15px")
            .should("have.css", "max-width", "90%");

        cy.get("embed")
            .should("have.css", "width", "400px")
            .should("have.css", "height", "458px")
            .should("have.css", "padding", "15px");
    });
});

describe("checking the footer styling", () => {
    it("checking the media styling", () => {
        cy.visit("http://127.0.0.1:5500/");
        cy.get("video")
            .should("have.css", "display", "block")
            .should("have.css", "width", "420px")
            .should("have.css", "height", "250px")
            .should("have.css", "padding", "15px");

        cy.get("audio")
            .should("have.css", "padding", "15px")
            .should("have.css", "max-width", "90%");

        cy.get("embed")
            .should("have.css", "width", "400px")
            .should("have.css", "height", "458px")
            .should("have.css", "padding", "15px");
    });
});
