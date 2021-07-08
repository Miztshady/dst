import generateText from "../Translated_JS/loadPage.js"

function in_out() {

    const element = document.getElementById("chief");
    const from = 'opacity: 0; transition: opacity 0.5s linear';
    const to = 'opacity: 1; transition: opacity 0.5s linear';

    element.setAttribute("style", from);
    setTimeout(() => {
        element.setAttribute("style", to);
    }, 500)

}

export function indexPage() {
    return (
        <div id="chief">
            <div class="title">
                <h2>Welcome to</h2> <h1>The Don't Starve IQ guide</h1>
            </div>
            <div class="description">
                <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores voluptate quas ea maxime reiciendis dolorum debitis eveniet aperiam, qui laboriosam mollitia perspiciatis quis quam unde sunt atque sit consequuntur accusamus. Expedita odit, eaque minus ea animi quasi, necessitatibus similique, consequuntur blanditiis ex illo sequi dolore. Aliquam tenetur nihil excepturi eum laudantium quas amet suscipit praesentium, ut sit repudiandae nesciunt possimus quae nemo at officia labore, quo quibusdam ea reiciendis. Maxime, libero praesentium culpa aliquam ab veniam odit commodi sint molestiae perspiciatis voluptatibus quam quod unde provident et repudiandae assumenda ea pariatur, omnis excepturi magni sit saepe eveniet. Doloremque, deleniti minima!</h3>
            </div>
            <div class="creditsButton">
                <button onClick={() => { in_out(); generateText("creditsPage") }}>Credits</button>
            </div>
        </div>
    )
}

export function creditsPage() {
    return (
        <div id="chief">
            <div class="description">
            </div>
            <button class="homeButton" onClick={() => { in_out(); generateText("indexPage") }}>Home</button>
        </div>
    )
}