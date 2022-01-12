const Nav = {
    print() {
        return /* html */`
        <nav>
            <ul class="flex">
                <li><a href="/" class="block py-3 px-4 text-white hover:bg-blue-500">Trang chủ</a></li>
                <li><a href="/about" class="block py-3 px-4 text-white hover:bg-blue-500">Chương trình đào tạo</a></li>
                <li><a href="/product" class="block py-3 px-4 text-white hover:bg-blue-500">Góc sinh viên</a></li>
                <li><a href="/product1" class="block py-3 px-4 text-white hover:bg-blue-500">Tuyển sinh</a></li>
                <li><a href="/product2" class="block py-3 px-4 text-white hover:bg-blue-500">Tuyển dụng</a></li>
            </ul>
        </nav>`;
    },
};
export default Nav;