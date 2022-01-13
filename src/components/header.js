import Nav from "./nav";

const Header = {
    render() {
        return /* html */`
        <header class="max-w-5xl mx-auto">
            <div class="bg-blue-800 py-4">
                <a href="/home"><img src="https://ap.poly.edu.vn/images/logo.png" class="mx-auto" /></a>
            </div>
            <div class="bg-orange-500">
                ${Nav.render()}
            </div>
        </header>`;
    },
};
export default Header;