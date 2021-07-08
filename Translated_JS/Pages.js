import { AnimatePresence, motion } from "framer-motion";

var styles = {

    out: {
        opacity: 0
    }

};

export default function mainPage() {
    React.createElement(
        "div",
        null,
        React.createElement(
            "div",
            { "class": "creditsButton" },
            React.createElement(
                "button",
                null,
                React.createElement(
                    NavLink,
                    { to: "/index" },
                    "Home"
                )
            ),
            React.createElement(
                "button",
                null,
                React.createElement(
                    NavLink,
                    { to: "/credits" },
                    "Credits"
                )
            )
        ),
        React.createElement(
            AnimatePresence,
            null,
            React.createElement(
                Switch,
                null,
                React.createElement(Route, { path: "/index", component: indexPage }),
                React.createElement(Route, { path: "/credits", component: creditsPage })
            )
        )
    );
}

export function indexPage() {
    return React.createElement(
        motion.div,
        { initial: "out", exit: "out", variants: styles },
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
                        return location.href = "Credits.html";
                    } },
                "Credits"
            )
        )
    );
}

export function creditsPage() {

    return React.createElement(
        motion.div,
        { initial: "out", exit: "out", variants: styles },
        React.createElement("div", { "class": "description" }),
        React.createElement(
            "button",
            { "class": "homeButton", onClick: function onClick() {
                    return location.href = "index.html";
                } },
            "Home"
        )
    );
}