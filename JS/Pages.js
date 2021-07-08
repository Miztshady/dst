import { AnimatePresence, motion } from "framer-motion"

const styles = {

    out: {
        opacity: 0
    }

}

export default function mainPage() {
    <div>
        <div class="creditsButton">
            <button>
                <NavLink to="/index">
                    Home
                </NavLink>
            </button>
            <button>
                <NavLink to="/credits">
                    Credits
                </NavLink>
            </button>
        </div>
        <AnimatePresence>
            <Switch>
                <Route path="/index" component={indexPage} />
                <Route path="/credits" component={creditsPage} />
            </Switch>
        </AnimatePresence>
    </div>
}

export function indexPage() {
    return (
        <motion.div initial="out" exit="out" variants={styles}>
            <div class="title">
                <h2>Welcome to</h2> <h1>The Don't Starve IQ guide</h1>
            </div>
            <div class="description">
                <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores voluptate quas ea maxime reiciendis dolorum debitis eveniet aperiam, qui laboriosam mollitia perspiciatis quis quam unde sunt atque sit consequuntur accusamus. Expedita odit, eaque minus ea animi quasi, necessitatibus similique, consequuntur blanditiis ex illo sequi dolore. Aliquam tenetur nihil excepturi eum laudantium quas amet suscipit praesentium, ut sit repudiandae nesciunt possimus quae nemo at officia labore, quo quibusdam ea reiciendis. Maxime, libero praesentium culpa aliquam ab veniam odit commodi sint molestiae perspiciatis voluptatibus quam quod unde provident et repudiandae assumenda ea pariatur, omnis excepturi magni sit saepe eveniet. Doloremque, deleniti minima!</h3>
            </div>
            <div class="creditsButton">
                <button onClick={() => location.href = "Credits.html"}>Credits</button>
            </div>
        </motion.div>
    )
}

export function creditsPage() {

    return (
        <motion.div initial="out" exit="out" variants={styles}>
            <div class="description">
            </div>
            <button class="homeButton" onClick={() => location.href = "index.html"}>Home</button>
        </motion.div>
    )
}