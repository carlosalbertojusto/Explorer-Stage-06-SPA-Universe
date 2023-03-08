import { Router } from "./routes.js"

const router = new Router()
const buttonHome = document.querySelector("#buttonHome")

router.add("/", "./pages/home.html")
router.add("/exploration", "./pages/exploration.html")
router.add("/universe", "./pages/universe.html")

router.handle()
window.onpopstate = () => router.handle()
window.route = () => router.route()