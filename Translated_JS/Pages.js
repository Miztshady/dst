import generateText from "../Translated_JS/loadPage.js";

function in_out() {

    var element = document.getElementById("chief");
    var from = 'opacity: 0; transition: opacity 0.5s linear';
    var to = 'opacity: 1; transition: opacity 0.5s linear';

    element.setAttribute("style", from);
    setTimeout(function () {
        element.setAttribute("style", to);
    }, 500);
}

export function indexPage() {
    return React.createElement(
        "div",
        { id: "chief" },
        React.createElement(
            "div",
            { "class": "title" },
            React.createElement(
                "h2",
                null,
                "Welcome to"
            ),
            " ",
            React.createElement(
                "h1",
                null,
                "The Don't Starve IQ guide"
            )
        ),
        React.createElement(
            "div",
            { "class": "description" },
            React.createElement(
                "h3",
                null,
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores voluptate quas ea maxime reiciendis dolorum debitis eveniet aperiam, qui laboriosam mollitia perspiciatis quis quam unde sunt atque sit consequuntur accusamus. Expedita odit, eaque minus ea animi quasi, necessitatibus similique, consequuntur blanditiis ex illo sequi dolore. Aliquam tenetur nihil excepturi eum laudantium quas amet suscipit praesentium, ut sit repudiandae nesciunt possimus quae nemo at officia labore, quo quibusdam ea reiciendis. Maxime, libero praesentium culpa aliquam ab veniam odit commodi sint molestiae perspiciatis voluptatibus quam quod unde provident et repudiandae assumenda ea pariatur, omnis excepturi magni sit saepe eveniet. Doloremque, deleniti minima!"
            )
        ),
        React.createElement(
            "div",
            { "class": "creditsButton" },
            React.createElement(
                "button",
                { onClick: function onClick() {
                        in_out();generateText("creditsPage");
                    } },
                "Credits"
            )
        )
    );
}

export function creditsPage() {
    return React.createElement(
        "div",
        { id: "chief" },
        React.createElement("div", { "class": "description" }),
        React.createElement(
            "button",
            { "class": "homeButton", onClick: function onClick() {
                    in_out();generateText("indexPage");
                } },
            "Home"
        )
    );
}