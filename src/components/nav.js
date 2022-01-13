const Nav = {
    print() {
        return /* html */`
        <nav>
            <ul class="flex">
                <li><a href="/" class="block py-3 px-4 text-white hover:bg-blue-500">Trang chủ</a></li>
                <li><a href="/news" class="block py-3 px-4 text-white hover:bg-blue-500">Chương trình đào tạo</a></li>
                <li><a href="/product" class="block py-3 px-4 text-white hover:bg-blue-500">Góc sinh viên</a></li>
                <li><a href="/product1" class="block py-3 px-4 text-white hover:bg-blue-500">Tuyển sinh</a></li>
                <li><a href="/product2" class="block py-3 px-4 text-white hover:bg-blue-500">Tuyển dụng</a></li>
            </ul>
            <div class="seach">
                <input type="email" name="email" class="mt-1 px-3 py-2 bg-white border shadow-sm border-gray-300 placeholder-gray-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 inline-block w-70 rounded-md sm:text-sm focus:ring-1"/>
                <button class="rounded-full mt-1 px-3 py-2 bg-blue-700 text-white">Save Changes</button>
            </div>
        </nav>`;
    },
};
export default Nav;