const Nav = {
    render() {
        return /* html */`
        <nav>
            <div class="bg-yellow-600 py-2 grid grid-cols-3 gap-4">
                <div class="menu col-span-2">
                    <ul id="menu" class="flex flex-wrap text-white">
                        <li><a href="/" class="block py-3 px-4 text-white hover:bg-blue-500">Trang chủ</a></li>
                        <li><a href="/news" class="block py-3 px-4 text-white hover:bg-blue-500">Tin tức</a></li>
                        <li><a href="/signup" class="block py-3 px-4 text-white hover:bg-blue-500">Đăng ký</a></li>
                        <li><a href="/signin" class="block py-3 px-4 text-white hover:bg-blue-500">Đăng nhập</a></li>
                    </ul>
                </div>
                <div class="seach">
                    <input type="email" name="email" class="mt-1 px-3 py-2 bg-white border shadow-sm border-gray-300 placeholder-gray-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 inline-block w-70 rounded-md sm:text-sm focus:ring-1"/>
                    <button class="rounded-full mt-1 px-3 py-2 bg-blue-700 text-white">Save Changes</button>
                </div>
            </div>
        </nav>`;
    },
};
export default Nav;