import * as functions from "../Translated_JS/Pages.js"

export default function generateText(func) {

    switch (func) {

        case "indexPage": {

            ReactDOM.render(
                functions.indexPage(),
                document.getElementById("main")
            )

            break;

        }

        case "creditsPage": {

            ReactDOM.render(
                functions.creditsPage(),
                document.getElementById("main")
            )

            break;

        }

    }

}

generateText("indexPage")