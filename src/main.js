import Navigo from "navigo";
import Footer from "./components/footer";
import Header from "./components/header";
import AboutPage from "./pages/about";
import Dashboard from "./pages/admin/dashboard";
import HomePage from "./pages/home";
import NewsDetail from "./pages/newDetail";
import Signin from "./pages/signin";
import Signup from "./pages/singup";

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
    "/news/:id": ({ data }) => {
        const { id } = data;
        print(NewsDetail.render(id));
    },
    "/signin": () => {
        print(Signin.render());
    },
    "/signup": () => {
        print(Signup.render());
    },
    "/admin/dashboard": () => {
        print(Dashboard.render());
    },
});

router.resolve();