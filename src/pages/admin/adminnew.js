import Adminnav from "./adminnav";

const Adminnew = {
    render() {
        return `
        <div class="bg-white max-w-5xl mx-auto shadow-md rounded px-8 pt-6 pb-8 mb-4 grid grid-cols-6 gap-4">
            ${Adminnav.render()}

            <div class="bg-gray-100 col-span-5">
                <div class="container bg-gray-100 pt-16 px-6">
                    <a href="/admin/news/add"> <button class="rounded-full mt-1 px-3 py-2 bg-blue-700 text-white">Danh sách</button></a>
                </div>
            </div>
        </div>
        `;
    },
};

export default Adminnew;