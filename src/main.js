import Navigo from "navigo";
import Footer from "./components/footer";
import Header from "./components/header";
import AboutPage from "./pages/about";
import HomePage from "./pages/home";

const router = new Navigo("/", { linksSelector: "a" });

const print = (content) => {
    document.getElementById("header").innerHTML = Header.render();
    document.getElementById("content").innerHTML = content;
    document.getElementById("footer").innerHTML = Footer.render();
};

router.on({
    "/": () => {
        print(HomePage.render());
    },
    "/home": () => {
        print(HomePage.render());
    },
    "/news": () => {
        print(AboutPage.render());
    },
});

router.resolve();