const Adminnav = {
    render() {
        return /* html */`
        <nav>
            <div class="px-2 text-center md:pt-8 md:top-0 md:left-0 h-16 md:h-screen md:border-r-4 md:border-gray-600 bg-yellow-600" >
                <div class="md:relative mx-auto lg:float-right lg:px-6">
                    <ul class="list-reset text-center md:text-left">
                        <li class="mr-3 flex-1">
                            <a href="/admin/news" class="block py-1 md:py-3 pl-1 align-middle text-gray-800 no-underline hover:text-pink-500 border-b-2 border-gray-800 md:border-gray-900 hover:border-pink-500">
                                <span class="pb-1 md:pb-0 text-xs md:text-base text-white block md:inline-block">News</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>`;
    },
};
export default Adminnav;